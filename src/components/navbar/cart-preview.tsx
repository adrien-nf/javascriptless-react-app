import { FaCartShopping } from "react-icons/fa6";

type CartItem = { title: string; price: number; quantity: number };

interface CartPreviewProps {
  cart: Record<string, CartItem>;
}

export function CartPreview({ cart }: CartPreviewProps) {
  const totalQuantity = Object.values(cart).reduce(
    (sum, item) => sum + item.quantity,
    0
  );
  const totalPrice = Object.values(cart).reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="relative flex items-center gap-4 text-gray-700">
      <button
        id="preview-toggle"
        popoverTarget="cart-preview"
        className="flex items-center gap-1 border px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200 transition"
      >
        <FaCartShopping className="text-xl" />
        <span>{totalQuantity} items</span>
        <span>${totalPrice.toFixed(2)}</span>
      </button>

      <div
        id="cart-preview"
        popover="auto"
        anchor="preview-toggle"
        className="absolute top-[anchor(bottom)] left-[anchor(center)] -translate-x-1/2 w-72 bg-white border border-gray-200 shadow-lg rounded-lg p-4 mt-2 z-50 text-gray-800"
      >
        {totalQuantity === 0 ? (
          <p className="text-sm text-gray-500">Your cart is empty</p>
        ) : (
          <>
            <ul className="space-y-2">
              {Object.entries(cart).map(([id, item]) => (
                <li key={id} className="flex justify-between">
                  <span className="truncate">
                    {item.title} x {item.quantity}
                  </span>
                  <span className="font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </li>
              ))}
              <li className="flex justify-between font-bold border-t border-gray-200 pt-2 mt-2">
                <span>Total:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </li>
            </ul>
            <a
              href="/checkout"
              className="mt-3 inline-block w-full text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Go to Checkout
            </a>
          </>
        )}
      </div>
    </div>
  );
}
