const getKeyWithHighestValue = <TObj extends Record<string, number>>(
	obj: TObj
): { key: keyof TObj; value: number } => {
	const keys = Object.keys(obj) as Array<keyof TObj>;

	let highestKey: keyof TObj = keys[0];
	let highestValue = obj[highestKey];

	for (const key of keys) {
		const value = obj[key];
		if (value > highestValue) {
			highestKey = key;
			highestValue = value;
		}
	}

	return { key: highestKey, value: highestValue };
};

const res = getKeyWithHighestValue({
	a: 1,
	b: 2,
	c: 3,
});
const key = res.key;
const value = res.value;
