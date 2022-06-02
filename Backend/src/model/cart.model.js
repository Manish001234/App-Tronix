const mongoose = require("mongoose");

const cartProductsSchema = new mongoose.Schema(
  {
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "mobile" },
    quantity: { type: Number, required: true, default: 1 },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("cart", cartProductsSchema);