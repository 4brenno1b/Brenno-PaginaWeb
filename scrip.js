
const likes=document.querySelectorAll(".like");
const deslikes=document.querySelectorAll(".deslike");

likes.forEach(function(botao){

let curtido=false;

botao.addEventListener("click",function(){

let texto=botao.querySelector("span");
let numero=Number(texto.textContent);

if(!curtido){

texto.textContent=numero+1;
curtido=true;

}else{

texto.textContent=numero-1;
curtido=false;

}

});

});

deslikes.forEach(function(botao){

let descurtido=false;

botao.addEventListener("click",function(){

let texto=botao.querySelector("span");
let numero=Number(texto.textContent);

if(!descurtido){

texto.textContent=numero+1;
descurtido=true;

}else{

texto.textContent=numero-1;
descurtido=false;

}

});

});
