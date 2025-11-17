import { useMemo } from "react";

export const usePages = (page: number, pageAmount: number) => {
  return useMemo(() => {
    const pages = Array.from({ length: pageAmount }, (_, i) => i + 1);

    const visiblePages: number[] = pages.filter(
      (n) => n === 1 || n === pageAmount || Math.abs(n - page) <= 2
    );

    return visiblePages.reduce<(number | string)[]>((acc, n, i) => {
      if (
        i > 0 &&
        typeof acc[acc.length - 1] === "number" &&
        n - (acc[acc.length - 1] as number) > 1
      ) {
        acc.push("...");
      }
      acc.push(n);
      return acc;
    }, []);
  }, [page, pageAmount]);
};
