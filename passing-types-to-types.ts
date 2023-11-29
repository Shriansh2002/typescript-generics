type MyGenericType<TData> = {
	data: TData;
};

type Example1 = MyGenericType<string>;
type Example2 = MyGenericType<{
	firstName: string;
	lastName: string;
}>;

export {};
