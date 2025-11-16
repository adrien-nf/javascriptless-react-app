import { Product } from "@/types";
import data from "@/data/products.json";

export async function listProducts(): Promise<Product[]> {
  return data.products.slice(0, 80);
}
