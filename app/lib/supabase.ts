import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ggwssysedldfhtgsqoqa.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdnd3NzeXNlZGxkZmh0Z3Nxb3FhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYzMjQ2NzEsImV4cCI6MjA4MTkwMDY3MX0.FQWwxD0tNSg5BrgU3yOwZPSFHuVCuyvkmM1pUgEzsoA';

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false,
  },
});
