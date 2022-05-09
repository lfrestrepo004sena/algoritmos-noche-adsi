// document.body.onload = function(){
//     alert("Hola mundo")
// }

function suma() {
    var A = 0;
    var B = 0;
    var Suma = 0;
    alert("Este algoritmo realiza una suma de dos valores ingresados por el usuario");
    A = parseInt(prompt("Por favor ingrese el primer valor a sumar"));
    B = parseInt(prompt("Por favor ingrese el segundo valor a sumar"));
    Suma = A + B;
    alert("El resultado de la suma es: " + Suma);
}

function mostrar(){
    // document.getElementById("figura").style.display='none';
    document.getElementById("figura").innerHTML= "Hola mundo";
}