export class Product extends Parse.Object {
  constructor() {
    super("Product");
  }

  get name(): string {
    return this.get("name");
  }

  set name(value: string) {
    this.set("name", value);
  }

  get price(): number {
    return this.get("price");
  }

  set price(value: number) {
    this.set("price", value);
  }

  get description(): string {
    return this.get("description");
  }

  set description(value: string) {
    this.set("description", value);
  }

  get stock(): number {
    return this.get("stock");
  }

  set stock(value: number) {
    this.set("stock", value);
  }
}

Parse.Object.registerSubclass("Product", Product);
