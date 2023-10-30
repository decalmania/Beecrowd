let A = parseFloat(prompt("Valor de A: "));
let B = parseFloat(prompt("Valor de B: "));
let C = parseFloat(prompt("Valor de C: "));

let X = (-B + ((B * B) - 4 * A * C)) / 2;
let Y = (-B - ((B * B) - 4 * A * C)) / 2;

if (((B * B) - 4 * A * C) < 0 || A === 0) {
    console.log("Impossivel calcular");
} else {
    console.log("R1 = " + X);
    console.log("R2 = " + Y);
}