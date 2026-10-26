// Seleção dos elementos do DOM
const cofre1 = document.getElementById("Cofre1");
const cofre2 = document.getElementById("Cofre2");
const cofre3 = document.getElementById("Cofre3");
const arena = document.getElementById("arena");
const mensagem = document.getElementById("mensagem");

const spanTentativas = document.getElementById("tentativas");
const spanVitorias = document.getElementById("vitorias");

const btnJogarNovamente = document.getElementById("btnJogarNovamente");
const btnZerar = document.getElementById("btnZerar");

let cofrePremiado = 0;
let tentativas = 0;
let vitorias = 0;
let jogoAtivo = true;

function sortearCofre() {
    return Math.floor(Math.random() * 3) + 1;
}

function iniciarRodada() {
    cofrePremiado = sortearCofre();
    jogoAtivo = true;
    mensagem.textContent = "";

    
    cofre1.disabled = false;
    cofre1.className = "";
    cofre1.style.top = "40%";
    cofre1.style.left = "15%";

   
    cofre2.disabled = false;
    cofre2.className = "";
    cofre2.style.top = "40%";
    cofre2.style.left = "42%";

    
    cofre3.disabled = false;
    cofre3.className = "";
    cofre3.style.top = "40%";
    cofre3.style.left = "70%";
}
function abrirCofre(numeroCofre, elementoBotao) {
    if (jogoAtivo === false) {
        return;
    }

    jogoAtivo = false;
    tentativas = tentativas + 1;
    spanTentativas.textContent = tentativas;

    if (numeroCofre === cofrePremiado) {
        vitorias = vitorias + 1;
        spanVitorias.textContent = vitorias;
        mensagem.textContent = "Você abriu o cofre " + numeroCofre + " e ganhou o prêmio!";
    } else {
        mensagem.textContent = "Você abriu o cofre " + numeroCofre + "! Ele está vazio. O prêmio estava no cofre " + cofrePremiado + ".";
    }

    destacarResultado(cofre1, 1);
    destacarResultado(cofre2, 2);
    destacarResultado(cofre3, 3);
}

function destacarResultado(botao, numero) {
    botao.disabled = true;
    if (numero === cofrePremiado) {
        botao.classList.add("premiado");
    } else {
        botao.classList.add("vazio");
    }
}

cofre1.addEventListener("click", function () {
    abrirCofre(1, cofre1);
});

cofre2.addEventListener("click", function () {
    abrirCofre(2, cofre2);
});

cofre3.addEventListener("click", function () {
    abrirCofre(3, cofre3);
});

btnJogarNovamente.addEventListener("click", function () {
    iniciarRodada();
});

btnZerar.addEventListener("click", function () {
    tentativas = 0;
    vitorias = 0;
    spanTentativas.textContent = tentativas;
    spanVitorias.textContent = vitorias;
    iniciarRodada();
});
cofre3.addEventListener("mouseenter", function () {
    if (jogoAtivo === true) {
        const largura = arena.clientWidth - cofre3.offsetWidth;
        const altura = arena.clientHeight - cofre3.offsetHeight;

        const x = Math.floor(Math.random() * largura);
        const y = Math.floor(Math.random() * altura);

        cofre3.style.left = x + "px";
        cofre3.style.top = y + "px";
    }
});
iniciarRodada();