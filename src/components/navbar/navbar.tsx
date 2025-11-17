import Link from "next/link";
import { FaSquareJs, FaCartShopping } from "react-icons/fa6";
import { cookies } from "next/headers";

type CartItem = { id: number; title: string; price: number; quantity: number };

export async function Navbar() {
  const cookieStore = await cookies();
  const cartCookie = cookieStore.get("cartItems")?.value;
  const cart = cartCookie ? JSON.parse(cartCookie) : {};

  const totalQuantity = Object.values<CartItem>(cart).reduce(
    (sum, item) => sum + item.quantity,
    0
  );
  const totalPrice = Object.values<CartItem>(cart).reduce(
    (sum: number, item: CartItem) => sum + item.price * item.quantity,
    0
  );

  return (
    <nav className="bg-white shadow-md sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="text-xl font-bold text-gray-800">
            <div className="items-center flex gap-2 require-js">
              <FaSquareJs className="text-yellow-300" />
              <span>JS Activated Store</span>
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
