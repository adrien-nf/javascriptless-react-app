import { Product } from "@/types";
import data from "@/data/products.json";

type ListProductsOptions = {
  page: number;
};

const PAGE_SIZE = 8;

export async function listProducts({
  page,
}: ListProductsOptions): Promise<Product[]> {
  return data.products.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);
}
