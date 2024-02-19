interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  brief_desc: string;
  image: string;
}

type Products = Product[];

export { Products, Product };
