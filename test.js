const a = 00000000000000000000000000001011;

const b = a.toString(2);
const d = b.split("");
const answer = d.reduce((acc, item) => (item == "1" ? (acc += 1) : acc), 0);
console.log(answer);
