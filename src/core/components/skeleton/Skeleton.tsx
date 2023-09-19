import { cn } from "@core/utils/styles/classnames";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  );
}

export { Skeleton };

// import { Skeleton } from "@/components/ui/skeleton"
// <Skeleton className="w-[100px] h-[20px] rounded-full" />
