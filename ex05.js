const velocidade = 80;

function limite(velocidade) {
  const rodoViaLimeite = velocidade <= 80 ? true : false;
  return rodoViaLimeite;
}
const rodoViaLimeite = limite(velocidade);
console.log(` Sua velocidade eh?${rodoViaLimeite}`);
