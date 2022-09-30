const people = [
    { name: 'Petras', color: 'blue' },
    { name: 'Petras', color: 'red' },
    { name: 'Petras', color: 'green' },
    { name: 'Petras', color: 'blue' },
    { name: 'Petras', color: 'green' },
    { name: 'Petras', color: 'orange' },
];

// atsirenkame kokių spalvų ir kokiais kiekiais yra masyve
const colorsCount = {};
// for-of skirtas masyvui
for (const person of people) {
    const { color } = person;
    colorsCount[color] = colorsCount[color] ? colorsCount[color] + 1 : 1;
}

/* const colorNames = Object.keys(colorsCount);

// for-in skirtas objektui
for (const color in colorsCount) {
    colorNames.push(color);
}

console.log(colorsCount);
console.log(colorNames); */

// randame dažniausiai paminėtos spalvos kiekį (spalvos pavadinimas nėra aktualus)
let mostPopularColorCount = 0;
for (const color in colorsCount) {
    const count = colorsCount[color];
    if (count > mostPopularColorCount) {
        mostPopularColorCount = count;
    }
}

// randame visus spalvų pavadinimus, kurie atitinka didžiausią paminėjimų kiekį
let mostPopularColorNames = [];
for (const color in colorsCount) {
    const count = colorsCount[color];
    if (count === mostPopularColorCount) {
        mostPopularColorNames.push(color);
    }
}

console.log(mostPopularColorNames);
