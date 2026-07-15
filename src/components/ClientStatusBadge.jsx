import { Badge } from "@/components/ui/badge"

function ClientStatusBadge({ status }) {
  return (
    <Badge variant={status === "Needs Attention" ? "destructive" : "secondary"}>
      {status}
    </Badge>
  )
}

export default ClientStatusBadge