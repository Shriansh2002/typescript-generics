const convertToArray = <T>(input: T): T[] => {
	return [input];
};

convertToArray(123); //  ^? number[]
convertToArray("hello"); //  ^? string[]

// ------------------------------------------------------

const getIndexOfArrayItem = <T>(arr: T[], arrayItems: T) => {
	return arr.findIndex((item) => item === arrayItems);
};

const arr = [1, 25, 6, 7, 77];
getIndexOfArrayItem(arr, 7); // ^? number

// ------------------------------------------------------

const createArrayPair = <T, K>(input1: T, input2: K): [T, K] => {
	return [input1, input2];
};

createArrayPair("hello", 10);
