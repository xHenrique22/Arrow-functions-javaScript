import PromptSync = require('prompt-sync');
const prompt = PromptSync();

const Imc = (peso: number, altura: number) => {
    return peso / Math.pow(altura, 2);
}

const peso = Number(prompt('Digite seu peso: '));
const altura = Number(prompt('Digite sua altura: '));

const imc = Imc(peso, altura);

console.log(`Valor do IMC: ${imc.toFixed(0)}`);