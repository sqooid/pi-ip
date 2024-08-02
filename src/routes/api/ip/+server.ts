import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { kv } from '@vercel/kv';
import { KV_PREFIX, type Entry } from '$lib/types';

export const POST: RequestHandler = async (event) => {
	const { ip, hostname } = await event.request.json();
	const time = Date.now();
	const entry: Entry = { ip, time };
	await kv.set(`${KV_PREFIX}:${hostname}`, JSON.stringify(entry));
	return json(entry);
};

export const GET: RequestHandler = async (event) => {
	const { ip, hostname } = await event.request.json();
	const time = Date.now();
	const entry: Entry = { ip, time };
	kv.set(hostname, JSON.stringify(entry));
	return json(entry);
};
