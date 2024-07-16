import { Product } from "../models/product";

Parse.Cloud.define("createProduct", async (request) => {
  const { name, price, description, stock } = request.params;

  const product = new Product();
  product.set("name", name);
  product.set("price", price);
  product.set("description", description);
  product.set("stock", stock);

  try {
    const result = await product.save(null, { useMasterKey: true });
    return result;
  } catch (error: any) {
    throw new Error("Error creating product: " + error.message);
  }
});

Parse.Cloud.define("getProduct", async (request) => {
  const { productId } = request.params;

  const query = new Parse.Query(Product);

  try {
    const product = await query.get(productId);
    return product;
  } catch (error: any) {
    throw new Error("Error fetching product: " + error.message);
  }
});

Parse.Cloud.define("updateProduct", async (request) => {
  const { productId, name, price, description, stock } = request.params;

  const query = new Parse.Query(Product);

  try {
    const product = await query.get(productId);

    if (name) product.set("name", name);
    if (price) product.set("price", price);
    if (description) product.set("description", description);
    if (stock) product.set("stock", stock);

    const result = await product.save();
    return result;
  } catch (error: any) {
    throw new Error("Error updating product: " + error.message);
  }
});

Parse.Cloud.define("deleteProduct", async (request) => {
  const { productId } = request.params;

  const query = new Parse.Query(Product);

  try {
    const product = await query.get(productId);
    await product.destroy();
    return "Product deleted successfully";
  } catch (error: any) {
    throw new Error("Error deleting product: " + error.message);
  }
});
