import { Badge } from "@/components/ui/badge"
import { Trophy } from 'lucide-react'

interface AchievementBadgeProps {
  title: string;
  description: string;
}

export function AchievementBadge({ title, description }: AchievementBadgeProps) {
  return (
    <div className="flex items-center space-x-2">
      <Badge variant="secondary" className="h-8 w-8 rounded-full p-0 flex items-center justify-center">
        <Trophy className="h-4 w-4" />
      </Badge>
      <div>
        <h4 className="text-sm font-semibold">{title}</h4>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

