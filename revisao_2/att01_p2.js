// let produtos = [
//   { nome: 'Camiseta', categoria: 'Roupas' },
//   { nome: 'Celular', categoria: 'Eletrônicos' }
// ];

// let precos =[
//   { nome: 'Camiseta', preco: 20 },
//   { nome: 'Celular', preco: 500 }
// ];

// [{ nome: "Camiseta", categoria: "Roupas", preco: 20}]

// console.log(precos[1].preco)
// console.log(produtos[0].nome)


// att01
// const combinarProdutos = (products, prices) => {
//   return products.map( (product)=>{
//     let precoProduto = prices.find((price)=>price.nome === product.nome)
//     return {
//       nome: product.nome,
//       categoria: product.categoria,
//       preco: precoProduto.preco
//     }
//   })
// }

// combinarProdutos(produtos, precos)
// console.log(combinarProdutos(produtos, precos))

//Att 02

// const buscaProdutoPorCategoria = (categoria, arrayProdudutos)=>{
//   // console.log('dentro da função,', categoria)
//   // console.log('dentro da função,', arrayProdudutos)
//   return arrayProdudutos.filter((produto) => produto.categoria === categoria)
// }

// buscaProdutoPorCategoria('Eletrônicos', produtos)
// console.log(buscaProdutoPorCategoria('Eletrônicos', produtos))

//att03

let produtos = [
  { nome: 'Camiseta', preco: 20 },
  { nome: 'Celular', preco: 500 }
];
let quantidades = [3, 1];

const precoTotal = (arrayProdutos, arrayQuantidades) =>{
  // console.log('Dentro da função: ', arrayProdutos)
  // console.log('Dentro da função: ', arrayQuantidades)

  return arrayProdutos.map((produto) =>{
     let precoVenda = produto.preco * arrayQuantidades[0]
    //  console.log('preço produto:',precoVenda)
     return{
      nome: produto.nome,
      preco: produto.preco,
      valorTotal: precoVenda
     }
  })
}

precoTotal(itens, quantidades)
