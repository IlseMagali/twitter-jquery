window.addEventListener("load", function() {

  // funcionalidad para contar caracteres
  var publicacion = document.getElementById("publicacion");
  var mensaje = publicacion.value;
  publicacion.addEventListener("keyup", contarCaracteres);
  publicacion.addEventListener("keyup", validarPublicacion);

  function contarCaracteres() {
    var contadorLimite = 140;
    var contadorDeCaracteres = document.getElementById("contadorCaracteres");
    var botonPublicar = document.getElementById("botonPublicar");
    var caracteresPublicacion = publicacion.value.length;
    // var caracteresEscritos = contadorLimite - caracteresPublicacion;


    if (caracteresPublicacion >= 120) {
      contadorDeCaracteres.classList.add("text-success");
    }

    if (caracteresPublicacion >= 130) {
      contadorDeCaracteres.classList.remove("text-success");
      contadorDeCaracteres.classList.add("text-warning");
    }

    if (caracteresPublicacion >= 141) {
      contadorDeCaracteres.classList.remove("text-warning");
      contadorDeCaracteres.classList.add("text-danger");

    }

    contadorDeCaracteres.textContent = caracteresPublicacion;
    // console.log(caracteresPublicacion);
  }

  function validarPublicacion () {
    var botonPublicar = document.getElementById("botonPublicar");
    var caracteresPublicacion = publicacion.value.length;

    if (caracteresPublicacion > 0) {
      botonPublicar.removeAttribute("disabled");
    }
    else {
      botonPublicar.setAttribute("disabled", true);
    }

  }
  // Publicando
  var formulario = document.getElementById("publicador");
  formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    // Obtener datos para la publicación
    var contenedorPublicaciones = document.getElementById("publicaciones");
    var publicacion = document.getElementById("publicacion");
    var mensaje = publicacion.value;


    //Elementos para la publicación
    var contenedorPublicacion = document.createElement("article");
    var contenedorPublicacionTexto = document.createElement("p");
    var botonBorrarPublicacion = document.createElement("button");

    // funcionalidad de botón para eliminar publicación
    botonBorrarPublicacion.addEventListener("click", eliminarTarea);

    // customizando Elementos para publicar
    contenedorPublicacion.classList.add("jumbotron");
    contenedorPublicacionTexto.textContent = mensaje;
    botonBorrarPublicacion.classList.add("btn");
    botonBorrarPublicacion.classList.add("btn-primary");
    botonBorrarPublicacion.textContent = "borrar";

    // agregarlos al DOM
    contenedorPublicaciones.appendChild(contenedorPublicacion);
    contenedorPublicacion.appendChild(contenedorPublicacionTexto);
    contenedorPublicacion.appendChild(botonBorrarPublicacion);

    publicacion.value = "";

  });

  function eliminarTarea () {
    this.parentNode.classList.add("eliminar-contenedor");
  }

});
