function toggleMode(){
    const html = document.documentElement
    html.classList.toggle('light')

    //pegar a tag img

    const img = document.querySelector("#profile img")

    //substituir a imagem

    if (html.classList.contains('light')) {
        //se tiver light mode, adcionar a imagem light
        img.setAttribute("src", "./assets/avatar-light.png")
        img.setAttribute("alt", "Foto de Jakson Fritzen, usando um casaco cinza em um fundo levemente iluminado por uma luz roza.");
    } else {
        //se tiver sem light mode, manter a imagem atual
        img.setAttribute("src", "./assets/avatar.png")
        img.setAttribute("Foto de Jakson Fritzen, usando uma camisa roxa em um fundo verde.");
    }
}