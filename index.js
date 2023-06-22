// var containers = document.getElementById('container');



// async function getproduct(){
//     const productResponse = await fetch('https://dummyjson.com/products')
//         .then(res => res.json())

//         let products = productResponse.products;
//         console.log(products); 

// for(var i = 0; i < products.length ; i++){
//     let card = `<div class='card'>
//     <img src = ${products[i].thumbnail} />
//     <h4>${products[i].title}</h4> 
//     </div>`
//     containers.innerHTML += card 
// }


// }
// getproduct()

// let products = productResponse.products;
// console.log(products); 

// for(var i = 0; i < products.length ; i++){
//     let card = `<div class='card'>
//     <img src = ${products[i].thumbnail} />
//     <h4>${products.title}</h4> 
//     </div>`
// }
// containers.innerHTML += card 

getPorducts()
const container = document.getElementById('container')
const tags = document.getElementById('tags')

async function getPorducts() {
    const productsResponse = await fetch('https://dummyjson.com/products')
        .then(res => res.json())

    let products = productsResponse.products

    //if we do it thruofh for loop

    // for (var i = 0; i < products.length; i++) {
    //     const card = `<div class='card' >
    //     <img src =${products[i].thumbnail} />
    //     <h4>${products[i].title} </h4>
    //     </div>`
    // }

    //map
    // let categories = products.map((obj, i) => {
    //     var prod = obj
    //     prod.available = true
    //     return prod
    // })



    //For Each
    products.forEach((data, i) => {
        const card = `<div class='card' >
        <img src =${data.thumbnail} />
        <h4>${"Product : "} ${ data.title} </h4>
        <h4>${"Price : "} ${ data.price} </h4>
        </div>`
        container.innerHTML += card
    })

    //map
    var categories = []
    products.map((obj, i) => {
        if (!categories.includes(obj.category)) {
            categories.push(obj.category)
        }
    })
    console.log(categories)
    categories.forEach((cat, i) => {
        const chip = `<button class = 'chip'>${cat}</button>`
        tags.innerHTML += chip
    })
//    let chips = document.getElementsByClassName('chip');
//    chips.addEventListener('click',filterItems)
    


    // filter

    // function filterItems(){
        for(var i=0 ; i<=categories.length;i++){
            if(categories[i]=="Laptops"){
                console.log(categories[i]);
    
            }
        }

    // }
    // filterItems();
    

        const Laptops = products.filter((data) => data.category == 'laptops')
        console.log('Laptops->', Laptops)

        Laptops.forEach((data)=> {
           const card = `<div class='card' >
           <img src =${data.thumbnail} />
           <h4>${"Product : "} ${ data.title} </h4>
           <h4>${"Price : "} ${ data.price} </h4>
           </div>`
           categories.innerHTML += card
        }) 
       
    

        
    

   
    

    //find
    const iphone = products.find((data) => data.title == 'iPhone X')
    console.log('iphone->', iphone)

}





//for each
//map
//filter
//find
//findbyindex
//reduce
//sort