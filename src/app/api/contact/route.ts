import { NextResponse } from "next/server";
import { SendMailClient } from "zeptomail";

export async function POST(request: Request) {
  const url = "api.zeptomail.com/";
  const token = process.env.ZEPTO_API_KEY;

  if (!token) {
    console.error("ZeptoMail API key is not configured.");
    return NextResponse.json(
      { message: "Server configuration error." },
      { status: 500 }
    );
  }

  let client = new SendMailClient({ url, token });

  try {
    const formData = await request.formData();
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Missing required fields." },
        { status: 400 }
      );
    }

    await client.sendMail({
      from: {
        address: "noreply@crystalview.ai",
        name: "CrystalView Contact Form",
      },
      to: [
        {
          email_address: {
            address: "krishna@crystalview.ai",
            name: "Krishna Gopalakrishnan",
          },
        },
      ],
      subject: `New Contact Form Submission from ${name}`,
      htmlbody: `
        <div style="font-family: sans-serif; padding: 20px; background-color: #f4f4f4;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background-color: #fff; padding: 20px; border-radius: 5px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      { message: "Form submitted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email with ZeptoMail:", error);
    return NextResponse.json(
      { message: "Error submitting form." },
      { status: 500 }
    );
  }
}
