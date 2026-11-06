-- Run in the Supabase SQL editor. Admin access is controlled by the JWT app_metadata.role claim.
create extension if not exists pgcrypto;

create table if not exists public.doctor_profile (
  id uuid primary key default gen_random_uuid(), name text not null, designation text, biography text,
  affiliation text, qualifications text, years_experience text, email text, phone text,
  updated_at timestamptz not null default now()
);
create table if not exists public.education (
  id uuid primary key default gen_random_uuid(), title text not null, institution text, year_label text, description text, sort_order int default 0, published boolean default false
);
create table if not exists public.experience (
  id uuid primary key default gen_random_uuid(), title text not null, institution text, year_label text, description text, sort_order int default 0, published boolean default false
);
create table if not exists public.specialities (
  id uuid primary key default gen_random_uuid(), title text not null, description text, icon text, sort_order int default 0, published boolean default false
);
create table if not exists public.achievements (
  id uuid primary key default gen_random_uuid(), title text not null, description text, certificate_url text, year_label text, sort_order int default 0, published boolean default false
);
create table if not exists public.publications (
  id uuid primary key default gen_random_uuid(), title text not null, year_label text, journal text, category text, description text, external_url text, published boolean default false
);
create table if not exists public.gallery (
  id uuid primary key default gen_random_uuid(), title text not null, category text, image_url text, caption text, sort_order int default 0, published boolean default false
);
create table if not exists public.blog_articles (
  id uuid primary key default gen_random_uuid(), title text not null, slug text unique not null, excerpt text, body text, featured_image_url text, category text, published_at timestamptz, published boolean default false
);
create table if not exists public.appointment_requests (
  id uuid primary key default gen_random_uuid(), patient_name text not null,
  mobile text not null, email text, preferred_date date not null, preferred_time text not null,
  enquiry_type text, message text, consent boolean not null default false,
  status text not null default 'new' check (status in ('new','contacted','closed')),
  created_at timestamptz not null default now()
);

alter table public.doctor_profile enable row level security;
alter table public.education enable row level security;
alter table public.experience enable row level security;
alter table public.specialities enable row level security;
alter table public.achievements enable row level security;
alter table public.publications enable row level security;
alter table public.gallery enable row level security;
alter table public.blog_articles enable row level security;
alter table public.appointment_requests enable row level security;

-- Public visitors can only read content explicitly marked as published.
create policy "public reads profile" on public.doctor_profile for select using (true);
create policy "public reads published education" on public.education for select using (published = true);
create policy "public reads published experience" on public.experience for select using (published = true);
create policy "public reads published specialities" on public.specialities for select using (published = true);
create policy "public reads published achievements" on public.achievements for select using (published = true);
create policy "public reads published publications" on public.publications for select using (published = true);
create policy "public reads published gallery" on public.gallery for select using (published = true);
create policy "public reads published articles" on public.blog_articles for select using (published = true);

-- Public may submit an appointment request; only authenticated admins may read or manage requests.
create policy "public submits appointment request" on public.appointment_requests
  for insert to anon, authenticated with check (consent = true and length(patient_name) between 2 and 120 and length(mobile) between 8 and 20);
create policy "admin reads appointment requests" on public.appointment_requests
  for select to authenticated using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

-- Only an authenticated administrator can change professional content.
create policy "admin manages profile" on public.doctor_profile for all to authenticated
  using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin') with check ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');
create policy "admin manages education" on public.education for all to authenticated
  using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin') with check ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');
create policy "admin manages experience" on public.experience for all to authenticated
  using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin') with check ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');
create policy "admin manages specialities" on public.specialities for all to authenticated
  using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin') with check ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');
create policy "admin manages achievements" on public.achievements for all to authenticated
  using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin') with check ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');
create policy "admin manages publications" on public.publications for all to authenticated
  using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin') with check ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');
create policy "admin manages gallery" on public.gallery for all to authenticated
  using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin') with check ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');
create policy "admin manages articles" on public.blog_articles for all to authenticated
  using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin') with check ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');
create policy "admin manages appointment requests" on public.appointment_requests for all to authenticated
  using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin') with check ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');
