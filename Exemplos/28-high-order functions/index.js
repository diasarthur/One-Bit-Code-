function calcular(a, b, operation) {
  console.log("Realizando uma operação...")
  const result = operation(a, b)
  return result
}

console.log(calcular(7, 5, function(x, y) {
  console.log("Realizando uma multiplicação")
  return x * y
}))


function subtrair(x, y) {
  console.log("Realizando uma subtração.")
  return x - y
}

// console.log(calcular(10, 6, subtrair))


function exibirElementos(fruta, numero, lista) {
  console.log({
    fruta,
    numero,
    lista
  })
}

const lista = ["Maçã", "Banana", "Uva", "Limão"]

lista.forEach(exibirElementos)

// for(let i = 0; i < lista.length; i++) {
//   exibirElementos(lista[i], i, lista)
// }


