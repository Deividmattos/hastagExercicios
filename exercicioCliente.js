function categoriaCliente() {
  const clientePremium = Math.floor(Math.random() * 101);
  console.log(`Voce eh um cliente Comum eh: ${clientePremium}`);
  if (clientePremium >= 85) {
    console.log("Voce eh um cliente premium");
  } else if (clientePremium >= 50) {
    console.log("Voce eh um cliente Regular");
  } else {
    console.log("Voce eh um cliente Comum");
  }
}
categoriaCliente(clientePremium);
