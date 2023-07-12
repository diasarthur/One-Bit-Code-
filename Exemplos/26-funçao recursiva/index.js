function dividir(number) {
  console.log(number)
  if (number % 2 === 0) {
    dividir(number / 2)
  } else {
    return number
  }
}
// dividir(256)

function dobrar (number) {
  console.log(number)
  if (number < 100000) {
    dobrar(number * 2)
  } else {
    alert("Chegamos em 100000")
  }

}

// dobrar(1)

function fatorial(number) {
  console.log("Número: " + number)
  if (number === 0) {
    return 1
  } else if (number === 1) {
    return 1
  } else {
    console.log(number + " * !" + (number - 1))
    return number * fatorial(number - 1)
  }
}
// console.log(fatorial(10))