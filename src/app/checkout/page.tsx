import Link from "next/link";
import { cookies } from "next/headers";
import { StripeButton } from "@/components/stripe-button";
import { FakeForm } from "@/components/fake-form";
import { buyCartAction } from "@/actions";

type CartItem = { title: string; price: number; quantity: number };

export default async function CheckoutPage() {
  const cookieStore = await cookies();
  const cartCookie = cookieStore.get("cartItems")?.value;
  const cart: Record<string, CartItem> = cartCookie
    ? JSON.parse(cartCookie)
    : {};

  const totalQuantity = Object.values(cart).reduce(
    (sum, item) => sum + item.quantity,
    0
  );
  const totalPrice = Object.values(cart).reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <main className="min-h-screen bg-gray-50 flex justify-center py-10 px-4 text-gray-800">
      <div className="max-w-4xl w-full space-y-8">
        <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>

        {totalQuantity === 0 ? (
          <p className="text-gray-700">
            Your cart is empty.{" "}
            <Link href="/" className="text-blue-600 underline">
              Go back to shop
            </Link>
          </p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            <section className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <ul className="divide-y divide-gray-200">
                {Object.entries(cart).map(([id, item]) => (
                  <li key={id} className="flex justify-between py-2">
                    <span>
                      {item.title} x {item.quantity}
                    </span>
                    <span className="font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </li>
                ))}
                <li className="flex justify-between font-bold border-t border-gray-200 pt-3 mt-3">
                  <span>Total:</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </li>
              </ul>
            </section>

            <section className="bg-white rounded-lg shadow p-6 space-y-6">
              <h2 className="text-xl font-semibold">Contact Information</h2>
              <form action={buyCartAction} className="space-y-4">
                <FakeForm />

                <StripeButton type="submit" className="require-js" />

                <noscript>
                  <StripeButton
                    title="JavaScript is required to use this feature"
                    type="submit"
                    disabled
                  />
                </noscript>
              </form>
            </section>
          </div>
        )}
      </div>
    </main>
  );
}
