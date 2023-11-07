const textElement = document.getElementById('typing-text');
const textToType = textElement.textContent;
textElement.textContent = ''; 

let charIndex = 0;
const typingSpeed = 50; 

function typeText() {
    if (charIndex < textToType.length) {
        textElement.textContent += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingSpeed);
    }
}

typeText(); 

document.addEventListener("DOMContentLoaded", function () {
    const botonDescargar = document.getElementById("descargar");

    botonDescargar.addEventListener("click", function () {
        const urlArchivo = "/assets/images/CV_Martin_Fernandez.pdf";

        const enlaceDescarga = document.createElement("a");
        enlaceDescarga.href = urlArchivo;
        enlaceDescarga.download = "CV-Martin-Fernandez"; 
        enlaceDescarga.click();
    });
});

