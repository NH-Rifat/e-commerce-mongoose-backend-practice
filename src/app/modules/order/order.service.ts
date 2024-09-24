import { orderModel } from "./order.model";
import { IOrder } from "./order.interface";

const createOrderInDB = async (orderData: IOrder) => {
  const newOrder = await orderModel.create(orderData);
  return newOrder;
};
const getAllOrdersFromDB = async () => {
  const orders = await orderModel.find();
  return orders;
};

export const orderService = {
  createOrderInDB,
  getAllOrdersFromDB,
};
