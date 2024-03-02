const vendas = 600;
const metas = 1000;

const categoria = desempenhoVendas(vendas, metas);

function desempenhoVendas(vendas, metas) {
  const percetual = (vendas / metas) * 100;

  if (percetual >= 100) {
    return "Excelente vendas";
  } else if (percetual >= 90 && percetual < 100) {
    return "Boas vendas";
  } else if (percetual >= 80 && percetual < 90) {
    return "vendas regular";
  } else if (percetual >= 61 && percetual < 80) {
    return "Vendas Ruins";
  } else {
    return "Pessima vendas";
  }
}

console.log(`Sua venda eh: ${categoria}`);
