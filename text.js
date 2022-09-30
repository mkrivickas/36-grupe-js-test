// 2
const text = {
    first: (word) => word[0];
    middle: (word) => (word.length / 2) + 1;
};

const textAction = 'first'; // first | middle | last

const word = 'Labas';

const letter = 'x';

console.log(`${textAction} letter of word "${word}" is ${letter}`);