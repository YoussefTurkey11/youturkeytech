"use client";
import ErrorPage from "@/components/(dashboard)/shared/ErrorPage";
import StatsCards from "@/components/(dashboard)/shared/StatsCards";
import Title from "@/components/(dashboard)/shared/Title";
import { useGetAllCoursesApplicationQuery } from "@/redux/apis/courseApi";
import { Newspaper } from "lucide-react";

const Admin = () => {
  const {
    data: allCoursesApplications,
    isLoading: isCoursesApplicationsLoading,
    isFetching: isCoursesApplicationsFetching,
    isError: isCoursesApplicationsError,
  } = useGetAllCoursesApplicationQuery();

  const courseApplications = allCoursesApplications?.data ?? [];

  const loading = isCoursesApplicationsLoading || isCoursesApplicationsFetching;

  return (
    <div className="p-5">
      <Title
        title="Finance Overview"
        subTitle="Monitoring 240+ assets across North Africa"
      />

      {isCoursesApplicationsError && <ErrorPage />}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-10">
        <StatsCards
          icon={<Newspaper size={25} />}
          title={"Total Applications"}
          count={courseApplications.length ?? 0}
          loading={loading}
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

      <div className="bg-card rounded-lg border p-5">
        <TableTransactions
          transactions={transaction}
          isFetching={isTransactionFetching}
        />
      </div> */}
    </div>
  );
};

export default Admin;
