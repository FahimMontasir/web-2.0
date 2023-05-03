// type assertion
let multiType;
multiType = "hello";
console.log((multiType as string).charAt(0));

// interface
interface IUser {
  name: "fahim";
}
interface IExtendedUser extends IUser {
  age: 28;
}

type addNumberType = (num1: number, num2: number) => number;
const addNumber: addNumberType = (num1, num2) => num1 + num2;
console.log(addNumber(10, 20));

interface IRollNumbers {
  [index: number]: number;
}
const rollNumber: IRollNumbers = [2, 24234];

// generic in type
type GenericArray<T> = Array<T>;

const numbersArr: GenericArray<number> = [2, 3, 4];
const stringArr: GenericArray<string> = ["2", "3", "4"];

// generic in interface
interface CrushInterface<T, T2 = null> {
  name: string;
  husband: T;
  age: T2;
}

// generic in function
const crateArray = <T>(param: T): T[] => [param];
const result = crateArray<string>("ban");

// constraints in generic
const crateArray2 = <T extends { name: string }>(param: T): T[] => [param];

// keyof
type TypeFromKeyOF = keyof CrushInterface<string, string>;

const vall: TypeFromKeyOF = "age";

function getProperty<x, y extends keyof x>(obj: x, key: y) {
  obj[key];
}

// asynchronous typescript
Promise<string>;

// mapping
type Area<T> = {
  [key in keyof T]: T[key];
};

const area1: Area<{ name: string }> = { name: "fahim" };
