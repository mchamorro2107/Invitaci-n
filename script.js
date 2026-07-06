// =============================
// ABRIR INVITACIÓN
// =============================

const intro = document.getElementById("intro");
const contenido = document.getElementById("contenido");
const abrirBtn = document.getElementById("abrirBtn");

abrirBtn.addEventListener("click", () => {

    intro.style.opacity = "0";
    intro.style.transition = "1s";

    setTimeout(() => {

        intro.style.display = "none";
        contenido.style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        iniciarAnimaciones();

    }, 1000);

});


// =============================
// CUENTA REGRESIVA
// =============================

// CAMBIAR LA FECHA SI ES NECESARIO
const fechaEvento = new Date("August 15, 2026 21:00:00").getTime();

function actualizarContador() {

    const ahora = new Date().getTime();

    const diferencia = fechaEvento - ahora;

    if (diferencia <= 0) {

        document.getElementById("dias").innerHTML = "00";
        document.getElementById("horas").innerHTML = "00";
        document.getElementById("minutos").innerHTML = "00";
        document.getElementById("segundos").innerHTML = "00";

        return;

    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

    const horas = Math.floor(
        (diferencia % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutos = Math.floor(
        (diferencia % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const segundos = Math.floor(
        (diferencia % (1000 * 60))
        / 1000
    );

    document.getElementById("dias").innerHTML = dias;
    document.getElementById("horas").innerHTML = horas.toString().padStart(2, "0");
    document.getElementById("minutos").innerHTML = minutos.toString().padStart(2, "0");
    document.getElementById("segundos").innerHTML = segundos.toString().padStart(2, "0");

}

setInterval(actualizarContador, 1000);
actualizarContador();


// =============================
// ANIMACIONES AL HACER SCROLL
// =============================

function iniciarAnimaciones() {

    const secciones = document.querySelectorAll(
        ".hero, .info, .contador, .ubicacion, .regalo, footer"
    );

    secciones.forEach(seccion => {

        seccion.classList.add("fade");

    });

    observar();

}

function observar() {

    const elementos = document.querySelectorAll(".fade");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    }, {

        threshold: 0.2

    });

    elementos.forEach(el => observer.observe(el));

}


// =============================
// EFECTO EN BOTONES
// =============================

const botones = document.querySelectorAll("button, .boton");

botones.forEach(boton => {

    boton.addEventListener("mouseenter", () => {

        boton.style.transform = "scale(1.05)";

    });

    boton.addEventListener("mouseleave", () => {

        boton.style.transform = "scale(1)";

    });

});


// =============================
// SCROLL SUAVE EN LINKS
// =============================

document.querySelectorAll('a[href^="#"]').forEach(ancla => {

    ancla.addEventListener("click", function(e){

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if(destino){

            destino.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


// =============================
// MENSAJE EN CONSOLA 😄
// =============================

console.log("%c💍 FALSO CASAMIENTO 💍",
"color:#b71c1c;font-size:28px;font-weight:bold;");

console.log("%cGracias por visitar nuestra invitación ❤️",
"font-size:18px;color:#444;");
