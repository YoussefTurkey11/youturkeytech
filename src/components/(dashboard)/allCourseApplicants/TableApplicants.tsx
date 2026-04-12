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
import { useLocale, useTranslations } from "next-intl";
import { courseStatus } from "@/types/courseType";
import { generateShortId } from "@/utils/generateShortId";
import { Level, Status } from "@/validation/enroll/Enroll.schema";
import ActionApplicant from "./ActionApplicant";

const LEVELTABS = [
  { label: "All", value: "all" },
  { label: Level.Beginner, value: Level.Beginner },
  { label: Level.Intermediate, value: Level.Intermediate },
  { label: Level.Advanced, value: Level.Advanced },
];

const STATUSTABS = [
  { label: "All", value: "all" },
  { label: Status.Pending, value: Status.Pending },
  { label: Status.Reviewed, value: Status.Reviewed },
  { label: Status.Accepted, value: Status.Accepted },
  { label: Status.Rejected, value: Status.Rejected },
];

const TABLE_HEAD = [
  "Id",
  "FullName",
  "Email",
  "Phone",
  "Level",
  "Has Experience",
  "Status",
  "Action",
];

type SortKey = "id" | "fullName" | "email" | "phone";

export function TableApplicants({
  applicants,
  isFetching,
}: {
  applicants: courseStatus[];
  isFetching: boolean;
}) {
  const rows = applicants ?? [];
  const skeletonRows = Array.from({ length: 3 });
  const pathname = usePathname();
  const t = useTranslations("courseApplicants");
  const locale = useLocale();

  /* ---------------- search ---------------- */

  const { search, setSearch, filteredRowsSearch } = useTableSearch(
    rows,
    ["fullName", "email", "phone"],
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
              render={
                <Link href={`/${locale}/allCourseApplicants`}>
                  {t("table.viewAll")}
                </Link>
              }
            />
          )}
        </div>
      </div>

      {/* Tabs + Search */}

      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex flex-col items-start gap-5">
          <Tabs
            value={levelFilter}
            onValueChange={setLevelFilter}
            className="w-full md:w-max"
          >
            <TabsList>
              {LEVELTABS.map(({ label, value }) => (
                <TabsTrigger
                  key={value}
                  value={value}
                  className="cursor-pointer"
                >
                  {label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <Tabs
            value={statusFilter}
            onValueChange={setStatusFilter}
            className="w-full md:w-max"
          >
            <TabsList>
              {STATUSTABS.map(({ label, value }) => (
                <TabsTrigger
                  key={value}
                  value={value}
                  className="cursor-pointer"
                >
                  {label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

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
                  "fullName",
                  "email",
                  "phone",
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
                  {t("table.noApplicantsFound")}
                </td>
              </tr>
            ) : (
              paginatedRows.map(
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
                    <td className="p-3">{fullName}</td>
                    <td className="p-3">{email}</td>
                    <td className="p-3">{phone ?? "--"}</td>
                    <td className="p-3">
                      <Badge variant={"outline"}>{level}</Badge>
                    </td>
                    <td className="p-3">
                      <Badge
                        variant={hasExperience ? "default" : "destructive"}
                      >
                        {hasExperience ? "Yes" : "No"}
                      </Badge>
                    </td>
                    <td className="p-3">
                      <Badge
                        variant={
                          status === "pending"
                            ? "pending"
                            : status === "reviewed"
                              ? "review"
                              : status === "accepted"
                                ? "success"
                                : "destructive"
                        }
                      >
                        {status}
                      </Badge>
                    </td>
                    <td className="p-3">
                      <ActionApplicant
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
