// object oriented programming in ts

// 1. concept of OOP in typescript

// 2. class, object and parameter properties
class Animal {
  // parameter properties
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {}

  makeSound() {
    console.log(`The ${this.name} says ${this.sound}`);
  }
}
// instance
const dog = new Animal("German Shepard", "dog", "Ghew Ghew");
dog.makeSound();

// 3. inheritance
class Person {
  constructor(
    public name: string,
    public age: number,
    public address: string
  ) {}

  public makeSleep(hours: number): string {
    return `this ${this.name} will sleep for ${hours}`;
  }
}

class Student extends Person {
  constructor(name: string, age: number, address: string) {
    super(name, age, address);
  }
}
const student1 = new Student("Fahim", 21, "Dhaka");

class Teacher extends Person {
  constructor(
    name: string,
    age: number,
    address: string,
    public designation: string
  ) {
    super(name, age, address);
  }

  public takeClasses(numOfClass: number): string {
    return `This ${this.name} will take ${numOfClass} classes`;
  }
}

const teacher1 = new Teacher("Atel", 35, "Dhaka", "Professor");

// 4.  Type Guards / Type Narrowing
// use type guard because using type allies (as) is a bad practice

// typeof guard
type Alphanumeric = string | number;
function add(param1: Alphanumeric, param2: Alphanumeric): Alphanumeric {
  if (typeof param1 == "number" && typeof param2 == "number") {
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString();
  }
}

// in guard
type NormalUserType = {
  name: string;
};

type AdminUserType = {
  name: string;
  role: string;
};

const normalUser: NormalUserType = { name: "montasir" };
const adminUser: AdminUserType = { name: "fahim", role: "admin" };

function getUser(user: NormalUserType | AdminUserType): string {
  if ("role" in user) {
    return `I am an admin`;
  } else {
    return `I am a normal user ${user.name}`;
  }
}

// instanceof guard
class Dog extends Animal {
  constructor(name: string, species: string, sound: string) {
    super(name, species, sound);
  }
  makeBark() {
    console.log("The dog is Barking");
  }
}

function getAnimal(animal: Animal) {
  if (animal instanceof Dog) {
    animal.makeBark();
  }
}
// is guard
function isDog(animal: Animal): animal is Dog {
  return animal instanceof Dog;
}

// 5. Access Modifiers: Public, Private, Protected
class BankAccount {
  constructor(private _balance: number, public name: string) {}
}

// 6. getters and setters
class GetterAndSetter {
  constructor(public name: string, private _id: number) {}
  get id(): number {
    return this._id;
  }
  set change(id: number) {
    this._id = id;
  }
}
const getSet = new GetterAndSetter("fahim", 1000);
getSet.change = 200;
console.log(getSet.id);

// 7. static in class
class Counter {
  static counter: number = 0;

  static increment(): number {
    return (Counter.counter = Counter.counter + 1);
  }
  static decrement(): number {
    return (Counter.counter = Counter.counter - 1);
  }
}

console.log(Counter.increment());
console.log(Counter.increment());

// 8. polymorphism
class Shape {
  getArea(): number {
    return 0;
  }
}

// area -> pi *r*r
class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }
  public getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(public height: number, public width: number) {
    super();
  }
  getArea(): number {
    return this.height * this.width;
  }
}

function getAreaOfShape(param: Shape) {
  console.log(param.getArea());
}

const inst1 = new Shape();
const inst2 = new Circle(10);
const inst3 = new Rectangle(10, 20);
getAreaOfShape(inst1);
getAreaOfShape(inst2);
getAreaOfShape(inst3);

// 9. abstraction
// using interface
interface IVehicle {
  startEngine(): void;
  stopEngine(): void;
  move(): void;
}
class Vehicle implements IVehicle {
  startEngine(): void {
    console.log("i am staring engine");
  }
  stopEngine(): void {
    console.log("stop");
  }
  move(): void {
    console.log("move");
  }
}
// using abstract
abstract class Car {
  constructor(public name: string) {}
  abstract startEngine(): void;
  abstract stopEngine(): void;
}

class Toyota extends Car {
  startEngine(): void {
    console.log("start");
  }
  stopEngine(): void {
    console.log("stop");
  }
}

// 10. encapsulation
// we use private, protected, public to encapsulate (hide or show) property
