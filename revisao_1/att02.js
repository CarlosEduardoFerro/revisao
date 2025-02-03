const palavras = ["sol", "livro", "lua", "cadeira", "mesa", "mar"]
const maiorQueTres = palavras.filter((element)=>{
    return element.length > 3
})
console.log(maiorQueTres)