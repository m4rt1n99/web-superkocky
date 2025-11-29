import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
import { supabase } from '$lib/server/supabaseClient';
export const GET: RequestHandler = async ({ url }) => {
	const { data, error } = await supabase.from('random_image_data').select('*').limit(1);
	return json(data ? data[0] : {});
};
