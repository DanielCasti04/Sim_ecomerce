const productosEnCarrito = JSON.parse(
  localStorage.getItem("productos_en_carrito")
);

const CarritoVacio = document.querySelector("#carrito_vacio");
const CarritoProductos = document.querySelector("#carrito_productos");
const CarritoAcciones = document.querySelector("#carrito_acciones");
const CarritoComprado = document.querySelector("#carrito_comprado");

if (productosEnCarrito && productosEnCarrito.length > 0) {
  CarritoVacio.classList.add("disabled");
  CarritoProductos.classList.remove("disabled");
  CarritoAcciones.classList.remove("disabled");
  CarritoComprado.classList.add("disabled");

  CarritoProductos.innerHTML = " ";

  productosEnCarrito.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("carrito_producto");
    div.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.titulo}" />
              <div class="carrito_producto_titulo">
                <small>Titulo</small>
                <h3>${producto.titulo}</h3>
              </div>
              <div class="carrito_producto_cantidad">
                <small>Cantidad</small>
                <p>${producto.cantidad}</p>
              </div>
              <div class="carrito_producto_precio">
                <small>Precio</small>
                <p>${producto.precio}</p>
              </div>
              <div class="carrito_producto_subtotal">
                <small>Subtotal</small>
                <p>${producto.precio * producto.cantidad}</p>
              </div>
              <button class="carrito_producto_eliminar" id= "${producto.id}">
                <i class="bi bi-trash-fill"></i>
              </button>    
    `;

    CarritoProductos.append(div);
  });
} else {
}
