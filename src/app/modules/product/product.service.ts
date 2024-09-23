import { TProduct } from "./product.interface";
import { productModel } from "./product.model";

const createProductIntoDB = async (productData: TProduct) => {
  const newProduct = await productModel.create(productData);
  return newProduct;
};

export const productService = {
  createProductIntoDB,
};
