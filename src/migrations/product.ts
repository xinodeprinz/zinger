const schema = new Parse.Schema("Product");

schema.addString("name", { required: false });
schema.addNumber("price", { required: false });
schema.addString("description");
schema.addNumber("stock");

export default schema;
