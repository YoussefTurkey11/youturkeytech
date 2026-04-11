"use client";

import { ArrowDown, ArrowUp, ArrowUpDown, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "../../ui/skeleton";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useTableSearch } from "@/hooks/(dashboard)/useTableSearch";
import { useTableFilter } from "@/hooks/(dashboard)/useTableFilter";
import { useTableSort } from "@/hooks/(dashboard)/useTableSort";
import { User } from "@/types/userType";
import { useTablePagination } from "@/hooks/(dashboard)/useTablePagination";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslations } from "next-intl";

const TABS = [
  { label: "All", value: "all" },
  { label: "Active", value: "active" },
  { label: "Deactive", value: "deactive" },
];

const TABLE_HEAD = [
  "Id",
  "name",
  "email",
  "phone",
  "position",
  "active",
  "role",
];

type SortKey = "id" | "name" | "email" | "jobId";

export function TableUsers({
  users,
  isFetching,
}: {
  users: User[];
  isFetching: boolean;
}) {
  const rows = users ?? [];
  const skeletonRows = Array.from({ length: 3 });
  const pathname = usePathname();
  const t = useTranslations("User");

  /* ---------------- search ---------------- */

  const { search, setSearch, filteredRowsSearch } = useTableSearch(rows, [
    "name",
    "email",
    "jobId",
  ]);

  /* ---------------- filter ---------------- */

  const { filter, setFilter, filteredRowsFilter } = useTableFilter(
    filteredRowsSearch,
    (row, filter) => {
      if (filter === "active") return row.active;
      if (filter === "deactive") return row.active === false;
      return true;
    },
  );

  /* ---------------- sort ---------------- */

  const { sortedRows, handleSort, sortKey, sortDirection } =
    useTableSort<User>(filteredRowsFilter);

  /* ---------------- pagination ---------------- */

  const { paginatedRows, page, pageCount, nextPage, prevPage } =
    useTablePagination(sortedRows, 8);

  /* ---------------- helpers ---------------- */

  const getSortIcon = (columnKey: SortKey) => {
    if (sortKey !== columnKey) return <ArrowUpDown className="h-4 w-4" />;

    if (sortDirection === "asc") return <ArrowUp className="h-4 w-4" />;

    return <ArrowDown className="h-4 w-4" />;
  };

  return (
    <div className="w-full">
      {/* Header */}

      <div className="mb-8 flex items-center justify-between gap-8">
        <div>
          <h6 className="text-base font-semibold">{t("table.title")}</h6>
          <p className="text-muted-foreground mt-1 text-sm">
            {t("table.desc")}
          </p>
        </div>

        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          {pathname.startsWith("/admin") && (
            <Button
              variant="outline"
              size="sm"
              nativeButton={false}
              render={<Link href="/users">{t("table.viewAll")}</Link>}
            />
          )}
        </div>
      </div>

      {/* Tabs + Search */}

      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <Tabs
          value={filter}
          onValueChange={setFilter}
          className="w-full md:w-max"
        >
          <TabsList>
            {TABS.map(({ label, value }) => (
              <TabsTrigger key={value} value={value} className="cursor-pointer">
                {label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="relative w-full md:w-72">
          <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />

          <Input
            placeholder="Search"
            className="pl-9"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Table */}
      <div className="border-border mt-4 w-full overflow-x-auto rounded-lg border">
        <table className="w-full">
          <thead className="border-border bg-muted border-b text-sm font-medium">
            <tr>
              {TABLE_HEAD.map((head, index) => {
                const sortKeys: (SortKey | null)[] = [
                  "jobId",
                  "name",
                  "email",
                  null,
                ];

                const key = sortKeys[index];

                return (
                  <th
                    key={head}
                    className={`px-2.5 py-2 text-start font-medium ${
                      key ? "hover:bg-muted/80 cursor-pointer" : ""
                    }`}
                    onClick={() => key && handleSort(key)}
                  >
                    <div className="text-muted-foreground flex items-center justify-between gap-2">
                      {head}
                      {key && getSortIcon(key)}
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>

          <tbody className="text-sm">
            {isFetching ? (
              skeletonRows.map((_, i) => (
                <tr key={i} className="border-border border-b">
                  <td className="p-3">
                    <Skeleton className="h-4 w-10" />
                  </td>

                  <td className="p-3">
                    <Skeleton className="h-4 w-32" />
                  </td>

                  <td className="p-3">
                    <Skeleton className="h-4 w-16" />
                  </td>

                  <td className="p-3">
                    <Skeleton className="h-4 w-20" />
                  </td>

                  <td className="p-3">
                    <Skeleton className="h-4 w-20" />
                  </td>

                  <td className="p-3">
                    <Skeleton className="h-6 w-24 rounded-full" />
                  </td>

                  <td className="p-3">
                    <Skeleton className="h-6 w-24 rounded-full" />
                  </td>
                </tr>
              ))
            ) : paginatedRows.length === 0 ? (
              <tr>
                <td
                  colSpan={7}
                  className="text-center py-6 text-muted-foreground"
                >
                  {t("table.noUsersFound")}
                </td>
              </tr>
            ) : (
              paginatedRows.map(
                ({ jobId, name, email, phone, active, role, position }) => (
                  <tr
                    key={jobId}
                    className="border-border border-b last:border-0"
                  >
                    <td className="p-3">{jobId}</td>
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <Image
                          src={"/images/me.png"}
                          width={20}
                          height={20}
                          alt={`${name} avatar`}
                          loading="lazy"
                        />
                        <span className="truncate">{name}</span>
                      </div>
                    </td>
                    <td className="p-3">{email}</td>
                    <td className="p-3">{phone ?? "--"}</td>
                    <td className="p-3">{position ?? "--"}</td>
                    <td className="p-3">
                      <Badge variant={active ? "default" : "destructive"}>
                        {active ? "Active" : "Inactive"}
                      </Badge>
                    </td>
                    <td className="p-3">
                      <Badge variant={"outline"}>{role}</Badge>
                    </td>
                  </tr>
                ),
              )
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}

      <div className="border-border flex items-center justify-between border-t py-4">
        <span className="text-muted-foreground text-sm">
          {t("pagination.page")} {page} {t("pagination.of")} {pageCount}
        </span>

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={prevPage}
            disabled={page === 1}
          >
            {t("pagination.previous")}
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={nextPage}
            disabled={page === pageCount}
          >
            {t("pagination.next")}
          </Button>
        </div>
      </div>
    </div>
  );
}
