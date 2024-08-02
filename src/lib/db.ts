import type { Entry } from './types';

export const getEntry = (hostname: string): Entry => {
	return { ip: '', time: 0 };
};
export const setEntry = (hostname: string, entry: Entry) => {};
