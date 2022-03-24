// EXERCÍCIO 2 
// Elaborar um programa que leia o valor de um jantar. Calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.
// EXEMPLO: 
// Valor do jantar: R$80,00
// Taxa do garçom: R$8,00
// Total a pagar: R$88,00
// ---------------------------------------------------------------

const valorJantar = 80;
const TAXAGARCOM = 0.10;

const calculadora = (valorGasto, garcom) =>{
  const gorjetatotal =  valorGasto*garcom;
  const totalAPagar = valorGasto + gorjetatotal;

  return console.log(`O total á ser pago será de : ${totalAPagar.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
} sendo: ${gorjetatotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} destinado ao garçom.`)
}

calculadora(valorJantar, TAXAGARCOM);