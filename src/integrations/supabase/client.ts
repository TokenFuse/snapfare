// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://wwoowwnjrepokmjgxhlw.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3b293d25qcmVwb2ttamd4aGx3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgyNzcxMjEsImV4cCI6MjA2Mzg1MzEyMX0.4wWrTBgxMNYmozZjwujvJ9g4JV1e7pB-Kj85sXMncfM";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);