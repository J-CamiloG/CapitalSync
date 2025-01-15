import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, DollarSign, Calendar, ArrowUpRight } from 'lucide-react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function Loans() {
  return (
    <div className="p-4 md:p-6 pb-20 md:pb-6 bg-zinc-950 min-h-full">
      <div className="flex flex-col sm:flex-row justify-between items-start mb-6">
        <h1 className="text-2xl font-bold text-gray-100 mb-4 sm:mb-0">Active Loans</h1>
        <Button className="bg-emerald-600 hover:bg-emerald-700">
          <Plus className="mr-2 h-4 w-4" />
          New Loan
        </Button>
      </div>

      <div className="grid gap-6">
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="space-y-1.5">
              <CardTitle className="text-gray-100">Daniel Loan</CardTitle>
              <div className="text-sm text-gray-400">Combined Payment Schedule</div>
            </div>
            <DollarSign className="h-5 w-5 text-emerald-400" />
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <div className="text-sm text-gray-400">Total Loan Amount</div>
                  <div className="text-lg font-semibold text-emerald-400">$6,000,000</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Total Return</div>
                  <div className="text-lg font-semibold text-emerald-400">$7,300,000</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Total Profit</div>
                  <div className="text-lg font-semibold text-emerald-400">$1,300,000</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Status</div>
                  <div className="text-lg font-semibold text-yellow-500">In Progress</div>
                </div>
              </div>

              <Table>
                <TableHeader>
                  <TableRow className="border-gray-800">
                    <TableHead className="text-gray-400">Date</TableHead>
                    <TableHead className="text-gray-400">Description</TableHead>
                    <TableHead className="text-right text-gray-400">Amount</TableHead>
                    <TableHead className="text-right text-gray-400">Accumulated</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { date: "Feb 01, 2025", desc: "Weekly Payment #1", amount: 750000, accumulated: 750000 },
                    { date: "Feb 08, 2025", desc: "Weekly Payment #2", amount: 750000, accumulated: 1500000 },
                    { date: "Feb 10, 2025", desc: "Biweekly Payment #1", amount: 325000, accumulated: 1825000 },
                    { date: "Feb 15, 2025", desc: "Weekly Payment #3", amount: 750000, accumulated: 2575000 },
                    { date: "Feb 22, 2025", desc: "Weekly Payment #4", amount: 750000, accumulated: 3325000 },
                    { date: "Feb 25, 2025", desc: "Biweekly Payment #2", amount: 325000, accumulated: 3650000 },
                    { date: "Mar 01, 2025", desc: "Weekly Payment #5", amount: 750000, accumulated: 4400000 },
                    { date: "Mar 08, 2025", desc: "Weekly Payment #6", amount: 750000, accumulated: 5150000 },
                    { date: "Mar 10, 2025", desc: "Biweekly Payment #3", amount: 325000, accumulated: 5475000 },
                    { date: "Mar 15, 2025", desc: "Weekly Payment #7", amount: 750000, accumulated: 6225000 },
                    { date: "Mar 22, 2025", desc: "Weekly Payment #8", amount: 750000, accumulated: 6975000 },
                    { date: "Mar 25, 2025", desc: "Biweekly Payment #4", amount: 325000, accumulated: 7300000 },
                  ].map((payment, index) => (
                    <TableRow key={index} className="border-gray-800">
                      <TableCell className="text-gray-300">{payment.date}</TableCell>
                      <TableCell className="text-gray-300">{payment.desc}</TableCell>
                      <TableCell className="text-right text-gray-300">
                        ${payment.amount.toLocaleString()}
                      </TableCell>
                      <TableCell className="text-right text-emerald-400">
                        ${payment.accumulated.toLocaleString()}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-800/50 rounded-lg">
                <div>
                  <h3 className="text-sm font-medium text-gray-400 mb-2">Weekly Payments</h3>
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Amount per payment:</span>
                      <span className="text-emerald-400">$750,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Number of payments:</span>
                      <span className="text-emerald-400">8</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Subtotal:</span>
                      <span className="text-emerald-400">$6,000,000</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-400 mb-2">Biweekly Payments</h3>
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Amount per payment:</span>
                      <span className="text-emerald-400">$325,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Number of payments:</span>
                      <span className="text-emerald-400">4</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Subtotal:</span>
                      <span className="text-emerald-400">$1,300,000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

