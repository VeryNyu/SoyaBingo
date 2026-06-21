"use client";

import { createClient } from "@/lib/supabase/client";

type ToggleActiveButtonProps = {
  id: number;
  active: boolean;
};

export default function ToggleActiveButton({
  id,
  active,
}: ToggleActiveButtonProps) {
  async function handleClick() {
    const supabase = await createClient();

    console.log("Toggle tile:", id);

    const { data, error } = await supabase
    .from("tiles")
    .update({ active: !active })
    .eq("id", id)
    .select();

    console.log("ID:", id, typeof id);
    console.log(error, data);
    }

  return (
    <button onClick={handleClick}>
      {active ? "Disable" : "Enable"}
    </button>
  );
}