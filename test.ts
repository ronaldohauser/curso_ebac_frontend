import { multiplicacao } from './multiplicacao';
import { saudacao } from './saudacao';

const resultadoMultiplicacao = multiplicacao(5, 3);
console.log("Resultado da multiplicação:", resultadoMultiplicacao);

const mensagemSaudacao = saudacao("João");
console.log(mensagemSaudacao);
