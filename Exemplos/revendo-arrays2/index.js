const array1 = ["a", "b", "c", "d", "e", "f"]

// adicionar elementos ao final do array
// .push
array1.push("d")

// adicionar elementos no começo do array
// .unshift
array1.unshift("1")

// remover o ultimo elemento de um array
// .pop 
array1.pop()

// remover o primeiro elemento
// .shift

array1.shift()

// pesquisar por um elemento 
// .includes
const inclui = array1.includes("ç")

// pesquisar a posição em que um elemento está
// indexOf
const posiçãoo = array1.indexOf("c")

// cortar e concatenar um array
// .slice
const slicee = array1.slice(0, 4)

// para cortar um array partindo do final é assim:
array1.slice(-5, -2) 
// nesse caso, se fosseum array com 15 elementos ele iria pegar o decimo elemento e ir até o penultimo elemento, -1 é o ultimo

// para concatenar uma váriavel em um array ou vice e versa
// .concat
const array1Done = array1.concat("a", slicee, true, "if")
console.log(array1Done)

// substituição de elementos 
// splice
const b = array1Done.splice(0, 2, "8", "9")
console.log(b)
console.log(array1Done)

// iterar sobre os elementos dos arrays
// 