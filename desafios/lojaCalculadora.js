// EXERCÍCIO 3
// =========================
// Elaborar um programa para uma loja, o qual leia o preço de um produto e informe as opções de
//  pagamento da loja. Calcule e informe o valor para pagamento à vista com 10% de desconto e o valor em 3x.
// EXEMPLO:
// Preço: R$60,00
// À vista: R$54,00
// Ou 3x de: R$20,00
// =========================

const preco = 60;
const desconto = 0.10
const parcelas = 3;

const calcLoja = (preco, desconto , parcelas)=>{
  const aVista = preco - preco*desconto;
  const parcelado = preco / parcelas;

  return console.log(`O total a ser pago a Vista é de: ${aVista.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
  }  ou : ${parcelas}X de ${parcelado.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
  }`)

}

calcLoja(preco, desconto, parcelas);