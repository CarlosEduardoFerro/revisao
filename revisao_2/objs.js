// const array = [3, 4, 5, 6];
// const objeto = {
//     //pares-> chave: valor
//     0:3,
//     1: 4,
//     dois: 5,
//     3: 6,
// };
// console.log(array[2])
// console.log(objeto.dois)

//coleção de objetos
const data = {
    pessoa1: {
        nome: 'joe',
        idade: 32,
        endereco: [
            {
                tipo: "residencial",
                rua: "rua a",
                cidade: "maceio",
            },
        ],
    },
    pessoa2: {
        nome: 'maria',
        idade: 25,
        endereco: [
            {
                tipo: "residencial",
                rua: "rua b",
                cidade: "maceio",
            },
            {
                tipo: "comercial",
                rua: "rua c",
                cidade: "maceio",
            }
        ],
    },

};

//idiade de joe
console.log(data.pessoa1.nome)
console.log(data.pessoa1.idade)
//endereço comercial de maria
console.log(data.pessoa2.nome)
console.log(data.pessoa2.endereco[1])
//listem todos os endereços de maria
console.log(data.pessoa2.nome)
console.log(data.pessoa2.endereco.forEach((endereco)=>{
    console.log(endereco.tipo)
}))
