export const controllers = new Set<ReadableStreamDefaultController>();

export function send_event(event: string, username: string) {
	for (let controller of controllers) {
		controller.enqueue(`event: ${event}\ndata: ${username}\n\n`);
	}
}
