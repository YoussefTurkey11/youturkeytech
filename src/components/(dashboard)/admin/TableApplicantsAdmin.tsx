"use client";

import { ArrowDown, ArrowUp, ArrowUpDown, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "../../ui/skeleton";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTableSearch } from "@/hooks/(dashboard)/useTableSearch";
import { useTableFilter } from "@/hooks/(dashboard)/useTableFilter";
import { useTableSort } from "@/hooks/(dashboard)/useTableSort";
import { useTablePagination } from "@/hooks/(dashboard)/useTablePagination";
import { useLocale, useTranslations } from "next-intl";
import { courseStatus } from "@/types/courseType";
import { generateShortId } from "@/utils/generateShortId";
import Image from "next/image";
import ActionApplicantAdmin from "./ActionApplicantAdmin";
import { Pagination } from "@/types/paginationType";

const TABLE_HEAD = ["ID", "Recent Applicants", "Action"];

type SortKey = "id" | "fullName";

export function TableApplicantsAdmin({
  applicants,
  isFetching,
  pagination,
  page,
  setPage,
}: {
  applicants: courseStatus[];
  isFetching: boolean;
  pagination: Pagination;
  page: number;
  setPage: (page: number) => void;
}) {
  const rows = applicants ?? [];
  const skeletonRows = Array.from({ length: 3 });
  const pathname = usePathname();
  const t = useTranslations("courseApplicants");
  const locale = useLocale();

  /* ---------------- search ---------------- */

  const { search, setSearch, filteredRowsSearch } = useTableSearch(
    rows,
    ["fullName"],
    (row) => [generateShortId(row.id, row.fullName)],
  );

  /* ---------------- filter ---------------- */

  const {
    filter: levelFilter,
    setFilter: setLevelFilter,
    filteredRowsFilter: filteredByLevel,
  } = useTableFilter(
    filteredRowsSearch,
    (row, filter) =>
      filter === "all" || row.level.toLowerCase() === filter.toLowerCase(),
  );

  const {
    filter: statusFilter,
    setFilter: setStatusFilter,
    filteredRowsFilter: filteredByStatus,
  } = useTableFilter(
    filteredByLevel,
    (row, filter) =>
      filter === "all" || row.status.toLowerCase() === filter.toLowerCase(),
  );

  /* ---------------- sort ---------------- */

  const { sortedRows, handleSort, sortKey, sortDirection } =
    useTableSort<courseStatus>(filteredByStatus);

  /* ---------------- pagination ---------------- */

  // const { paginatedRows, page, pageCount, nextPage, prevPage } =
  //   useTablePagination(sortedRows, 8);
  const nextPage = () => {
    if (pagination?.next) {
      setPage(pagination.next);
    }
  };
  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

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
          <h6 className="text-base font-semibold">Recent Applicants</h6>
          <p className="text-muted-foreground mt-1 text-sm">
            {t("table.desc")}
          </p>
        </div>

        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          {pathname.startsWith(`/${locale}/admin`) && (
            <Button
              variant="outline"
              size="sm"
              nativeButton={false}
              render={
                <Link href={`/${locale}/allCourseApplicants`}>
                  {t("table.viewAll")}
                </Link>
              }
            />
          )}
        </div>
      </div>

      {/* Table */}
      <div className="border-border mt-4 w-full overflow-x-auto rounded-lg border">
        <table className="w-full">
          <thead className="border-border bg-muted border-b text-sm font-medium">
            <tr>
              {TABLE_HEAD.map((head, index) => {
                const sortKeys: (SortKey | null)[] = ["fullName", null];

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
                </tr>
              ))
            ) : sortedRows.length === 0 ? (
              <tr>
                <td
                  colSpan={7}
                  className="text-center py-6 text-muted-foreground"
                >
                  {t("table.noApplicantsFound")}
                </td>
              </tr>
            ) : (
              sortedRows.map(
                ({
                  id,
                  fullName,
                  email,
                  phone,
                  level,
                  hasExperience,
                  goal,
                  source,
                  status,
                  notes,
                }) => (
                  <tr key={id} className="border-border border-b last:border-0">
                    <td className="p-3">{generateShortId(id, fullName)}</td>
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <div className="border rounded-full p-1">
                          <User size={20} />
                        </div>
                        <div className="flex flex-col">
                          <span className="truncate font-semibold">
                            {fullName}
                          </span>
                          <span className="truncate">{email}</span>
                        </div>
                      </div>
                    </td>
                    <td className="p-3">
                      <ActionApplicantAdmin
                        applicants={{
                          id,
                          fullName,
                          email,
                          phone,
                          level,
                          hasExperience,
                          goal,
                          source,
                          status,
                          notes,
                        }}
                      />
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
          {t("pagination.page")} {pagination?.currentPage} {t("pagination.of")}{" "}
          {pagination?.totalPages}
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
            disabled={!pagination?.next}
          >
            {t("pagination.next")}
          </Button>
        </div>
      </div>
    </div>
  );
}
