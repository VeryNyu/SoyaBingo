import { createClient } from "@/lib/supabase/client";

const supabase = await createClient();

export async function getTiles() {
  const { data, error } = await supabase
    .from("tiles")
    .select("*");

  if (error) throw error;

  return data;
}