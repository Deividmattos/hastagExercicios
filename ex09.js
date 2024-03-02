function rodizio(veiculo) {
  let mensagem;

  switch (veiculo) {
    case 1:
    case 2:
      mensagem = "Hoje eh dia do seu rodizio Segunda feira";
      break;
    case 3:
    case 4:
      mensagem = "Hoje eh dia do seu rodizio Terca feira";
      break;
    case 5:
    case 6:
      mensagem = "Hoje eh dia do seu rodizio Quarta feira";
      break;
    case 7:
    case 8:
      mensagem = "Hoje eh dia do seu rodizio Quinta feira";
      break;
    case 9:
    case 0:
      mensagem = "Hoje eh dia do seu rodizio Quinta feira";
      break;
    default:
      mensagem = "Finais de semana nao tem rodizio";
  }
  return mensagem;
}
const placa = 6;
console.log(rodizio(placa));
