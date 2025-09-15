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
    img.setAttribute("src", "./assets/avatar_light_2.jpg")
  } else {
    // Se não tiver light toggleMode, manter a imagem para dark mode
    img.setAttribute("src", "./assets/avatar_az_2.png")
  }
}
