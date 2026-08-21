//free api-->from fakestore api
// project: onclick er maddhome product er price,title cart e joma rakbo and total price show korbo, and koto gula product cart e niyechi sheta count korbo,, details button e click korle sei single product er details show korbe.




//create loadproduct function, data retrived by api.
const laodAllProduct = () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      displayproduct(data);
    });
};



//create displayData function
const displayproduct = (products) => {

  const productContainer = document.getElementById("product-container");

  // iterate array by forEach loop
  products.forEach((product) => {  
 
    //create div, loop er maddhome por por jotogula product(object) bair hbe sob gular jonno 1ta kore div create hbe, sob gula div ke row borabor rakhte hole, tar jonno parent product-container ke flex korte hbe.
    const div = document.createElement("div");
    div.classList.add("card")

    //add api dynamic value by tamplete literals
    div.innerHTML = `
      <img src="${product.image}" class="card-img" alt=""/>
      <h3>${product.title}</h3>
      <h3>${product.price}</h3>
      <P>${product.description.slice(0, 50)}</P>
      <button onclick="singleProduct('${product.id}')">Details</button>

      <button onclick="handleAddToCart('${product.title.slice(0, 12)}', ${product?.price})">Add TO Cart</button>
    `;
   

    //append child into product-container
    productContainer.appendChild(div);
  });
};


const handleAddToCart = (name, price)=>{
 
  //count cart
  const cartCount = document.getElementById("count").innerText;

  let convertedCount = parseInt(cartCount);
        convertedCount = convertedCount + 1;
     document.getElementById("count").innerText = convertedCount;

     console.log(convertedCount);

  const container = document.getElementById("cart-main-container");

//create new div
  const div = document.createElement("div");
  // div er child ke flex korar jonno class create korechi.
  div.classList.add("cart-info");


//div er child p,h3
  div.innerHTML=`
     <P>${name}</P>
     <h3 class="price">${price}</h3>
  `;

  container.appendChild(div);

  //call UpdateTotal function
  UpdateTotal();

};


const UpdateTotal = ()=>{
  
  //Html collection of product's price, like array
  const allPrice = document.getElementsByClassName("price");

  let count = 0;
  for(const element of allPrice){
    count = count + parseFloat(element.innerHTML);
  }
  document.getElementById("total").innerText = count.toFixed(2);


};

//je product er details button e click korbe sei pruduct show korbe.
const singleProduct = (id) =>
 {
  fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res => res.json())
    .then((singleProduct) => {
      console.log(singleProduct);

      const details_contain = document.getElementById("details-container");

      // Create div properly
      const details_div = document.createElement("div");
      details_div.classList.add("details_div");

      // Insert fetched data into the div
      details_div.innerHTML = `
        <h4>ID:${singleProduct.id}</h4>
        <p>Title:${singleProduct.title}</p>
        <p>Desc:${singleProduct.description}</p>
      `;

      details_contain.appendChild(details_div);
    })
    .catch(error => console.error("Error fetching product:", error));
};

laodAllProduct();



