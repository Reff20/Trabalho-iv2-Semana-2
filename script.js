var estilo = document.querySelector('.tema');
var fundo = document.querySelector('.body');
var txt = document.querySelector('.tematxt');
var label = document.querySelector('label');
var lets = document.getElementById('let');
var bot = document.querySelector('.bot');
var list = document.getElementById('list');

function temaEscuro(){
    if(fundo.style.backgroundImage == "linear-gradient(rgb(255, 255, 255), rgb(54, 101, 187))"){
        estilo.href = "https://code.getmdl.io/1.3.0/material.deep_purple-cyan.min.css"
        fundo.style.backgroundImage = "linear-gradient(rgb(160, 160, 160), rgb(78, 47, 129))"
        txt.innerHTML = "Tema Claro"
        label.style.color = "white"
        lets.style.color = "white"
        bot.style.color = "white"
        list.style.color = "yellow"
    }else{
        fundo.style.backgroundImage = "linear-gradient(rgb(255, 255, 255), rgb(54, 101, 187))"
        estilo.href = "https://code.getmdl.io/1.3.0/material.deep_orange-yellow.min.css"
        txt.innerHTML = "Tema Escuro"
        label.style.color = "black"
        lets.style.color = "black"
        bot.style.color = "black"
        list.style.color = "white"
    }
}

