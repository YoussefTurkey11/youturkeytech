"use client";

import * as React from "react";
import { TrendingUp } from "lucide-react";
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
import { courseStatus, Sources } from "@/types/courseType";

// Import icons for each source
import { Globe } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export const description = "A donut chart comparing applicant sources";

const getSourceColor = (source: string) => {
  switch (source) {
    case Sources.YouTube:
      return "var(--chart-1)";
    case Sources.Instagram:
      return "var(--chart-2)";
    case Sources.Facebook:
      return "var(--chart-3)";
    case Sources.LinkedIn:
      return "var(--chart-4)";
    default:
      return "var(--chart-5)";
  }
};

const chartConfig = {
  [Sources.YouTube]: {
    label: "YouTube",
    color: "var(--chart-1)",
  },
  [Sources.Instagram]: {
    label: "Instagram",
    color: "var(--chart-2)",
  },
  [Sources.Facebook]: {
    label: "Facebook",
    color: "var(--chart-3)",
  },
  [Sources.LinkedIn]: {
    label: "LinkedIn",
    color: "var(--chart-4)",
  },
  [Sources.Other]: {
    label: "Other",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

export function ChartPieDonutSource({
  applicants,
  loading,
}: {
  applicants: courseStatus[];
  loading: boolean;
}) {
  const chartData = React.useMemo(() => {
    const sourceStats: Record<string, number> = {};

    // Initialize all sources with 0
    Object.values(Sources).forEach((source) => {
      sourceStats[source] = 0;
    });

    // Count applicants by source
    applicants.forEach((applicant) => {
      const source = applicant.source;
      if (sourceStats[source] !== undefined) {
        sourceStats[source]++;
      }
    });

    // Convert to array and filter out sources with 0 count
    return Object.entries(sourceStats)
      .map(([source, count]) => ({
        name: source,
        value: count,
        fill: getSourceColor(source),
      }))
      .filter((item) => item.value > 0)
      .sort((a, b) => b.value - a.value);
  }, [applicants]);

  const total = applicants.length;
  const topSource = chartData.length > 0 ? chartData[0] : null;

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center">
        <CardTitle>Applicants Sources Distribution</CardTitle>
        <CardDescription>
          Where applicants discovered the course
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
                <Globe className="h-16 w-16 text-muted-foreground mb-4" />
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
        </>
      )}
    </Card>
  );
}
