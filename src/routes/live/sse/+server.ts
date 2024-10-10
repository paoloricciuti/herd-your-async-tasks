import { controllers } from '../hub';

export function GET() {
	let controller: ReadableStreamDefaultController;
	return new Response(
		new ReadableStream({
			start(_controller) {
				controller = _controller;
				controllers.add(controller);
			},
			cancel() {
				controllers.delete(controller);
			},
		}),
		{
			headers: {
				'Content-Type': 'text/event-stream',
				'Cache-Control': 'no-cache',
			},
		},
	);
}
