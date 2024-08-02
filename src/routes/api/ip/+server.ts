import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { kv } from '@vercel/kv';
import type { Entry } from '$lib/types';

export const POST: RequestHandler = async (event) => {
	const { ip, hostname } = await event.request.json();
	const time = Date.now();
	const entry: Entry = { ip, time };
	kv.set(hostname, JSON.stringify(entry));
	return json(entry);
};
