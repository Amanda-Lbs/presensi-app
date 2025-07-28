import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

export const supabase = createClient(
  'https://ciklmlxkcsvlplsteftn.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpa2xtbHhrY3N2bHBsc3RlZnRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA0NzE0NDMsImV4cCI6MjA2NjA0NzQ0M30.4rPHoYUZJ-X1tFisUk10U4y4bBj4P8LnIIB7nsPs7OM'

);
