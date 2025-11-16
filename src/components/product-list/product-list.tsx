"use client";

import { useEffect, useRef, useState } from "react";
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
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );
    observer.observe(loader.current);
    return () => observer.disconnect();
  }, [loading]);

  useEffect(() => {
    if (page === 1) return;

    const fetchProducts = async () => {
      setLoading(true);
      try {
        const newProducts = await listProducts({ page });
        setProducts((prev) => [...prev, ...newProducts]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page]);

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
