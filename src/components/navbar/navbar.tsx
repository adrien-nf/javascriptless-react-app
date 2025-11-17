"use client";

import Link from "next/link";
import { FaSquareJs, FaCartShopping } from "react-icons/fa6";
import { useCartContext } from "@/contexts/cart-context";

export function Navbar() {
  const { items } = useCartContext();
  const totalQuantity = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <nav className="bg-white shadow-md sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="text-xl font-bold text-gray-800">
            <div className="items-center flex gap-2">
              <FaSquareJs className="require-js text-yellow-300" />
              <span className="require-js">JS Activated Store</span>
            </div>
            <noscript className="items-center flex gap-2">
              <FaSquareJs className="text-gray-300" />
              No JS Store
            </noscript>
          </Link>
          <div className="flex items-center gap-4 text-gray-700">
            <FaCartShopping className="text-xl" />
            <span>{totalQuantity} items</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
