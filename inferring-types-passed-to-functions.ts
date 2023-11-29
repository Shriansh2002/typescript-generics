const addIdToObject = <T>(obj: T): T & { id: string } => {
	return {
		...obj,
		id: "123",
	};
};

const res = addIdToObject({
	firstName: "John",
	lastName: "Doe",
});

console.log(res);

export {};
