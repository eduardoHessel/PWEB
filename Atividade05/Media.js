var nome = prompt("Insira o nome do aluno.");

var nota1 = parseFloat(prompt("Insira a nota 1."));
var nota2 = parseFloat(prompt("Insira a nota 2."));
var nota3 = parseFloat(prompt("Insira a nota 3."));

var media = (nota1 + nota2 + nota3) / 3;

alert("Sua média é " + media);