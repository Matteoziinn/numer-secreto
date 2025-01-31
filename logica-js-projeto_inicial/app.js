// Exibe uma mensagem de boas-vindas ao usuário
alert('Boas vindas ao jogo do número secreto');

// Define o valor máximo para o número secreto
let numeroMaximo = 1000;

// Gera um número secreto aleatório entre 1 e numeroMaximo
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);

// Exibe o número secreto no console (para fins de debug)
console.log(numeroSecreto);

let chute;
let tentativas = 1;

// Enquanto o chute não for igual ao número secreto
while (chute != numeroSecreto) {
    // Solicita ao usuário que escolha um número
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    
    // Se o chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break; // Sai do loop
    } else {
        // Se o chute for maior que o número secreto
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            // Se o chute for menor que o número secreto
            alert(`O número secreto é maior que ${chute}`);
        }
        // Incrementa o número de tentativas
        tentativas++;
    }
}

// Define a palavra correta para "tentativa" no plural ou singular
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

// Informa ao usuário que ele acertou o número secreto e quantas tentativas foram necessárias
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
