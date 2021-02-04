// const dynamic = 'color';
// let item = {
//     brand: 'Ford',
//     [dynamic]: 'Blue'
// }
// console.log(item);

// const dynamic_array_key = [1, 2, 3, 4];
// let item = {
//     brand: 'Ford',
//     [dynamic_array_key]: 'Blue'
// }
// console.log(item);
// console.log(item[dynamic_array_key]);
// console.log(item[[1, 2, 3, 4]]);
// console.log(item['1,2,3,4']);


/* use for number sort */
// function number_sort (a, b) {
//     return a - b;
// }

// let array = [1, 10, 20, 19, 7, 5];
// let sorted = array.sort(number_sort);
// console.log(sorted);


// let first = array[2];
// first = array.slice(1, 4);
// console.log(first);


let olegDict = {
    age: 17,
    name: 'Oleg',
    phrase: 'Random Phrase',
    printName: function() {
        console.log(this.name);
    }
}
let {age, phrase} = olegDict;
console.log(age);
console.log(phrase);
olegDict.printName();


let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
let array = [1, 3, 5, 6, 7, 0];

let new_letters = array.map((element) => { return letters[element]});
console.log(new_letters);