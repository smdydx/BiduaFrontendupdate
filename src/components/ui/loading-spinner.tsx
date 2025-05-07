
import { cn } from "@/lib/utils";

export function LoadingSpinner({ className }: { className?: string }) {
  return (
    <div className="flex justify-center items-center min-h-[200px]">
      <div className={cn("animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary", className)} />
    </div>
  );
}
