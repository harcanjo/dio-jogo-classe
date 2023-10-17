const readline = require('readline');

class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    switch (this.tipo) {
      case 'mago':
        ataque = 'magia';
        break;
      case 'guerreiro':
        ataque = 'espada';
        break;
      case 'monge':
        ataque = 'artes marciais';
        break;
      case 'ninja':
        ataque = 'shuriken';
        break;
      default:
        ataque = '';
    }

    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Qual é o nome do herói? ', (nome) => {
  rl.question('Qual é a idade do herói? ', (idade) => {
    rl.question('Qual é o tipo do herói? (guerreiro, mago, monge ou ninja) ', (tipo) => {
      let heroi = new Heroi(nome, idade, tipo);
      heroi.atacar();
      rl.close();
    });
  });
});
