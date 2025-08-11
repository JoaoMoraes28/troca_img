"use strict"

const botaoImagem = document.getElementById('imagem')
const botaoAuto = document.getElementById('auto')
const img = document.getElementById('imgBg')
const carrossel = document.getElementById('imgBgCarrossel')

function trocarImg() {
    let textValue = document.getElementById('texto').value
    let imgValue = `./img/${document.getElementById('texto').value}.jpg`
    console.log(imgValue)
    img.src = `${imgValue}`
    
    if(textValue == 'leao') {

        document.documentElement.style.backgroundColor = '#E69953'

    } else if(textValue == 'aguia'){

        document.documentElement.style.backgroundColor = '#D3E0EB'

    } else if(textValue == 'cobra'){

        document.documentElement.style.backgroundColor = '#78320B'

    } else if(textValue == 'macaco'){

        document.documentElement.style.backgroundColor = '#719444'

    } else if(textValue == 'crocodilo'){

        document.documentElement.style.backgroundColor == '#489C70'

    }
}

function autoImagem() {
    carrossel.style.opacity = '1'
}

botaoImagem.addEventListener('click' , trocarImg)
botaoAuto.addEventListener('click', autoImagem)