const listaDeCompras = ["açucar", false];
// indice 0 = açucar, indice 1 = false

listaDeCompras[0] = "feijão"
// indice 0 = "feijão"
listaDeCompras[1] = "arroz"
// indice 1 =  "arroz"
listaDeCompras[2] = 7
// indice 2 = 7
listaDeCompras[5] = "batata"
// indice 5 = "batata"
// o indice 3 e 4 quando der um console.log, sera monstrado empty e o valor vazio até chegar o proximo valor não vazio

console.log(listaDeCompras[10])
// mostrara undefined pois não tem nada no valor 10
