let A = parseFloat(prompt("Valor de A: "));
let B = parseFloat(prompt("Valor de B: "));
let C = parseFloat(prompt("Valor de C: "));

let perimetro = A + B + C;
let area = ((A + B) * C) / 2;

if (A < B + C && B < A + C && C < A + B) {
    console.log("Perimetro = " + perimetro);
} else {
    console.log("Area = " + area);
}