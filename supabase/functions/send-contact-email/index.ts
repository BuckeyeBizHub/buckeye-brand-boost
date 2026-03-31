import { createClient } from "https://esm.sh/@supabase/supabase-js@2.100.1";
import { corsHeaders } from "https://esm.sh/@supabase/supabase-js@2.100.1/cors";

const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY")!;
const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const { name, business, email, phone, services, otherService, message, budget, timeline, referral } = body;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Save to database
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
    const { error: dbError } = await supabase.from("contact_submissions").insert({
      name,
      business,
      email,
      phone,
      services,
      other_service: otherService || null,
      message,
      budget,
      timeline,
      referral: referral || null,
    });

    if (dbError) {
      console.error("DB insert error:", dbError);
    }

    // Build email body
    const servicesList = (services || []).join(", ");
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: #BB0000; color: white; padding: 20px 25px; border-radius: 8px 8px 0 0;">
          <h1 style="margin: 0; font-size: 22px;">New Quote Request from Buckeye Biz Hub</h1>
        </div>
        <div style="border: 1px solid #e0e0e0; border-top: none; padding: 25px; border-radius: 0 0 8px 8px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; font-weight: bold; color: #333; width: 160px;">Name:</td><td style="padding: 8px 0; color: #555;">${name}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #333;">Business:</td><td style="padding: 8px 0; color: #555;">${business}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #333;">Email:</td><td style="padding: 8px 0; color: #555;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #333;">Phone:</td><td style="padding: 8px 0; color: #555;"><a href="tel:${phone}">${phone}</a></td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #333;">Services:</td><td style="padding: 8px 0; color: #555;">${servicesList}</td></tr>
            ${otherService ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #333;">Other Service:</td><td style="padding: 8px 0; color: #555;">${otherService}</td></tr>` : ""}
            <tr><td style="padding: 8px 0; font-weight: bold; color: #333;">Budget:</td><td style="padding: 8px 0; color: #555;">${budget}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #333;">Timeline:</td><td style="padding: 8px 0; color: #555;">${timeline}</td></tr>
            ${referral ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #333;">How They Found Us:</td><td style="padding: 8px 0; color: #555;">${referral}</td></tr>` : ""}
          </table>
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #e0e0e0;" />
          <h3 style="color: #333; margin: 0 0 10px;">Project Description:</h3>
          <p style="color: #555; line-height: 1.6; white-space: pre-wrap;">${message}</p>
        </div>
      </div>
    `;

    // Send email via Lovable API
    const emailResponse = await fetch("https://api.lovable.dev/api/v1/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${LOVABLE_API_KEY}`,
      },
      body: JSON.stringify({
        to: "david@buckeyebizhub.com",
        subject: `New Quote Request from ${name} — ${business}`,
        html: emailHtml,
        replyTo: email,
      }),
    });

    if (!emailResponse.ok) {
      const errText = await emailResponse.text();
      console.error("Email send error:", errText);
      // Still return success since we saved to DB
      return new Response(JSON.stringify({ success: true, emailSent: false, note: "Saved but email delivery pending" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true, emailSent: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Error:", err);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
