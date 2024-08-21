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
