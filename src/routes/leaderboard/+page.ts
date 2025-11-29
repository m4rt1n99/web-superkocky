import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	let res = await fetch('/api/leaderboard');
	let json = await res.json();
	let data = json.data;

	return { data };
};
