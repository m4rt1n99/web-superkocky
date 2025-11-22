import type { RequestHandler } from './$types';
import { readdir } from 'node:fs/promises';
import { json } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ url }) => {
    // Get folder size
    const length = (await readdir("$lib/images")).length;
    // Choose random image from folder
    const random_image = Math.floor(Math.random() * (length+1));
    // Get image url and build JSON response
    const json_res = { id: random_image, url: `${url.origin}/img/${random_image}.webp` };
    // retunr JSON object
    return json(json_res);
};
