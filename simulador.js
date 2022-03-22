        


function simular(){  
        var resul1 = document.getElementById ("resul1")
        var resul2 = document.getElementById ("resul2")
        var parc = document.getElementById ("parc")
        var valor = document.getElementById ("txtvalor")
        var juros = document.getElementById ("txtjuros")
        var vezes = document.getElementById ("txtvezes")         

        var val = Number (valor.value)
        var jur = Number (juros.value)
        var vez = Number (vezes.value)
        var valorInicial = val 
        var jurmes = jur * 0.01
        var i = 0

        if(val == 0 || jur == 0 || vez == 0 ){
            resul1.innerHTML = `<p>Por Favor, verifique os valores digitados!</p>`    
            resul2.innerHTML = ``
        } else {            
            while ( i < vez){
                val = val + (val * jurmes)
                i ++ 
            }  
             
            valorFinal = val - valorInicial
            var valorparc = (val / vez)
            var valparc = valorparc.toLocaleString ("pt-BR", {style: "currency", currency:"BRL"})
            var valorF = valorFinal.toLocaleString ("pt-br", {style: 'currency', currency:'BRL'})
            var valorT = val.toLocaleString ('pt-br', {style: 'currency' , currency:'BRL'})
            resul1.innerHTML = `<p>Valor Final : ${valorT}</p>`
            resul2.innerHTML = `<p>Total de Juros : ${valorF}</p>`
            parc.innerHTML = `<p>Valor das Parcelas : ${valparc}</p>`
            valHist = valorT
            jurHist = valorF
            parcHist = valparc
            vezHist = vez
        } 
}

function limpar(){
    document.getElementById ("txtvalor").value = ""
    document.getElementById ("txtjuros").value = ""
    document.getElementById ("txtvezes").value = ""

    resul1.innerHTML = `<p>Ultimo Resultado : ${valHist}</p>`
    resul2.innerHTML = `<p>Juros : ${jurHist}</p>`
    parc.innerHTML = `<p>Parcelas: ${vezHist} x ${parcHist}`
    
}

function selecionar(event){
    var selec = event.target    
    selec.style.backgroundImage = "linear-gradient(to right,#4c4f52b4,#b0b1afde,#4c4f52b4)" 
    }
    
function desselecionar(event){
    var selec = event.target    
    selec.style.backgroundImage = ""                
    }  
