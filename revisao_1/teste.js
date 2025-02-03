// ...existing code...

// Função para converter segundos em horas, minutos e segundos
const converterSegundos = (segundos) => {
    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    const segundosRestantes = segundos % 60;
    return `${horas}h ${minutos}m ${segundosRestantes}s`;
}

// Exemplo de uso
console.log(converterSegundos(3661)); // Saída: 1h 1m 1s

// ...existing code...