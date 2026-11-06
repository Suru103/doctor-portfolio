# Doctor Personal Portfolio

A responsive React + TypeScript + Vite portfolio starter designed around the supplied doctor portrait. The image is included unchanged at `public/doctor-portrait.png` and used in both the hero and biography section.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with `npm run build`; deploy the generated `dist/` directory to Vercel, Netlify or any static host.

## Edit the doctor's details

Update `src/content.ts`. Replace every bracketed value with information verified and approved by the doctor. Update the WhatsApp number and official booking URL in `.env` (copy `.env.example` to `.env`). Never publish unverified qualifications, experience, awards, publications, procedures, contact details or hospital branding claims.

## Appointment enquiries

The current form validates the required fields and prepares an enquiry through the configured WhatsApp number. If WhatsApp is not configured, it falls back to an email draft. This is an enquiry workflow only: it does not display live availability, store patient data, or confirm an appointment. Replace the contact placeholders before launch. For a production workflow, connect the form to a Supabase Edge Function or a protected server endpoint, add explicit consent, rate limiting, spam protection, retention controls and an approved privacy notice. Do not collect detailed medical history through this form.

## Supabase foundation

1. Create a Supabase project.
2. Run `supabase/schema.sql` in the SQL editor.
3. Configure administrator accounts with the trusted `app_metadata.role = 'admin'` claim using a secure server-side process. Never allow users to set their own admin role from the browser.
4. Configure private storage buckets and signed URLs for non-public documents. Public gallery images should only be uploaded with documented consent.
5. Add a protected admin CMS and connect its CRUD operations to the tables. Appointment requests are protected by RLS so only admins can read them.

The SQL establishes the content and appointment-request data model and RLS policies; it does not itself create a finished admin dashboard or automatically connect the front-end content arrays. Those final integrations require the doctor's Supabase project and an authorized administrator account.

## Before production launch

- Verify the doctor's name, speciality, designation, qualifications, professional history, achievements, publications and affiliation.
- Obtain authorization for any hospital name/logo usage and approved photographs.
- Replace the generic map search with the exact official hospital location and official booking link.
- Add a doctor-approved privacy policy, terms and medical disclaimer reviewed for applicable Indian requirements.
- Connect the production appointment endpoint and test its access controls, consent, validation and notification flow.
- Add canonical URL, sitemap, robots.txt and verified structured data after the final domain and profile details are known.
- Confirm mobile layouts, keyboard accessibility, reduced-motion behavior and all external links.

## Notes

The page intentionally uses editable placeholders rather than fabricated medical claims. Gallery tiles are illustrative placeholders, not real event photographs. The website is an independent professional profile and is not presented as an official Medanta website.
