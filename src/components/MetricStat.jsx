import { TrendingUp, TrendingDown, Minus, AlertTriangle } from "lucide-react"

const trendConfig = {
  improving: { icon: TrendingUp, className: "text-green-600" },
  declining: { icon: TrendingDown, className: "text-red-600" },
  stable: { icon: Minus, className: "text-muted-foreground" },
}

function MetricStat({ label, unit, metric }) {
  const { icon: TrendIcon, className } = trendConfig[metric.trend]

  return (
    <div className="flex items-start justify-between border-b pb-3 last:border-b-0 last:pb-0">
      <div>
        <div className="flex items-center gap-1.5">
          <p className="text-xs text-muted-foreground">{label}</p>
          {metric.baselineFlag && (
            <AlertTriangle className="h-3 w-3 text-amber-500" />
          )}
        </div>
        <p className="text-lg font-medium">
          {metric.today}
          {unit}
        </p>
        <p className="text-xs text-muted-foreground">
          7-day avg {metric.sevenDayAvg}
          {unit}
        </p>
      </div>
      <TrendIcon className={`h-4 w-4 shrink-0 ${className}`} />
    </div>
  )
}

export default MetricStat