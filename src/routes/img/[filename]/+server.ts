import { error, redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { supabase } from "$lib/server/supabaseClient";

export const GET: RequestHandler = async ({ params }) => {
  let name = params.filename;

  if (!name || name.includes('.') || name.startsWith('/')) {
    return error(400);
  }

  const { data } = await supabase
    .from('image_data')
    .select("*")
    .eq("id", params.filename)
    .limit(1);

  if(data){
    return redirect(303, data[0].url)
  } else {
    return error(500)
  }
};
