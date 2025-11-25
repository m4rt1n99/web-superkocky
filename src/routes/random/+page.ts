import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
  const res = await fetch('/img/random');
  const json = await res.json()
  const url = json.url
  const id = json.id

  return { id, url };
};
