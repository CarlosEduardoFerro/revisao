const numeros = [1, 2, 3, 4, 5]
const valorInicial = 0
const soma = numeros.reduce((element, valorInicial)=>{
    return element + valorInicial
})
console.log(soma)