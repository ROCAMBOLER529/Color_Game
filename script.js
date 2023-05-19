// +-----------------------+
// |                       |
// | JS PARA EL COLOR GAME |
// |                       |
// +-----------------------+

// ------------------------
// DECLARACION DE FUNCIONES
// ------------------------

// Cambia el color de los cuadros en el momento que el usuario gane
const changeColor = (color) => {
    for (let i = 0; i < cuadros.length; i++) {
        cuadros[i].style.backgroundColor = color;
    }
}

// Devuelve un indice random del array "color"
const pickColor = (numberOfSquads) => {
    return color[Math.floor(Math.random() * (numberOfSquads))];
}

// Devuelve un color random
const randomColor = () => {
    return "rgb(" + Math.floor(Math.random() * (255) - 1) + ", " + Math.floor(Math.random() * (255) - 1) + ", " + Math.floor(Math.random() * (255) - 1) + ")"; // rgb(n, n, n)
}

const generateRandomColors = (color, length) => {
    for (let i = 0; i < length; i++) {
        color[i] = randomColor();
        console.log(i);
    }
}

const reset = () => {
    mensaje.textContent = "";
    h1.style.backgroundColor = "darkgreen";
    nuevosColores.textContent = "Nuevos colores";

    generateRandomColors(color, 6);
    pickedColor.textContent = pickColor(numberOfSquads);


    for (let i = 0; i < numberOfSquads; i++) {
        cuadros[i].style.backgroundColor = color[i]; // PASO 2
        cuadros[i].addEventListener("click", () => { // PASO 4
            
            if (cuadros[i].style.backgroundColor == pickedColor.textContent) {
                changeColor(pickedColor.textContent);
        
                h1.style.backgroundColor = pickedColor.textContent;
                mensaje.textContent = "¡Correcto!";
        
            } else {
                cuadros[i].style.backgroundColor = body.style.backgroundColor;
                mensaje.textContent = "Intentalo nuevamente";
                console.log("Intentalo nuevamente");
            }
        });
    }
}

// // ------------------------
// // DECLARACION DE ATRIBUTOS
// // ------------------------

// Contructor de array para colores.
let color = ["rgb(240, 14, 128)", "rgb(1, 1, 1)", "rgb(165, 25, 255)", "rgb(128, 92, 64)", "rgb(41, 59, 244)", "rgb(69, 64, 12)"];
let cuadros = document.querySelectorAll("div.square");
generateRandomColors(color, 6);
let numberOfSquads = 6;

// // Color a adivinar
let pickedColor = document.querySelector("#colorDisplay");
pickedColor.textContent = pickColor(numberOfSquads);

// // Color del body.background
let body = document.body;
body.style.backgroundColor = "darkgreen";

// // PASO 4 - Agarra el elemento con el id=message
let mensaje = document.querySelector("#message");

// Constructor del h1
let h1 = document.querySelector("h1");

let nuevosColores = document.querySelector("#reset");
let easyButton = document.querySelector("#easyButton");
let hardButton = document.querySelector("#hardButton");

// Interaccion con los cuadros
for (let i = 0; i < color.length; i++) {
    cuadros[i].style.backgroundColor = color[i]; // PASO 2
    cuadros[i].addEventListener("click", () => { // PASO 4
        
        if (cuadros[i].style.backgroundColor == pickedColor.textContent) {
            changeColor(pickedColor.textContent);
    
            h1.style.backgroundColor = pickedColor.textContent;
            mensaje.textContent = "¡Correcto!";
            nuevosColores.textContent = "Play Agian?";      
        } else {
            cuadros[i].style.backgroundColor = body.style.backgroundColor;
            mensaje.textContent = "Intentalo nuevamente";
            console.log("Intentalo nuevamente");
        }
    });
}

nuevosColores.addEventListener("click", () => {
    reset();
});

easyButton.addEventListener("click", () => {
    hardButton.classList.remove("selected");
    easyButton.classList.add("selected");
    numberOfSquads = 3;

    mensaje.textContent = "";
    h1.style.backgroundColor = "darkgreen";
    nuevosColores.textContent = "Nuevos colores";

    generateRandomColors(color, 3);
    pickedColor.textContent = pickColor(numberOfSquads);


    for (let i = 0; i < color.length; i++) {
        if (i >= 3) {
            cuadros[i].style.backgroundColor = "darkgreen";
            cuadros[i].style.display = "none";
        } else {
            cuadros[i].style.backgroundColor = color[i]; // PASO 2
            cuadros[i].addEventListener("click", () => { // PASO 4
        
                if (cuadros[i].style.backgroundColor == pickedColor.textContent) {
                    changeColor(pickedColor.textContent);
            
                    h1.style.backgroundColor = pickedColor.textContent;
                    mensaje.textContent = "¡Correcto!";
            
                } else {
                    cuadros[i].style.backgroundColor = body.style.backgroundColor;
                    mensaje.textContent = "Intentalo nuevamente";
                    console.log("Intentalo nuevamente");
                }           
            });
        }
    }
    // mostrar 3 cuadros
});

hardButton.addEventListener("click", () => {
    easyButton.classList.remove("selected");
    hardButton.classList.add("selected");
    numberOfSquads = 6;

    mensaje.textContent = "";
    h1.style.backgroundColor = "darkgreen";
    nuevosColores.textContent = "Nuevos colores";

    generateRandomColors(color, 6);
    pickedColor.textContent = pickColor(numberOfSquads);


    for (let i = 0; i < color.length; i++) {
        cuadros[i].style.backgroundColor = color[i]; // PASO 2
        cuadros[i].style.display = "block";
        cuadros[i].addEventListener("click", () => { // PASO 4
            
            if (cuadros[i].style.backgroundColor == pickedColor.textContent) {
                changeColor(pickedColor.textContent);
        
                h1.style.backgroundColor = pickedColor.textContent;
                mensaje.textContent = "¡Correcto!";
        
            } else {
                cuadros[i].style.backgroundColor = body.style.backgroundColor;
                mensaje.textContent = "Intentalo nuevamente";
                console.log("Intentalo nuevamente");
            }
        });
    }
    // mostrar 6 cuadros
});

