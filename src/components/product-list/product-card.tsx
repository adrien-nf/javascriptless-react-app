import { Product } from "@/types";
import { Stars } from "./stars";
import { addToCartAction } from "@/actions";
import { toast } from "sonner";

export function ProductCard({ product }: { product: Product }) {
  const { id, title, price, images, rating, description, tags } = product;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (!window) return;
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    await addToCartAction(formData);

    toast.success(`${title} added to cart!`);
  };

  return (
    <li className="border rounded-lg p-4 shadow hover:shadow-lg transition-shadow flex flex-col bg-white">
      <img
        src={images?.[0] ?? "/placeholder.png"}
        alt={title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <div className="flex flex-col flex-1">
        <div className="flex-1">
          {tags?.[0] && (
            <p className="text-gray-500 uppercase text-sm">{tags[0]}</p>
          )}
          <h3 className="font-semibold text-lg mb-1 text-gray-700">{title}</h3>
          <Stars rating={rating} />
          <p className="text-sm text-gray-600 my-4">{description}</p>
        </div>
        <form
          action={addToCartAction}
          className="flex items-center justify-between mt-4"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="productId" value={id} />
          <input type="hidden" name="productName" value={title} />
          <input type="hidden" name="productPrice" value={price} />
          <span className="text-gray-800 font-bold text-lg">
            ${price.toFixed(2)}
          </span>
          <button
            type="submit"
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors"
          >
            Add to Cart
          </button>
        </form>
      </div>
    </li>
  );
}
