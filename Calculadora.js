// Declaracion de variables
var num1 = 0;
var num2 = 0;
var resultado = 0;
var operacion = "";

// Funcion para sumar
function sumar() {
    resultado = num1 + num2;
    return resultado;
}

// Funcion para restar
function restar() {
    resultado = num1 - num2;
    return resultado;
}

// Funcion para multiplicar
function multiplicar() {
    resultado = num1 * num2;
    return resultado;
}

// Funcion para dividir
function dividir() {
    resultado = num1 / num2;
    return resultado;
}

// Funcion para elevar a la potencia
function potencia() {
    resultado = Math.pow(num1, num2);
    return resultado;
}

// Funcion para calcular el porcentaje
function porcentaje() {
    resultado = num1 * (num2 / 100);
    return resultado;
}

// Funcion para calcular el factorial
function factorial() {
    resultado = 1;
    for (var i = 1; i <= num1; i++) {
        resultado = resultado * i;
    }
    return resultado;
}

// Funcion para calcular la raiz cuadrada
function raiz() {
    resultado = Math.sqrt(num1);
    return resultado;
}

// Funcion para calcular el logaritmo
function logaritmo() {
    resultado = Math.log(num1);
    return resultado;
}

// Funcion para calcular el seno
function seno() {
    resultado = Math.sin(num1);
    return resultado;
}

// Funcion para calcular el coseno
function coseno() {
    resultado = Math.cos(num1);
    return resultado;
}

// Funcion para calcular la tangente
function tangente() {
    resultado = Math.tan(num1);
    return resultado;
}

// Funcion para calcular el arcoseno
function arcoseno() {
    resultado = Math.asin(num1);
    return resultado;
}

// Funcion para calcular el arcocoseno
function arcocoseno() {
    resultado = Math.acos(num1);
    return resultado;
}

// Funcion para calcular el arcotangente
function arcotangente() {
    resultado = Math.atan(num1);
    return resultado;
}

// Funcion para calcular el valor absoluto
function absoluto() {
    resultado = Math.abs(num1);
    return resultado;
}
