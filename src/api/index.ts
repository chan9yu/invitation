import type { Wedding } from '../models/wedding';

export const BASE_URL = `${window.location.origin}/wedding-invitation_app` as const;

export function getWedding() {
	const data: Promise<Wedding> = fetch(`${BASE_URL}/data/wedding.json`).then(res => res.json());
	return data;
}
