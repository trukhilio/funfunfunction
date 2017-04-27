let animals = [
    { name: 'Harold', species: 'dog'},
    { name: 'Jumpy', species: 'turtle'},
    { name: 'Ninja', species: 'cat'},
    { name: 'Heavy', species: 'hippo'},
    { name: 'Mini', species: 'cat'},
    { name: 'Speedy', species: 'turtle'}
];
let isCat = (animal)=> animal.species === 'cat';
let cats = animals.filter(isCat);

let onlyOne = (animals)=> animals.name === 'Jumpy';
let jumpy = animals.find(onlyOne);

console.log(cats);
console.log(jumpy);



