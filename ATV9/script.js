let num1 = 0
let num2 = 0

const numero1= document.querySelector(".num1")
numero1.addEventListener("input", r1)

function r1(evento){
    num1 = Number(evento.target.value)
}

const numero2= document.querySelector(".num2")
numero2.addEventListener("input", r2)

function r2(evento){
    num2 = Number(evento.target.value)
}


const botoes = document.querySelectorAll("button")
botoes.forEach(botao => {
    botao.addEventListener("click", receberresultado)
})

function receberresultado(){
    const resultado = document.querySelector(".resultado")
    resultado.innerHTML =`${(num1+num2).toFixed(2)}`
}
