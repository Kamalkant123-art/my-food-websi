var swiper = new Swiper(".mySwiper", {
  loop: true,
      navigation: {
        nextEl: "#prev",
        prevEl: "#next",
      },
    });


const cartIcon = document.querySelector('.cart-icon');  
const cartTab = document.querySelector('.cart-tab');
const closeBtn= document.querySelector('.close-btn');

cartIcon.addEventListener('click',()=> cartTab.classList.add('cart-tab-active'));
closeBtn.addEventListener('click',()=>cartTab.classList.remove('cart-tab-active'));

let productList = [];

const showcards = () =>{

  productList.forEach(product =>{

    const orderCard = document.createElement('div');
    orderCard.classList.add('order-card');

    orderCard.innerHTML = `
     <div class="card-image">
                <img src="${product.image}">
              </div>
              <h3>${product.name}</h3>
              <h4>${product.price}</h4>
              <a href="#" class="btn">add to cart</a>
          
    `;
    cardList.appendChild(orderCard);
  })
}
const initApp = () =>{
    
  fetch('products.json').then
  (response => response.json()).then
  (data =>{


    productList = data;
    showcards();
    
  })
}

initApp();

fetch ('product.json').then 
(response => response. json())

