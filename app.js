// ========================
// KONTER MAWASANGKA E-SHOP
// ========================

const products = [

{
id:1,
name:"Charger Fast Charging",
price:75000,
image:"https://picsum.photos/400/300?random=1"
},

{
id:2,
name:"Tempered Glass",
price:20000,
image:"https://picsum.photos/400/300?random=2"
},

{
id:3,
name:"Headset Bluetooth",
price:120000,
image:"https://picsum.photos/400/300?random=3"
},

{
id:4,
name:"Power Bank",
price:150000,
image:"https://picsum.photos/400/300?random=4"
},

{
id:5,
name:"Kabel Data Type-C",
price:35000,
image:"https://picsum.photos/400/300?random=5"
},

{
id:6,
name:"Case Anti Shock",
price:50000,
image:"https://picsum.photos/400/300?random=6"
}

];

let cart = [];

const productGrid =
document.getElementById("productGrid");

const cartModal =
document.getElementById("cartModal");

const cartBtn =
document.getElementById("cartBtn");

const closeCart =
document.getElementById("closeCart");

const cartItems =
document.getElementById("cartItems");

const cartTotal =
document.getElementById("cartTotal");

const cartCount =
document.getElementById("cartCount");

const checkoutBtn =
document.getElementById("checkoutBtn");

const searchInput =
document.getElementById("searchInput");

// ========================
// TAMPILKAN PRODUK
// ========================

function displayProducts(items){

productGrid.innerHTML = "";

items.forEach(product=>{

const card =
document.createElement("div");

card.classList.add("product-card");

card.innerHTML = `
<img src="${product.image}">
<h3>${product.name}</h3>

<p>
Rp ${product.price.toLocaleString("id-ID")}
</p>

<button onclick="addToCart(${product.id})">
Tambah ke Keranjang
</button>
`;

productGrid.appendChild(card);

});

}

// ========================
// TAMBAH KERANJANG
// ========================

function addToCart(id){

const product =
products.find(
item => item.id === id
);

cart.push(product);

updateCart();

}

// ========================
// UPDATE CART
// ========================

function updateCart(){

cartItems.innerHTML = "";

let total = 0;

cart.forEach((item,index)=>{

total += item.price;

const div =
document.createElement("div");

div.style.marginBottom = "15px";

div.innerHTML = `
<strong>${item.name}</strong>
<br>
Rp ${item.price.toLocaleString("id-ID")}
<br>
<button onclick="removeItem(${index})">
Hapus
</button>
`;

cartItems.appendChild(div);

});

cartTotal.textContent =
total.toLocaleString("id-ID");

cartCount.textContent =
cart.length;

}

// ========================
// HAPUS ITEM
// ========================

function removeItem(index){

cart.splice(index,1);

updateCart();

}

// ========================
// BUKA MODAL
// ========================

cartBtn.onclick = ()=>{

cartModal.style.display = "flex";

};

// ========================
// TUTUP MODAL
// ========================

closeCart.onclick = ()=>{

cartModal.style.display = "none";

};

// ========================
// KLIK LUAR MODAL
// ========================

window.onclick = (e)=>{

if(e.target === cartModal){

cartModal.style.display = "none";

}

};

// ========================
// CHECKOUT WA
// ========================

checkoutBtn.onclick = ()=>{

if(cart.length === 0){

alert(
"Keranjang masih kosong"
);

return;

}

let pesan =
"🛒 PESANAN KONTER MAWASANGKA%0A%0A";

let total = 0;

cart.forEach(item=>{

pesan +=
`• ${item.name} - Rp ${item.price.toLocaleString("id-ID")}%0A`;

total += item.price;

});

pesan +=
`%0ATotal: Rp ${total.toLocaleString("id-ID")}`;

window.open(

`https://wa.me/6287833718917?text=${pesan}`,

"_blank"

);

};

// ========================
// SEARCH
// ========================

searchInput.addEventListener(
"keyup",
()=>{

const keyword =
searchInput.value.toLowerCase();

const filtered =
products.filter(product=>

product.name
.toLowerCase()
.includes(keyword)

);

displayProducts(filtered);

}
);

// ========================
// LOAD AWAL
// ========================

displayProducts(products);
