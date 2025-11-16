import { ProductList } from "../components/product-list";
import { listProducts } from "./services/list-products";

export default async function Page() {
  const products = await listProducts();

  return <ProductList products={products} />;
}

