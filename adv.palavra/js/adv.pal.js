const entradas = document.querySelector(".entradas"),
dicaElemento = document.querySelector(".dica span"),
chancesRestantes = document.querySelector(".tentativas-restantes span"),
letrasErradas = document.querySelector(".letras-erradas span"),
botaoReiniciar = document.querySelector(".botao-reiniciar"),
entradaDigitacao = document.querySelector(".entrada-digitacao");

let palavra, maxTentativas, letrasIncorretas = [], letrasCorretas = [];

function palavraAleatoria() {
    let itemAleatorio = listaPalavras[Math.floor(Math.random() * listaPalavras.length)];
    palavra = itemAleatorio.palavra;
    maxTentativas = palavra.length >= 5 ? 8 : 6;
    letrasCorretas = []; letrasIncorretas = [];
    dicaElemento.innerText = itemAleatorio.dica;
    chancesRestantes.innerText = maxTentativas;
    letrasErradas.innerText = letrasIncorretas;

    let html = "";
    for (let i = 0; i < palavra.length; i++) {
        html += `<input type="text" disabled>`;
        entradas.innerHTML = html;
    }
}
palavraAleatoria();

function iniciarJogo(e) {
    let tecla = e.target.value.toLowerCase();
    if(tecla.match(/^[A-Za-z]+$/) && !letrasIncorretas.includes(` ${tecla}`) && !letrasCorretas.includes(tecla)) {
        if(palavra.includes(tecla)) {
            for (let i = 0; i < palavra.length; i++) {
                if(palavra[i] == tecla) {
                    letrasCorretas += tecla;
                    entradas.querySelectorAll("input")[i].value = tecla;
                }
            }
        } else {
            maxTentativas--;
            letrasIncorretas.push(` ${tecla}`);
        }
        chancesRestantes.innerText = maxTentativas;
        letrasErradas.innerText = letrasIncorretas;
    }
    entradaDigitacao.value = "";

    setTimeout(() => {
        if(letrasCorretas.length === palavra.length) {
            alert(`Parabéns! Você descobriu a palavra. ${palavra.toUpperCase()}`);
            return palavraAleatoria();
        } else if(maxTentativas < 1) {
            alert("Fim de jogo! Acabaram suas tentativas.");
            for(let i = 0; i < palavra.length; i++) {
                entradas.querySelectorAll("input")[i].value = palavra[i];
            }
        }
    }, 100);
}

botaoReiniciar.addEventListener("click", palavraAleatoria);
entradaDigitacao.addEventListener("input", iniciarJogo);
entradas.addEventListener("click", () => entradaDigitacao.focus());
document.addEventListener("keydown", () => entradaDigitacao.focus());
