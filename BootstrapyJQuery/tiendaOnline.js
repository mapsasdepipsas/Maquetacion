$(document).ready(function() {
  let carrito = [];
  let total = 0;

  // Añadir evento al botón "añadir al carrito"
  $(".btn-add-to-cart").on("click", function() {
      let title = $(this).data("title");
      let price = parseFloat($(this).data("price"));

      carrito.push({ title, price });
      total += price;

      updateCarritoModal();
  });

  // ir añadiendo las prendas al componente modal
  function updateCarritoModal() {
      $("#carritoContenido").empty();
      carrito.forEach(item => {
          $("#carritoContenido").append(`<p>PRENDA: ${item.title} - ${item.price}€</p>`);
      });
      $("#suma").text(`Total: ${total.toFixed(2)}€`);
  }

  $(".cart_btn").on("click", function() {
      updateCarritoModal();
  });

  // Al darle a comprar, aparecen estos mensajes
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
