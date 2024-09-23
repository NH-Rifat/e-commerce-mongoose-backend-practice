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

export const productService = {
  createProductIntoDB,
  getAllProductsFromDB,
};
