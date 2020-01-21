export interface OrderI {
  id: string;
  orderItems: OrderItemI[];
}

export interface OrderItemI {
  /**
   * Product id
   */
  id: string;
  /**
   * Product name
   */
  name: string;
  price: number;
  price_discount: number;
  quantity: number;
}

export interface OrderDetails {}
