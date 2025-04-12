export interface TUser {
  id: string;
  name: string;
  email: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  imageUrl?: string;
}
export interface TOrder {
  orderId: string;
  productId: string;
  quantity: number;
  paymentMethode: string;
}
export interface TQueryParam {
  name: string;
  value: string | number | boolean;
}
export interface TResponseRedux<T> {
  data: T[];
  meta: {
    total: number;
    page: number;
    limit: number;
  };
}

export interface TBook {
  title: string;
  author: string;
  category: string;
  description: string;
  quantity: number;
  price: number;
  inStock: boolean;
}
