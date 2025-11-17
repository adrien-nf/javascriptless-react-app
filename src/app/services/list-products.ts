import { Pagination, Product } from "@/types";
import data from "@/data/products.json";
import { PRODUCTS_PER_PAGE } from "../constants";

type ListProductsOptions = {
  page: number;
};

export async function listProducts({
  page,
}: ListProductsOptions): Promise<Pagination<Product>> {
  return {
    data: data.products.slice(
      (page - 1) * PRODUCTS_PER_PAGE,
      page * PRODUCTS_PER_PAGE
    ),
    pageAmount: Math.ceil(data.products.length / PRODUCTS_PER_PAGE),
  };
}
