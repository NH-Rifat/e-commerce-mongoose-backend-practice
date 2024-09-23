import mongoose from "mongoose";
import { TProduct } from "./product.interface";
import { productModel } from "./product.model";

const createProductIntoDB = async (productData: TProduct) => {
  const newProduct = await productModel.create(productData);
  return newProduct;
};

const getAllProductsFromDB = async () => {
  const products = await productModel.find();
  return products;
};

const getProductByIdFromDB = async (productId: string) => {
  const objectId = new mongoose.Types.ObjectId(productId);
  const product = await productModel.aggregate([{ $match: { _id: objectId } }]);
  if (!product.length) {
    throw new Error("Product not found");
  }
  return product;
};

export const productService = {
  createProductIntoDB,
  getAllProductsFromDB,
  getProductByIdFromDB,
};
