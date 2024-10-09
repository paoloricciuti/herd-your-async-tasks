export function subscribe_events(
	event: string,
	fn: (e: MessageEvent<any>, controller: AbortController) => void,
	active: () => boolean,
) {
	$effect(() => {
		let controller: AbortController | undefined;
		if (active()) {
			controller = new AbortController();
			const event_source = new EventSource('/live/sse');
			event_source.addEventListener(event, (e) => fn(e, controller!), {
				signal: controller.signal,
			});
			controller.signal.addEventListener('abort', () => {
				event_source.close();
			});
		}
		return () => {
			controller?.abort();
		};
	});
}
