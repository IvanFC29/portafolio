function openTab(evt, tabName) {
  let i, tabcontent, tablinks;
  
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
  
function open_modal(indice) {
  const proyectos = {
    1: {
        title: "Pizarra Digital - Basic Board",
        description: "Una pizarra virtual con funciones básicas para facilitar el trabajo colaborativo. \n Desarrollada con Java como una aplicación de escritorio",
        imagen: "./images/proyect1.png",
        repositorio: "https://github.com/IvanFC29/Pizarra-Digital-BasicBoard.git"
    },
    2: {
        title: "Programa para la salud de los adultos mayores - Long Old Live +",
        description: "Página web para la salud de los adultos mayores, proporcionando ejercicios útiles para sus musculos y ejercicios mentales para fortalezer la mente. \n Desarrollado con JavaScript, HTML y CSS",
        imagen: "./images/proyect2.png",
        repositorio: "https://github.com/borisumss/LongOldLivePlus.git"
    },
    3: {
        title: "Aplicación de Mensajería",
        description: "Aplicación para enviar correos utilizando el protocolo SMTP, permite enviar texto y un archivo adjunto. \n Desarrollado en python como una aplicación de escritorio",
        imagen: "./images/proyect3.png",
        repositorio: "https://github.com/IvanFC29/Mensajeria.git"
    },
    4: {
        title: "Página web de gestión de eventos académicos y competencias UMSS",
        description: "Plataforma para gestionar eventos académicos y competencias en la Universidad Mayor de San Simón. Cuenta con un editor de afiches \n Desarrollado con PHP y Laravel",
        imagen: "./images/proyect4.png",
        repositorio: "https://github.com/IvanFC29/Gestion_Eventos_TIS.git"
    },
    5: {
        title: "Simulación del proceso de una fabrica de Galletas",
        description: "Aplicación que simula el proceso de producir galletas para el calculo de datos en base la simulación de sistemas en escenarios dado un tiempo de producción. \n Desarrollado con Java e inspirado en el proceso del programa ProModel",
        imagen: "./images/proyect5.png",
        repositorio: "https://github.com/IvanFC29/Simulacion-Fabrica-de-Galletas.git"
    }
  };

  const proyecto = proyectos[indice];
  document.getElementById('exampleModalLabel').innerText = proyecto.title;
  document.getElementById('imagen').innerHTML= `<img src="${proyecto.imagen}" alt="Imagen del proyecto" sizes="400">`;
  document.getElementById('texto').innerHTML = `<p>${proyecto.description}</p>`;
  document.getElementById('repository').innerHTML = `<a href="${proyecto.repositorio}" title="Repositorio en github"><i class="fas fa-code"></i></a>`;
}

// document.getElementById("cambiar_tema").addEventListener('click', () => {
//   document.body.classList.toggle("white_mode");
//   document.body.classList.toggle('dark-theme');

//   const modalContentenido = document.getElementById('modalContent');
//   const botonTema = document.getElementById('themeIcon');

//   if (document.body.classList.contains('dark-theme')) {
//     modalContentenido.classList.remove('light-theme');
//     modalContentenido.classList.add('dark-theme');
//     botonTema.classList.remove('fa-moon');
//     botonTema.classList.add('fa-sun');
//   } else {
//     modalContentenido.classList.remove('dark-theme');
//     modalContentenido.classList.add('light-theme');
//     botonTema.classList.remove('fa-sun');
//     botonTema.classList.add('fa-moon');
//   }
// });

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".tablinks").click();
});
  