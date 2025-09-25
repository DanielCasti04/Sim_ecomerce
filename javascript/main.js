const productos = [
  {
    id: "Teclado01",
    titulo: "Teclado01",
    imagen: "img/teclado1.jpg",
    categoria: {
      nombre: "Teclados",
      id: "teclado",
    },
    precio: 1000,
  },
  {
    id: "Teclado02",
    titulo: "Teclado02",
    imagen: "img/teclado2.jpg",
    categoria: {
      nombre: "Teclados",
      id: "teclado",
    },
    precio: 1500,
  },
  {
    id: "Teclado03",
    titulo: "Teclado03",
    imagen: "img/teclado3.jpg",
    categoria: {
      nombre: "Teclados",
      id: "teclado",
    },
    precio: 1000,
  },
  {
    id: "Mouse01",
    titulo: "Mouse01",
    imagen: "img/mouse1.jpg",
    categoria: {
      nombre: "Mouse",
      id: "mouse",
    },
    precio: 1000,
  },
  {
    id: "Mouse02",
    titulo: "Mouse02",
    imagen: "img/mouse2.jpg",
    categoria: {
      nombre: "Mouse",
      id: "mouse",
    },
    precio: 1000,
  },
  {
    id: "Mouse03",
    titulo: "Mouse03",
    imagen: "img/mouse3.jpg",
    categoria: {
      nombre: "Mouse",
      id: "mouse",
    },
    precio: 1000,
  },
];
// DOM
const contenedorProductos = document.querySelector(".contenedor_productos");
const botonesCategoria = document.querySelectorAll(".boton_categoria");
const TituloPrincipal = document.querySelector(".titulo_principal");

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
              `;
    contenedorProductos.append(div);
  });
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
