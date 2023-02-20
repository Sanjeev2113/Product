const readline = require('readline');

// Sample product data
const products = [
  {id: 1, name: "Product A", price: 10, stock: 5},
  {id: 2, name: "Product B", price: 20, stock: 10},
  {id: 3, name: "Product C", price: 30, stock: 15},
  {id: 4, name: "Product D", price: 40, stock: 20},
  {id: 5, name: "Product E", price: 50, stock: 25}
];

// Function to find a product by ID
function findProductById(id: number) {
  return products.find(p => p.id === id);
}

// Create a readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


for (let i=1;i<=5;i++){
  console.log(`Product ID: ${i}`);
}
// Prompt the user for the product ID
rl.question('Enter product ID: ', (productId) => {
  // Find the product by ID
  
  const product = findProductById(Number(productId));
  // Check if product exists
  if (product) {
    // Prompt the user for the action to perform
    rl.question(`Choose action for product ${product.name}: \n1. Product listing \n2. Create product \n3. Update stock \n4. Update price \n5. Delete product \nEnter choice: `, (choice) => {
      switch (Number(choice)) {
        case 1:
          // Product listing
          console.log(`Product ID: ${product.id}`);
          console.log(`Product Name: ${product.name}`);
          console.log(`Price: $${product.price}`);
          console.log(`Stock: ${product.stock}`);
          break;
        case 2:
          // Create product
          rl.question('Enter product name: ', (name) => {
            rl.question('Enter price: ', (price) => {
              rl.question('Enter stock: ', (stock) => {
                const newProduct = {
                  id: products.length + 1,
                  name: name,
                  price: Number(price),
                  stock: Number(stock)
                };
                products.push(newProduct);
                console.log(`Product ${newProduct.name} created.`);
                console.log(newProduct);
                rl.close();
              });
            });
          });
          break;
        case 3:
          // Update stock
          rl.question('Enter new stock: ', (stock) => {
            product.stock = Number(stock);
            const myObj = {id: product.id, name: `${product.name}`, price: `${product.price}`, stock: `${product.stock}`};
            console.log(JSON.stringify(myObj));
            

            //console.log(`Stock for ${product.name} updated to ${product.stock}.`);
            rl.close();
          });
          break;
        case 4:
          // Update price
          rl.question('Enter new price: ', (price) => {
            product.price = Number(price);
            const myObj = {id: product.id, name: `${product.name}`, price: `${product.price}`, stock: `${product.stock}`};
            console.log(JSON.stringify(myObj));
            //console.log(`Price for ${product.name} updated to $${product.price}.`);
            rl.close();
          });
          break;
        case 5:
          // Delete product
          products.splice(products.indexOf(product), 1);
          const myObj = {id: product.id, name: `${product.name}`, price: `${product.price}`, stock: `${product.stock}`};
          console.log(JSON.stringify(myObj));
          //console.log(`Product ${product.name} deleted.`);
          rl.close();
          break;
        default:
          console.log('Invalid choice.');
          rl.close();
          break;
      }
    });
  } else {
    console.log('Product not found.');
    rl.close();
  }
});
