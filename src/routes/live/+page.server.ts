import { fail } from '@sveltejs/kit';
import { USERNAME_COOKIE } from './constants.js';
import { send_event } from './hub.js';
import { check } from './swd.js';

export function load({ cookies }) {
	return {
		username: cookies.get(USERNAME_COOKIE),
	};
}

export const actions = {
	async login({ request, cookies }) {
		const form_data = await request.formData();
		const username = form_data.get('username');
		if (!username) {
			return fail(400, {
				message: 'You need to provide an username',
			});
		}
		const result = await check(username.toString());
		if (result.score > 0.85) {
			return fail(400, {
				message: 'No toxic usernames please',
			});
		}
		send_event('login', '');
		cookies.set(USERNAME_COOKIE, username.toString().substring(0, 10), {
			path: '/',
			httpOnly: true,
		});
	},
	async send({ cookies }) {
		const username = cookies.get(USERNAME_COOKIE);
		if (username) {
			send_event('ping', username);
		}
	},
	async logout({ cookies }) {
		cookies.delete(USERNAME_COOKIE, { path: '/' });
		send_event('logout', '');
	},
};
