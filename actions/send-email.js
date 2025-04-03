"use server";

import { Resend } from "resend";

export async function sendEmail({ to, subject, react }) {
console.log("RESEND_API_KEY:", process.env.RESEND_API_KEY);

console.log("Sending email to:", to);
console.log("Subject:", subject);
console.log("React Component:", react);

const resend = new Resend("re_TXfF2RR6_8TtywzSUcCWaBTUeewRGy4iF");

try {
const data = await resend.emails.send({
from: "WiseWallet App <onboarding@resend.dev>",
to,
subject,
react,
});
console.log("Email Response:", data); // Response bhi dekhne ke liye

return { success: true, data };
} catch (error) {
console.error("Failed to send email:", error);
return { success: false, error };
}
}