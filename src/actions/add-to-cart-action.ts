"use server";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export async function addToCartAction(formData: FormData) {
  const productId = formData.get("productId")?.toString();
  const productName = formData.get("productName")?.toString();
  const productPrice = parseFloat(
    formData.get("productPrice")?.toString() || "0"
  );

  if (!productId || !productName) return;

  const cookieStore = await cookies();
  const cartCookie = cookieStore.get("cartItems")?.value;
  const cart = cartCookie ? JSON.parse(cartCookie) : {};

  if (cart[productId]) {
    cart[productId].quantity += 1;
  } else {
    cart[productId] = { title: productName, price: productPrice, quantity: 1 };
  }

  cookieStore.set({
    name: "cartItems",
    value: JSON.stringify(cart),
    path: "/",
  });

  revalidatePath("/cart");
}
