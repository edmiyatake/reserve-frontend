import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

// Mock data — swap this out once you're pulling clients from an API
const clients = [
  {
    id: 1,
    name: "Derek Hong",
    age: 49,
    sessionNumber: 67,
    bmi: 400,
    status: "Needs Attention",
  },
  {
    id: 2,
    name: "Ronald Hui",
    age: 24,
    sessionNumber: 12,
    bmi: 11,
    status: "Jacked",
  },
  {
    id: 3,
    name: "Ryan Lew",
    age: 24,
    sessionNumber: 45,
    bmi: 15,
    status: "The Goat",
  },
  {
    id: 4,
    name: "Justin Phen",
    age: 24,
    sessionNumber: 3,
    bmi: 19,
    status: "Meh",
  },
]

function ClientsTable() {
  return (
    <div className="rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-10">
              <Checkbox />
            </TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Age</TableHead>
            <TableHead>Session #</TableHead>
            <TableHead>BMI</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {clients.map((client) => (
            <TableRow key={client.id}>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell className="font-medium">{client.name}</TableCell>
              <TableCell>{client.age}</TableCell>
              <TableCell>{client.sessionNumber}</TableCell>
              <TableCell>{client.bmi}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    client.status === "Needs Attention"
                      ? "destructive"
                      : "secondary"
                  }
                >
                  {client.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <Button variant="outline" size="sm">
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