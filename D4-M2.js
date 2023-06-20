const marco = {
    name: "Marco",
    lastName: "Rossi",
    isAmbassador: true,
  };
  
  const paul = {
    name: "Paul",
    lastName: "Flynn",
    isAmbassador: false,
  };
  
  const amy = {
    name: "Amy",
    lastName: "Reed",
    isAmbassador: false,
  };
  
  const prices = [34, 5, 2];
  const shippingCost = 50;
  let utenteCheEffettuaLAcquisto = amy;
  
  // Creazione dell'array di utenti
  const users = [];
  users.push(marco);
  users.push(paul);
  users.push(amy);
  
  // Stampa delle informazioni sugli utenti
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const ambassadorStatus = user.isAmbassador ? "e' un ambassador" : "non e' un ambassador";
    console.log(`${user.name} ${user.lastName} ${ambassadorStatus}`);
  }
  
  // Creazione dell'array di ambassador
  const ambassadors = users.filter((user) => user.isAmbassador);
  
  // Calcolo del costo totale del carrello
  let cartTotal = prices.reduce((total, price) => total + price, 0);
  if (utenteCheEffettuaLAcquisto.isAmbassador) {
    cartTotal *= 0.7; // Sconto del 30%
  }
  
  if (cartTotal > 100) {
    // Spedizione gratuita
    console.log("Totale carrello con spedizione gratuita:", cartTotal);
  } else {
    // Aggiunta del costo di spedizione
    cartTotal += shippingCost;
    console.log("Totale carrello con costo spedizione:", cartTotal);
  }