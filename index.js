// Função para calcular o tempo restante até a data final
function calcularTempoRestante(dataFinal) {
    const agora = new Date();
    const distancia = dataFinal - agora;

    if (distancia <= 0) {
        return "00:00:00:00:00:00:00";  // Se o tempo já passou
    }

    // Calcular os diferentes componentes de tempo
    const anos = Math.floor(distancia / (1000 * 60 * 60 * 24 * 365));
    const meses = Math.floor((distancia % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const dias = Math.floor((distancia % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    // Formatar a resposta no estilo: anos:meses:dias:horas:minutos:segundos
    return `${formatarNumero(segundos)}:${formatarNumero(minutos)}:${formatarNumero(horas)}:${formatarNumero(dias)}:${formatarNumero(meses)}:${formatarNumero(anos)}`;
}

// Função para garantir que os números sempre tenham dois dígitos
function formatarNumero(numero) {
    return numero < 10 ? "0" + numero : numero;
}

// Função para atualizar o timer na página
    function exibirTimer() {
    const dataFinal = new Date("2027-12-16T23:59:59"); // Defina sua data final aqui
    const tempoRestante = calcularTempoRestante(dataFinal);

document.getElementById("timer").innerHTML = tempoRestante;
}

// Atualizar o timer a cada segundo
setInterval(exibirTimer, 1000);


