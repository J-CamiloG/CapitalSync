import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Sprout, Calendar } from 'lucide-react'

export default function AgriculturalInvestments() {
  return (
    <div className="p-4 md:p-6 pb-20 md:pb-6">
      <div className="flex flex-col sm:flex-row justify-between items-start mb-6">
        <h1 className="text-2xl font-bold text-gray-100 mb-4 sm:mb-0">Agricultural Investments</h1>
        <Button className="bg-emerald-600 hover:bg-emerald-700">
          <Plus className="mr-2 h-4 w-4" />
          New Investment
        </Button>
      </div>

      <div className="grid gap-4">
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="space-y-1.5">
              <CardTitle className="text-gray-100">Corn Cultivation</CardTitle>
              <div className="text-sm text-gray-400">Investment #AG001</div>
            </div>
            <Sprout className="h-5 w-5 text-emerald-400" />
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-gray-400">Investment Amount</div>
                  <div className="text-lg font-semibold text-emerald-400">$15,000</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Expected Return</div>
                  <div className="text-lg font-semibold text-emerald-400">$18,750</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Planting Date</div>
                  <div className="text-lg font-semibold text-gray-100">Dec 15, 2023</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Expected Harvest</div>
                  <div className="text-lg font-semibold text-gray-100">Mar 15, 2024</div>
                </div>
              </div>
              <div className="flex items-center text-emerald-400 bg-emerald-950/30 p-2 rounded-lg">
                <Calendar className="h-4 w-4 mr-2" />
                Status: In Progress - 60 days until harvest
              </div>
            </div>
          </CardContent>
        </Card>

        {/* More investment cards... */}
      </div>
    </div>
  )
}

