// Simple Types
// Main primitives = boolean, number, string
// Less common primitives = bigint, symbol

// Type Assignment 1. Explicit 2. Implicit

// 1. Explicit
let firstName: string = "Supawich";
let age: number = 21;
let married: boolean = false;

// 2. Implicit
let lastName = "Sang";

// Special Types = any, unknown, never, undefined & null

let array: unknown = [];
array = {};

let x: never = "John";

let y: undefined = undefined;
let z: null = null;

// TypeScript Arrays

// const names: readonly string[] = ["Supawich"];
const names: readonly number[] = [3, 5, 7]; //readonly ป้องกัน arrays จากการถูกเปลี่ยนแปลงแก้ไข
names.push("John");
console.log(names);

// Define our tuple
// มันก็คือ array แต่ว่าจะมีการกำหนดค่า length, type ให้กับ index แต่ละตัวมาก่อน การ predefined นั่นเอง

let Tuple: readonly [myNum: number, myBoo: boolean, myStr: string] = [
  10,
  true,
  "TypeScript is good",
];
// let [myNum, myBoo, myStr] = Tuple;
// console.log(myNum, myBoo, myStr);
// Tuple = [10, true, "TypeScript is good"];

// TypeScript Object Types

const car: { type: string; model: string; year: number } = {
  type: "Honda",
  model: "Civic",
  year: 2023,
};

// TypeScript Enum
// คือ Special Class จะแสดงถึงกลุ่มของค่าคงที่ หรือ Group of constants จะเป็นตัวแปรที่ไม่สามารถเปลี่ยนแปลงได้

enum Employees {
  Id = 1, // 1 กำหนดค่าได้
  FirstName, // 2
  LastName, // 3
  age, // 4
  Position, // 5
}

enum StatusCode {
  NotFound = 404,
  Success = 200,
  Aceepted = 202,
  BadRequest = 400,
}

enum CarLists {
  firstCar = "Honda",
  secondCar = "Toyota",
  thirdCar = "Nissan",
  fourthCar = "BMW",
}

console.log(CarLists.firstCar);

// Type Aliases
// การตั้งนามแฝงให้กับ Type หรือ ตั้ง Custom name ให้กับ Type

type CarYear = number;
type CarType = string;
type CarModel = string;

type Car = {
  year: CarYear;
  type: CarType;
  model: CarModel;
};

const carYear: CarYear = 2023;
const carType: CarType = "Honda";
const carModel: CarModel = "Civic";
const myCar: Car = {
  year: carYear,
  type: carType,
  model: carModel,
};

// Typescript Interfaces
// คล้ายกับ Aliases ยกเว้นแต่ว่าจะใช้ได้กับ ชนิดข้อมูลแบบ Object เท่านั้น

interface Rectangle {
  height: number;
  width: number;
}

interface ColoredRectangle extends Rectangle {
  color: string;
}

const rectangle: ColoredRectangle = {
  height: 20,
  width: 10,
  color: "red",
};

// Union Type
// จะใช้เวลาที่ค่า อาจจะมีมากกว่า 1 Type อย่างเช่น Property อาจจะมี Type String, Number เราก็สามารถใช้ Union พูดง่ายๆก็คือ OR

function statusCode(code: string | number) {
  console.log(`My status code is ${code}`);
}

statusCode(404);
statusCode("404");

// Function

function getTime(): number {
  return new Data().getTime();
}

function printHello(): void {
  console.log("Hello!");
}

function multiply(a: number, b: number, c: number = 10) {
  return a * b + c;
}

function divide({ divided, divisor }: { divided: number; divisor: number }) {
  return divided / divisor;
}

function add(a: number, b: number, ...arr: number[]) {}

// Typescript Casting
// คือการเขียน Type แทนที่ Type อีกทีนึง เพราะ บางครั้งเวลาที่เราทำงานกับ Type ก็อาจจะมีบางครั้งที่จำเป็นที่จะต้อง override type ของตัวแปร เช่น เรามีการใช้ Library จากที่อื่น Library ตัวนั้นมันมี Type หรือ ชนิดข้อมูลที่ไม่ถูกต้อง ก็เลยจะต้อง override โดยการใช้ Casting
// as

let someVar: unknown = "hello";
// console.log((someVar as string).length);
console.log((<string>someVar).length);

// Typescript Classes

class Person {
  private name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const person = new Person("John");
console.log(person.getName());

// Typescript Generics 
// ทำให้เราสามารถสร้าง Parameter ที่มี Type หรือว่าเป็น placeholder ที่เอาไว้เก็บชนิดของข้อมูล และก็สามารถสร้าง Reusable Components ที่ไม่มี Error เลย เมื่อเราใช้กับ Function ค่าที่จะ Return ก็คือ ค่าที่เรากำหนดให้มันหรือส่งไปให้มันเลย จะสะดวกมากๆ ในการที่จะสร้าง Function หรือว่า Class ที่มันเอาไปใช้ซ้ำได้ก็คือ Reusable ได้

function identity<T>(value: T) : T {
  return value;
}

const result = identity<number>(123);
const resultStr = identity("I love typescript");
console.log(result);
console.log(typeof(resultStr));