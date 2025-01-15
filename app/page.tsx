import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, TrendingUp, Wallet, PiggyBank, DollarSign, AlertCircle, Calendar, Sprout, Timer } from 'lucide-react'

export default function Home() {
  const today = new Date()
  const formatDate = (date: string) => new Date(date).toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric' 
  })

  const isOverdue = (dueDate: string) => new Date(dueDate) < today

  return (
    <div className="p-4 md:p-6 pb-20 md:pb-6 bg-zinc-950 h-full">
      <div className="flex flex-col sm:flex-row justify-between items-start mb-6">
        <h1 className="text-2xl font-bold text-gray-100 mb-4 sm:mb-0">Dashboard</h1>
        <Button variant="outline" className="border-gray-800 text-gray-200 hover:bg-gray-800">
          <Download className="mr-2 h-4 w-4" />
          Export Analysis
        </Button>
      </div>
      
      <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-200">Available Balance</CardTitle>
            <Wallet className="h-4 w-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-400">$15,000</div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-200">Receivable Balance</CardTitle>
            <PiggyBank className="h-4 w-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-400">$45,300</div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-200">Profits</CardTitle>
            <DollarSign className="h-4 w-4 text-emerald-400" />
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-emerald-400">$8,200</div>
              <TrendingUp className="h-4 w-4 text-emerald-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 grid gap-4 md:gap-6 md:grid-cols-2">
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader className="flex items-center justify-between">
            <CardTitle className="text-gray-100">Active Loans</CardTitle>
            <DollarSign className="h-5 w-5 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <div className="text-2xl font-bold text-emerald-400 mb-2">$25,400</div>
              <p className="text-sm text-gray-400 flex items-center">
                <AlertCircle className="h-4 w-4 mr-2" />
                5 active loans
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-300 mb-2 flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                Upcoming Payments
              </h3>
              <div className={`flex items-center justify-between p-2 rounded-lg ${
                isOverdue('2024-01-15') ? 'bg-red-950/30' : 'bg-gray-800/50'
              }`}>
                <div>
                  <p className="font-medium text-gray-200">John Smith</p>
                  <div className="flex items-center">
                    <Timer className="h-4 w-4 mr-1 text-gray-400" />
                    <p className={`text-sm ${
                      isOverdue('2024-01-15') 
                      ? 'text-red-400 font-medium' 
                      : 'text-gray-400'
                    }`}>
                      Due: {formatDate('2024-01-15')}
                      {isOverdue('2024-01-15') && ' (Overdue)'}
                    </p>
                  </div>
                </div>
                <div className={`font-bold ${
                  isOverdue('2024-01-15') ? 'text-red-400' : 'text-emerald-400'
                }`}>$500</div>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-gray-800/50">
                <div>
                  <p className="font-medium text-gray-200">Mary Johnson</p>
                  <div className="flex items-center">
                    <Timer className="h-4 w-4 mr-1 text-gray-400" />
                    <p className="text-sm text-gray-400">
                      Due: {formatDate('2024-02-20')}
                    </p>
                  </div>
                </div>
                <div className="font-bold text-emerald-400">$800</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardHeader className="flex items-center justify-between">
            <CardTitle className="text-gray-100">Active Agricultural Investments</CardTitle>
            <Sprout className="h-5 w-5 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <div className="text-2xl font-bold text-emerald-400 mb-2">$32,800</div>
              <p className="text-sm text-gray-400 flex items-center">
                <AlertCircle className="h-4 w-4 mr-2" />
                3 active investments
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-2 rounded-lg bg-gray-800/50">
                <div>
                  <p className="font-medium text-gray-200">Corn Cultivation</p>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1 text-gray-400" />
                    <p className="text-sm text-gray-400">
                      Harvest: {formatDate('2024-03-15')}
                    </p>
                  </div>
                </div>
                <div className="text-sm font-medium text-emerald-400">$15,000</div>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-gray-800/50">
                <div>
                  <p className="font-medium text-gray-200">Bean Cultivation</p>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1 text-gray-400" />
                    <p className="text-sm text-gray-400">
                      Harvest: {formatDate('2024-04-20')}
                    </p>
                  </div>
                </div>
                <div className="text-sm font-medium text-emerald-400">$12,800</div>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-gray-800/50">
                <div>
                  <p className="font-medium text-gray-200">Sorghum Cultivation</p>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1 text-gray-400" />
                    <p className="text-sm text-gray-400">
                      Harvest: {formatDate('2024-05-10')}
                    </p>
                  </div>
                </div>
                <div className="text-sm font-medium text-emerald-400">$5,000</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

