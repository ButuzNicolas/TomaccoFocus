// comentario de linea

/* 
comentario
de
bloque
*/

//forma recomendada para declarar variables
// let edad = 20; //variable de tipo dato number
// let nombre = "andres"; //variable de tipo dato string

//forma no recomendada para declarar variables
// var numero = 45;

//constantes
// const NUMERO = 6;

//camelCase => nombreBonitoGrande
//PascalCase => NombreBonitoGrande
//snake_case => nombre_bonito_grande
//kebab-case => nombre-bonito-grande

// let numeroUno = 3;
// let numeroDos = 15;

// let resultadoSuma = numeroUno + numeroDos;
// let resultadoResta = numeroUno - numeroDos;
// let resultadoMultiplicacion = numeroUno * numeroDos;
// let resultadoDivision = numeroUno / numeroDos;

// console.log("resultado suma", resultadoSuma);
// console.log("resultado resta", resultadoResta);
// console.log("resultado multiplicacion", resultadoMultiplicacion);
// console.log("resultado division", resultadoDivision);

// let numero = 0.35;
// console.log(typeof numero);

// let nombre = "andres";
// console.log(typeof nombre);

// let saludo = "Hola";
// let nombre = "andres";

// let saludoCompleto = saludo + " " + nombre;
// console.log(saludoCompleto);

// let nombre = prompt("Ingrese su nombre");
// console.log(nombre);

//parseInt("5")
//parseFloat("5.1234")
//parseNumber("5")
//let numero = Number(prompt("Ingrese un número"));
//if (numero < 50) {
//    alert(numero + 10);
//}
//else{ alert(numero + 7); }


/*
let probar_suerte = Number(prompt("Ingresa un número"));

if (probar_suerte >= 0 & probar_suerte <= 16) {
    alert("sigue intentando");
}
else if (probar_suerte >= 17 & probar_suerte <= 53){
    alert("casi casi");
}
else if (probar_suerte >= 54 & probar_suerte <= 69) {
    alert("GANASTE");
}
else if (probar_suerte >= 70 & probar_suerte <= 100) {
    alert("la proxima sera...");
}
else{
    alert("ADIOS!");
}
*/


/*------------------------------ CLOCK ---------------------------------------*/


let minutos = 12;
let segundos = 15;


function cargarSegundo(){
    let txtSegundos;

    if(segundos < 0) {
        segundos = 59;
    }

    if(segundos < 10){
        txtSegundos = `0${segundos}` ;
    } else{
        txtSegundos = segundos;
    }
    document.getElementById('segundos').innerHTML = txtSegundos;
    segundos--;

    CargarMinutos(segundos);
}

function CargarMinutos(segundos){
    let txtMinutos;

    if(segundos == -1 && minutos != 0){
        setTimeout(() => {
            minutos--;
        }, 500)
    } else if(segundos == -1 && minutos == 0){
        setTimeout(() => {
            minutos = 59;
        }, 500)
    }


    if(minutos < 10){
        txtMinutos = `0${minutos}`;
    }else {
        txtMinutos = minutos;
    }
    document.getElementById('minutos').innerHTML = txtMinutos;
}

setInterval(cargarSegundo, 1000);



/*------------------------------ FIN CLOCK -------------------------*/