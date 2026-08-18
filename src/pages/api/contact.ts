import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    // Log the contact form submission to console (stub - wire up email later)
    console.log('=== Contact Form Submission ===');
    console.log('Name:', data.name);
    console.log('Email:', data.email);
    console.log('Company:', data.company);
    console.log('Company Size:', data.employees);
    console.log('Service Interest:', data.service);
    console.log('Message:', data.message);
    console.log('Timestamp:', new Date().toISOString());
    console.log('================================');

    // Basic validation
    if (!data.name || !data.email || !data.company || !data.message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // TODO: Wire up email sending here (e.g., Resend, SendGrid, AWS SES)
    // For now, just log to console and return success

    return new Response(JSON.stringify({ success: true, message: 'Thank you for getting in touch. We will respond within one business day.' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(JSON.stringify({ error: 'Something went wrong' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};