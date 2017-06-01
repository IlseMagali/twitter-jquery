window.addEventListener("load", function() {
  // Publicando
  var formulario = document.getElementById("publicador");
  formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    // Obtener datos para la publicación
    var contenedorPublicaciones = document.getElementById("publicaciones")
    var publicacion = document.getElementById("publicacion");
    var mensaje = publicacion.value;

    console.log("publicaciones:", contenedorPublicaciones);
    console.log("publicacion:", publicacion);
    console.log("textarea:" , mensaje);

    //Elementos para la publicación
    var contenedorPublicacion = document.createElement("article");
    var contenedorPublicacionTexto = document.createElement("p");
    var botonBorrarPublicacion = document.createElement("button");

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

});
