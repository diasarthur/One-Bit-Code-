const arrayNormal = [
  "1º Nível",
  "2º Nível",
  "3º Nível"
]

const arrayBidimensional = [
  [
    "1º Nível",
    "2º Nível",
    "3º Nível"
  ],[
    "1º Nível",
    "2º Nível",
    "3º Nível"
  ],[
    "1º Nível",
    "2º Nível",
    "3º Nível"
    ]
  ]

  const arr = [
    "1º Nível",
    ["2º nível", 42, true],
    [
      ["3º nível, 1º item", "Olá, mundo!"],
      ["3º nível, 2º item", "Oi, mundo!"],
    ],
    []
  ]
  // console.log(arr[2][1][0])

  const matriz = [
    ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
    ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
    ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],
  ]

  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      const elemento = matriz[i][j]
      console.log("Matriz na posição " + i + " no elemento " + j + " Valor: " + elemento)
    }
  }