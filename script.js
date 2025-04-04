function somarNumeros() {
    let somaTotal = 0;
    let quantidade = parseInt(prompt("Quantos números você deseja somar?"));

    for (let i = 1; i <= quantidade; i++) {
        let numero = parseFloat(prompt(`Digite o número ${i}:`));
        somaTotal += numero;
    }

    alert(`O resultado da soma é: ${somaTotal}`);
}

somarNumeros();











let contador = 10;

let intervalo = setInterval(function() {
    if (contador >= 0) {
        console.log(contador);
        contador--;
    } else {
        clearInterval(intervalo);
        console.log("Lançamento!");
    }
}, 1000);







let totalGanhos = 0;
let totalGastos = 0;

for (let mes = 1; mes <= 12; mes++) {
    let ganhoMensal = parseFloat(prompt(`Digite o ganho bruto do mês ${mes}:`));
    let gastoMensal = parseFloat(prompt(`Digite os gastos do mês ${mes}:`));
    
    totalGanhos += ganhoMensal;
    totalGastos += gastoMensal;
}

let saldoFinal = totalGanhos - totalGastos;

console.log(`Total de ganhos: R$ ${totalGanhos.toFixed(2)}`);
console.log(`Total de gastos: R$ ${totalGastos.toFixed(2)}`);
console.log(`Saldo final: R$ ${saldoFinal.toFixed(2)}`);

if (saldoFinal > 0) {
    console.log("A empresa teve lucro no ano!");
} else if (saldoFinal < 0) {
    console.log("A empresa teve prejuízo no ano!");
} else {
    console.log("A empresa não teve lucro nem prejuízo no ano.");
}





let valores = [];

for (let i = 0; i < 4; i++) {
    let valor = parseInt(prompt(`Digite o ${i + 1}º valor inteiro:`));
    valores.push(valor);
}

valores.sort((a, b) => b - a);

console.log("Valores em ordem decrescente: ");
console.log(valores.join(", "));







let numero = parseInt(prompt("Digite um número:"));

if (numero % 2 === 0) {
    numero += 1;  
    console.log(`O número era par. Agora é ímpar: ${numero}`);
} else {
    numero += 1; 
    console.log(`O número era ímpar. Agora é par: ${numero}`);
}





let letra = prompt("Digite uma letra:").toLowerCase();

let vogais = ['a', 'e', 'i', 'o', 'u'];

if (vogais.includes(letra)) {
    console.log(`${letra.toUpperCase()} é uma vogal.`);
} else if (letra.length === 1 && /[a-z]/.test(letra)) {
    console.log(`${letra.toUpperCase()} é uma consoante.`);
} else {
    console.log("Por favor, digite uma letra válida.");
}










let cardapio = {
    "Chocolate": 1.50,
    "Morango": 2.50,
    "Creme": 2.50,
    "Manga": 3.20,
    "Melancia": 3.40,
    "Vanilla Ice": 3.00,
    "Céu Azul": 3.60,
    "Brownie": 4.00,
    "Hawaiano": 5.00
};

let sabor = prompt("Escolha um sabor de picolé: Chocolate, Morango, Creme, Manga, Melancia, Vanilla Ice, Céu Azul, Brownie, Hawaiano");

sabor = sabor.trim();

if (cardapio[sabor]) {
    console.log(`O valor do picolé de ${sabor} é R$ ${cardapio[sabor].toFixed(2)}`);
} else {
    console.log("Sabor não encontrado. Por favor, escolha um sabor válido.");
}