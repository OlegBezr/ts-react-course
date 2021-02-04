// fast intro to TypeScript: https://learnxinyminutes.com/docs/typescript/
// more on TypeScript: https://www.typescriptlang.org

// let n: number;
// let x;

// // n = '1';
// x = '1';


// let getSum = (a: number, b: number) : number => {
//     return a + b;
// }
// console.log(getSum(5, 10));
// console.log(getSum('a', 'b'));


// interface User {
//     name: string;
//     id: number;
// }
// const user: User = {
//     name: "Hayes",
//     id: 7
// }
// console.log(user);


// class CleverUser implements User {
//     name: string;
//     id: number;
//     private phrase: string;

//     constructor(name: string, id: number) {
//         this.name = name,
//         this.id = id;
//     }
// }


// interface SearchFunc {
//     (source: string, subString: string): boolean;
// }
// // Only the parameters' types are important, names are not important.
// let mySearch: SearchFunc;
// mySearch = function (src: string, sub: string) {
//     return src.search(sub) != -1;
// }
// console.log(mySearch('some string', 'home'));


let array2 = Array<String>();
array2.push('25');
// array2.push(7);


// class Animal {
//     #secret;

//     constructor(speed, health) {
//         this.speed = speed;
//         this.health = health;
//         this.#secret = speed - 5;
//     }

//     getStrength() {
//         return this.speed * this.health;
//     }

//     #privateMethod() {
//         return this.#secret;
//     }
// }

// private, protected, readonly
// use underscore?

let s = 'string';
let s2 = s;
s += 'a';

console.log(s);
console.log(s2);