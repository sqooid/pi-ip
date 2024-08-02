import { platform } from 'os';
import type { Entry } from './types';
import { DB } from '$env/dynamic/private';

export const getAllEntries = async (): Promise<Entry[]> => {
	return [{ hostname: '', ip: '', time: 0 }];
};
export const getEntry = async (hostname: string): Promise<Entry> => {
	return { hostname: '', ip: '', time: 0 };
};
export const setEntry = async (hostname: string, entry: Entry) => {};
