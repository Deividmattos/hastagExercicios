const valorDaCompra = 80; // Altere este valor conforme necessário
const valorDaCompra2 = 120; // Altere este valor conforme necessário

function verificaDesconto(valorDaCompra) {
  if (valorDaCompra >= 100) {
    console.log("Parabéns! Você tem direito a um desconto de 10%.");
    const valorComDesconto = valorDaCompra * 0.9;
    console.log(`Valor com desconto: R$ ${valorComDesconto}`);
  } else {
    console.log("Desculpe, você não tem direito a nenhum desconto.");
    console.log(`Valor da compra: R$ ${valorDaCompra}`);
  }
}
//Exemplo de uso:

verificaDesconto(valorDaCompra);
verificaDesconto(valorDaCompra2);
