'use strict';
const nom = document.querySelector("#name");
const pass = document.querySelector("#pass");
const form = document.querySelector("#user");

form,addEventListener("submit", (e)=>{
    e.preventDefault();
    if (validFieldsForm() === -1){ 
        alert("Datos Recibidos");
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
    name:false,
    pass:false
}

nom.addEventListener('change',(event)=>{
    const inputNombre = event.target.value;
    const patronNombres = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
    //Ternario
    validFields.name = inputNombre.match(patronNombres) ? true: false;
    console.log(Object.values(validFields));})


pass.addEventListener('change',(event)=>{
        const inputPass = event.target.value;
        const patronPass = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})(^[0-9]{1,2}$)$/g;
        validFields.pass = true
        console.log(Object.values(validFields));})