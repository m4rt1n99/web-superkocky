import { error, json } from '@sveltejs/kit';
import { supabase } from '$lib/server/supabaseClient';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	const json_obj = await request.json();
	const action: string = json_obj.action;
	const arg_id: number = json_obj.arg_id;
	if (!arg_id || !action) {
		return error(400);
	}
	if (action != 'add' && action != 'subtract') {
		return error(400);
	}

	await supabase.rpc(action, { arg_id: arg_id });

	return new Response(null, { status: 200 });
};
