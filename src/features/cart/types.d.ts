interface CartItem {
  name: string;
  image: string;
  brief_desc: string;
  price: number;
  quantity: number;
}

interface Cart {
  items: CartItem[];
  total: number;
}

export { Cart, CartItem };
