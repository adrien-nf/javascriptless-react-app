import { FlashToast } from "@/components/flash-toast";
import { ProductList } from "../components/product-list";
import { listProducts } from "@/services/list-products";
import { cookies } from "next/headers";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page } = await searchParams;
  const currentPage = Number(page || 1);
  const { data, pageAmount } = await listProducts({ page: currentPage });

  const cookieStore = await cookies();
  const flashCookie = cookieStore.get("flashMessage")?.value;
  let flash = null;
  if (flashCookie) {
    try {
      flash = JSON.parse(flashCookie);
      cookieStore.set({
        name: "flashMessage",
        value: "",
        path: "/",
        maxAge: 0,
      });
    } catch {}
  }

  return (
    <section className="flex flex-col">
      {flash && <FlashToast flash={flash} />}
      <ProductList products={data} page={currentPage} pageAmount={pageAmount} />
    </section>
  );
}
