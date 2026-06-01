CREATE TABLE waitlist (
  id          UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  name        TEXT,
  phone       TEXT        NOT NULL,
  email       TEXT,
  q1_timing   TEXT,
  q2_dj       TEXT,
  q3_social   TEXT,
  q4_kills    TEXT,
  q5_group    TEXT,
  night_match TEXT,
  created_at  TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

CREATE POLICY "allow_insert" ON waitlist FOR INSERT TO anon WITH CHECK (true);
