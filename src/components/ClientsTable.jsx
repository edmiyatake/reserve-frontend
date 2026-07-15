// components/ClientsTable.jsx
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import ClientStatusBadge from "@/components/ClientStatusBadge"

function ClientsTable({ clients, selectedId, onSelect }) {
  return (
    <div className="flex h-full flex-col rounded-lg border">
      <Table className="h-full">
        <TableHeader>
          <TableRow>
            <TableHead className="w-10 py-2">
              <Checkbox />
            </TableHead>
            <TableHead className="py-2">Name</TableHead>
            <TableHead className="py-2">Age</TableHead>
            <TableHead className="py-2">Session #</TableHead>
            <TableHead className="py-2">BMI</TableHead>
            <TableHead className="py-2">Status</TableHead>
            <TableHead className="py-2 text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {clients.map((client) => (
            <TableRow
              key={client.id}
              data-state={selectedId === client.id ? "selected" : undefined}
              onClick={() => onSelect(client.id)}
              className="h-px cursor-pointer"
            >
              <TableCell className="py-2" onClick={(e) => e.stopPropagation()}>
                <Checkbox />
              </TableCell>
              <TableCell className="py-2 font-medium">{client.name}</TableCell>
              <TableCell className="py-2">{client.age}</TableCell>
              <TableCell className="py-2">{client.sessionNumber}</TableCell>
              <TableCell className="py-2">{client.bmi}</TableCell>
              <TableCell className="py-2">
                <ClientStatusBadge status={client.status} />
              </TableCell>
              <TableCell className="py-2 text-right">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation()
                    onSelect(client.id)
                  }}
                >
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default ClientsTable