const btn = document.getElementById("load");
const productBox = document.getElementById("products");
const statusText = document.getElementById("status");

function createCard(product) {
  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.src = product.image;

  const title = document.createElement("h4");
  title.textContent = product.title;

  const price = document.createElement("p");
  price.textContent = "$" + product.price;

  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(price);

  return card;
}

async function loadProducts() {
  productBox.innerHTML = "";
  statusText.textContent = "Loading...";

  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    data.forEach(p => {
      console.log("Product:", p.title);
      console.log("Price: $" + p.price);
      console.log("Image:", p.image);
      console.log("------------------------");

      productBox.appendChild(createCard(p));
    });

    statusText.textContent = "";
  } catch (err) {
    statusText.textContent = "Failed to load products. Please try again.";
    statusText.className = "error";
  }
}

btn.addEventListener("click", loadProducts);
