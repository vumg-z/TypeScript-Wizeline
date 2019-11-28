/*

Tipos de datos primitivos

let a: number = 2;
let variable: string = "hola";
let c = true;

*/

// function booleanToInt(value: boolean){
//   if(value){
//     return 1;
//   }else{
//     return 0;
//   }
// }

// Array
// let a: number[] = [1,2,3];
// let b: Array<String> = ["hola", "hola"];

// Tuples

// let a: [number, string] = [1,"penguin"];
// let b: [number,number,number] = [1,2,3];

//any es malo
//no me molestes con los tipos de esta variable pero no me molster

// let a: any = [1,2,3];
// a.funcionInexistente(); // <- esto causa error
//No me molestes dejame hacer lo que yo quiera pero tu tienes la responsabilidad

// let a = 2;
// const b = 2;

// b es de tipo 2. Es raro esto, literales de tipo.
// valor literal
// literales de tipo

//type literals

// let a: 2 = 2;
// a = 3;

// declaramos a como tipo 2, por eso a la hora de asignar un nuevo valor TypeScript Se enoja

// uniones
// nos permiten especificar que una variable puede ser de un tipo o de otro.
// let a: number | string = 2;

// a = 6;
// a = "hola";

//unions with type literals

// let a: 1 | 2 | 3 = 1;

// a = 2;

// let b: "hola" | "men" = "hola";

// b = "men";

// hacer nuestro propio tipo
// let c: true | false;

function getStatus(status: 200 | 404) {
  if (status === 200) return "OK";
  else if (status === 404) return "NOT FOUND";
}

console.log(getStatus(404));

// objetos

// const myObject: object = {
//   a: 2,
//   b: {
//     c: 3
//   }
// }

// myObject. // no autocompleta por que TypeScript solamente sabe que es un objeto pero no sus propiedades

// objecto 2

// const a: { a: string, b: number} = {
//   a: "hello",
//   b: 22
// }

// a.b; //ya lo autocompleta

// la forma de arriba es muy fea de escribir pero hay una forma mejor usando interfaces

interface myObject {
  a: string;
  b: number;
}

const a: myObject = {
  a: "hoola",
  b: 42
};

//interfaces on valores opcionales

// interface Person {
//   id: string;
//   name: string;
//   age?: number;
//   email: string;
// }

function logPerson(p: Person) {
  if (p.age) {
    Math.log(p.age); //si pusieramos esta linea fuera de la validacion de que si es un numero TypeScript se queja.
    console.log(p.name, p.age);
  } else {
    console.log(p.name);
  }
}

// Type Alias
// una variable en el mundo de los tipos

type myNumber = number;

// type Person = {
//   id: string;
//   name: string;
//   age?: number;
//   email: string;
// }

//type vs interfaces

type MyUnion = number | string;

interface A {
  a: string;
}

interface B extends A {
  b: number;
}

//type variables

type ButtonVariants = "primary" | "secondary" | "terciary";

function getButtonType(variants: ButtonVariants) {
  //...
}

//la funcion de arriba te permite saber que variantes soporta tu funcion getButtons

//intersecciones

interface Person {
  name: string;
  id: string;
}

interface Job {
  title: string;
  level: number;
}

// type PersonWithJob = Person & Job;

interface PersonWithJob extends Person, Job {}

// Discriminants Union

// Es la forma de poder diferenciar interfaces

// interface Square {
//   kind: string;
//   width: number
// }

// interface Rectange{
//   kind: string;
//   width: number;
//   heigth: number;
// }

// interface Circle {
//   kind: string;
//   radius: number;
// }

// type Shape = "Square" | "Rectangle" | "Circle";

// function drawShape(shape: Shape){
//   if(shape.kind === "Circle"){
//   //
//   }else
// }

type RequestState =
  | {
      loading: true;
      data: undefined;
      error: undefined;
    }
  | {
      loading: false;
      data: object;
      error: undefined;
    }
  | {
      loading: false;
      data: object;
      error: Error;
    };

function procesRequest(state: RequestState) {
  if (state.loading) {
    console.log("loading");
    return;
  }
  if (state.error) {
    console.log(state.error);
    return;
  }

  processData(state.data);
}

function processData(data: object) {}

// el codigo de arriba es disciminant unions.

// Functions

function log(message: string): void {
  console.log("Message");
}

// se puede declarar el tipo de funcion opcionalmente

// function log(message: string) {
//   console.log("Message");
// }

// // el codigo de arriba es lo mismo

// // arrow functions

// type AddFunction = (a: number, b:number) => number;

// const add: AddFunction = (x,y) => x+y;

// console.log(add(5,5));

// type CallBackType = (x:number) => void;

// function f(callback: CallBackType){
// //..
// }

type CallBackType = (n: number) => number;

type MapFn = (items: number[], callback: CallBackType) => number[];

const map: MapFn = (items, callback) => {
  const result = [];

  for (let i = 0; i < items.length; i++) {
    result.push(callback(items[i]));
  }
  return result;
};

console.log(map([1, 2, 3], x => x * 10));

//generics son como funciones en el mundo de los tipos

function identity<T>(x: T) {
  return x;
}

identity<number>(2);

identity("hola");

// challenge time

interface Translations {
  welcome: string;
  singIn: string;
}

const english: Translations = {
  welcome: "welcome",
  singIn: "sign in"
};

const spanish: Translations = {
  welcome: "welcome",
  singIn: "sign in"
};

function getTranslation(translationKey: keyof Translations) {}

getTranslation("welcome");

// TypeScript HandBook
