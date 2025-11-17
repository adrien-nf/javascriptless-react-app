"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function buyCartAction() {
  const cookieStore = await cookies();

  cookieStore.set({
    name: "cartItems",
    value: "",
    path: "/",
    maxAge: 0,
  });

  cookieStore.set({
    name: "flashMessage",
    value: JSON.stringify({
      type: "success",
      text: "Purchase successful! Thanks for making the world a better place! 🌎",
    }),
    path: "/",
    maxAge: 5,
  });

  redirect("/");
}
