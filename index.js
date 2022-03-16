function cumprimento(){
    var cumprimento = document.getElementById ('bem_vindo')

    var date = new Date()
    var hora = date.getHours()

    if (hora < 5){
        cumprimento.innerHTML = `Boa Madrugada!! Seja Bem Vindo ao nosso site!!`
    } else if (hora >= 5 && hora < 12){
        cumprimento.innerHTML = `Bom Dia!! Seja Bem Vindo ao nosso site!!`
    } else if(hora >= 12 && hora <= 18){
        cumprimento.innerHTML = `Boa Tarde!! Seja Bem Vindo ao nosso site!!`
    } else {
        cumprimento.innerHTML = `Boa Noite!! Seja Bem Vindo ao nosso site!!`
    }
}

function selecionar(event){
    var selec = event.target    
    selec.style.backgroundImage = "linear-gradient(to right,#4c4f52b4,#b0b1afde,#4c4f52b4)" 
    }
    
function desselecionar(event){
    var selec = event.target    
    selec.style.backgroundImage = ""                
    }  
