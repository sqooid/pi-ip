import type { Entry } from './types';

export const getAllEntries = async (platform: App.Platform): Promise<Entry[]> => {
	try {
		const { results } = await platform.env.DB.prepare('select * from hosts').all();
		return results;
	} catch (error) {
		await platform.env.DB.prepare(
			'create table if not exists hosts (hostname text primary key, ip text, updated integer)'
		).run();
		return [];
	}
};

export const setEntry = async (platform: App.Platform, entry: Entry) => {
	await platform.env.DB.prepare(
		`
	insert into hosts(hostname, ip, updated)
	values(?, ?, ?)
	on conflict(hostname)
	do 
		update set 
			ip = ?,
			updated = ?
	`
	)
		.bind(entry.hostname, entry.ip, entry.updated, entry.ip, entry.updated)
		.run();
};
