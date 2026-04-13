"use client";

import * as React from "react";
import { TrendingUp, Briefcase, GraduationCap } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { courseStatus } from "@/types/courseType";
import { Skeleton } from "@/components/ui/skeleton";

export const description =
  "A donut chart comparing experienced vs inexperienced applicants";

const chartConfig = {
  experienced: {
    label: "Has Experience",
    color: "var(--chart-1)",
    icon: Briefcase,
  },
  inexperienced: {
    label: "No Experience",
    color: "var(--chart-2)",
    icon: GraduationCap,
  },
} satisfies ChartConfig;

export function ChartPieDonutExperience({
  applicants,
  loading,
}: {
  applicants: courseStatus[];
  loading: boolean;
}) {
  const chartData = React.useMemo(() => {
    let experienced = 0;
    let inexperienced = 0;

    applicants.forEach((applicant) => {
      if (applicant.hasExperience) {
        experienced++;
      } else {
        inexperienced++;
      }
    });

    return [
      {
        name: "Has Experience",
        value: experienced,
        fill: "var(--chart-1)",
        icon: Briefcase,
      },
      {
        name: "No Experience",
        value: inexperienced,
        fill: "var(--chart-2)",
        icon: GraduationCap,
      },
    ].filter((item) => item.value > 0);
  }, [applicants]);

  const total = applicants.length;
  const experiencedCount =
    chartData.find((d) => d.name === "Has Experience")?.value || 0;
  const inexperiencedCount =
    chartData.find((d) => d.name === "No Experience")?.value || 0;
  const experiencedPercentage =
    total > 0 ? ((experiencedCount / total) * 100).toFixed(1) : 0;
  const inexperiencedPercentage =
    total > 0 ? ((inexperiencedCount / total) * 100).toFixed(1) : 0;

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center">
        <CardTitle>Applicants Experience Distribution</CardTitle>
        <CardDescription>
          Comparison between experienced and inexperienced applicants
        </CardDescription>
      </CardHeader>
      {loading ? (
        <div className="flex justify-center py-8">
          <Skeleton className="h-50 w-50 rounded-full" />
        </div>
      ) : (
        <>
          <CardContent className="flex-1 pb-0">
            {total === 0 ? (
              <div className="flex flex-col items-center justify-center h-[300px] text-center">
                <GraduationCap className="h-16 w-16 text-muted-foreground mb-4" />
                <p className="text-muted-foreground">
                  No applicants data available
                </p>
                <p className="text-sm text-muted-foreground">
                  Check back later for statistics
                </p>
              </div>
            ) : (
              <ChartContainer
                config={chartConfig}
                className="mx-auto aspect-square w-full max-w-[300px]"
              >
                <PieChart>
                  <ChartTooltip
                    cursor={false}
                    content={
                      <ChartTooltipContent
                        formatter={(value, name) => {
                          const percentage =
                            total > 0
                              ? ((Number(value) / total) * 100).toFixed(1)
                              : 0;
                          return [`${value} applicants (${percentage}%)`, name];
                        }}
                      />
                    }
                  />
                  <Pie
                    data={chartData}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={60}
                    strokeWidth={5}
                    stroke="var(--background)"
                    paddingAngle={2}
                  >
                    <Label
                      content={({ viewBox }) => {
                        if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                          return (
                            <text
                              x={viewBox.cx}
                              y={viewBox.cy}
                              textAnchor="middle"
                              dominantBaseline="middle"
                            >
                              <tspan
                                x={viewBox.cx}
                                y={viewBox.cy}
                                className="fill-foreground text-3xl font-bold"
                              >
                                {total}
                              </tspan>
                              <tspan
                                x={viewBox.cx}
                                y={(viewBox.cy || 0) + 24}
                                className="fill-muted-foreground text-sm"
                              >
                                Total
                              </tspan>
                              <tspan
                                x={viewBox.cx}
                                y={(viewBox.cy || 0) + 40}
                                className="fill-muted-foreground text-xs"
                              >
                                Applicants
                              </tspan>
                            </text>
                          );
                        }
                      }}
                    />
                  </Pie>
                </PieChart>
              </ChartContainer>
            )}
          </CardContent>

          {total > 0 && (
            <CardFooter className="flex flex-col gap-4">
              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="rounded-lg border bg-card p-3 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Briefcase className="size-4 text-chart-1" />
                    <p className="text-sm font-medium text-muted-foreground">
                      Experienced
                    </p>
                  </div>
                  <p className="text-2xl font-bold">{experiencedCount}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {experiencedPercentage}% of total
                  </p>
                </div>

                <div className="rounded-lg border bg-card p-3 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <GraduationCap className="size-4 text-chart-2" />
                    <p className="text-sm font-medium text-muted-foreground">
                      No Experience
                    </p>
                  </div>
                  <p className="text-2xl font-bold">{inexperiencedCount}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {inexperiencedPercentage}% of total
                  </p>
                </div>
              </div>
            </CardFooter>
          )}
        </>
      )}
    </Card>
  );
}
