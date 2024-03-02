const quant = 30;

function verifica(quant) {
  if (quant > 0) {
    console.log("Produto no Estoque");
  } else {
    console.log("Produto fora do Estoque");
  }
}
verifica(quant);
