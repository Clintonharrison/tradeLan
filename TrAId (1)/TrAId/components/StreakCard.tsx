import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Trophy, Zap } from 'lucide-react'

interface StreakCardProps {
  currentStreak: number;
  targetStreak: number;
}

export function StreakCard({ currentStreak, targetStreak }: StreakCardProps) {
  const progress = (currentStreak / targetStreak) * 100;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          Current Streak
        </CardTitle>
        <Trophy className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{currentStreak}/{targetStreak} days</div>
        <Progress value={progress} className="mt-2" />
        <p className="text-xs text-muted-foreground mt-2">
          {targetStreak - currentStreak} more days to reach your goal!
        </p>
        <Button className="w-full mt-4" size="sm">
          <Zap className="mr-2 h-4 w-4" /> Keep It Going!
        </Button>
      </CardContent>
    </Card>
  )
}

