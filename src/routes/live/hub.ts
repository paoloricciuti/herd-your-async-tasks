export const controllers = new Set<ReadableStreamDefaultController>();

export function send_event(username: string) {
	for (let controller of controllers) {
		controller.enqueue(`data: ${username}\n\n`);
	}
}
