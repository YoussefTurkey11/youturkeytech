import { useMemo, useState } from "react";

export function useTableSearch<T>(
  rows: T[],
  keys: (keyof T)[],
  customSearch?: (row: T) => string[],
) {
  const [search, setSearch] = useState("");

  const filteredRowsSearch = useMemo(() => {
    if (!search) return rows;

    const lower = search.toLowerCase();

    return rows.filter((row) => {
      // 🟢 search في keys العادية
      const matchKeys = keys.some((key) => {
        const value = row[key];

        if (typeof value === "string") {
          return value.toLowerCase().includes(lower);
        }

        if (typeof value === "number") {
          return value.toString().includes(lower);
        }

        return false;
      });

      // 🟢 search في custom fields (زي shortId)
      const matchCustom = customSearch
        ? customSearch(row).some((val) => val.toLowerCase().includes(lower))
        : false;

      return matchKeys || matchCustom;
    });
  }, [rows, search, keys, customSearch]);

  return {
    search,
    setSearch,
    filteredRowsSearch,
  };
}
