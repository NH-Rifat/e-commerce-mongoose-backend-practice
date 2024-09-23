import { Schema, model } from "mongoose";
import { TInventory, TProduct, TVariant } from "./product.interface";

const VariantSchema = new Schema<TVariant>({
  type: { type: String, required: true },
  value: { type: String, required: true },
});

const InventorySchema = new Schema<TInventory>({
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});

const productSchema = new Schema<TProduct>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: [String],
  variants: [VariantSchema],
  inventory: InventorySchema,
  isDeleted: { type: Boolean, required: true },
});

// pre hook to return only non-deleted products
productSchema.pre("find", function (next) {
  this.find({ isDeleted: false });
  next();
});

// pre hook to return the single non-deleted product
productSchema.pre("aggregate", function (next) {
  this.pipeline().unshift({ $match: { isDeleted: false } });
  next();
});

export const productModel = model<TProduct>("Product", productSchema);
