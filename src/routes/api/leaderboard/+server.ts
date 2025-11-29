import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { supabase } from '$lib/server/supabaseClient';

export const GET: RequestHandler = async ({ url }) => {
	let from: number = url.searchParams.get('from') ? Number(url.searchParams.get('from')) : 0;
	let to: number = url.searchParams.get('to') ? Number(url.searchParams.get('to')) : from + 49;

	const data = await supabase
		.from('image_data')
		.select('*')
		.order('rating', { ascending: false })
		.range(from, to);

	return json(data);
};
