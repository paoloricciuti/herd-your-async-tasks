export function hide_code(str: TemplateStringsArray, ...expressions: string[]) {
	let retval = '';
	for (let i = 0; i < str.length - 1; i++) {
		retval += `${str[i]}${expressions[i].replace(/[^\n\t]/g, ' ')}`;
	}
	return retval + str[str.length - 1];
}
