"use strict"

const botaoImagem = document.getElementById('imagem')
const botaoAuto = document.getElementById('auto')
const img = document.getElementById('imgBg')

function trocarImg() {
    const imgValue = `./img/${document.getElementById('texto').value}.jpg`
    console.log(imgValue)
    img.src = `${imgValue}`
}

botaoImagem.addEventListener('click' , trocarImg)