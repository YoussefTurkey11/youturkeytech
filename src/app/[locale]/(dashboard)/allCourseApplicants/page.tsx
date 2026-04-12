"use client";
import { TableApplicants } from "@/components/(dashboard)/allCourseApplicants/TableApplicants";
import ErrorPage from "@/components/(dashboard)/shared/ErrorPage";
import StatsCards from "@/components/(dashboard)/shared/StatsCards";
import Title from "@/components/(dashboard)/shared/Title";
import { Button } from "@/components/ui/button";
import { useGetAllCoursesApplicationQuery } from "@/redux/apis/courseApi";
import { exportToExcel } from "@/utils/exportToExcel";
import { Level } from "@/validation/enroll/Enroll.schema";
import { Cat, GraduationCap, Newspaper, UserStar } from "lucide-react";
import { toast } from "sonner";

const AllCourseApplicants = () => {
  const {
    data: allCoursesApplications,
    isLoading: isCoursesApplicationsLoading,
    isFetching: isCoursesApplicationsFetching,
    isError: isCoursesApplicationsError,
  } = useGetAllCoursesApplicationQuery();

  const courseApplications = allCoursesApplications?.data ?? [];

  const normalize = (v: string) => v?.toLowerCase().trim();
  const stats = courseApplications.reduce(
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
            exportToExcel(courseApplications);
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
          count={courseApplications.length ?? 0}
          loading={loading}
        />

        <StatsCards
          icon={<Cat size={25} />}
          title={"Beginner Level"}
          count={stats.beginner ?? 0}
          loading={loading}
        />

        <StatsCards
          icon={<UserStar size={25} />}
          title={"Intermediate Level"}
          count={stats.intermediate ?? 0}
          loading={loading}
        />

        <StatsCards
          icon={<GraduationCap size={25} />}
          title={"Advanced Level"}
          count={stats.advanced ?? 0}
          loading={loading}
        />
      </div>

      <div className="bg-card rounded-lg shadow p-5">
        <TableApplicants applicants={courseApplications} isFetching={loading} />
      </div>
    </section>
  );
};

export default AllCourseApplicants;
