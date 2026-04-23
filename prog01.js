let pizza = new Promise((resolve, reject) => {
  let deuCerto = true;

  if (deuCerto) {
    resolve("Pizza chegou!");
  } else {
    reject("Deu ruim na pizza 😢");
  }
});

pizza
  .then((msg) => {
    console.log(msg); // se deu certo
  })
  .catch((erro) => {
    console.log(erro); // se deu ruim
  });