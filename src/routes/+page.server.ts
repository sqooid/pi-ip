import type { ServerLoad } from '@sveltejs/kit';
import { getAllEntries } from '$lib/db';

export const load: ServerLoad = async (event) => {
	const hosts = await getAllEntries(event.platform!);
	return { hosts };
};
