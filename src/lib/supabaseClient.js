// Real Postgres backend — Supabase example
// npm install @supabase/supabase-js
// Set in .env: VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY
import { createClient } from '@supabase/supabase-js'
const url = import.meta.env.VITE_SUPABASE_URL
const anon = import.meta.env.VITE_SUPABASE_ANON_KEY
export const supabase = url && anon ? createClient(url, anon) : null

// SQL to run in Supabase SQL editor:
/*
create table projects (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  client_name text,
  status text, -- live, in_progress, review
  progress int, -- 0-100
  revenue int,
  mpesa_volume int,
  staging_url text,
  created_at timestamp default now()
);
create table clients (
  id uuid primary key default gen_random_uuid(),
  name text,
  email text,
  phone text, -- 254...
  project_id uuid references projects(id),
  access_code text -- AURORA-80
);
create table invoices (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references projects(id),
  amount int, -- in KES
  amount_paid int default 0,
  status text, -- paid, partial, unpaid
  mpesa_code text,
  created_at timestamp default now()
);
create table mpesa_transactions (
  id uuid primary key default gen_random_uuid(),
  phone text,
  amount int,
  mpesa_code text,
  checkout_id text,
  status text,
  project_id uuid references projects(id),
  created_at timestamp default now()
);
-- RLS: enable and add policies for admin only
*/
