import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex space-x-1 items-center">
      {[1, 2, 3, 4, 5].map((i) =>
        rating >= i ? (
          <FaStar key={i} className="text-yellow-400 w-4 h-4" />
        ) : rating >= i - 0.5 ? (
          <FaStarHalfAlt key={i} className="text-yellow-400 w-4 h-4" />
        ) : (
          <FaRegStar key={i} className="text-gray-300 w-4 h-4" />
        )
      )}
      <span className="text-gray-500 text-xs">({rating}/5)</span>
    </div>
  );
}
