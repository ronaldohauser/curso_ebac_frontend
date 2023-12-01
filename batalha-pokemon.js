// Abstração
class Pokemon {
  constructor(nome, tipo) {
    this.nome = nome;
    this.tipo = tipo;
    this.poderInicial = 50;
    this.poder = 40;
    this.fraquezas = [];
  }

  adicionarFraqueza(tipo) {
    this.fraquezas.push(tipo);
  }

  emitirSom() {
    console.log(`${this.nome} emite um som.`);
  }

  atacar(outroPokemon) {
    const dano = Math.floor(Math.random() * 6) + 1;
    console.log(`${this.nome} ataca ${outroPokemon.nome} causando ${dano} pontos de dano!`);
    if (outroPokemon.fraquezas.includes(this.tipo)) {
      console.log(`${this.nome} tem vantagem contra ${outroPokemon.nome} devido ao seu tipo!`);
      const danoDuplo = dano * 2;
      outroPokemon.poder -= danoDuplo;
      console.log(`${outroPokemon.nome} perde ${danoDuplo} pontos de vida!`);
    } else {
      outroPokemon.poder -= dano;
      console.log(`${outroPokemon.nome} perde ${dano} pontos de vida!`);
    }
  }
}

// Herança
class Pikachu extends Pokemon {
  constructor(nome, eletrico) {
    super(nome, "Elétrico", eletrico);
    this.adicionarFraqueza("Terra");
  }

  emitirSom() {
    console.log(`${this.nome} diz: Pika pika!`);
  }

  usarChoqueEletrico(outroPokemon) {
    const dano = Math.floor(Math.random() * 6) + 1;
    console.log(`${this.nome} usa Choque Elétrico em ${outroPokemon.nome}!`);
    outroPokemon.poder -= dano;
    console.log(`${outroPokemon.nome} sofre grande impacto perdendo ${dano} pontos de vida!`);
  }
}

// Herança
class Bulbasaur extends Pokemon {
  constructor(nome, planta) {
    super(nome, "Planta/Veneno", planta);
    this.ataques = {
      "Semente Sanguessuga": 3,
      "Chicote de Vinha": 4,
      "Folha Navalha": 5,
      "Dança de Pétalas": 2,
      "Bomba de Semente": 6,
      "Doce Incenso": 1,
    };
    this.adicionarFraqueza("Fogo");
  }

  emitirSom() {
    console.log(`${this.nome} diz: Bulbaah!`);
  }

  usarAtaque(outroPokemon, ataque) {
    if (this.ataques.hasOwnProperty(ataque)) {
      const dano = this.ataques[ataque];
      console.log(`${this.nome} está usando ${ataque} em ${outroPokemon.nome}!`);
      outroPokemon.poder -= dano;
      console.log(`${outroPokemon.nome} perde ${dano} pontos de vida!`);
    } else {
      console.log(`${this.nome} não conhece o ataque ${ataque}.`);
    }
  }
}

// Herança
class Charmander extends Pokemon {
  constructor(nome, fogo) {
    super(nome, "Fogo", fogo);
    this.ataques = {
      "Lança Chamas": 6,
    };
  }

  emitirSom() {
    console.log(`${this.nome} diz: Char char!`);
  }
}

// Herança
class Squirtle extends Pokemon {
  constructor(nome, agua) {
    super(nome, "Água", agua);
    this.ataques = {
      "Hidrobomba": 6,
      "Arma de Água": 4,
      "Bolhas": 3,
    };
    this.adicionarFraqueza("Elétrico");
  }

  emitirSom() {
    console.log(`${this.nome} diz: Squirtle squartle!`);
  }

  usarAtaque(outroPokemon, ataque) {
    if (this.ataques.hasOwnProperty(ataque)) {
      const dano = this.ataques[ataque];
      console.log(`${this.nome} está usando ${ataque} em ${outroPokemon.nome}!`);
      outroPokemon.poder -= dano;
      console.log(`${outroPokemon.nome} é atingido e perde ${dano} pontos de vida!`);
    } else {
      console.log(`${this.nome} não conhece o ataque ${ataque}.`);
    }
  }
}

// Instâncias
const pikachu = new Pikachu("Pikachu", true);
const bulbasaur = new Bulbasaur("Bulbasaur", true);
const charmander = new Charmander("Charmander", true);
const squirtle = new Squirtle("Squirtle", true);

// Apresentação dos Pokémon
console.log("Esses são os pokémons que batalharão:");
pikachu.emitirSom();
bulbasaur.emitirSom();
charmander.emitirSom();
squirtle.emitirSom();
console.log();

// Batalha Pokémon
console.log("Começa a grande Batalha Pokémon:");
console.log(`Vida inicial de ${pikachu.nome}: ${pikachu.poderInicial}`);
console.log(`Vida inicial de ${bulbasaur.nome}: ${bulbasaur.poderInicial}`);
console.log(`Vida inicial de ${charmander.nome}: ${charmander.poderInicial}`);
console.log(`Vida inicial de ${squirtle.nome}: ${squirtle.poderInicial}`);
console.log();

// Loop até que reste apenas um Pokémon com pontos de vida
while (true) {
  pikachu.atacar(charmander);
  bulbasaur.usarAtaque(squirtle, "Chicote de Vinha");
  charmander.atacar(bulbasaur);
  squirtle.usarAtaque(pikachu, "Bolhas");

  const pokemonsVivos = [pikachu, bulbasaur, charmander, squirtle].filter(pokemon => pokemon.poder > 0);

  if (pokemonsVivos.length === 1) {
    const vencedor = pokemonsVivos[0];
    console.log(`Foi uma batalha difícil e temos um vencedor. É o ${vencedor.nome} com ${vencedor.poder} pontos de vida restantes!`);
    break;
  }
}
