// /* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { productValidationSchema } from "./product.validation";
import { productService } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
  try {
    const { products: productData } = req.body;
    // console.log(productData);
    const zodParseData = productValidationSchema.parse(productData);
    const newProduct = await productService.createProductIntoDB(zodParseData);
    res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: newProduct,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "product already exists",
      error: error,
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await productService.getAllProductsFromDB();
    res.status(200).json({
      success: true,
      message: "Products fetched successfully",
      data: products,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Failed to fetch products",
      error: error,
    });
  }
};

export const productController = {
  createProduct,
  getAllProducts,
};
