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

function addItem(name, price){
    let item = {name: name, value: price, qty: 1}
    cart.push(item)
}

function showItems(){
    console.log(cart)
}

addItem("poop", 1.99)
addItem("lava cookie", 10.99)

showItems()