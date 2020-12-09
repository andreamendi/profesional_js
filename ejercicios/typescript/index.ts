console.log("Hello, TypeScript!");

//  Boolean
let muted: boolean = true;
muted = false;

// numers

let numerador: number = 42;
let denominador: number = 6;
let resultado = numerador / denominador;

// String

let nombre = "Andrea";
let saludo = `Me llamo ${nombre}`;

// Arreglo

let people: string[] = [];
people = ["Atzin", "Lorenza", "Elieen"];
// people.push("333")

let peopleAndAges: Array< string | number > = []
peopleAndAges.push('Elizabeth');
peopleAndAges.push(20);

//Enum
enum Color {
  Rojo = "Rojo",
  Verde = "Verde",
  Azul = "Azul",
}

let colorFavorito: Color = Color.Azul
console.log(`mi color favorito es ${colorFavorito}`)

//any

let comodin: any = "Joker";
comodin = { type: 'Wildcard' }


//object

let someObject: object = { type: 'Wildcard' }


//-------------------------
//Funciones

function add(a: number, b: number): number {
  return a + b;
}

const sum = add(4, 5);

function createAdder (a: number): (number) => number {
  return function(b: number) {
    return b + a;
  }
}

const addFour = createAdder(4);
const forPlusSix = addFour(6);

// function fullName(firstName: string, lastName?: string): string {
//   return `${firstName} ${lastName}`
// }
function fullName(firstName: string, lastName: string = 'NA'): string {
  return `${firstName} ${lastName}`
}

const personName = fullName('Andrea');

console.log(personName);




//-------------------------
//Interfaces

enum Colors {
  Rojo = "Rojo",
  Verde = "Verde",
}

interface Rectangulo {
  ancho: number,
  alto: number,
  color?: Colors,
}

let rect: Rectangulo = {
  ancho: 4,
  alto: 6,
  color: Colors.Verde
}

function area(r: Rectangulo) {
  return r.alto * r.ancho;
}

const areaRect = area(rect)
console.log(areaRect)

console.log(rect.toString()); // [object Object]

rect.toString = function () {
  return this.color ? `un rectangulo de color -> ${this.color}` : `Un rectangulo que tiene de área -> ${areaRect}`;
};

console.log(rect.toString());