import { ProductList } from "../components/product-list";
import { listProducts } from "./services/list-products";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page } = await searchParams;

  const currentPage = Number(page || 1);

  const { data, pageAmount } = await listProducts({ page: currentPage });

  return (
    <ProductList products={data} page={currentPage} pageAmount={pageAmount} />
  );
}
