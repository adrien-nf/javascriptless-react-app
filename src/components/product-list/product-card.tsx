import { Product } from "@/types";
import { Stars } from "./stars";
import { useCartContext } from "@/contexts";
import { toast } from "sonner";

export function ProductCard({ product }: { product: Product }) {
  const { title, rating, images, price, tags, description, id } = product;

  const { addToCart } = useCartContext();

  const handleAdd = () => {
    addToCart({ id, title, price });
    toast.success(`${title} added to cart!`, {
      position: "bottom-center",
    });
  };

  return (
    <li className="border rounded-lg p-4 shadow hover:shadow-lg transition-shadow flex flex-col bg-white">
      <img
        src={images?.[0] ?? "/placeholder.png"}
        alt={`${title} - $${price}`}
        className="w-full h-48 object-cover rounded-md mb-4 text-black"
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
        <div className="flex items-center justify-between mt-4">
          <span className="text-gray-800 font-bold text-lg">
            ${price.toFixed(2)}
          </span>
          <button
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors"
            onClick={() => handleAdd()}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </li>
  );
}
