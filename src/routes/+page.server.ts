import { kv } from '@vercel/kv';
import { KV_PREFIX, type Entry } from '$lib/types';
import type { ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = async (event) => {
	const hosts = (await kv.scan(0, { match: `${KV_PREFIX}:*` }))[1];
	const hosts_data: Entry[] = await kv.mget(hosts);
	const data = hosts.map((x, i) => {
		const item: Entry = hosts_data[i];
		return { hostname: x.split(':', 2)[1], ip: item.ip, time: item.time };
	});
	console.log(data);

	return { data };
};
