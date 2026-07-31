const likes = document.querySelectorAll(".like");
const deslikes = document.querySelectorAll(".deslike");
const btnTemaEscuro = document.querySelector(".btn-tema-escuro");

likes.forEach(function(botao){
let curtido = false;

botao.addEventListener("click", function(){
const contador = botao.querySelector("span");
let numero = Number(contador.textContent);

if(curtido === false){
contador.textContent = numero + 1;
curtido = true;
}else{
contador.textContent = numero - 1;
curtido = false;
}
});
});

deslikes.forEach(function(botao){
let descurtido = false;

botao.addEventListener("click", function(){
const contador = botao.querySelector("span");
let numero = Number(contador.textContent);

if(descurtido === false){
contador.textContent = numero + 1;
descurtido = true;
}else{
contador.textContent = numero - 1;
descurtido = false;
}
});
});

btnTemaEscuro.addEventListener("click", function(){
document.documentElement.classList.toggle("tema-escuro");
});