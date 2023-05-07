// 1. converting js array into ts tuple
// const userInfo = [101, "ema", "jhon", true, "2023"];
const userInfo: [number, string, string, boolean, string] = [
  101,
  "ema",
  "jhon",
  true,
  "2023",
];

// 2. comparing two arrays same value
const compareArrayValue = (arr1: number[], arr2: number[]): number[] => {
  return arr1.filter((i) => arr2.includes(i));
};
// console.log("compareArrayValue", compareArrayValue([1, 2, 3, 5], [2, 3, 5, 6]));

// 3. You have an interface for Product, containing the product's id, name, price, and category. You want to filter an array of Products based on a specific criterion and value. Write a TypeScript generic function that takes this array, a criterion, and returns a new array containing only the products that match the given criterion and value. Use a generic type parameter in the function signature to ensure type safety.

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

const filterProduct = <T extends keyof Product>(
  products: Product[],
  filter: T,
  value: Product[T]
): Product[] => {
  return products.filter((p) => p[filter] === value);
};

// console.log(
//   "filterProduct",
//   filterProduct(
//     [
//       { id: 1, name: "Product A", price: 10, category: "Category 1" },
//       { id: 2, name: "Product B", price: 20, category: "Category 1" },
//       { id: 3, name: "Product C", price: 30, category: "Category 2" },
//     ],
//     "category",
//     "Category 1"
//   )
// );

// 4. Suppose you have an array of tuples, where each tuple represents a product and contains the product name, price, and quantity. Write a TypeScript function that calculates the total cost of all the products in the array, using a generic type for the tuple and a type alias for the array.

type TuplesArray = [string, number, number][];

const getTotalCost = (products: TuplesArray): number => {
  return products.reduce(
    (totalCost, [name, price, quantity]) => totalCost + price * quantity,
    0
  );
};

// console.log(
//   getTotalCost([
//     ["food", 10, 2],
//     ["meal", 20, 2],
//     ["cloth", 20, 2],
//   ])
// );

// 5. Suppose you have an array of numbers in TypeScript, and you want to find the sum of all the even numbers in the array. How would you approach this problem and write code to solve it?
const getSumOfEven = (arr: number[]): number => {
  return arr.reduce((total, v) => {
    if (v % 2 === 0) {
      return total + v;
    }
    return total;
  }, 0);
};

// console.log(getSumOfEven([5, 2, 6, 3, 2]));

// 6. Create an interface called Person that includes properties for name (string), age (number), and email (string). Then create an array of Person objects and write a function that takes the array and a string email as parameters, and returns the Person object that matches the email or null if no match is found.
interface Person {
  name: string;
  age: number;
  email: string;
}

function findPersonByEmail(persons: Person[], email: string): Person | null {
  return persons.find((person) => person.email === email) || null;
}
// console.log(
//   findPersonByEmail(
//     [{ name: "fahim", age: 10, email: "faim@g.com" }],
//     "faim@g.com"
//   )
// );

// 7. Create a TypeScript program that declares an array of numbers. Use the spread operator to pass the elements of the array as arguments to a function that finds the minimum and maximum values of the array. Use destructuring to assign the minimum and maximum values to separate variables, and log them to the console.
function findMinMax(...numbers: number[]): [number, number] {
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  return [min, max];
}

const numbers = [4, 8, 2, 6, 1, 9, 5];
const [min, max] = findMinMax(...numbers);

console.log(`Minimum: ${min}`);
console.log(`Maximum: ${max}`);

// 8. Create a TypeScript program that declares a function that takes a string parameter with a literal type of "red", "green", or "blue", and an optional boolean parameter. If the boolean parameter is true, log the string parameter in uppercase. If the boolean parameter is false or not provided, log the string parameter in lowercase.
function logColor(color: "red" | "green" | "blue", toUpperCase?: boolean) {
  if (toUpperCase) {
    console.log(color.toUpperCase());
  } else {
    console.log(color.toLowerCase());
  }
}
