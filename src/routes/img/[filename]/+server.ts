import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { readFile } from 'node:fs/promises';

const image_path = "$lib/images"

export const GET: RequestHandler = async ({ params }) => {
  let name = params.filename;

  if (!name || name.includes('..') || name.startsWith('/') || name.includes(".") && !name.includes(".webp")) {
    return error(400);
  }

  if(!name.includes(".webp")){
    name += ".webp"
  }
  let file = await readFile(`${image_path}/${name}`)
  return new Response(file)
};
