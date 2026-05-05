const saudacao = require('./hello');

// Teste com erro intencional
const resultado = saudacao("Mundo");
const esperado = "Hello, Mundo!"; // ERRADO — a função retorna "Olá, Mundo!"

if (resultado !== esperado) {
  console.error(`FALHA: esperado "${esperado}", mas recebeu "${resultado}"`);
  process.exit(1); // Faz o pipeline falhar
}

console.log("Todos os testes passaram!");
