import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gaxaeozinnruawueebbr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdheGFlb3ppbm5ydWF3dWVlYmJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTExOTU4NzYsImV4cCI6MjAwNjc3MTg3Nn0.KuRd0g0VpX_CaTS9Mt98JNEjzcYCJqMcFckNZE8Pfio";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
