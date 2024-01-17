/*
Dados considerados para calculo do IMC - altura e peso
IMC = PESO/(ALTURA*ALTURA)

IMC abaixo de 17 - muito abaixo do peso adequado
IMC entre 17 e 18.49 - abaixo do peso adequado
IMC entre 18.5 e 24.99 - peso normal
IMC entre 25 e 29.99 - acima do peso
*/

var peso
var altura
var imc
var resultado

function calcular(event){
    //o calcular da refresh na pagina e para previnir isso, usar o preventDefault()
    event.preventDefault()    
    peso = document.getElementById('peso').value
    altura = document.getElementById('altura').value

    imc = peso / (altura * altura)
    resultado = document.getElementById('resultado')

    if(imc < 17){
        resultado.innerHTML = "<br/> IMC = " + imc.toFixed(2) + "<br/> O seu peso esta muito abaixo do adequado."
        console.log("IMC = " + imc.toFixed(2) + " O seu peso esta muito abaixo do adequado.")
    }else if(imc >= 17 && imc < 18.49){
        resultado.innerHTML = "<br/> IMC = " + imc.toFixed(2) + "<br/> O seu peso esta abaixo do adequado."
        console.log("IMC = " + imc.toFixed(2) + " O seu peso esta abaixo do adequado.")    
    }else if(imc >= 18.5 && imc < 24.99){
        resultado.innerHTML = "<br/> IMC = " + imc.toFixed(2) + "<br/> O seu peso esta normal/adequado."
        console.log("IMC = " + imc.toFixed(2) + " O seu peso esta normal/adequado.")    
    }else if(imc >= 25 && imc <= 29.99){
        resultado.innerHTML = "<br/> IMC = " + imc.toFixed(2) + "<br/> O seu peso esta acima do adequado."
        console.log("IMC = " + imc.toFixed(2) + " O seu peso esta acima do adequado.")    
    }else if(imc >= 30){
        resultado.innerHTML = "<br/> IMC = " + imc.toFixed(2) + "<br/> O seu peso esta muito acima do adequado."
        console.log("IMC = " + imc.toFixed(2) + " O seu peso esta muito acima do adequado.")    
    }else{
        resultado.innerHTML = "<br/> Dados invalidos."
        console.log("Os dados informados sao invalidos.")     
    }

    document.getElementById('peso').value = ""
    document.getElementById('altura').value = ""
    
}