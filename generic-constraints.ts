type GetPromiseReturnType<T extends (...args: any) => any> = Awaited<
	ReturnType<T>
>;

// type Result = ReturnType<string>;

type Result1 = GetPromiseReturnType<
	() => Promise<{
		firstName: string;
		lastName: string;
	}>
>;

// type ErrorLine = GetPromiseReturnType<string>;
