//EJERCICIO 1
let edad = prompt("Ingrese su edad: "); 
if (edad >=18) {
    console.log ("Eres mayor de edad ")

}

else {
    console.log ("Eres menor de edad ")
}

//EJERCICIO 2

let numeroUsuario = prompt ("Ingrese su número: ")
if (numeroUsuario >=0) {
    console.log("El número es positivo ")
}
else { 
    console.log ("El número es negativo ")
}

//EJERCICIO 3 

let totalCompra = prompt ("Ingrese el total de su compra: ")
if (totalCompra > 100) {
    let descuento = totalCompra * 0.1 
    totalCompra = totalCompra - descuento
    console.log ("Tienes un descuento del 10% y su total es: " + totalCompra)
}

else{ 
    console.log ("No tines descuento ")
}

//EJERCICIO 4 

let numero1 = prompt ("Ingrese el primer número: ")
let numero2 = prompt ("Ingrese el segundo número: ")
if (numero1 < numero2) { 
    console.log ("El primer número es mayor que el segundo ")

}
else if (numero1 < numero2) { 
    console.log ("El segundo número es mayor que el segundo ")

}

//EJERCICIO 5

let ClasifiacionDeEdad = prompt ("Ingrese su edad: ")
if (ClasifiacionDeEdad >= 0 && ClasifiacionDeEdad <= 12) {
    console.log ("Eres un niño ")
}
else if (ClasifiacionDeEdad > 12 && ClasifiacionDeEdad < 17) {
    console.log ("Eres un adolescente")
}
else if (ClasifiacionDeEdad > 18 && ClasifiacionDeEdad < 64){
    console.log ("Eres un adulto ")

}
else if (ClasifiacionDeEdad >= 64) {
    console.log ("Eres un adulto mayor ")
}

//EJERCICIO 6

let nota = prompt("Ingrese una nota entre 0 y 100: ")
if (nota >= 90 && nota <= 100) {
    console.log ("!EXECELENTE¡")
}

else if (nota >= 70 && nota <= 89){
    console.log ("Aprobado ")
}
else if (nota >= 50 && nota <= 69){
    console.log ("Regular ")
}
else if (nota >= 0 && nota <= 49){
    console.log ("Regular ")
}

//EJERCICIO 7 

let OpcioMenu = prompt ("Elija una opción de menú: 1- Pizza 2- Hamburguesa 3- Tacos");

switch (OpcioMenu) { 
    case 1: 
    console.log ("Has elegido pizza ")
    break; 
    case 2: 
    console.log ("Has elegido hamburguesa ")
    break; 
    case 3: 
    console.log ("Has elegido tacos ")
    
    default: 
    console.log ("Opción no valida. ")
}

//EJERCICIO 8

let LadoTriangulo = ("Ingrese el primer lado del triangulo: ")
let LadoTriangulo2 = ("Ingrese el segundo lado del triangulo: ")
let LadoTriangulo3 = ("Ingrese el tercer lado del triangulo: ")
if(LadoTriangulo == LadoTriangulo2 == LadoTriangulo3){
    console.log("El triángulo es equilátero ")

}
else if (LadoTriangulo === LadoTriangulo2 || LadoTriangulo2 === LadoTriangulo3 || LadoTriangulo3 === LadoTriangulo){
    console.log("El triángulo es isósceles ")
}

else{
    console.log("El triángulo es escaleno ")
}

//EJERCICIO 9 

let adivinaNumero = prompt("Adivina un número entre 1 y 10: ")
let numeroAleatorio = Math.floor(Math.random() * 10) +1 
if (adivinaNumero == numeroAleatorio) {
    console.log("Has ganado!")
}

else {
    console.log("Has perdido! El número era " + numeroAleatorio)
}

//EJERCICIO 10

let PrecioBase = prompt ("Ingrese el precio base del producto: ")
if (PrecioBase > 500) {
    let descuento = PrecioBase * 0.15
    console.log ("El precio del producto con descuento es: " + (PrecioBase - descuento))
}
if(PrecioBase >= 300 && PrecioBase < 500){
    let descuento = PrecioBase * 0.10
    console.log ("El precio del producto con descuento es: " + (PrecioBase - descuento))
}
else {
    let descuento = PrecioBase *0.5 
    console.log ("El precio del producto con descuento es: " + (PrecioBase - descuento))
}

//EJERCICIO 11

let ValorBase = prompt("Ingrese el valor base del producto: ");

if (ValorBase > 500) {
    let descuento = ValorBase * 0.15;
    console.log("El precio del producto con descuento es: $" + (ValorBase - descuento));
} else if (ValorBase >= 300 && ValorBase <= 500) {
    let descuento = ValorBase * 0.10;
    console.log("El precio del producto con descuento es: $" + (ValorBase - descuento));
} else {
    let descuento = ValorBase * 0.05;
    console.log("El precio del producto con descuento es: $" + (ValorBase - descuento));
}

//EJERCICIO 12 

let año = prompt("Ingrese un año: ");

if ((año % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0) {
    console.log("El año " + año + " es bisiesto.");
} else {
    console.log("El año " + año + " no es bisiesto.");
}

//EJERCICIO 13

let usuario = prompt("Ingrese el nombre de usuario: ");
let contrasena = prompt("Ingrese la contraseña: ");

if (usuario === "admin" && contrasena === "1234") {
    console.log("Acceso concedido");
} else {
    console.log("Acceso denegado");
}

//EJERCICIO 14 

let hora = prompt("Ingrese la hora (solo el número de la hora, de 0 a 23): ");

if (hora >= 6 && hora < 12) {
    console.log("Buenos días");
} else if (hora >= 12 && hora < 18) {
    console.log("Buenas tardes");
} else if ((hora >= 18 && hora < 24) || (hora >= 0 && hora < 6)) {
    console.log("Buenas noches");
} else {
    console.log("Hora no válida");
}
