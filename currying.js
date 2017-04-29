import _ from 'lodash'
let cat =
    name=>
        size=>
            element=>
                name + ' is a ' +
                size + ' cat that makes '+
                element + '!';
console.log(cat('KittyCat')('fluffy')('funny jumps'));

let otherCat = (name, size, element)=>
    name + ' is a ' +
    size + ' cat that makes '+
    element + '!';
otherCat = _.curry(otherCat);
let kittyCatCat = cat("KittyCat");
let fluffyCat = kittyCatCat('fluffy');

console.log(fluffyCat('funny jumps'));

let cats = [
    { name: "KittyCat", element: 'funny jumps'},
    { name: "Kamelot", element: 'good eats'},
    { name: "Claro", element: 'gamer'},
    { name: "Justy", element: 'funny jumps'}
];
let hasElement =
    _.curry((element, obj)=> obj.element === element);
let funnyJumps =
    cats.filter(hasElement('funny jumps'));
console.log(funnyJumps);