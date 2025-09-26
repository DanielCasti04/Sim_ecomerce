// DOM
const contenedorProductos = document.querySelector(".contenedor_productos");
const botonesCategoria = document.querySelectorAll(".boton_categoria");
const TituloPrincipal = document.querySelector(".titulo_principal");
let botonesAgregar = document.querySelectorAll(".producto_agregar");
const numerito = document.querySelector(".numerito");
//funcion cargar productos
function CargarProductos(productosElegidos) {
  contenedorProductos.innerHTML = " ";
  productosElegidos.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = ` 
            <img class="producto_imagen" src="${producto.imagen}" alt="${producto.titulo}" />
            <div class="producto_detalles">
              <h3 class="producto_titulo">${producto.titulo}</h3>
              <p class="producto_precio">$${producto.precio}</p>
              <button class="producto_agregar" id="${producto.id}" >Agregar</button>
              </div>
              `;
    contenedorProductos.append(div);
  });
  actualizarBotonesAgregar();
  console.log(botonesAgregar);
}
CargarProductos(productos);

botonesCategoria.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    botonesCategoria.forEach((boton) => boton.classList.remove("active"));
    e.currentTarget.classList.add("active");
    if (e.currentTarget.id != "todos") {
      const productoCategoria = productos.find(
        (producto) => producto.categoria.id === e.currentTarget.id
      );
      TituloPrincipal.innerText = productoCategoria.categoria.nombre;
      const productosBtn = productos.filter(
        (producto) => producto.categoria.id === e.currentTarget.id
      );
      CargarProductos(productosBtn);
    } else {
      TituloPrincipal.innerText = "Todos los productos";
      CargarProductos(productos);
    }
  });
});
function actualizarBotonesAgregar() {
  botonesAgregar = document.querySelectorAll(".producto_agregar");
  botonesAgregar.forEach((boton) => {
    boton.addEventListener("click", agregarAlCarrito);
  });
}

let productosEnCarrito = localStorage.getItem("productos_en_carrito");
productosEnCarrito = productosEnCarrito ? JSON.parse(productosEnCarrito) : [];

function agregarAlCarrito(e) {
  const idBoton = e.currentTarget.id;
  const productoAgregado = productos.find(
    (producto) => producto.id === idBoton
  );
  if (productosEnCarrito.some((producto) => producto.id === idBoton)) {
    const index = productosEnCarrito.findIndex(
      (producto) => producto.id === idBoton
    );
    productosEnCarrito[index].cantidad++;
  } else {
    productosEnCarrito.push({
      ...productoAgregado,
      cantidad: 1,
    });
  }
  actualizarNumerito();

  localStorage.setItem(
    "productos_en_carrito",
    JSON.stringify(productosEnCarrito)
  );
}

function actualizarNumerito() {
  let nuevoNumerito = productosEnCarrito.reduce(
    (acc, producto) => acc + producto.cantidad,
    0
  );
  numerito.innerText = nuevoNumerito;
}
actualizarNumerito();
