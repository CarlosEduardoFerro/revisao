const numeros = [1, 2, 3, 4, 5]
const dobro = numeros.map((element)=>{
    return element * 2
})
console.log('Dobro: ', dobro)

const triplo = numeros.map((element)=>{
    return element * 3
})
console.log('Triplo: ', triplo)

const triploMaisDobro = numeros.map((element)=>{
    return element * 2 + element * 3
})
console.log('A soma do dobro com o triplo: ', triploMaisDobro)