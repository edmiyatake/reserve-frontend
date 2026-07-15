import { useState } from "react"
import { Plus } from "lucide-react"
import Navbar from "@/components/Navbar"
import ClientsTable from "@/components/ClientsTable"
import ClientDetailPanel from "@/components/ClientDetailPanel"
import Pagination from "@/components/Pagination"
import { Button } from "@/components/ui/button"
import { clients } from "@/data/clients"

const PAGE_SIZE = 8

function App() {
  const [page, setPage] = useState(1)
  const [selectedId, setSelectedId] = useState(clients[0]?.id ?? null)

  const pageCount = Math.ceil(clients.length / PAGE_SIZE)
  const pageClients = clients.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)
  const selectedClient = clients.find((c) => c.id === selectedId) ?? null

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="px-16 py-8">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-semibold">
            Morning, Ryan. Here's what's happening today
          </h1>
          <Button>
            <Plus className="h-4 w-4" />
            Add client
          </Button>
        </div>

        <div className="flex items-stretch gap-6">
          <div className="flex w-2/3 flex-col">
            <div className="min-h-0 flex-1">
              <ClientsTable
                clients={pageClients}
                selectedId={selectedId}
                onSelect={setSelectedId}
              />
            </div>
            {pageCount > 1 && (
              <Pagination
                page={page}
                pageCount={pageCount}
                totalCount={clients.length}
                pageSize={PAGE_SIZE}
                onPageChange={setPage}
              />
            )}
          </div>

          <div className="w-1/3">
            <ClientDetailPanel client={selectedClient} />
          </div>
        </div>

      </main>
    </div>
  )
}

export default App