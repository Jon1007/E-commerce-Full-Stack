const mongoose = require("mongoose");
const Review = require("./ReviewModel");
const imageSchema = mongoose.Schema({
  path: { type: String, required: true },
});
const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
    },
    category: {
      type: String,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
    },
    reviewsNumber: {
      type: Number,
    },
    sales: {
      type: Number,
      default: 0,
    },
    attr: [
      { key: { type: String }, value: { type: String } }[
        ({ key: "color", value: "red" }, { key: "size", value: "1 TB" })
      ],
    ],
    images: [imageSchema],
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: Review,
      },
    ],
  },
  {
    timeStamp: true,
  }
);

const Product = mongoose.model("Product", productSchema);

productSchema.index(
  { name: "text", description: "text" },
  { name: "TextIndex" }
);
productSchema.index({ "attr.key": 1, "attr.value": 1 });
module.exports = Product;
