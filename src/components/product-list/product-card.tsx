import { Product } from "@/types";
import { Stars } from "./stars";

export function ProductCard({ product }: { product: Product }) {
  const { title, rating, images, price, tags, description } = product;

  return (
    <li className="border rounded-lg p-4 shadow hover:shadow-lg transition-shadow flex flex-col bg-white">
      <img
        src={images?.[0] ?? "/placeholder.png"}
        alt={`${title} - $${price}`}
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
        <div>
          <hr className="my-4" />
          <span className="text-gray-800 font-bold text-lg">
            ${price.toFixed(2)}
          </span>
        </div>
      </div>
    </li>
  );
}
