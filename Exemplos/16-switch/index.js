const ask = prompt("\nEscolha um Superpoder: \na)Invisibilidade \nb)Voar \nc)Ler as mentes")

switch (ask) {
  case "a":
    alert("Você agora possui o poder de ficar invisível, use com sabedoria.")
    break
  case "b":
    alert("Você agora possui o poder de voar, use com sabedori a.")
    break
  case "c":
    alert("Você agora possui o poder de ler mentes, use com sabedoria.")
    break
  default:
    alert("Ocorreu um erro, por favor, verifique a ortografia, só aceitamos as seguintes letras \na \nb \nc")
}