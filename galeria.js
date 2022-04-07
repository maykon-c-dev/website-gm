const fotos = [
    {
        id:1,
        categoria: "casamento-civil",
        url:"imagens/casamento-civil/Casamento Civil (1).jpg"
    },
    {
        id:2,
        categoria: "casamento-civil",
        url:"imagens/casamento-civil/Casamento Civil (2).jpg"
    },
    {
        id:3,
        categoria: "casamento-civil",
        url:"imagens/casamento-civil/Casamento Civil (3).jpg"
    },
    {
        id:4,
        categoria: "casamento-civil",
        url:"imagens/casamento-civil/Casamento Civil (4).jpg"
    },
    {
        id:5,
        categoria: "casamento-civil",
        url:"imagens/casamento-civil/Casamento Civil (5).jpg"
    },
    {
        id:3,
        categoria: "casamento-civil",
        url:"imagens/casamento-civil/Casamento Civil (6).jpg"
    }
]

const fotoPrincipal = document.querySelector("article",".foto_principal")
const listaFotos = document.getElementById("listaFotos")

function principal(event){
   
}

function galeria(colecaoFotos){

    colecaoFotos.forEach(function(foto){

        const template = criarTemplate(foto)

        listaFotos.appendChild(template)
    }
    )
}
galeria(fotos)

function criarTemplate(foto){
     
    const li = document.createElement("div")

    li.innerHTML= `<img src="${foto.url}" id="${foto.id}" onclick="principal(event)"></img>`

    return li
}




function selecionar(event){
    var selec = event.target    
    selec.style.backgroundImage = "linear-gradient(to right,#4c4f52b4,#b0b1afde,#4c4f52b4)" 
    }
    
function desselecionar(event){
    var selec = event.target    
    selec.style.backgroundImage = ""                
    }  
