let A = toFloat(prompt());
let B = toFloat(prompt());
let C = toFloat(prompt());

const pi = 3.141;

let areaTriangulo = A * C;
let areaCirculo = (C * C) * pi;
let areaTrapezio = ((A + B) * C) / 2;
let areaQuadrado = B * B;
let areaRetangulo = A * B;

console.log("TRIANGULO: " + areaTriangulo);
console.log("CIRCULO: " + areaCirculo);
console.log("TRAPEZIO: " + areaTrapezio);
console.log("QUADRADO: " + areaQuadrado);
console.log("RETANGULO: " + areaRetangulo);