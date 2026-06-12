import { createClient } from "@/lib/supabase/server";
import { Suspense } from "react";

async function TilesData() {
  const supabase = await createClient();
  const { data: tiles } = await supabase.from("tiles").select();

  return <pre>{JSON.stringify(tiles, null, 2)}</pre>;
}

export default function Tiles() {
  return (
    <Suspense fallback={<div>Loading tiles...</div>}>
      <TilesData />
    </Suspense>
  );
}