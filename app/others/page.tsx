import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, MoreHorizontal } from 'lucide-react'

export default function Others() {
  return (
    <div className="p-4 md:p-6 pb-20 md:pb-6">
      <div className="flex flex-col sm:flex-row justify-between items-start mb-6">
        <h1 className="text-2xl font-bold text-gray-100 mb-4 sm:mb-0">Other Investments</h1>
        <Button className="bg-emerald-600 hover:bg-emerald-700">
          <Plus className="mr-2 h-4 w-4" />
          New Investment
        </Button>
      </div>

      <div className="grid gap-4">
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="space-y-1.5">
              <CardTitle className="text-gray-100">Real Estate Investment</CardTitle>
              <div className="text-sm text-gray-400">Investment #RE001</div>
            </div>
            <MoreHorizontal className="h-5 w-5 text-emerald-400" />
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-gray-400">Investment Amount</div>
                  <div className="text-lg font-semibold text-emerald-400">$50,000</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Expected Return</div>
                  <div className="text-lg font-semibold text-emerald-400">$65,000</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Start Date</div>
                  <div className="text-lg font-semibold text-gray-100">Jan 01, 2024</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Duration</div>
                  <div className="text-lg font-semibold text-gray-100">12 months</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

