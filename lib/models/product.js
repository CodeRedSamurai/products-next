import { Schema, model, models } from "mongoose";

const productSchema = new Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, required: true },
  part: { type: Number, required: true },
  Genre: { type: String, required: true },
});

const Product = models.Product || model("Product", productSchema);

export default Product;
