"use client";
import { TableApplicantsAdmin } from "@/components/(dashboard)/admin/TableApplicantsAdmin";
import ErrorPage from "@/components/(dashboard)/shared/ErrorPage";
import StatsCards from "@/components/(dashboard)/shared/StatsCards";
import Title from "@/components/(dashboard)/shared/Title";
import { useGetAllCoursesApplicationQuery } from "@/redux/apis/courseApi";
import { Status } from "@/validation/enroll/Enroll.schema";
import {
  CircleCheckBig,
  CircleEllipsis,
  CircleX,
  Newspaper,
} from "lucide-react";

const Admin = () => {
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

      const status = normalize(app.status);

      if (status === normalize(Status.Pending)) acc.pending++;
      if (status === normalize(Status.Accepted)) acc.accepted++;
      if (status === normalize(Status.Rejected)) acc.rejected++;

      return acc;
    },
    {
      total: 0,
      pending: 0,
      accepted: 0,
      rejected: 0,
    },
  );

  const loading = isCoursesApplicationsLoading || isCoursesApplicationsFetching;

  return (
    <div className="p-5">
      <Title title="Dashboard Overview" subTitle="Monitoring 240+ students" />

      {isCoursesApplicationsError && <ErrorPage />}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-10">
        <StatsCards
          icon={<Newspaper size={25} />}
          title={"Total Applications"}
          count={courseApplications.length ?? 0}
          loading={loading}
        />

        <StatsCards
          icon={<CircleEllipsis size={25} />}
          title={"Accepted"}
          count={stats.accepted ?? 0}
          loading={loading}
          color="bg-success/10 text-success border border-success"
        />

        <StatsCards
          icon={<CircleCheckBig size={25} />}
          title={"Pending"}
          count={stats.pending ?? 0}
          loading={loading}
          color="bg-pending/10 text-pending border border-pending"
        />

        <StatsCards
          icon={<CircleX size={25} />}
          title={"Rejected"}
          count={stats.rejected ?? 0}
          loading={loading}
          color="bg-destructive/10 text-destructive border border-destructive"
        />
      </div>

      {/* <div className="my-10 grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="col-span-2">
          <ChartFinancial
            totalBalance={totalBalance}
            totalIncome={totalIncome}
            totalExpenses={totalExpenses}
            transactions={transaction ?? []}
            loading={loading}
          />
        </div>
        <div>
          <ChartPieDonutFinancial
            transactions={transaction ?? []}
            loading={loading}
          />
        </div>
      </div>

      </div> */}
      <div className="bg-card rounded-lg border p-5">
        <TableApplicantsAdmin
          applicants={courseApplications}
          isFetching={loading}
        />
      </div>
    </div>
  );
};

export default Admin;
