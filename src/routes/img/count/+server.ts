import { error } from '@sveltejs/kit';
import { readdir } from 'node:fs/promises';
import { json } from '@sveltejs/kit';


const image_path = "$lib/images"

export const GET = async () => {
    let length: Number = (await readdir(image_path)).length
    return json(length)
};
