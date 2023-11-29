const getValue = <T, Tk extends keyof T>(obj: T, key: Tk) => {
	if (key === "bad") {
		throw Error("bad key");
	}
	return obj[key];
};

const res = getValue(
	{
		a: 1,
		b: "some string",
		c: true,
	},
	"c"
);

console.log(res);

export {};
