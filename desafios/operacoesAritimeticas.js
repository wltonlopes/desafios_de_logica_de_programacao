// EXERCÍCIO 1
// Faça as 4 operações básica com base nos números 2 e 4:
// Ao final de cada operação imprima na tela no seguinte formato: 
// Soma: 2 + 4 = x
// Subtração : 2 - 4 = x
// Divisão: 2 / 4 = x
// Multiplicação: 2 * 4 = x
// ---------------------------------------------------------------

let num1 = 2;
let num2 = 4;

function operators (num1, num2)  {
    console.log('Soma: ',num1 + num2);
    console.log('Subtraction: ', num1 - num2);
    console.log('Division: ', num1/num2) ;
    console.log('Multiplication: ', num1*num2);
}

 operators(num1,num2);