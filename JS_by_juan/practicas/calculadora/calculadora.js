
var signo_suma = document.getElementById("button");
var signo_suma = document.getElementById("button12");

var cifra = "";
var acumulado = 0;
var acumulado1 = 1;
var suma = false;
var resta = false;
var multiplicacion = false;
var division = false;

function pantalla(numero){
    document.getElementById("display").value = cifra + numero;
    cifra = document.getElementById("display").value;
}

function sumar(){
    if(suma){
        acumulado = parseInt(cifra) + acumulado;
        document.getElementById("display").value = acumulado;
    }
    else if(resta){
        acumulado = acumulado - parseInt(cifra);
        document.getElementById("display").value = acumulado;
    }
    else if(multiplicacion){
        acumulado = acumulado * parseInt(cifra);
        document.getElementById("display").value = acumulado
    }
    else if(division){
        acumulado = acumulado / parseInt(cifra);
        document.getElementById("display").value = acumulado;
    }
    else{
        acumulado = acumulado + parseInt(cifra);
        document.getElementById("display").value = acumulado;
    }
    cifra = "";
    suma = true;
    multiplicacion = false;
    division = false;
    resta = false;
}


function restar(){
    if(suma){
        acumulado = parseInt(cifra) + acumulado;
        document.getElementById("display").value = acumulado;
    }
    else if(resta){
        acumulado = acumulado - parseInt(cifra);
        document.getElementById("display").value = acumulado;
    }
    else if(multiplicacion){
        acumulado = acumulado * parseInt(cifra);
        document.getElementById("display").value = acumulado
    }
    else if(division){
        acumulado = acumulado / parseInt(cifra);
        document.getElementById("display").value = acumulado;
    }
    else{
        acumulado = parseInt(cifra) - acumulado;
        document.getElementById("display").value = acumulado;
    }
    cifra = "";
    suma = false;
    multiplicacion = false;
    division = false;
    resta = true;
}


function multiplicar(){
    if(suma){
        acumulado = parseInt(cifra) + acumulado;
        document.getElementById("display").value = acumulado;
    }
    else if(resta){
        acumulado = acumulado - parseInt(cifra);
        document.getElementById("display").value = acumulado;
    }
    else if(multiplicacion){
        acumulado = acumulado * parseInt(cifra);
        document.getElementById("display").value = acumulado
    }
    else if(division){
        acumulado = acumulado / parseInt(cifra);
        document.getElementById("display").value = acumulado;
    }
    else{
        acumulado = parseInt(cifra);
        document.getElementById("display").value = acumulado;
    }

    cifra = "";
    suma = false;
    multiplicacion = true;
    division = false;
    resta = false;
}


function dividir(){
    if(suma){
        acumulado = parseInt(cifra) + acumulado;
        document.getElementById("display").value = acumulado;
    }
    else if(resta){
        acumulado = acumulado - parseInt(cifra);
        document.getElementById("display").value = acumulado;
    }
    else if(multiplicacion){
        acumulado = acumulado * parseInt(cifra);
        document.getElementById("display").value = acumulado
    }
    else if(division){
        acumulado = acumulado / parseInt(cifra);
        document.getElementById("display").value = acumulado;
    }
    else{
        acumulado = parseInt(cifra);
        document.getElementById("display").value = acumulado;
    }
    cifra = "";
    suma = false;
    multiplicacion = false;
    division = true;
    resta = false;
}


function igualdad(){
    if(suma){
        document.getElementById("display").value = acumulado + parseInt(cifra);
    }
    else if(resta){
        document.getElementById("display").value = acumulado - parseInt(cifra);
    }
    else if(multiplicacion){
        document.getElementById("display").value = acumulado * parseInt(cifra);
    }
    else if(division){
        document.getElementById("display").value = acumulado / parseInt(cifra);
    }
}
