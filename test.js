"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var multiplicacao_1 = require("./multiplicacao");
var saudacao_1 = require("./saudacao");
var resultadoMultiplicacao = (0, multiplicacao_1.multiplicacao)(5, 3);
console.log("Resultado da multiplicação:", resultadoMultiplicacao);
var mensagemSaudacao = (0, saudacao_1.saudacao)("João");
console.log(mensagemSaudacao);
