import { cn } from "@/lib/utils"

export function LoadingState({ className }: { className?: string }) {
  return (
    <div className={cn("animate-pulse", className)} />
  )
}

export function TableRowSkeleton({ columns = 5 }: { columns?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto_auto_auto_auto] items-center px-5 py-4 gap-4 border-b border-slate-100 last:border-0">
      <div className="flex items-center gap-3 w-full">
        <LoadingState className="w-10 h-10 rounded-lg bg-slate-100 shrink-0" />
        <div className="flex flex-col gap-2 flex-1">
          <LoadingState className="h-4 bg-slate-100 rounded w-1/3" />
          <LoadingState className="h-3 bg-slate-100 rounded w-1/4" />
        </div>
      </div>
      {Array.from({ length: columns - 1 }).map((_, i) => (
        <div key={i} className="hidden md:flex px-3">
          <LoadingState className="h-4 bg-slate-100 rounded w-16" />
        </div>
      ))}
    </div>
  )
}

export function CardSkeleton() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 h-[120px] flex flex-col justify-between">
      <div className="flex justify-between items-start">
        <LoadingState className="h-4 bg-slate-100 rounded w-1/2" />
        <LoadingState className="h-8 w-8 rounded-full bg-slate-100" />
      </div>
      <div>
        <LoadingState className="h-6 bg-slate-100 rounded w-1/3 mb-2" />
        <LoadingState className="h-3 bg-slate-100 rounded w-1/4" />
      </div>
    </div>
  )
}
