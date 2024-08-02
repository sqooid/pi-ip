import { kv } from '@vercel/kv';
import { KV_PREFIX, type Entry } from '$lib/types';
import type { ServerLoad } from '@sveltejs/kit';
import { getAllEntries, getEntry } from '$lib/db';

export const load: ServerLoad = async (event) => {
	const hosts = await getAllEntries();
	console.log(hosts);

	return { hosts };
};
