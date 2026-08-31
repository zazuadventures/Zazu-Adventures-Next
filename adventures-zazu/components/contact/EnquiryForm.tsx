"use client";

import { type FormEvent, useState } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  travelDates: "",
  travellers: "",
  destination: "",
  enquiryType: "",
  message: "",
  website: "",
};

export default function EnquiryForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function updateField(field: keyof typeof initialForm, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data: unknown = await response.json();

      if (!response.ok) {
        const message =
          typeof data === "object" &&
          data !== null &&
          "error" in data &&
          typeof data.error === "string"
            ? data.error
            : "Something went wrong.";

        throw new Error(message);
      }

      setStatus("success");
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "We couldn't send your enquiry. Please try again.",
      );
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="border border-border bg-surface-soft p-8 sm:p-10"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary">
          Enquiry received
        </p>
        <h2 className="mt-3 text-2xl font-semibold">
          Thank you for contacting Zazu Adventures.
        </h2>
        <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
          Your enquiry has been sent successfully. We&apos;ll be in touch using
          the contact details you provided.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-7 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {status === "error" && (
        <div
          role="alert"
          className="border border-red-800/30 bg-red-800/5 p-4 text-sm text-red-800"
        >
          {errorMessage}
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="name" label="Name" value={form.name} required onChange={(value) => updateField("name", value)} />
        <Field id="email" label="Email" type="email" value={form.email} required onChange={(value) => updateField("email", value)} />
        <Field id="phone" label="Phone" type="tel" value={form.phone} onChange={(value) => updateField("phone", value)} />
        <Field id="travelDates" label="Travel dates" placeholder="e.g. 12–18 October 2026" value={form.travelDates} onChange={(value) => updateField("travelDates", value)} />
        <Field id="travellers" label="Number of travellers" type="number" min="1" value={form.travellers} onChange={(value) => updateField("travellers", value)} />
        <Field id="destination" label="Destination" placeholder="Where would you like to go?" value={form.destination} onChange={(value) => updateField("destination", value)} />
      </div>

      <div>
        <label htmlFor="enquiryType" className="text-sm font-medium">
          What are you enquiring about?
        </label>
        <select
          id="enquiryType"
          value={form.enquiryType}
          onChange={(event) => updateField("enquiryType", event.target.value)}
          className="mt-2 w-full border border-border bg-surface px-4 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <option value="">Select an option</option>
          <option value="experience">Experience / Tour</option>
          <option value="travel-service">Travel Service</option>
          <option value="custom-itinerary">Custom Itinerary</option>
          <option value="destination">Destination</option>
          <option value="general">General Enquiry</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium">
          Tell us more <span className="text-red-800">*</span>
        </label>
        <textarea
          id="message"
          value={form.message}
          required
          minLength={10}
          rows={7}
          placeholder="Tell us about your trip, dates, interests or anything else that would help us understand what you're looking for."
          onChange={(event) => updateField("message", event.target.value)}
          className="mt-2 w-full resize-y border border-border bg-surface px-4 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
      </div>

      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          value={form.website}
          tabIndex={-1}
          autoComplete="off"
          onChange={(event) => updateField("website", event.target.value)}
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        {status === "submitting" ? "Sending..." : "Send Enquiry"}
      </button>

      <p className="max-w-2xl text-xs leading-5 text-muted-foreground">
        By submitting this form, you agree that Zazu Adventures may use the
        information provided to respond to your enquiry.
      </p>
    </form>
  );
}

type FieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
  min?: string;
};

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  required = false,
  min,
}: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium">
        {label} {required && <span className="text-red-800">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        placeholder={placeholder}
        required={required}
        min={min}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 w-full border border-border bg-surface px-4 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
      />
    </div>
  );
}
