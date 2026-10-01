export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const {
      name,
      business_name,
      email,
      phone,
      contact_method,
      message,
    } = req.body;

    if (!name || !message || (!email && !phone)) {
      return res.status(400).json({
        error: "Missing required fields",
      });
    }

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "JSP Web Lab <enquiries@mail.jspweblab.com>",
        to: ["JSP.WebLab@outlook.com"],
        subject: `New Website Enquiry - ${business_name || name}`,
        reply_to: email || undefined,
        text: `
New enquiry from the JSP Web Lab website

Name: ${name}
Business: ${business_name || "Not provided"}
Email: ${email || "Not provided"}
Phone: ${phone || "Not provided"}
Preferred Contact Method: ${contact_method || "Not provided"}

Message:
${message}
        `.trim(),
      }),
    });

    if (!resendResponse.ok) {
      const error = await resendResponse.text();
      console.error("Resend error:", error);

      return res.status(500).json({
        error: "Failed to send email",
      });
    }

    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return res.status(500).json({
      error: "Internal server error",
    });
  }
}
