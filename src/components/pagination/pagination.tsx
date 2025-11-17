import { usePages } from "./use-pages";

type PaginationProps = {
  page: number;
  pageAmount: number;
};

export const Pagination = ({ page, pageAmount }: PaginationProps) => {
  const finalPages = usePages(page, pageAmount);

  return (
    <div className="flex gap-2 mt-8">
      {finalPages.map((n, i) =>
        n === "..." ? (
          <span
            key={i}
            className="px-4 py-2 rounded-lg border text-sm bg-white text-gray-500 border-gray-300"
          >
            …
          </span>
        ) : (
          <a
            key={n}
            href={`?page=${n}`}
            className={`px-4 py-2 rounded-lg border text-sm ${
              n === page
                ? "bg-black text-white border-black"
                : "bg-white text-black border-gray-300 hover:bg-gray-100"
            }`}
          >
            {n}
          </a>
        )
      )}
    </div>
  );
};
