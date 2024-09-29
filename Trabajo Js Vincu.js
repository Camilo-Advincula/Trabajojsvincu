/* 1. Hola Mundo Creativo
Tema: Introducción a JavaScript
Ejercicio: Escribe un código que muestre un saludo personalizado en la consola. Usa prompt para pedir al usuario su nombre y crea un mensaje que diga "¡Hola [nombre]! Bienvenido al taller de JavaScript". */

let nombreUsuario= prompt("Ingrse su nombre: ")

console.log(`¡Hola ${nombreUsuario} Bienvenido al taller de JavaScript` ) 

/* 2. Variables Interactivas
Tema: Uso de let y const
Ejercicio: Crea un programa que pida al usuario su edad usando prompt. Usa let para la edad y const para almacenar un mensaje que diga "Tu edad es [edad]". Muestra el mensaje en la consola. */

let edadUsuario= prompt("Ingrese su edad :")

const mensajeEdad= console.log(`Tu edad es ${edadUsuario}`)

/* 3. Investigando el Uso de if
Tema: Condicionales (investigación)
Ejercicio: Investiga cómo funciona la estructura if en JavaScript. Luego, escribe un ejemplo simple de cómo usar if para mostrar un mensaje en la consola basado en la comparación de dos variables numéricas. Asegúrate de que tu código sea funcional y de explicar cómo lo has utilizado en un comentario. */

if (edadUsuario>= 18){
    console.log("Puedes ingresar ala fiesta") /*  PRIMERO BUSQUE COMO FUNCIONA EL CONDICIONAL IF EN JAVASCRIPT, EL IF LO ULTILICE PARA VERIFICAR SI LA EDAD QUE LE PEDI AL USUARIO ES MAYOR PARA PODER INGRESAR ALA FIESTA */
}else if (edadUsuario<0)
    {console.log("Error")}

else{ console.log("No puedes ingresar ala fiesta")}

/* 4. Calculadora de Operaciones
Tema: Operadores Aritméticos
Ejercicio: Crea una pequeña calculadora.
Pide al usuario dos números mediante prompt.
Pregunta qué operación desea realizar (suma, resta, multiplicación o división).
Realiza la operación elegida y muestra el resultado en la consola. */










 let num1=parseInt(prompt("Ingrese su primer numero"));
 let num2=parseInt(prompt("Ingrese el segundo numero"));

 let operacion=prompt(" suma +, resta -, multiplicacion *, division/");

 if (operacion== "+"){
    let suma= num1 + num2;
    console.log("El resultado de la suma es: " + suma);
 }
 else if (operacion=="-"){
    let resta= num1 - num2;
    console.log("El resultado de la resta es :" + resta);
 }
 else if (operacion=="*"){
    let mult= num1 * num2;
    console.log("El restultado de la multiplicacion es :" + mult);

 }
else if (operacion=="/"){
    let divi= num1 / num2;
    console.log("El resultado de la division es :" + divi);
}

/* 5. Comparando Números
Tema: Operadores de Comparación
Ejercicio: Crea un programa que pida al usuario dos números.
Asigna estos números a dos variables y muestra en la consola si el primer número es mayor que el segundo utilizando un operador de comparación.
Usa un segundo operador de comparación para mostrar si son iguales. */

let numero=parseInt(prompt("Ingrese el primer numero: "));
let numero2=parseInt(prompt("Ingrese el segundo numero:"));

if (numero>numero2){
    console.log(`El numero ${numero} es mayor que ${numero2}`)
}

else if (numero==numero2){
    console.log(`El numero ${numero} es igual que ${numero2}`)
}
 
else if (numero<numero2){
    console.log(`El numero ${numero} es menor que ${numero2}`)
}
