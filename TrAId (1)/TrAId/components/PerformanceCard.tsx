import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { TrendingUp } from 'lucide-react'

interface PerformanceCardProps {
  performance: number;
}

export function PerformanceCard({ performance }: PerformanceCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          Overall Performance
        </CardTitle>
        <TrendingUp className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{performance}%</div>
        <Progress value={performance} className="mt-2" />
        <p className="text-xs text-muted-foreground mt-2">
          Based on plan adherence and journaling
        </p>
      </CardContent>
    </Card>
  )
}

