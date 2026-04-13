import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

const StatsCards = ({
  icon,
  title,
  count,
  loading,
  color = "bg-foreground text-secondary-foreground",
}: {
  icon: React.ReactNode;
  title: string;
  count: number;
  loading: boolean;
  color?: string;
}) => {
  if (loading)
    return (
      <div className="rounded-lg shadow bg-background p-5 space-y-5">
        <div className="flex items-center justify-between">
          <Skeleton className="h-12 w-12 rounded-lg" />
          <Skeleton className="h-6 w-14 rounded-md" />
        </div>

        <div className="space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-8 w-16" />
        </div>
      </div>
    );

  return (
    <Card className="rounded-lg bg-card p-5 space-y-5">
      <div
        className={cn(
          "p-3 rounded-lg w-fit border",
          `bg-${color}/10 text-${color} border-${color}`,
        )}
      >
        {icon}
      </div>

      <div className="flex flex-col">
        <p className="text-md font-semibold text-muted-foreground">{title}</p>
        <h4 className="text-3xl font-bold">{count}</h4>
      </div>
    </Card>
  );
};

export default StatsCards;
