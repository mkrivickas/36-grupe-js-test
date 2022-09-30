// kalkuliatorius gali atlikti šiuos veiksmus:
const math = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '/': (a, b) => a / b,
    '*': (a, b) => a * b,
};

// vartotojas gali keisti šiuos duomenis:
const action = '*';
const n1 = 7;
const n2 = 5;

// atsakymas generuojamas šia išraiška:
const ans = math[action](n1, n2);

// atsakymas išspausdinamas konsolėje:
console.log(`${n1} ${action} ${n2} = ${ans}`);
