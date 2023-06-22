const container = document.getElementById('container');
let tags = document.getElementById('tags');
let button1 = document.getElementById('button');
let searchbtn = document.getElementById('search');
var products;
button1.addEventListener('click', search)

// Functions for the search..
async function search() {
  const searchResponse = await fetch(`https://dummyjson.com/products/search?q=${searchbtn.value}`)
  .then(res => res.json())

  container.innerHTML = ''
  let products = searchResponse.products;
  products.forEach((data) => {
    const card = `<div class = 'card'> 
    <img src = ${data.thumbnail} />
    <h4>${"Product Name : "} ${data.title} </h4>
    <h4>${"Product Price : "} ${data.price} </h4>
    </div>`
    container.innerHTML += card; 
});
}
// Functions for the product..
async function getPorducts(){
    var productResponse =await fetch('https://dummyjson.com/products')
       .then(res => res.json())
      //  console.log(productResponse)
       

       products = productResponse.products;
      //  console.log(products);
      //  Allproducts = products


       // Checking the products using for loop..
    //    for( var i =0; i< products.length;i++){
    //     const card = `<div class = 'card'> 
    //     <img src = ${products[i].thumbnail} />
    //     <h4>${"Product Name : "} ${products[i].title} </h4>
    //     <h4>${"Product Price : "} ${products[i].price} </h4>
    //     </div>`
    //     container.innerHTML += card;
    //    }

        // Checking the products using for Each Array Method..
        products.forEach((data) => {
            const card = `<div class = 'card'> 
            <img src = ${data.thumbnail} />
            <h4>${"Product Name : "} ${data.title} </h4>
            <h4>${"Product Price : "} ${data.price} </h4>
            </div>`
            container.innerHTML += card;
            // container.style.backgroundColor = ' rgb(228, 222, 222)'
            // if(container){
            //   container.innerHTML = ' '
            // }
            // else{
            //   container.innerHTML += card;
            // }
            
        });

        // Map method return the array..
        // Now extracting the categories from the product using the Map method in Array.. 

        let categories = [];
        products.map((data)=>{
            if(!(categories.includes(data.category))){
               return (categories.push(data.category))
            }
        })
        console.log(categories)

        // Now we will print the each element present in the Categories by using the ForEach method ..

        categories.forEach((data)=>{
            let button = `<button class = 'chip' id= '${data}' onclick=filter(this)>${data}</button>`
            tags.innerHTML += button;
        })
        
        // chip.addEventListener('submit', filter);
        // function filter(btn){
        //     console.log(btn);
        // }
        // button.addEventListener('click', filter);
        // function filter(){
        //     alert(searchbtn.value)
        //     if(searchbtn.value == laptops){
        //         laptops.forEach((data)=> {
        //             var card = `<div class = 'card'>
        //             <img src = ${data.thumbnail} />
        //             <h4> ${"Product Name : "} ${data.title} </h4>
        //             <h4> ${"Prodcuct Price : "} ${data.price} </h4>
        //             </div>
        //             ` 
        //             container1.innerHTML += card;
        //             container.remove();
        //         });
        //     } 
        // }


                // For laptop Filter
                
                const laptops = products.filter((data)=> data.category == "laptops")
                console.log("laptops --> " , laptops);
                

                laptops.forEach((data)=> {
                var card = `<div class = 'card'>
                <img src = ${data.thumbnail} />
                <h4> ${"Product Name : "} ${data.title} </h4>
                <h4> ${"Prodcuct Price : "} ${data.price} </h4>
                </div>
                ` 
                container.innerHTML += card;
            });
          
                // For Smartphone filter.
                const smartphones = products.filter((data)=> data.category == "smartphones")
                console.log("smartphones --> " , smartphones);

                  smartphones.forEach((data)=> {
                  var card = `<div class = 'card'>
                    <img src = ${data.thumbnail} />
                    <h4> ${"Product Name : "} ${data.title} </h4>
                    <h4> ${"Prodcuct Price : "} ${data.price} </h4>
                    </div>` 
                    container.innerHTML += card; 
                  });
              
                // For fragrances filter
              
                const fragrances = products.filter((data)=> data.category == "fragrances")
                console.log("fragrances --> " , fragrances);

                fragrances.forEach((data)=> {
                var card = `<div class = 'card'>
                <img src = ${data.thumbnail} />
                <h4> ${"Product Name : "} ${data.title} </h4>
                <h4> ${"Prodcuct Price : "} ${data.price} </h4>
                </div>`
                container.innerHTML += card;
           
                });
              

                  // For skincare filter
                  
                  const skincare = products.filter((data)=> data.category == "skincare")
                  console.log("skincare --> " ,skincare);
  
                  skincare.forEach((data)=> {
                  var card = `<div class = 'card'>
                  <img src = ${data.thumbnail} />
                  <h4> ${"Product Name : "} ${data.title} </h4>
                  <h4> ${"Prodcuct Price : "} ${data.price} </h4>
                  </div>`
                  container.innerHTML += card;
                //   console.log("skincare --> " , card); 
                  });
              
                   // For groceries filter
                   
                   const groceries = products.filter((data)=> data.category == "groceries")
                   console.log("groceries --> " ,groceries);
   
                   groceries.forEach((data)=> {
                   var card = `<div class = 'card'>
                   <img src = ${data.thumbnail} />
                   <h4> ${"Product Name : "} ${data.title} </h4>
                   <h4> ${"Prodcuct Price : "} ${data.price} </h4>
                   </div>`
                   container.innerHTML += card;
                 
                   });
                  

                    // For home-decoration filter
                  
                  const homedecoration = products.filter((data)=> data.category == "home-decoration")
                  console.log("home-decoration --> " ,homedecoration);
  
                  homedecoration.forEach((data)=> {
                  var card = `<div class = 'card'>
                  <img src = ${data.thumbnail} />
                  <h4> ${"Product Name : "} ${data.title} </h4>
                  <h4> ${"Prodcuct Price : "} ${data.price} </h4>
                </div>`
                // if(container){
                //   container.innerHTML = ' '
                // }
                  container.innerHTML += card;
                //   console.log("home-decoration --> " , card); 
                });
              
          
        
        // })
        
        

       
        // Calling function on the button..

        


}
function filter(btn){
  if(btn.innerHTML == "smartphones"){
    const smartphones = products.filter((data)=> data.category == "smartphones")
                console.log("smartphones --> " , smartphones);

                container.innerHTML = ''
                  smartphones.forEach((data)=> {
                  var card = `<div class = 'card'>
                    <img src = ${data.thumbnail} />
                    <h4> ${"Product Name : "} ${data.title} </h4>
                    <h4> ${"Prodcuct Price : "} ${data.price} </h4>
                    </div>`
                    // if(container){
                    //   container.innerHTML = ' '
                    // }
                    container.innerHTML += card;
                // console.log("smartphones --> " , card); 
                  });
              // console.log(products);

  }
  else if(btn.innerHTML == "laptops"){
    const laptops = products.filter((data)=> data.category == "laptops")
                console.log("laptops --> " , laptops);
                
                container.innerHTML = '';
                laptops.forEach((data)=> {
                var card = `<div class = 'card'>
                <img src = ${data.thumbnail} />
                <h4> ${"Product Name : "} ${data.title} </h4>
                <h4> ${"Prodcuct Price : "} ${data.price} </h4>
                </div>
                ` 
                container.innerHTML += card;
            });
  }
  else if(btn.innerHTML == "fragrances"){
    const fragrances = products.filter((data)=> data.category == "fragrances")
                console.log("fragrances --> " , fragrances);
                
                container.innerHTML = '';
                fragrances.forEach((data)=> {
                var card = `<div class = 'card'>
                <img src = ${data.thumbnail} />
                <h4> ${"Product Name : "} ${data.title} </h4>
                <h4> ${"Prodcuct Price : "} ${data.price} </h4>
                </div>`
                container.innerHTML += card;
           
                });
  }
  else if(btn.innerHTML == "skincare"){
    const skincare = products.filter((data)=> data.category == "skincare")
                  console.log("skincare --> " ,skincare);
                  
                  container.innerHTML = '';
                  skincare.forEach((data)=> {
                  var card = `<div class = 'card'>
                  <img src = ${data.thumbnail} />
                  <h4> ${"Product Name : "} ${data.title} </h4>
                  <h4> ${"Prodcuct Price : "} ${data.price} </h4>
                  </div>`
                  container.innerHTML += card;
                  });
  }
  else if(btn.innerHTML == "groceries"){
    const groceries = products.filter((data)=> data.category == "groceries")
    console.log("groceries --> " ,groceries);
    
    container.innerHTML = '';
    groceries.forEach((data)=> {
    var card = `<div class = 'card'>
    <img src = ${data.thumbnail} />
    <h4> ${"Product Name : "} ${data.title} </h4>
    <h4> ${"Prodcuct Price : "} ${data.price} </h4>
    </div>`
    container.innerHTML += card;
    });
   
  }
  else if(btn.innerHTML == "home-decoration"){
    const homedecoration = products.filter((data)=> data.category == "home-decoration")
    console.log("home-decoration --> " ,homedecoration);
    
    container.innerHTML = '';
    homedecoration.forEach((data)=> {
    var card = `<div class = 'card'>
    <img src = ${data.thumbnail} />
    <h4> ${"Product Name : "} ${data.title} </h4>
    <h4> ${"Prodcuct Price : "} ${data.price} </h4>
    </div>`
    container.innerHTML += card;
  });

  }

}
getPorducts()