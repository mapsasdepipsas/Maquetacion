jQuery(function($) {
    let carrito = [];
    let total = 0;
  
    // evento al botón "añadir al carrito"
    $(".btn-addcarrito").on("click", function() {
      let title = $(this).data("title");
      let price = $(this).data("price");
  
      carrito.push({ title, price });
      total += price;
  
      updateCarritoModal();
    });
  
    // evento al botón "Comprar"
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
  
    // aactualizar el contenido del carrito en el modal
    function updateCarritoModal() {
        let $carritoContenido = $("#carritoContenido");
        $carritoContenido.empty();
      
        $.each(carrito, function(index, item) {
          $carritoContenido.append($("<p>").text(`PRENDA: ${item.title} - ${item.price}€`));
        });
      
        $("#suma").text(`TOTAL COMPRA: ${total}€`);
      }      
  });