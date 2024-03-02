function DpVendas(vendas, metas) {
  const porcetagem = (vendas / metas) * 100;
  if (porcetagem >= 100) {
    return "Execelnente vendas ";
  } else if (porcetagem >= 90 && porcetagem < 100) {
    return "Otimas Vendas";
  } else if (porcetagem >= 80 && porcetagem < 90) {
    return "Boas Vendas";
  } else if (porcetagem >= 61 && porcetagem < 80) {
    return "Vendas ruim";
  } else {
    return " Sem vendas";
  }
}
const vendas = 100;
const metas = 1000;

const categoria = DpVendas(vendas, metas);

console.log(`nossa vendas eh : ${categoria}`);
