window.addEventListener("load", () => {

    var losnombres = ["Pedro", "Julia", "Mario"]; // Array nombres
    var fecha = document.getElementById("fecha");
    var categoria = document.getElementById("lista");

/* Al hacer clic en cambio trabajador llamo a funcion que me genera los nombres del array nombres
   de forma aleatoria en el input nombre */
    document.getElementById("OtroTrabajador").addEventListener("click", function() {
        var cambioNombres = Math.floor(Math.random()*losnombres.length);
        var nombres = document.getElementById("nombres");
        
        nombres.value = losnombres[cambioNombres];
        
    });   

/* Funcion que segun la cadegoria que seleccione llama a una funcion cuyos parametros hacen
   todas las modificaciones por imagenes, productos y precios */
   var mostrarProductos = (sc) => {
      switch(sc.target.id) {
        case "pescadito":
            modificarProductos("1", "img/lubina.jpg", "Lubina", "12€");
            modificarProductos("2", "img/emperador.jpg", "Emperador", "8€");  
            modificarProductos("3", "img/rodaballo.jpg", "Rodaballo", "13€");  
        ;break;
        case "carnecita":
            modificarProductos("1", "img/pollo.jpeg", "Pollo", "17€");
            modificarProductos("2", "img/conejo.jpg", "Conejo", "11€");  
            modificarProductos("3", "img/cerdo.jpeg", "Cerdo", "9€");  
        ;break;
        case "verdurita":
            modificarProductos("1", "img/berenjena.jpg", "Berenjena", "5€");
            modificarProductos("2", "img/brocoli.jpg", "Brocoli", "14€");  
            modificarProductos("3", "img/zanahoria.jpg", "Zanahoria", "13€");  
        ;break;
        case "frutita":
            modificarProductos("1", "img/platano.jpg", "Platano", "15€");
            modificarProductos("2", "img/manzana.jpg", "Manzana", "12€");  
            modificarProductos("3", "img/naranja.jpg", "Naranja", "9€");  
        ;break;
    }
   }

   /* Funcion que voy a llamar por cada categoria cuyos parametros hacen las modificaciones de fotos productos
      texto y precio */
   var modificarProductos = (n, fuente, elproducto, elprecio) => {
          document.getElementById(`pro${n}`).classList.add("mostrar-productos");
          document.getElementById(`imagen${n}`).setAttribute("src", fuente);
          document.getElementById(`producto${n}`).innerHTML = elproducto;
          document.getElementById(`precio${n}`).innerHTML = elprecio;

   }
 
/* Itero por cada una de las opciones del select, y llamo a una función que se encargar de 
    mostrar las casillas con los productos */
      for(var i=0;i<document.getElementsByTagName("option").length;i++) {
            document.getElementsByTagName("option")[i].addEventListener("click", mostrarProductos);
      }

    var tabla = document.getElementById("tabla");

    /* Itero por cada una de las fotos de la pagina, y aquellas que haya clicado me selecciona su texto 
       correspondiente de abajo sobre productos y precio, y me genera los registros de facturacion */
     var imagenes = document.querySelectorAll("img");
     imagenes.forEach((i) => {
        i.addEventListener("click", function() {
            var product = i.nextElementSibling.innerHTML; // Selecciono nombre producto
            var price = i.nextElementSibling.nextElementSibling.innerHTML; // Selecciono el valor del precio 
            if(nombres.value.length != 0 && fecha.value.length != 0) {
                tabla.innerHTML += "<tr><td>"+categoria.value+"</td><td>"+product+"</td><td>"+price+"</td><td>"+nombres.value+"</td><td>"+fecha.value+"</td></tr>";
            }
        });
     });
   
});