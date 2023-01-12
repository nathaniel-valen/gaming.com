    // Team 3 - Gaming.com
    // ======================
    // 2272003 - Ravel Setiady
    // 2272028 - Nathaniel Valentino Robert 

const productContainer = document.querySelector('.container-produk')
const productModal = document.querySelector('.modalpopup')
fetch('product.json')
    .then((response) => response.json())
    .then((data) => {
        for (let j = 0; j < data.length; j++) {
            div = document.createElement('div')
            div.innerHTML = `<div class="modal fade" id="${data[j].gambar}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-fullscreen">
              <div class="modal-content">
                <div class="modal-header ">
                  <h5 class="modal-title" id="exampleModalLabel">${data[j].judul}</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body d-flex flex-column" style=" margin-left:10%; margin-right:10%;">
                  <img src="/assett/product/${data[j].gambar}.png" class="gambar-produk ${data[j].gambar} " style="margin-left: 28%;" >
                  <p class="fw-semibold text-center fs-4 mt-5">${data[j].juduldeskripsi}</p>
                  <ul>
                    <li class="list-modal">${data[j].deskripsi1} </li>
                    <li class="list-modal">${data[j].Deskripsi2} </li>
                    <li class="list-modal">${data[j].Deskripsi3} </li>
                    <li class="list-modal">${data[j].Deskripsi4} </li>
                    <li class="list-modal">${data[j].Deskripsi5} </li>
                    <li class="list-modal">${data[j].Deskripsi6} </li>
                    <li class="list-modal">${data[j].Deskripsi7} </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          ` ;
            productModal.appendChild(div)
        }
    });


if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var title2 = shopItem.getElementsByClassName('shop-item-title2')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(title, price, imageSrc,title2)
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc,title2) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents = `
          <div class="cart-item cart-column">
              <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
              <span class="cart-item-title">${title}</span>
              <span class="cart-item-title">${title2}</span>
          </div>
          <span class="cart-price cart-column">${price}</span>
          <div class="cart-quantity cart-column">
              <input class="cart-quantity-input" type="number" value="1">
              <button class="btn btn-danger btn-remove" style="--bs-btn-padding-y: .20rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: 0.7rem;" type="button">X</button>
          </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseInt(priceElement.innerText.replace('Rp', '').replace('.', '').replace('.',''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    const numb = total;
    const format = numb.toString().split('').reverse().join('');
    const convert = format.match(/\d{1,3}/g);
    const rupiah =  convert.join('.').split('').reverse().join('')
    document.getElementsByClassName('cart-total-price')[0].innerText = 'Rp ' + rupiah
}