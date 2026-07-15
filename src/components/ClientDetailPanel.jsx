import { Card, CardContent, CardHeader } from "@/components/ui/card"
import ClientStatusBadge from "@/components/ClientStatusBadge"
import MetricStat from "@/components/MetricStat"

const metricConfig = [
  { key: "recovery", label: "Recovery", unit: "%" },
  { key: "hrv", label: "HRV", unit: " ms" },
  { key: "rhr", label: "RHR", unit: " bpm" },
  { key: "sleep", label: "Sleep", unit: " hrs" },
]

function ClientDetailPanel({ client }) {
  if (!client) {
    return (
      <Card>
        <CardContent className="p-6 text-sm text-muted-foreground">
          Select a client to see their overview.
        </CardContent>
      </Card>
    )
  }

  const flaggedActions = metricConfig
    .map(({ key, label }) => ({ label, action: client.metrics[key].action }))
    .filter(({ action }) => action !== "No action needed")

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between p-4">
        <div>
          <p className="font-medium">{client.name}</p>
          <p className="text-sm text-muted-foreground">
            Age {client.age} · Session #{client.sessionNumber}
          </p>
        </div>
        <ClientStatusBadge status={client.status} />
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="flex flex-col gap-3 border-t pt-3">
          {metricConfig.map(({ key, label, unit }) => (
            <MetricStat
              key={key}
              label={label}
              unit={unit}
              metric={client.metrics[key]}
            />
          ))}
        </div>

        <div className="mt-3 border-t pt-3">
          <p className="mb-1 text-xs text-muted-foreground">Recommended actions</p>
          {flaggedActions.length === 0 ? (
            <p className="text-sm leading-relaxed">No action needed.</p>
          ) : (
            <ul className="space-y-1 text-sm leading-relaxed">
              {flaggedActions.map(({ label, action }) => (
                <li key={label}>
                  <span className="font-medium">{label}:</span> {action}
                </li>
              ))}
            </ul>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default ClientDetailPanel