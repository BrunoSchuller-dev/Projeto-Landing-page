
var Setadireita = window.document.getElementById("setadireita")
var Leo = window.document.getElementById("leo")
var Samanta = window.document.getElementById("samanta")
var Bruna = window.document.getElementById("bruna")
var Setaesquerda = window.document.getElementById("setaesquerda")

function RolarParaDireita(){
 leo.style = "display:none"
 bruna.style = "display:flex" 
 setadireita.style = "display:none"  
setaesquerda.style = "display:flex; margin-top-:55px"
}

function RolarParaEsquerda(){
leo.style = "display: flex"
bruna.style ="display: none"
setadireita.style="display:flex; margin-top:55px"
setaesquerda.style="display:none" 

}