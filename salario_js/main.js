let nome = prompt("Nome: ");
let salario = parseFloat(prompt("Salário: "));
let totalVenda = parseFloat(prompt("Total de venda: "));
let total = (0.15 * totalVenda) + salario;

console.log("TOTAL = R$ " + total);