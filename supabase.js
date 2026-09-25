import { createClient } from "@supabase/supabase-js";

// Replace these values with your actual Supabase URL and Anon Key
const supabaseUrl = "https://ptakgxfmafeesrsthzji.supabase.co";
const supabaseKey = "sb_publishable_1PHSFEmRnSKMelga98ZvvA_TaxLfYOB";

export const supabase = createClient(supabaseUrl, supabaseKey);