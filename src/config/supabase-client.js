import { createClient } from "@supabase/supabase-js";
const supabaseurl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnon = process.env.REACT_APP_SUPABASE_ANON_KEY;

export const supabaseClient = createClient(supabaseurl,supabaseAnon)