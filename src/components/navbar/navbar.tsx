import Link from "next/link";
import { FaSquareJs } from "react-icons/fa6";

export function Navbar() {
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
        </div>
      </div>
    </nav>
  );
}
