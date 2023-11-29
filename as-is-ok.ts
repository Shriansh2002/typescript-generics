// const typedObjectKeys = <T extends {}>(obj: T): Array<keyof T> => {
// 	return Object.keys(obj);
// };

const typedObjectKeys = <T extends {}>(obj: T) => {
	return Object.keys(obj) as Array<keyof T>;
};
