import data from './data.js'

const itemContainer = document.querySelector("#items")

for(let i = 0; i < data.length; i++){
    //create new html elements
    const newDiv = document.createElement('div')
    newDiv.className = 'item'
    const img = document.createElement('img')
    const description = document.createElement('P')
    const price = document.createElement('P')
    const button = document.createElement('button')

    //creates button element
    button.id = data[i].name
    button.dataset.price = data[i].price

    //create an image element
    img.src = data[i].image
    img.width = 300
    img.height = 300

    //add text
    description.innerText = data[i].desc
    price.innerText = data[i].price
    button.innerHTML = "Add to Cart"

    //add to div
    newDiv.appendChild(img)
    console.log(img)

    newDiv.appendChild(description)
    console.log(description)

    newDiv.appendChild(price)
    console.log(price)

    newDiv.appendChild(button)

    itemContainer.appendChild(newDiv)
}

let cart = []
let items = []

const itemList = document.getElementById('item-list')
const all_items_button = Array.from(document.querySelectorAll("button"))

function showItems() {
    itemList.innerHTML = "" //reset the list
    //adds all items to the list
    for (let i = 0; i < cart.length; i++) {
        const name = cart[i].name
        const price = cart[i].price
        const qty = cart[i].qty

        //create the new li and add the content
        const itemElem = document.createElement("li")
        itemElem.innerHTML = `<p>${name}: ${price} X${qty}</p>`

        //append new li to the list
        itemList.appendChild(itemElem)
    }

    //display total price
    const priceElem = document.createElement("li")
    priceElem.innerHTML = `total: ${getTotalPrice()}`
    priceElem.className = "total-price"

    itemList.appendChild(priceElem)
}



function contains(list, item){
    for(let i = 0; i < list.length; i++){
        if(item == list[i])
            return i
    }
    return null
}

function addItem(name, price){
    let index = contains(items, name)
    if(index != null){
        cart[index].qty++
    }
    else {
        const item = { name: name, price: price, qty: 1 }
        cart.push(item)

        items.push(item.name) 
    }   
    //auto update the visible cart every time a new item is added
    showItems()
}

function getTotalPrice(){
    let total = 0
    for(let i = 0; i < cart.length; i++){
        total += cart[i].price * cart[i].qty
    }
    return total
}

function removeItem(index=cart.length-1){
    cart.splice(index, 1)
}

function removeAll(){
    cart = []
}

all_items_button.forEach(elt => elt.addEventListener('click', () => {
    addItem(elt.getAttribute('id'), elt.getAttribute('data-price'))
    showItems()
}))
