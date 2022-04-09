const fotos = [
    {
        id:1,
        categoria: "civil",
        url:"imagens/casamento-civil/Casamento Civil (1).jpg"
    },
    {
        id:2,
        categoria: "civil",
        url:"imagens/casamento-civil/Casamento Civil (2).jpg"
    },
    {
        id:3,
        categoria: "civil",
        url:"imagens/casamento-civil/Casamento Civil (3).jpg"
    },
    {
        id:4,
        categoria: "civil",
        url:"imagens/casamento-civil/Casamento Civil (4).jpg"
    },
    {
        id:5,
        categoria: "civil",
        url:"imagens/casamento-civil/Casamento Civil (5).jpg"
    },
    {
        id:6,
        categoria: "civil",
        url:"imagens/casamento-civil/Casamento Civil (6).jpg"
    },
    {
        id:7,
        categoria: "civil",
        url:"imagens/casamento-civil/Casamento Civil (7).jpg"
    },
    {
        id:8,
        categoria: "civil",
        url:"imagens/casamento-civil/Casamento Civil (8).jpg"
    },
    {
        id:9,
        categoria: "civil",
        url:"imagens/casamento-civil/Casamento Civil (9).jpg"
    },
    {
        id:10,
        categoria: "civil",
        url:"imagens/casamento-civil/Casamento Civil (10).jpg"
    },
    {
        id:11,
        categoria: "civil",
        url:"imagens/casamento-civil/Casamento Civil (11).jpg"
    },
    {
        id:12,
        categoria: "civil",
        url:"imagens/casamento-civil/Casamento Civil (12).jpg"
    },
    {
        id:13,
        categoria: "civil",
        url:"imagens/casamento-civil/Casamento Civil (13).jpg"
    },
    {
        id:14,
        categoria: "civil",
        url:"imagens/casamento-civil/Casamento Civil (14).jpg"
    },
    {
        id:15,
        categoria: "civil",
        url:"imagens/casamento-civil/Casamento Civil (15).jpg"
    },
    {
        id:16,
        categoria: "civil",
        url:"imagens/casamento-civil/Casamento Civil (16).jpg"
    },
    {
        id:17,
        categoria: "civil",
        url:"imagens/casamento-civil/Casamento Civil (17).jpg"
    },
    {
        id:18,
        categoria: "civil",
        url:"imagens/casamento-civil/Casamento Civil (18).jpg"
    },
    {
        id:19,
        categoria: "civil",
        url:"imagens/casamento-civil/Casamento Civil (19).jpg"
    },
    {
        id:20,
        categoria: "civil",
        url:"imagens/casamento-civil/Casamento Civil (20).jpg"
    },
    {
        id:21,
        categoria: "civil",
        url:"imagens/casamento-civil/Casamento Civil (21).jpg"
    },
    {
        id:22,
        categoria: "civil",
        url:"imagens/casamento-civil/Casamento Civil (22).jpg"
    },
    {
        id:23,
        categoria: "civil",
        url:"imagens/casamento-civil/Casamento Civil (23).jpg"
    },
    {
        id:24,
        categoria: "civil",
        url:"imagens/casamento-civil/Casamento Civil (24).jpg"
    },
    {
        id:25,
        categoria: "civil",
        url:"imagens/casamento-civil/Casamento Civil (25).jpg"
    },
    {
        id:26,
        categoria: "civil",
        url:"imagens/casamento-civil/Casamento Civil (26).jpg"
    },
    {
        id:27,
        categoria: "civil",
        url:"imagens/casamento-civil/Casamento Civil (27).jpg"
    },
    {
        id:28,
        categoria: "civil",
        url:"imagens/casamento-civil/Casamento Civil (28).jpg"
    },
    {
        id:29,
        categoria: "civil",
        url:"imagens/casamento-civil/Casamento Civil (29).jpg"
    },
    {
        id:30,
        categoria: "civil",
        url:"imagens/casamento-civil/Casamento Civil (30).jpg"
    },
    {
        id:31,
        categoria: "civil",
        url:"imagens/casamento-civil/Casamento Civil (31).jpg"
    },
    {
        id:32,
        categoria: "civil",
        url:"imagens/casamento-civil/Casamento Civil (32).jpg"
    },
    {
        id:33,
        categoria: "civil",
        url:"imagens/casamento-civil/Casamento Civil (33).jpg"
    },
    {
        id:34,
        categoria: "civil",
        url:"imagens/casamento-civil/Casamento Civil (34).jpg"
    },
    {
        id:35,
        categoria: "civil",
        url:"imagens/casamento-civil/Casamento Civil (35).jpg"
    },
    {
        id:36,
        categoria: "civil",
        url:"imagens/casamento-civil/Casamento Civil (36).jpg"
    },
    {
        id:37,
        categoria: "civil",
        url:"imagens/casamento-civil/Casamento Civil (37).jpg"
    },
    {
        id:38,
        categoria: "civil",
        url:"imagens/casamento-civil/Casamento Civil (38).jpg"
    },
    {
        id:39,
        categoria: "civil",
        url:"imagens/casamento-civil/Casamento Civil (39).jpg"
    },
    {
        id:40,
        categoria: "civil",
        url:"imagens/casamento-civil/Casamento Civil (40).jpg"
    },
    {
        id:41,
        categoria: "civil",
        url:"imagens/casamento-civil/Casamento Civil (41).jpg"
    },
    {
        id:42,
        categoria: "civil",
        url:"imagens/casamento-civil/Casamento Civil (42).jpg"
    },
    {
        id:43,
        categoria: "civil",
        url:"imagens/casamento-civil/Casamento Civil (43).jpg"
    },
    {
        id:44,
        categoria: "civil",
        url:"imagens/casamento-civil/Casamento Civil (44).jpg"
    },
    {
        id:45,
        categoria: "civil",
        url:"imagens/casamento-civil/Casamento Civil (45).jpg"
    },
    {
        id:46,
        categoria: "civil",
        url:"imagens/casamento-civil/Casamento Civil (46).jpg"
    }
]

const listaFotos = document.getElementById("listaFotos")

function principal(event){   
    let fotoPrincipal = document.querySelector("article",".foto_principal")
    let selecionada = event.target.src

    fotoPrincipal.innerHTML= ""

    var novaFoto = document.createElement("img")
    novaFoto.setAttribute ("src", selecionada)
    novaFoto.setAttribute ("id", "fotoAberta")
    fotoPrincipal.appendChild(novaFoto) 
    sairFoto()     
}

function sairFoto(){
    let fotoAberta = document.getElementById("fotoAberta")  
    let fotoPrincipal = document.querySelector("article",".foto_principal") 
    fotoAberta.addEventListener("click", function(){
        fotoPrincipal.innerHTML= ""
    })

}

function galeria(colecaoFotos){

    listaFotos.innerHTML = ""

    colecaoFotos.forEach(function(foto){

        const template = criarTemplate(foto)

        listaFotos.appendChild(template)
    })
}
galeria(fotos)

function criarTemplate(foto){
     
    const li = document.createElement("div")

    li.innerHTML= `<img src="${foto.url}" id="${foto.id}" onclick="principal(event)"></img>`

    return li
}

//Filtrando categorias

function filtrarFotos(fotosCategoria){
    const fotosFiltradas = fotos.filter(function(foto){
        if(fotosCategoria == foto.categoria){
        return foto
        }
    })
    galeria(fotosFiltradas)
}


const menu = document.querySelector(".menu")   
menu.addEventListener("click", function(event){

        event.preventDefault() 

        const categoriaSelecionada = event.target.id
        if(categoriaSelecionada === "todas"){
            galeria(fotos)
        }else{
            filtrarFotos(categoriaSelecionada)
        }
    })











function selecionar(event){
    var selec = event.target    
    selec.style.backgroundImage = "linear-gradient(to right,#4c4f52b4,#b0b1afde,#4c4f52b4)" 
    }
    
function desselecionar(event){
    var selec = event.target    
    selec.style.backgroundImage = ""                
    }  
