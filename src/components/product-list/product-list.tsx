"use client";

import { useRef, useState, useEffect } from "react";
import { Product } from "types";
import { ProductCard } from "./product-card";
import { listProducts } from "@/app/services/list-products";

type Props = {
  products: Product[];
};

export const ProductList = ({ products: initialProducts }: Props) => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const loader = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!loader.current) return;

    const observer = new IntersectionObserver(
      async (entries) => {
        if (entries[0].isIntersecting && !loading) {
          setLoading(true);
          try {
            const nextPage = page + 1;
            const newProducts = await listProducts({ page: nextPage });
            setProducts((prev) => [...prev, ...newProducts]);
            setPage(nextPage);
          } finally {
            setLoading(false);
          }
        }
      },
      { threshold: 1 }
    );

    observer.observe(loader.current);
    return () => observer.disconnect();
  }, [loading, page]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </ul>
      <div ref={loader} className="h-10">
        {loading && "Loading..."}
      </div>
    </div>
  );
};
