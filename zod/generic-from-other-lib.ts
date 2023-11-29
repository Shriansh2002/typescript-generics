import { z } from "zod";

const makeZodSafeFetch = <TData>(
	url: string,
	schema: z.Schema<TData>
) => {
	return fetch(url)
		.then((res) => res.json())
		.then((res) => schema.parse(res));
};

const res = makeZodSafeFetch(
	"https://api.example.com",
	z.object({
		firstName: z.string(),
		lastName: z.string(),
	})
).then((data) => {
	console.log(data);
});

export {};
