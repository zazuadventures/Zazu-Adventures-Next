import { NextResponse } from "next/server";

import { sendEnquiryEmail } from "@/lib/email";

type EnquiryPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  travelDates?: unknown;
  travellers?: unknown;
  destination?: unknown;
  enquiryType?: unknown;
  message?: unknown;
  website?: unknown;
};

const requestTimestamps = new Map<string, number[]>();
const RATE_LIMIT = 5;
const RATE_WINDOW = 60 * 60 * 1000;
const allowedEnquiryTypes = [
  "experience",
  "travel-service",
  "custom-itinerary",
  "destination",
  "general",
];

function cleanString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getClientKey(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  return (
    forwardedFor?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (requestTimestamps.get(key) ?? []).filter(
    (timestamp) => now - timestamp < RATE_WINDOW,
  );

  if (recent.length >= RATE_LIMIT) {
    requestTimestamps.set(key, recent);
    return true;
  }

  recent.push(now);
  requestTimestamps.set(key, recent);
  return false;
}

export async function POST(request: Request) {
  const contentLength = request.headers.get("content-length");

  if (contentLength && Number(contentLength) > 20_000) {
    return NextResponse.json({ error: "Request is too large." }, { status: 413 });
  }

  if (isRateLimited(getClientKey(request))) {
    return NextResponse.json(
      { error: "Too many enquiries. Please try again later." },
      { status: 429 },
    );
  }

  const contentType = request.headers.get("content-type");

  if (!contentType?.toLowerCase().startsWith("application/json")) {
    return NextResponse.json(
      { error: "Please submit your enquiry as JSON." },
      { status: 415 },
    );
  }

  try {
    const body: unknown = await request.json();

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json(
        { error: "Unable to process your enquiry right now." },
        { status: 400 },
      );
    }

    const payload = body as EnquiryPayload;
    const name = cleanString(payload.name);
    const email = cleanString(payload.email);
    const phone = cleanString(payload.phone);
    const travelDates = cleanString(payload.travelDates);
    const travellers = cleanString(payload.travellers);
    const destination = cleanString(payload.destination);
    const enquiryType = cleanString(payload.enquiryType);
    const message = cleanString(payload.message);
    const website = cleanString(payload.website);

    if (website) {
      return NextResponse.json({ success: true });
    }

    if (!name) {
      return NextResponse.json({ error: "Please provide your name." }, { status: 400 });
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    if (!message || message.length < 10) {
      return NextResponse.json(
        { error: "Please provide a little more information about your enquiry." },
        { status: 400 },
      );
    }

    if (travellers) {
      const travellerCount = Number(travellers);

      if (
        !Number.isInteger(travellerCount) ||
        travellerCount < 1 ||
        travellerCount > 100
      ) {
        return NextResponse.json(
          { error: "Please provide a valid number of travellers." },
          { status: 400 },
        );
      }
    }

    if (enquiryType && !allowedEnquiryTypes.includes(enquiryType)) {
      return NextResponse.json(
        { error: "Invalid enquiry type." },
        { status: 400 },
      );
    }

    if (name.length > 100) {
      return NextResponse.json({ error: "Name is too long." }, { status: 400 });
    }

    if (email.length > 254) {
      return NextResponse.json(
        { error: "Email address is too long." },
        { status: 400 },
      );
    }

    if (message.length > 5000) {
      return NextResponse.json({ error: "Message is too long." }, { status: 400 });
    }

    const enquiry = {
      name,
      email,
      phone,
      travelDates,
      travellers,
      destination,
      enquiryType,
      message,
    };

    try {
      await sendEnquiryEmail(enquiry);
    } catch (error) {
      console.error("Failed to send enquiry email:", error);

      return NextResponse.json(
        {
          error:
            "We received your enquiry, but were unable to complete delivery. Please try again.",
        },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Unable to process your enquiry right now." },
      { status: 400 },
    );
  }
}
