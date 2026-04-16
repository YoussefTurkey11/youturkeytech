"use client";
import { TableApplicants } from "@/components/(dashboard)/allCourseApplicants/TableApplicants";
import ErrorPage from "@/components/(dashboard)/shared/ErrorPage";
import StatsCards from "@/components/(dashboard)/shared/StatsCards";
import Title from "@/components/(dashboard)/shared/Title";
import { Button } from "@/components/ui/button";
import {
  useGetAllCoursesApplicationQuery,
  useGetAllCoursesApplicationStatsQuery,
} from "@/redux/apis/courseApi";
import { exportToExcel } from "@/utils/exportToExcel";
import { Level } from "@/validation/enroll/Enroll.schema";
import { Cat, GraduationCap, Newspaper, UserStar } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const AllCourseApplicants = () => {
  const [page, setPage] = useState(1);

  const {
    data: allCoursesApplications,
    isLoading: isCoursesApplicationsLoading,
    isFetching: isCoursesApplicationsFetching,
    isError: isCoursesApplicationsError,
  } = useGetAllCoursesApplicationQuery(page);

  const { data: allStats, isLoading: isLoadingStats } =
    useGetAllCoursesApplicationStatsQuery();

  const courseApplications = allCoursesApplications?.data ?? [];
  const allStatsData = allStats?.data ?? [];
  const pagination = allCoursesApplications?.paginationResult;

  const normalize = (v: string) => v?.toLowerCase().trim();
  const stats = allStatsData.reduce(
    (acc, app) => {
      acc.total++;

      const level = normalize(app.level);

      if (level === normalize(Level.Beginner)) acc.beginner++;
      if (level === normalize(Level.Intermediate)) acc.intermediate++;
      if (level === normalize(Level.Advanced)) acc.advanced++;

      return acc;
    },
    {
      total: 0,
      beginner: 0,
      intermediate: 0,
      advanced: 0,
    },
  );

  const loading = isCoursesApplicationsLoading || isCoursesApplicationsFetching;

  return (
    <section className="p-5">
      <div className="flex items-center justify-between">
        <Title
          title="Course Applications Overview"
          subTitle="Monitoring 240+ students"
        />
        <Button
          onClick={() => {
            exportToExcel(allStatsData);
            toast.success("Export to Excel Sheet Successfully!");
          }}
        >
          Export
        </Button>
      </div>

      {isCoursesApplicationsError && <ErrorPage />}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-10">
        <StatsCards
          icon={<Newspaper size={25} />}
          title={"Total Applications"}
          count={stats.total ?? 0}
          loading={isLoadingStats}
        />

        <StatsCards
          icon={<Cat size={25} />}
          title={"Beginner Level"}
          count={stats.beginner ?? 0}
          loading={isLoadingStats}
        />

        <StatsCards
          icon={<UserStar size={25} />}
          title={"Intermediate Level"}
          count={stats.intermediate ?? 0}
          loading={isLoadingStats}
        />

        <StatsCards
          icon={<GraduationCap size={25} />}
          title={"Advanced Level"}
          count={stats.advanced ?? 0}
          loading={isLoadingStats}
        />
      </div>

      <div className="bg-card rounded-lg border p-5">
        {pagination && (
          <TableApplicants
            applicants={courseApplications}
            isFetching={loading}
            pagination={pagination}
            page={page}
            setPage={setPage}
          />
        )}
      </div>
    </section>
  );
};

export default AllCourseApplicants;
