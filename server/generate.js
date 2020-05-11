const faker = require('faker');

let database = { products: [] };

for (let i = 1; i <= 300; i++) {
  database.products.push({
    id: i,
    name: faker.commerce.productName(),
    description: faker.lorem.sentences(),
    price: faker.commerce.price(),
    imageUrl: "https://source.unsplash.com/1600x900/?product",
    quantity: faker.random.number()
  });
}
console.log(JSON.stringify(database));

/*
• GET /products for getting the products,
• GET /products/<id> for getting a single product by id,
• POST /products for creating a new product,
• PUT /products/<id> for updating a product by id,
• PATCH /products/<id> for partially updating a product by id,
• DELETE /products/<id> for deleting a product by id.
*/