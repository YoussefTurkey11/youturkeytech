"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { TrendingUp, Users, Target, Award } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { courseStatus } from "@/types/courseType";
import { Skeleton } from "@/components/ui/skeleton";
import { Level } from "@/validation/enroll/Enroll.schema";

// Chart configuration for each level
const chartConfig = {
  beginner: {
    label: "Beginner",
    color: "hsl(var(--chart-1))",
    icon: Users,
  },
  intermediate: {
    label: "Intermediate",
    color: "hsl(var(--chart-2))",
    icon: Target,
  },
  advanced: {
    label: "Advanced",
    color: "hsl(var(--chart-3))",
    icon: Award,
  },
} satisfies ChartConfig;

const ChartBarLevel = ({
  applicants = [],
  loading,
}: {
  totalBalance?: number;
  totalIncome?: number;
  totalExpenses?: number;
  applicants: courseStatus[];
  loading: boolean;
}) => {
  // Process data by level
  const chartData = React.useMemo(() => {
    const levelStats = {
      [Level.Beginner]: {
        name: "Beginner",
        count: 0,
        totalAmount: 0,
        applications: [] as courseStatus[],
      },
      [Level.Intermediate]: {
        name: "Intermediate",
        count: 0,
        totalAmount: 0,
        applications: [] as courseStatus[],
      },
      [Level.Advanced]: {
        name: "Advanced",
        count: 0,
        totalAmount: 0,
        applications: [] as courseStatus[],
      },
    };

    // Group applicants by level
    applicants.forEach((applicant) => {
      const level = applicant.level;
      if (levelStats[level]) {
        levelStats[level].count++;
        levelStats[level].totalAmount += Number(applicant.level || 0);
        levelStats[level].applications.push(applicant);
      }
    });

    // Calculate percentages and prepare chart data
    const totalApplicants = applicants.length;

    return Object.values(levelStats).map((level) => ({
      name: level.name,
      count: level.count,
      totalAmount: level.totalAmount,
      percentage:
        totalApplicants > 0
          ? ((level.count / totalApplicants) * 100).toFixed(1)
          : 0,
    }));
  }, [applicants]);

  // Calculate statistics
  const totalApplicants = applicants.length;

  const mostPopularLevel = chartData.reduce((prev, current) =>
    prev.count > current.count ? prev : current,
  );

  const getLevelIcon = (levelName: string) => {
    switch (levelName.toLowerCase()) {
      case "beginner":
        return <Users className="size-4" />;
      case "intermediate":
        return <Target className="size-4" />;
      case "advanced":
        return <Award className="size-4" />;
      default:
        return <Users className="size-4" />;
    }
  };

  return (
    <section>
      <Card className="w-full mx-auto">
        <CardHeader className="px-6">
          <CardTitle className="text-xl font-semibold">
            Applicants Distribution by Level
          </CardTitle>
          <CardDescription>
            Comparison of applicants across different experience levels:
            Beginner, Intermediate, and Advanced
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-6 px-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-lg border bg-card p-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-muted-foreground">
                  Total Applicants
                </p>
                <Users className="size-4 text-blue-500" />
              </div>
              <p className="text-2xl font-bold mt-2">{totalApplicants}</p>
              <p className="text-xs text-muted-foreground mt-1">
                Across all levels
              </p>
            </div>

            <div className="rounded-lg border bg-card p-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-muted-foreground">
                  Most Popular Level
                </p>
                {getLevelIcon(mostPopularLevel.name)}
              </div>
              <p className="text-2xl font-bold mt-2 capitalize">
                {mostPopularLevel.name}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {mostPopularLevel.count} applicants (
                {mostPopularLevel.percentage}%)
              </p>
            </div>
          </div>

          {/* Bar Chart Comparison */}
          {loading ? (
            <Skeleton className="h-96 w-full rounded-lg" />
          ) : (
            <div className="w-full">
              <ChartContainer config={chartConfig} className="h-96 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={chartData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                    accessibilityLayer
                  >
                    <defs>
                      {chartData.map((entry, index) => (
                        <linearGradient
                          key={`gradient-${index}`}
                          id={`gradient-${entry.name}`}
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor={`var(--chart-${index + 1})`}
                            stopOpacity={0.8}
                          />
                          <stop
                            offset="100%"
                            stopColor={`var(--chart-${index + 1})`}
                            stopOpacity={0.3}
                          />
                        </linearGradient>
                      ))}
                    </defs>

                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="hsl(var(--border))"
                      vertical={false}
                      opacity={0.5}
                    />

                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: "var(--muted-foreground)" }}
                      tickMargin={10}
                    />

                    <YAxis
                      yAxisId="left"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 11, fill: "var(--muted-foreground)" }}
                      label={{
                        value: "Number of Applicants",
                        angle: -90,
                        position: "insideLeft",
                        style: {
                          fontSize: 12,
                          fill: "var(--muted-foreground)",
                        },
                      }}
                    />

                    <YAxis
                      yAxisId="right"
                      orientation="right"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 11, fill: "var(--muted-foreground)" }}
                      tickFormatter={(value) => `${value}%`}
                      label={{
                        value: "Percentage",
                        angle: 90,
                        position: "insideRight",
                        style: {
                          fontSize: 12,
                          fill: "var(--muted-foreground)",
                        },
                      }}
                    />

                    <ChartTooltip
                      cursor={{ fill: "var(--muted)", opacity: 0.2 }}
                      content={
                        <ChartTooltipContent
                          formatter={(value, name, item) => {
                            if (name === "percentage") {
                              return [`${value}%`, "Percentage"];
                            }
                            if (name === "totalAmount") {
                              return [
                                `$${Number(value).toLocaleString()}`,
                                "Total Amount",
                              ];
                            }
                            return [value, "Applicants"];
                          }}
                          labelFormatter={(label) => `${label} Level`}
                        />
                      }
                    />

                    <ChartLegend
                      content={<ChartLegendContent />}
                      iconType="circle"
                    />

                    {/* Bar chart for Applicant Count */}
                    <Bar
                      yAxisId="left"
                      dataKey="count"
                      name="Applicants Count"
                      radius={[8, 8, 0, 0]}
                      maxBarSize={80}
                    >
                      {chartData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={`url(#gradient-${entry.name})`}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          )}

          {/* Level Details Table */}
          {!loading && chartData.length > 0 && (
            <div className="mt-4 border rounded-lg overflow-hidden">
              <div className="bg-muted/50 px-4 py-2 border-b">
                <h3 className="font-semibold text-sm">Level Breakdown</h3>
              </div>
              <div className="divide-y">
                {chartData.map((level) => (
                  <div
                    key={level.name}
                    className="px-4 py-3 flex justify-between items-center hover:bg-muted/30"
                  >
                    <div className="flex items-center gap-3">
                      {getLevelIcon(level.name)}
                      <span className="font-medium capitalize">
                        {level.name}
                      </span>
                    </div>
                    <div className="flex gap-6 text-sm">
                      <div className="text-right">
                        <p className="text-muted-foreground">Count</p>
                        <p className="font-semibold">{level.count}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-muted-foreground">Percentage</p>
                        <p className="font-semibold">{level.percentage}%</p>
                      </div>
                      <div className="text-right">
                        <p className="text-muted-foreground">Total Amount</p>
                        <p className="font-semibold">
                          ${level.totalAmount.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Footer Info */}
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground pt-2 border-t">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-primary" />
              <span>
                Showing distribution of {totalApplicants} applicants across
                experience levels
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default ChartBarLevel;
