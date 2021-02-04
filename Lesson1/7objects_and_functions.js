// class JsPerson {
//     constructor(age, name, phrase) {
//         this.age = age;
//         this.name = name;
//         this.phrase = phrase;
//     }

//     printName() {
//         console.log(this.name);
//     }

//     getFunction() {
//         var someCoolFunction = () => {
//             console.log(this.age + " " + this.name);
//         }

//         return someCoolFunction;
//     }
// }

// let oleg = new JsPerson(17, 'Oleg', 'Learn JS!');
// oleg.printName();
// console.log(oleg.phrase);
// console.log(oleg['phrase']);
// console.log(oleg['getFunction']);

// /* problem with this */
// let func = oleg.getFunction();
// func();

/* dirty class */
// function Car(model, year) {
//     this.model = model;
//     this.year = year;
// }

// let car = new Car(1, 2020);
// console.log(car);


/* class dictionary equivalence */
let olegDict = {
    age: 7,
    name: 'Oleg',
    phrase: 'Random Phrase',
    printName: function() {
        console.log(this.name);
    }
}

olegDict.printName();
console.log(olegDict.phrase);
let json = JSON.stringify(olegDict);
console.log(json);

let someJson = '{"age":7,"name":"Oleg","phrase":"Random Phrase"}';
let parsedDict = JSON.parse(someJson);
console.log(parsedDict.age);

/* instance of showcase */
// console.log(olegDict.constructor.name);
// console.log(oleg.constructor.name);