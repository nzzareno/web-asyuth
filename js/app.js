// import LocomotiveScroll from "locomotive-scroll";
// const scroll = new LocomotiveScroll({
//   el: document.querySelector("[data-scroll-container]"),
//   smooth: true,
// });

const tbody = document.querySelector(".tbody");
let carrito = [];
const Clickbutton = document.querySelectorAll(".add");

Clickbutton.forEach((btn) => {
  btn.addEventListener("click", addToCarritoItem);
});

function addToCarritoItem(e) {
  const button = e.target;
  const item = button.closest(".right");
  const itemTitle = item.querySelector(".subtexto").textContent;
  const itemPrice = item.querySelector(".precio").textContent;
  const itemImg = item.querySelector(".kill").src;
  const itemSize = item.querySelector("select").value;
  const itemColor = item.querySelector(".color").textContent;

  const newItem = {
    title: itemTitle,
    img: itemImg,
    size: itemSize,
    color: itemColor,
    precio: itemPrice,
    cantidad: 1,
  };

  addItemCarrito(newItem);
}

function addItemCarrito(newItem) {
  const alert = document.querySelector(".alert");
  setTimeout(function () {
    alertify.success("PRODUCT ADDED TO CART")
    alert.classList.add("hide");
    
  }, 300);

 
  
  const InputElemento = tbody.getElementsByClassName("input__elemento");

  for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].title.trim() === newItem.title.trim()) {
      carrito[i].cantidad++;
      const inputValue = InputElemento[i];
      inputValue.value++;
      CarritoTotal();
      return null;
    }
  }

  carrito.push(newItem);
  renderCarrito();
}

function renderCarrito() {
  tbody.innerHTML = "";
  carrito.map((item) => {
    const div = document.createElement("div");
    div.className = "card";
    div.classList.add("ItemCarrito");
    const Content = `
    <div class="card-title">
    <div class="col-6">
    <img src=${item.img}
      class="img-responsive mt-2" alt="39">
  </div>
  <div class="col-6">
    <a href="#" class=" title btn-link">${item.title}</a>
  
    <p class="text-dark">Size: ${item.size} </p>
    <p class="text-dark"> ${item.color} </p>
    <h6 class="font-weight-bold text-success">${item.precio}</h6>
    <input type="number" min="1" value=${item.cantidad} class="input__elemento">
    <button class="delete btn btn-danger">x</button>
  </div>
  </div>
    `;

    div.innerHTML = Content;
    tbody.append(div);

    div.querySelector(".delete").addEventListener("click", removeItemCarrito);
    div
      .querySelector(".input__elemento")
      .addEventListener("change", sumaCantidad);
  });
  CarritoTotal();
}

function CarritoTotal() {
  let Total = 0;
  const itemCartTotal = document.querySelector(".itemCartTotal");
  carrito.forEach((item) => {
    const precio = Number(item.precio.replace("£", ""));
    Total = Total + precio * item.cantidad;
  });

  itemCartTotal.innerHTML = `PURCHASE £${Total}`;
  addLocalStorage();
}

function removeItemCarrito(e) {
  const buttonDelete = e.target;
  const div = buttonDelete.closest(".ItemCarrito");
  const title = div.querySelector(".title").textContent;
  for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].title.trim() === title.trim()) {
      carrito.splice(i, 1);
    }
  }

  const alert = document.querySelector(".remove");
  setTimeout(function () {
    alert.classList.add("remove");
    alertify.error("PRODUCT REMOVE FROM CART")
  }, 300);
  alert.classList.remove("remove");
  div.remove();
  CarritoTotal();
}

function sumaCantidad(e) {
  const sumaInput = e.target;
  const div = sumaInput.closest(".ItemCarrito");
  const title = div.querySelector(".title").textContent;
  carrito.forEach((item) => {
    if (item.title === title) {
      sumaInput.value < 1 ? (sumaInput.value = 1) : sumaInput.value;
      item.cantidad = sumaInput.value;
      CarritoTotal();
    }
  });
}

function addLocalStorage() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}
window.onload = function () {
  const storage = JSON.parse(localStorage.getItem("carrito"));
  if (storage) {
    carrito = storage;
    renderCarrito();
  }
};

 