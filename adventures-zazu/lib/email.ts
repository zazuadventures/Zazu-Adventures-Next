import { Resend } from "resend";

type EnquiryEmail = {
  name: string;
  email: string;
  phone: string;
  travelDates: string;
  travellers: string;
  destination: string;
  enquiryType: string;
  message: string;
};

export async function sendEnquiryEmail(enquiry: EnquiryEmail) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ENQUIRY_TO_EMAIL;
  const from = process.env.ENQUIRY_FROM_EMAIL;

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured.");
  }

  if (!to) {
    throw new Error("ENQUIRY_TO_EMAIL is not configured.");
  }

  if (!from) {
    throw new Error("ENQUIRY_FROM_EMAIL is not configured.");
  }

  const resend = new Resend(apiKey);

  const result = await resend.emails.send({
    from,
    to,
    replyTo: enquiry.email,
    subject: `New Zazu Adventures enquiry from ${enquiry.name}`,
    text: [
      "New enquiry received from the Zazu Adventures website.",
      "",
      `Name: ${enquiry.name}`,
      `Email: ${enquiry.email}`,
      `Phone: ${enquiry.phone || "Not provided"}`,
      `Travel dates: ${enquiry.travelDates || "Not provided"}`,
      `Travellers: ${enquiry.travellers || "Not provided"}`,
      `Destination: ${enquiry.destination || "Not provided"}`,
      `Enquiry type: ${enquiry.enquiryType || "Not provided"}`,
      "",
      "Message:",
      enquiry.message,
    ].join("\n"),
  });

  if (result.error) {
    throw new Error(result.error.message);
  }

  return result.data;
}
