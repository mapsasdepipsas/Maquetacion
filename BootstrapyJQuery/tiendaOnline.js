$(document).ready(function() {
    let carrito = [];
    let total = 0;
  
    //añadir evento al botón "añadir al carrito" 
    $(".btn-add-to-cart").on("click", function() {
      let title = $(this).data("title");
      let price = parseFloat($(this).data("price"));
  
      carrito.push({ title, price });
      total += price;
  
      updateCarritoModal();
    });
  
    //funcion para ir añadiendo las prendas al comp. modal
    function updateCarritoModal() {
      $("#carritoContenido").empty();
      carrito.forEach(item => {
        $("#carritoContenido").append(`<p>PRENDA: ${item.title} - ${item.price}€</p>`);
      });
      $("#totalAmount").text(`${total.toFixed(2)}€`);
    }
  
    $(".cart_btn").on("click", function() {
      updateCarritoModal();
    });
  
    //cuando le damos al boton comprar, aparecen estos mensajes segun si hay prendas o no en el carrito
    $("#comprarBtn").on("click", function() {
      if (carrito.length > 0) {
        alert("Felicidades, acabas de ser timado :)");
      } else {
        alert("Carrito vacío");
      }
      carrito = [];
      total = 0;
      updateCarritoModal();
      $("#carritoModal").modal("hide");
    });
  });