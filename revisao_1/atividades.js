//Att 01
const verificarNumero = (element) => {
    return element >= 0 ? 1 : 0;
}
console.log(verificarNumero(5));
console.log(verificarNumero(-3));

//Att 02
const converterSegundos = ((element)=>{
    const horas = Math.floor(element / 3600);
    const minutos = Math.floor((element % 3600) / 60);
    const segundosRestantes = element % 60;
    return `${horas}h ${minutos}m ${segundosRestantes}s`;
})
console.log(converterSegundos(3661));
//Att 03
const array = [21, 6, 84, 24, 86, 11, 39, 59, 96, 53]
const mult = (x) => x * 2
array.map((element) => {
    console.log(element * 2)
})

// Att 04
const palavras = ["sol", "livro", "lua", "cadeira", "mesa", "mar"]
const maiorQueTres = palavras.filter((element)=>{
    return element.length > 3
})
console.log(maiorQueTres)

//Att 05
const numeros = [1, 2, 3, 4, 5]
const valorInicial = 0
const soma = numeros.reduce((element, valorInicial)=>{
    return element + valorInicial
})
console.log(soma)

//Att 04
const numeros1 = [1, 2, 3, 4, 5]
const dobro = numeros1.map((element)=>{
    return element * 2
})
console.log('Dobro: ', dobro)


const triplo = numeros1.map((element)=>{
    return element * 3
})
console.log('Triplo: ', triplo)

const triploMaisDobro = numeros1.map((element)=>{
    return element * 2 + element * 3
})
console.log('A soma do dobro com o triplo: ', triploMaisDobro)