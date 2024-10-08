export function debounce<T extends (...args: any[]) => void>(fn: T, ms: number): T {
	let timeout: ReturnType<typeof setTimeout>;
	return ((...args: Parameters<T>) => {
		if (timeout) {
			clearTimeout(timeout);
		}
		timeout = setTimeout(() => {
			fn(...args);
		}, ms);
	}) as T;
}
