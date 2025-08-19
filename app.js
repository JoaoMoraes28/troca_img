"use strict"

const botaoImagem = document.getElementById('imagem')
const botaoAuto = document.getElementById('auto')
const img = document.getElementById('imgBg')
const carrossel = document.getElementById('imgBg')

function trocarImg() {
    let textValue = document.getElementById('texto').value
    let imgValue = `./img/${document.getElementById('texto').value}.jpg`
    console.log(imgValue)
    img.src = `${imgValue}`
}

function autoImagem() {
    carrossel.classList.add('imgBgCarrosel')
}

botaoImagem.addEventListener('click' , trocarImg)
botaoAuto.addEventListener('click', autoImagem)