const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    }
    )
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    }
    )
}
/*

var noti = document.querySelector('h1');
var select = document.querySelector('.select');
var button = document.querySelector('close');
for (but of button){
but.addEventListener('click', (e) => {
var add = Number(noti.getAttribute('data-count') || 0);
noti.setAttribute( 'data-count', add + 1);
noti.classList.add('zero');
}
)
}

function addToCart(item){
const add1 = document.getElementsById('add1');
const pro = document.getElementsByClassName('pro');
const cart1 = document.getElementsByiD('cart')
add1.addEventListener('click', () => {
cart1.classList.add('pro');
})


}

function remove1() {
    const tr = document.getElementsByClassName('tr');
    const remove = document.getElementById('remove');

    if (remove) {
        close.addEventListener('click', () => {
            tr.classList.remove('tr');
        }
        )
    }
}
*/

/*
 var addItemId = 0;
function addToCart(item1) {
    addItemId += 1;
    var selectedItem = document.createElement('div');
    selectedItem.classList.add('cartImg');
    selectedItem.setAttribute('id', addItemId);
    var img = document.createElement('img');
    img.setAttribute('src', item1.children[0].currentSrc);
    var cartItems = document.getElementById('pro');
    selectedItem.append(img);
    cartItems.append(selectedItem);
}*/