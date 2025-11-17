import Link from "next/link";
import { FaSquareJs } from "react-icons/fa6";
import { cookies } from "next/headers";
import { CartPreview } from "./cart-preview";

type CartItem = { title: string; price: number; quantity: number };

export async function Navbar() {
  const cookieStore = await cookies();
  const cartCookie = cookieStore.get("cartItems")?.value;
  const cart: Record<string, CartItem> = cartCookie
    ? JSON.parse(cartCookie)
    : {};

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

          <CartPreview cart={cart} />
        </div>
      </div>
    </nav>
  );
}
