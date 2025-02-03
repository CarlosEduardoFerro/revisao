// const array = [12, 3, 4, 5, 76];
// console.log(array)
// array.push(2)//Adiciona o valor no final do array
// console.log(array)
// array.unshift(3)//Adiciona o valor no inicio do array
// console.log(array)
// array.pop()//Remove o primeiro elemento do array
// console.log(array)
// array.shift() //Remove o ultimo elemento do array
// console.log(array)

// const numeros = [2,3,5,6,8,4,2,1,5,6];
// //1º - elemento, 2º - indice/index, 3º - array
// numeros.forEach( (elemento, indice, array)=>{
//     console.log(`${indice} - ${elemento} - ${array}`)
// })

// const somaCom5 = (x) => x + 5
// numeros.map((elemento) => {
//     console.log(elemento * 2)
// })
// console.log(numeros.map(somaCom5))


// let array1 = [1, 3, 6, 8, 9, 4];
// const listarDados = array1.forEach((elemento)=>{
//     console.log(elemento * 2)
// })
// console.log(typeof listarDados)

// const multiplicaPorCinco = array1.map((elemento)=>{
//     return elemento * 5
// })
// console.log(typeof multiplicaPorCinco)

// const maisDois = multiplicaPorCinco.map((elemento)=>{
//     return elemento + 2
// })
// console.log(maisDois)

//encontrar um numero que seja maior que 6

let array1 = [1, 3, 6, 8, 9, 4];
const multiplicaPorCinco = array1.map((elemento)=>{
    return elemento * 5
})
console.log(multiplicaPorCinco)

const maiorQueSeis = multiplicaPorCinco.find((elemento)=>{
    return elemento > 6
    
})
console.log('retorno find =>',maiorQueSeis)

const maiorQueSeis1 = multiplicaPorCinco.filter((elemento)=>{
    return elemento > 6
    
})
console.log('retorno filther =>',maiorQueSeis1)