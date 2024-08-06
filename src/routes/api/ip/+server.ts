import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type { Entry } from '$lib/types';
import { setEntry } from '$lib/db';

export const POST: RequestHandler = async (event) => {
	const { ip, hostname } = await event.request.json();
	const time = Date.now();
	const entry: Entry = { hostname, ip, updated: time };
	await setEntry(event.platform!, entry);
	return json(entry);
};
