'use strict';
const check = document.querySelector("#check");
const form = document.querySelector("#form");

form,addEventListener("submit", (e)=>{
    e.preventDefault();
    if (validFieldsForm() === -1){ 
        alert("Muy Bien");
    }else {
        alert("Error");
}})

const validFieldsForm = () =>{
    const values = Object.values(validFields);
    let response = values.findIndex(e=> e === false);
    return response;
}

//Objeto de Validación

let validFields = {
    check:false,
}

check.addEventListener('change', function(e) {
    if(check.value === "ok"){  
    validFields.check = check.value ? true : false;
    console.log(Object.values(validFields));}
    else{  
        if(check.value === "no"){  
        validFields.check = check.value ? false : true;
        console.log(Object.values(validFields));}}
});

function redirigir01(){
    if (check.value === "ok"){ 
        window.location.href="../Palabras/Manzana.html";
    }else {
        alert("Error,Algo Esta mal, no Puedes Continuar");
}}
function redirigir02(){
    if (check.value === "ok"){ 
        window.location.href="../Palabras/Pera.html";
    }else {
        alert("Error,Algo Esta mal, no Puedes Continuar");
}}
function redirigir03(){
    if (check.value === "ok"){ 
        window.location.href="../Palabras/Piña.html";
    }else {
        alert("Error,Algo Esta mal, no Puedes Continuar");
}}
function redirigir04(){
    if (check.value === "ok"){ 
        window.location.href="../Palabras/Carro.html";
    }else {
        alert("Error,Algo Esta mal, no Puedes Continuar");
}}
function redirigir05(){
    if (check.value === "ok"){ 
        window.location.href="../Palabras/España.html";
    }else {
        alert("Error,Algo Esta mal, no Puedes Continuar");
}}
function redirigir06(){
    if (check.value === "ok"){ 
        window.location.href="../Palabras/Esfero.html";
    }else {
        alert("Error,Algo Esta mal, no Puedes Continuar");
}}
function redirigir07(){
    if (check.value === "ok"){ 
        window.location.href="../Palabras/Lapiz.html";
    }else {
        alert("Error,Algo Esta mal, no Puedes Continuar");
}}
function redirigir08(){
    if (check.value === "ok"){ 
        window.location.href="../Palabras/Libro.html";
    }else {
        alert("Error,Algo Esta mal, no Puedes Continuar");
}}
function redirigir09(){
    if (check.value === "ok"){ 
        window.location.href="../Palabras/Audifonos.html";
    }else {
        alert("Error,Algo Esta mal, no Puedes Continuar");
}}
function redirigir10(){
    if (check.value === "ok"){ 
        window.location.href="../Palabras/Computadora.html";
    }else {
        alert("Error,Algo Esta mal, no Puedes Continuar");
}}
function redirigir38(){
    if (check.value === "ok"){ 
        window.location.href="../Palabras/Globo.html";
    }else {
        alert("Error,Algo Esta mal, no Puedes Continuar");
}}
function redirigir11(){
    if (check.value === "ok"){ 
        window.location.href="../Palabras/Balón.html";
    }else {
        alert("Error,Algo Esta mal, no Puedes Continuar");
}}
function redirigir12(){
    if (check.value === "ok"){ 
        window.location.href="../Palabras/Cuaderno.html";
    }else {
        alert("Error,Algo Esta mal, no Puedes Continuar");
}}
function redirigir13(){
    if (check.value === "ok"){ 
        window.location.href="../Palabras/Mochila.html";
    }else {
        alert("Error,Algo Esta mal, no Puedes Continuar");
}}
function redirigir14(){
    if (check.value === "ok"){ 
        window.location.href="../Palabras/Tren.html";
    }else {
        alert("Error,Algo Esta mal, no Puedes Continuar");
}}
function redirigir15(){
    if (check.value === "ok"){ 
        window.location.href="../Palabras/Juguete.html";
    }else {
        alert("Error,Algo Esta mal, no Puedes Continuar");
}}
function redirigir16(){
    if (check.value === "ok"){ 
        window.location.href="../Palabras/Lindo.html";
    }else {
        alert("Error,Algo Esta mal, no Puedes Continuar");
}}
function redirigir17(){
    if (check.value === "ok"){ 
        window.location.href="../Palabras/Hola.html";
    }else {
        alert("Error,Algo Esta mal, no Puedes Continuar");
}}
function redirigir18(){
    if (check.value === "ok"){ 
        window.location.href="../Palabras/Pequeño.html";
    }else {
        alert("Error,Algo Esta mal, no Puedes Continuar");
}}
function redirigir19(){
    if (check.value === "ok"){ 
        window.location.href="../Palabras/Borrador.html";
    }else {
        alert("Error,Algo Esta mal, no Puedes Continuar");
}}
function redirigir20(){
    if (check.value === "ok"){ 
        window.location.href="../Palabras/Ratón.html";
    }else {
        alert("Error,Algo Esta mal, no Puedes Continuar");
}}
function redirigir21(){
    if (check.value === "ok"){ 
        window.location.href="../Palabras/Vaca.html";
    }else {
        alert("Error,Algo Esta mal, no Puedes Continuar");
}}
function redirigir22(){
    if (check.value === "ok"){ 
        window.location.href="../Palabras/Perro.html";
    }else {
        alert("Error,Algo Esta mal, no Puedes Continuar");
}}
function redirigir23(){
    if (check.value === "ok"){ 
        window.location.href="../Palabras/Gato.html";
    }else {
        alert("Error,Algo Esta mal, no Puedes Continuar");
}}
function redirigir24(){
    if (check.value === "ok"){ 
        window.location.href="../Palabras/Leon.html";
    }else {
        alert("Error,Algo Esta mal, no Puedes Continuar");
}}
function redirigir25(){
    if (check.value === "ok"){ 
        window.location.href="../Palabras/Caballo.html";
    }else {
        alert("Error,Algo Esta mal, no Puedes Continuar");
}}
function redirigir26(){
    if (check.value === "ok"){ 
        window.location.href="../Palabras/Cerdo.html";
    }else {
        alert("Error,Algo Esta mal, no Puedes Continuar");
}}
function redirigir27(){
    if (check.value === "ok"){ 
        window.location.href="../Palabras/Muñeca.html";
    }else {
        alert("Error,Algo Esta mal, no Puedes Continuar");
}}
function redirigir28(){
    if (check.value === "ok"){ 
        window.location.href="../Palabras/Cielo.html";
    }else {
        alert("Error,Algo Esta mal, no Puedes Continuar");
}}
function redirigir29(){
    if (check.value === "ok"){ 
        window.location.href="../Palabras/Tierra.html";
    }else {
        alert("Error,Algo Esta mal, no Puedes Continuar");
}}
function redirigir30(){
    if (check.value === "ok"){ 
        window.location.href="../Palabras/Botella.html";
    }else {
        alert("Error,Algo Esta mal, no Puedes Continuar");
}}
function redirigir31(){
    if (check.value === "ok"){ 
        window.location.href="../Palabras/Gorra.html";
    }else {
        alert("Error,Algo Esta mal, no Puedes Continuar");
}}
function redirigir32(){
    if (check.value === "ok"){ 
        window.location.href="../Palabras/Taza.html";
    }else {
        alert("Error,Algo Esta mal, no Puedes Continuar");
}}
function redirigir33(){
    if (check.value === "ok"){ 
        window.location.href="../Palabras/Iglesia.html";
    }else {
        alert("Error,Algo Esta mal, no Puedes Continuar");
}}
function redirigir34(){
    if (check.value === "ok"){ 
        window.location.href="../Palabras/Amarillo.html";
    }else {
        alert("Error,Algo Esta mal, no Puedes Continuar");
}}
function redirigir39(){
    if (check.value === "ok"){ 
        window.location.href="../Palabras/Azul.html";
    }else {
        alert("Error,Algo Esta mal, no Puedes Continuar");
}}
function redirigir35(){
    if (check.value === "ok"){ 
        window.location.href="../Palabras/Rojo.html";
    }else {
        alert("Error,Algo Esta mal, no Puedes Continuar");
}}
function redirigir36(){
    if (check.value === "ok"){ 
        window.location.href="../Palabras/Verde.html";
    }else {
        alert("Error,Algo Esta mal, no Puedes Continuar");
}}
function redirigir37(){
    if (check.value === "ok"){ 
        window.location.href="../Palabras/Avion.html";
    }else {
        alert("Error,Algo Esta mal, no Puedes Continuar");
}}

