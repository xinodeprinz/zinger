import { Product } from "../models/product";

Parse.Cloud.beforeSave(Product, async (request) => {
  const product = request.object as Product;

  if (!product.get("name")) {
    throw new Error("Product name is required");
  }

  if (product.get("price") < 0) {
    throw new Error("Product price must be a positive number");
  }
});

Parse.Cloud.afterSave("Product", async (request) => {
  const product = request.object as Product;
  console.log(`Product ${product.id} has been saved`);
});
