/**
 * Simple object check.
 * @param item
 * @returns {boolean}
 */
export function isObject(item: unknown) {
	return item && typeof item === 'object' && !Array.isArray(item);
}

/**
 * Deep merge two objects.
 * @param target
 * @param ...sources
 */
export function mergeDeep(target: object, ...sources: Array<object>) {
	if (!sources.length) return target;
	const source = sources.shift();

	if (isObject(target) && isObject(source)) {
		for (const key in source) {
			if (isObject(source[key as keyof typeof source])) {
				if (!target[key as keyof typeof target])
					Object.assign(target, { [key]: {} });
				mergeDeep(
					target[key as keyof typeof target],
					source[key as keyof typeof source]
				);
			} else {
				Object.assign(target, { [key]: source[key as keyof typeof source] });
			}
		}
	}

	return mergeDeep(target, ...sources);
}
