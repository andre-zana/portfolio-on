function toggleMode() {
  const html = document.documentElement

  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }

  // A condicional acima, faz a mesma coisa que a função toggle (abaixo)
  html.classList.toggle("light")

  // Pegar a TAG da IMG
  const img = document.querySelector("#profile img")

  // Substituir a IMG
  if (html.classList.contains("light")) {
    // Se tiver light toggleMode, adiciona a IMG para light mode
    img.setAttribute("src", "./assets/avatar_light.png")
  } else {
    // Se não tiver light toggleMode, manter a imagem para dark mode
    img.setAttribute("src", "./assets/avatar_az_2.png")
  }

  // Substituir o texto ALT da imagem
  if (html.classList.contains("light")) {
    // Se tiver light toggleMode, adiciona o texto descritivo referente a IMG para light mode
    img.setAttribute(
      "alt",
      "Foto de André Zana feliz, sorridente, utilizando óculos de grau, camisa branca e gravata preta, com fundo colorido (numa festa)."
    )
  } else {
    // Se não tiver light toggleMode, manter o texto descritivo referente a imagem para dark mode
    img.setAttribute(
      "alt",
      "Foto de André Zana sério, utilizando óculos de grau e camiseta amarela, com fundo branco."
    )
  }
}
