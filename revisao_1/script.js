// let produto = 'camisa' //contexto global
// const preco = 50 //contexto global

// function calcularprecocomdesconto () {
//     const desconto = 0.1 //contexto de função / local
//     const precofinal = preco - preco * desconto
// console.log(`preco com desconto: R$${precofinal}`)
// }

// calcularprecocomdesconto()
// console.log(produto)
// console.log(desconto)

// for (let i = 0; i < 10; i++) {
//     console.log(i)  
// }
// let i = 10
// console.log(i)

const prato = 'pizza' //global
const quantidade = 3 //global

function calculartotal() { //funçao / local
    console.log(prato)
    const preco = 45.0
    const total = preco * quantidade

    if(quantidade > 2){
        const desconto = 0.1 //bloco
        return total * (1 - desconto)
    }
    //escopo de função
    console.log(preco)
    //escopo de bloco
    console.log(desconto)
    return total
}
console.log(`preco total com desconto: R${calculartotal()}`)