import { orderModel } from "./order.model";
import { IOrder } from "./order.interface";

const createOrderInDB = async (orderData: IOrder) => {
  const newOrder = await orderModel.create(orderData);
  return newOrder;
};

export const orderService = {
  createOrderInDB,
};
