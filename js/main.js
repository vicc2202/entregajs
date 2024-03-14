// VARIABLES

let ganaste;
ganaste = "\n¡Felicidades, sumaste 1 punto! :)"
let perdiste;
perdiste = "\nLo lamento, perdiste 1 punto :("


// COMIENZO DEL JUEGO

let comienzoDeJuego = prompt ("¿Desea comenzar a jugar? \nSi \nNo")
while (comienzoDeJuego !== "Si" && comienzoDeJuego !== "No") {
    alert ("Por favor, responde con Si o No");
    console.log ("Respuesta inválida");
    comienzoDeJuego = prompt ("¿Desea comenzar a jugar? \nSi \nNo");
}


// FUNCIÓN PARA CONTABILIZAR LOS PUNTOS 

let puntos = 0
function sumarPuntos (preguntasAdivinadas) {
    puntos += preguntasAdivinadas;
    console.log("¡Ganaste " + preguntasAdivinadas + " puntos!");
    console.log("Total de puntos: " + puntos);
}


// JUEGO

if (comienzoDeJuego === "Si") {
    alert ("¡A jugar!");
    console.log ("Ya podes comenzar a jugar");


// PREGUNTA 1
    let pregunta1 = prompt ("¿Con la hija de qué figura de la música se casó Michael Jackson? \n1) Frank Sinatra \n2) Elvis Presley")
    while (pregunta1 !== "1" && pregunta1 !== "2") {
        alert("Eso no es una respuesta");
        console.log("Respuesta inválida");
        pregunta1 = prompt("¿Con la hija de qué figura de la música se casó Michael Jackson? \n1) Frank Sinatra \n2) Elvis Presley");
    }
    if (pregunta1 == "2") {
        alert ("La respuesta correcta es Elvis Presley." + ganaste);
        sumarPuntos (1)
    } else if (pregunta1 == "1"){
        alert ("Tu respuesta es incorrecta." + perdiste);
        sumarPuntos (0)
    }
    


// PREGUNTA 2
    let pregunta2 = prompt ("¿Qué número representa `el enamorado´ en los sueños de la quiniela argentina? \n1) 93 \n2) 39")
    while (pregunta2 !== "1" && pregunta2 !== "2") {
        alert("Eso no es una respuesta");
        console.log("Respuesta inválida");
        pregunta2 = prompt("¿Qué número representa `el enamorado´ en los sueños de la quiniela argentina? \n1) 93 \n2) 39");
    }
    if (pregunta2 == "1") {
        alert ("La respuesta correcta es 93." + ganaste);
        sumarPuntos (1)
    } else if (pregunta2 == "2") {
        alert ("Tu respuesta es incorrecta." + perdiste);
        sumarPuntos (0)
    }
   

// PREGUNTA 3
    let pregunta3 = prompt ("¿En qué parte de su cuerpo tenía Diego Armando Maradona un tatuaje de Fidel Castro? \n1) Pierna izquierda \n2) Pecho")
    while (pregunta3 !== "1" && pregunta3 !== "2") {
        alert("Eso no es una respuesta");
        console.log("Respuesta inválida");
        pregunta3 = prompt("¿En qué parte de su cuerpo tenía Diego Armando Maradona un tatuaje de Fidel Castro? \n1) Pierna izquierda \n2) Pecho");
    }
    if (pregunta3 == "1") {
        alert ("La respuesta correcta es pierna izquierda." + ganaste);
        sumarPuntos (1)
    } else if (pregunta3 == "2") {
        alert ("Tu respuesta es incorrecta." + perdiste);
        sumarPuntos (0)
    }
   


 // PREGUNTA 4 
    let pregunta4 = prompt ("Según la tradición, ¿cuál de estos objetos no se debe regalar nunca? \n1) Un cuchillo \n2) Una copa")
    while (pregunta4 !== "1" && pregunta4 !== "2") {
        alert("Eso no es una respuesta");
        console.log("Respuesta inválida");
        pregunta4= prompt("Según la tradición, ¿cuál de estos objetos no se debe regalar nunca? \n1) Un cuchillo \n2) Una copa");
    }
    if (pregunta4  == "1") {
        alert ("La respuesta correcta es un cuchillo." + ganaste);
        sumarPuntos (1)
    } else if (pregunta4 == "2") {
        alert ("Tu respuesta es incorrecta." + perdiste);
        sumarPuntos (0)
    }
    
    

// PREGUNTA 5    
    let pregunta5 = prompt ("¿Cuántos hermanos tuvo el presidente Domingo Faustino Sarmiento? \n1) 8 \n2) 14")
    while (pregunta5 !== "1" && pregunta5 !== "2") {
        alert("Eso no es una respuesta");
        console.log("Respuesta inválida");
        pregunta5 = prompt("¿Cuántos hermanos tuvo el presidente Domingo Faustino Sarmiento? \n1) 8 \n2) 14");
    }
    if (pregunta5  == "2") {
        alert ("La respuesta correcta es 14 hermanos." + ganaste);
        sumarPuntos (1)
    } else if (pregunta5 == "1") {
        alert ("Tu respuesta es incorrecta." + perdiste);
        sumarPuntos (0)
    }
    

// PREGUNTA 6    
    let pregunta6 = prompt ("Según la tradición, ¿qué va a ocurrirle a una persona que es golpeada casualmente con el corcho tras destapar una botella? \n1) Se va a separar \n2) Se va a casar")
    while (pregunta6 !== "1" && pregunta6 !== "2") {
        alert("Eso no es una respuesta");
        console.log("Respuesta inválida");
        pregunta6 = prompt("Según la tradición, ¿qué va a ocurrirle a una persona que es golpeada casualmente con el corcho tras destapar una botella? \n1) Se va a separar \n2) Se va a casar");
    }
    if (pregunta6  == "2") {
        alert ("La respuesta correcta es que se va a casar." + ganaste);
        sumarPuntos (1)
    } else if (pregunta6 == "1") {
        alert ("Tu respuesta es incorrecta." + perdiste);
        sumarPuntos (0)
    }
    
    
    
// PREGUNTA 7   
    let pregunta7 = prompt ("¿Frente a qué edificio histórico se encuentra el ´Monolito Kilómetro 0´, que mide las rutas nacionales que parten de Buenos Aires?\n1) Casa Rosada \n2) Congreso de la Nación")
    while (pregunta7 !== "1" && pregunta7 !== "2") {
        alert("Eso no es una respuesta");
        console.log("Respuesta inválida");
        pregunta7 = prompt("¿Frente a qué edificio histórico se encuentra el ´Monolito Kilómetro 0´, que mide las rutas nacionales que parten de Buenos Aires?\n1) Casa Rosada \n2) Congreso de la Nación");
    }
    if (pregunta7  == "2") {
        alert ("La respuesta correcta es el Congreso de la Nación." + ganaste);
        sumarPuntos (1)
    } else if (pregunta7 == "1") {
        alert ("Tu respuesta es incorrecta." + perdiste); 
        sumarPuntos (0)
    }
    


// PREGUNTA 8  
    let pregunta8 = prompt ("¿Cuál de estas famosas obras del siglo XX pertenece al pensador francés Michael Foucault? \n1) El príncipe \n2) El ser y el tiempo \n3) El nacimiento de la tragedia \n4) Vigilar y castigar")
    while (pregunta8 !== "1" && pregunta8 !== "2" && pregunta8 !== "3" && pregunta8 !== "4") {
        alert("Eso no es una respuesta");
        console.log("Respuesta inválida");
        pregunta8 = prompt("¿Cuál de estas famosas obras del siglo XX pertenece al pensador francés Michael Foucault? \n1) El príncipe \n2) El ser y el tiempo \n3) El nacimiento de la tragedia \n4) Vigilar y castigar");
    }
    if (pregunta8  == "4") {
        alert ("La respuesta correcta es Vigilar y castigar." + ganaste);
        sumarPuntos (1)
    } else if (pregunta8 !== "4") {
        alert ("Tu respuesta es incorrecta." + perdiste);
        sumarPuntos (0)
    }
    
    

// PREGUNTA 9    
    let pregunta9 = prompt ("Según la versión tradicional del famoso cuento infantil, son dos los cerditos que escapan del lobo que derriba casas soplando. \n1) Verdadero \n2) Falso")
    while (pregunta9 !== "1" && pregunta9 !== "2") {
        alert("Eso no es una respuesta");
        console.log("Respuesta inválida");
        pregunta9 = prompt("Según la versión tradicional del famoso cuento infantil, son dos los cerditos que escapan del lobo que derriba casas soplando. \n1) Verdadero \n2) Falso");
    }
    if (pregunta9  == "1") {
        alert ("La respuesta es correcta, los cerditos del cuento son 3 pero al momento de escapar del lobo son sólo dos." + ganaste);
        sumarPuntos (1)
    } else if (pregunta9 == "2") {
        alert ("Tu respuesta es incorrecta." + perdiste);
        sumarPuntos (0)
    }
    
    

// PREGUNTA 10    
    let pregunta10 = prompt ("¿Cuál de estas palabras no aparece en el diccionario de la RAE? \n1) Helicótero \n2) Almóndiga \n3) Murciégalo \n4) Güisqui")
    while (pregunta10 !== "1" && pregunta10 !== "2" && pregunta10 !== "3" && pregunta10 !== "4") {
        alert("Eso no es una respuesta");
        console.log("Respuesta inválida");
        pregunta10 = prompt("¿Cuál de estas palabras no aparece en el diccionario de la RAE? \n1) Helicótero \n2) Almóndiga \n3) Murciégalo \n4) Güisqui");
    }
    if (pregunta10  == "1") {
        alert ("La respuesta correcta es Helicótero" + ganaste); 
        sumarPuntos (1)
    } else if (pregunta10 !== "1") {
        alert ("Tu respuesta es incorrecta." + perdiste);
        sumarPuntos (0)
    }
    


// RESULTADOS FINALES    
    alert ("Tu total de puntos ganados es: " + puntos)
    if (puntos < 7 ) {
        alert ("Lo lamento, perdiste el juego")
    } else if (puntos >= 7) {
        alert ("¡Felicidades! Ganaste el premio")
    }
}


// CONDICIONAL POR SI EL JUGADOR NO QUIERE JUGAR
if (comienzoDeJuego === "No") {
    alert ("Vos te lo perdes");
    console.log ("La próxima será");
}
    
    

    