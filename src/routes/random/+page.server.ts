
import { supabase } from "$lib/server/supabaseClient";

export const load = async () => {
  const { data, error } = await supabase
    .from('image_data')          // your table name
    .select('*');           // or 'id, name'

  if (error) {
    console.error(error);
    return { items: [] };
  }
  console.log(data)
  return { items: data ?? [] };
};