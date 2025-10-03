# Email Setup Instructions

This document explains how to set up the contact form email functionality for the GFUNM website.

## Prerequisites

1. **Resend Account**: Sign up at [resend.com](https://resend.com)
2. **Domain Verification**: Verify your domain with Resend (recommended) or use their sandbox domain for testing

## Setup Steps

### 1. Get Resend API Key

1. Log in to your Resend dashboard
2. Go to API Keys section
3. Create a new API key
4. Copy the API key (starts with `re_`)

### 2. Configure Environment Variables

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Update the values in `.env.local`:
   ```env
   # Your Resend API key
   RESEND_API_KEY=re_your_actual_api_key_here
   
   # Email address where contact form submissions will be sent
   CONTACT_EMAIL=info@gfunm.org
   
   # Your app URL (for production, use your actual domain)
   NEXT_PUBLIC_APP_URL=https://yourdomain.com
   ```

### 3. Domain Setup (Recommended for Production)

For production use, you should verify your domain with Resend:

1. In Resend dashboard, go to Domains
2. Add your domain (e.g., `gfunm.org`)
3. Add the required DNS records to your domain provider
4. Wait for verification (usually takes a few minutes)

Once verified, you can send emails from any address on your domain (e.g., `contact@gfunm.org`, `noreply@gfunm.org`).

### 4. Update From Email Address

In `app/api/contact/route.ts`, update the `from` field to use your verified domain:

```typescript
from: 'contact@yourdomain.com', // Replace with your verified domain
```

## Features Included

### ✅ Email Delivery
- Sends contact form submissions to your specified email
- Sends confirmation emails to form submitters
- Uses professional HTML email templates

### ✅ Validation
- Server-side validation using Zod
- Client-side form validation
- Proper error messages for users

### ✅ Spam Protection
- Rate limiting (5 requests per 15 minutes per IP)
- Honeypot field to catch bots
- Input sanitization and validation

### ✅ User Experience
- Loading states during submission
- Success/error message display
- Form reset after successful submission
- Responsive design

## Testing

### Development Testing
1. Start the development server: `npm run dev`
2. Navigate to `/contact`
3. Fill out and submit the form
4. Check your email for the submission

### Production Testing
1. Deploy your application
2. Test the contact form with a real email
3. Verify both the submission email and confirmation email are received

## 🔧 Troubleshooting

### Common Issues

1. **"Email service not configured" error**
   - Check that `RESEND_API_KEY` is set in `.env.local`
   - Verify the API key is correct

2. **"Contact email not configured" error**
   - Check that `CONTACT_EMAIL` is set in `.env.local`
   - Verify the email address is correct

3. **"Domain not verified" error**
   - ✅ **FIXED**: The system now uses `onboarding@resend.dev` (Resend's verified domain)
   - If you want to use your own domain, verify it at https://resend.com/domains
   - Update the `from` field in `/app/api/contact/route.ts` to use your verified domain

4. **Emails not being received**
   - Check your spam/junk folder
   - Verify the contact email address in `.env.local`
   - Check Resend dashboard for delivery status

5. **"Too many requests" error**
   - The system has rate limiting (5 requests per 15 minutes per IP)
   - Wait 15 minutes before trying again

6. **Rate limiting issues**
   - The system allows 5 submissions per 15 minutes per IP
   - For production, consider implementing Redis-based rate limiting

### Logs
Check the server console for detailed error messages. All email sending errors are logged for debugging.

## Security Notes

- Never commit your `.env.local` file to version control
- The API key should be kept secret
- Rate limiting helps prevent spam and abuse
- Honeypot field catches most automated spam
- All inputs are validated and sanitized

## Customization

You can customize:
- Email templates in `app/api/contact/route.ts`
- Rate limiting rules
- Validation rules in the Zod schema
- Form fields and styling

## Support

If you encounter issues:
1. Check the Resend documentation: [resend.com/docs](https://resend.com/docs)
2. Review the server logs for error messages
3. Test with a simple email first to verify basic functionality