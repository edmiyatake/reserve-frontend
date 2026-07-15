import Navbar from "@/components/Navbar"
import ClientsTable from "@/components/ClientsTable"

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="p-8">
        <h1 className="mb-6 text-2xl font-semibold">
          Hello Ryan! Here are your clients for the day
        </h1>

        <div className="flex gap-6">
          <div className="w-1/2">
            <ClientsTable />
          </div>

          <div className="w-1/2">
            {/* Client overview / updates panel goes here */}
          </div>
        </div>
      </main>
    </div>
  )
}

export default App