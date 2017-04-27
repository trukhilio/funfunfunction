let animals = [
    { name: 'Harold', species: 'dog'},
    { name: 'Jumpy', species: 'turtle'},
    { name: 'Ninja', species: 'cat'},
    { name: 'Heavy', species: 'hippo'},
    { name: 'Mini', species: 'cat'},
    { name: 'Speedy', species: 'turtle'}
];

let names = animals.map((x)=> x.name + ' is a ' + x.species);

console.log(names);