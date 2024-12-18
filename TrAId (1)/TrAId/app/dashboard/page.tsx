'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { StreakCard } from "@/components/StreakCard"
import { PerformanceCard } from "@/components/PerformanceCard"
import { AchievementBadge } from "@/components/AchievementBadge"
import { CongratulationsPopup } from "@/components/CongratulationsPopup"
import { Line, LineChart, Pie, PieChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

export default function Dashboard() {
  const [showCongrats, setShowCongrats] = useState(false);

  // Simulated data - in a real app, this would come from your backend
  const currentStreak = 4;
  const targetStreak = 5;
  const overallPerformance = 78;

  const achievements = [
    { title: "Consistent Trader", description: "Completed 7-day streak" },
    { title: "Journal Master", description: "30 days of continuous journaling" },
  ];

  const performanceData = [
    { date: '2023-06-01', performance: 75 },
    { date: '2023-06-02', performance: 80 },
    { date: '2023-06-03', performance: 78 },
    { date: '2023-06-04', performance: 82 },
    { date: '2023-06-05', performance: 85 },
  ];

  const tradeDistributionData = [
    { name: 'Winning Trades', value: 62 },
    { name: 'Losing Trades', value: 38 },
  ];

  const planAdherenceData = [
    { date: '2023-06-01', adherence: 90 },
    { date: '2023-06-02', adherence: 85 },
    { date: '2023-06-03', adherence: 95 },
    { date: '2023-06-04', adherence: 88 },
    { date: '2023-06-05', adherence: 92 },
  ];

  const handleStreakComplete = () => {
    setShowCongrats(true);
  };

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center space-x-2">
          <Button onClick={handleStreakComplete}>Simulate Streak Completion</Button>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StreakCard currentStreak={currentStreak} targetStreak={targetStreak} />
        <PerformanceCard performance={overallPerformance} />
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Daily Trades
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Win Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">62%</div>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Performance Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <ChartContainer config={{
              performance: {
                label: "Performance",
                color: "hsl(var(--chart-1))",
              },
            }} className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={performanceData}>
                  <XAxis dataKey="date" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line type="monotone" dataKey="performance" stroke="var(--color-performance)" />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Trade Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{
              value: {
                label: "Value",
                color: "hsl(var(--chart-1))",
              },
            }} className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={tradeDistributionData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="var(--color-value)"
                    label
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <AchievementBadge
                  key={index}
                  title={achievement.title}
                  description={achievement.description}
                />
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Plan Adherence</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{
              adherence: {
                label: "Adherence",
                color: "hsl(var(--chart-1))",
              },
            }} className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={planAdherenceData}>
                  <XAxis dataKey="date" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line type="monotone" dataKey="adherence" stroke="var(--color-adherence)" />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
      {showCongrats && (
        <CongratulationsPopup
          message="You've completed your 5-day streak! Keep up the great work!"
          onClose={() => setShowCongrats(false)}
        />
      )}
    </div>
  )
}

