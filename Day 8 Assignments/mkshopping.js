// JS Batch 2 : Day 8 Assignment : Shopping Site : Manikandan.N 
let products=[
    {
      id: 1,
      name: "White Peace Tshirt",
      size: "M",
      color: "White",
      price: 500,
      image: "product1.jpg",
      description: "World Peace Logo Design Round neck Half sleeve Tshirt for Men",
    },
    {
      id: 2,
      name: "Return of the King",
      size: "S",
      color: "Black",
      price: 400,
      image: "product2.jpg",
      description: "Black Half sleeve printed Tshirt 'Return of the King'",
    },
    {
      id: 3,
      name: "Attitude Block Tshirt",
      size: "M",
      color: "Red Block",
      price: 800,
      image: "product3.jpg",
      description: "Block Colours Full sleeve Attitude 90s vibe",
    },
    {
      id: 4,
      name: "Joker Printed Tshirt",
      size: "M",
      color: "Black",
      price: 400,
      image: "product4.jpg",
      description: "Printed Black Round Neck Half sleeve Joker cards ",
    },
    {
      id: 5,
      name: "Floral Black & White Shirt",
      size: "M",
      color: "Black and White",
      price: 600,
      image: "product5.jpg",
      description: "Pure Cotton Black & White Summer Shirt for Men",
    },
    {
      id: 6,
      name: "Royal Outfit",
      size: "M",
      color: "White",
      price: 2500,
      image: "product6.jpg",
      description: "Indian Royal Collection with handwork special design",
    },
    {
      id: 7,
      name: "Flash Tshirt",
      size: "L",
      color: "Red",
      price: 600,
      image: "product7.jpg",
      description: "Classic Flash Logo tshirt Half sleeve Round neck",
    },
    {
      id: 8,
      name: "Red Jerkin for Men",
      size: "L",
      color: "Red",
      price: 1999,
      image: "product8.jpg",
      description: "Red jerkin with Hood for Men, Keep yourself warm",
    },
    {
      id: 9,
      name: "Black Jacket for Men",
      size: "M",
      color: "Black",
      price: 1500,
      image: "product9.jpeg",
      description: "Leather Black Jacket for Men",
    },
    {
      id: 10,
      name: "Casual Winter Coat for Women",
      size: "M",
      color: "Khaki",
      price: 2500,
      image: "product10.jpg",
      description: "Casual winter coat for Women",
    },
    {
      id: 11,
      name: "Indian Red Saree Dress",
      size: "L",
      color: "Red",
      price: 2500,
      image: "product11.jpeg",
      description: "Beautiful saree indian classic",
    },
    {
      id: 12,
      name: "Blue Designer saree",
      size: "S",
      color: "Royal Blue",
      price: 4499,
      image: "product12.jpeg",
      description: "Blue designer saree with silk",
    },
  ];
  
  cart = [];
  
  function displayProducts(productsData, who = "productwrapper") {
    let productsString = "";
  
    productsData.forEach(function (product, index) {
      let { id, name, image, color, description, price, size } = product;
  
      if (who == "productwrapper") {
        productsString += ` <div class="product">
          <div class="prodimg">
            <img src="productimages/${image}" width="100%" />
          </div>
          <h3>${name}</h3>
          <p>Price : ${price}$</p>
          <p>Size : ${size}</p>
          <p>Color : ${color}</p>
          <p>${description}</p>
          <p>
            <button onclick="addCart(${id})">Add to Cart</button>
          </p>
        </div>`;
      } else if (who == "cart") {
        productsString += ` <div class="product">
          <div class="prodimg">
            <img src="productimages/${image}" width="100%" />
          </div>
          <h3>${name}</h3>
          <p>Price : ${price}$</p>
          <p>Size : ${size}</p>
          <p>Color : ${color}</p>
          <p>${description}</p>
          <p>
            <button onclick="removeCart(${id})">Remove from Cart</button>
          </p>
        </div>`;
      }
    });
  
    document.getElementById(who).innerHTML = productsString;
  }
  
  displayProducts(products);
  
  function searchProduct(searchValue) {
    let searchedProducts = products.filter(function (product, index) {
      let searchString =
        product.name + " " + product.color + " " + product.description;
  
      return searchString.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
    });
  
    displayProducts(searchedProducts);
  }
  
  function filterByMinPrice(){
    let min = document.getElementById('min-price').value;
    let filterPrice = products.filter(function(product){
      return product.price>=min;
    });
    displayProducts(filterPrice);
  }
  
  function filterByMaxPrice(){
    let max = document.getElementById('max-price').value;
    let filterPrice = products.filter(function(product){
      return product.price<=max;
    });
    displayProducts(filterPrice);
  }
 
  function getProductByID(productArray, id) {
    return productArray.find(function (product) {
      return product.id == id;
    });
  }
  
  function addCart(id) {
      
    let pro = getProductByID(products, id);
    if (cart.length == 0)
        cart.push(pro);
    else{    
    cart.forEach(element => {
        if (pro.id == element.id)
            alert("Already in Cart");
        else
            cart.push(pro);
    
  });   }
  displayProducts(cart, "cart");
}
  
  function removeCart(id) {
    let index = cart.findIndex(function (product) {
      return product.id == id;
    });
    cart.splice(index, 1);
    displayProducts(cart, "cart");
  }
  
  function countCartItems(){
    let cnt = cart.length;
    document.getElementById('cart-count').innerHTML = cnt;
  }
  countCartItems(); 