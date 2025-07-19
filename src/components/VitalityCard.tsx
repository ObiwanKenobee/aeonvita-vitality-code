import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Activity } from "lucide-react"

interface VitalityCardProps {
  title: string
  value: string | number
  unit?: string
  change?: number
  changeType?: "positive" | "negative" | "neutral"
  progress?: number
  status?: "optimal" | "warning" | "critical"
  icon?: React.ComponentType<{ className?: string }>
  description?: string
  actionLabel?: string
  onAction?: () => void
}

export function VitalityCard({
  title,
  value,
  unit,
  change,
  changeType = "neutral",
  progress,
  status = "optimal",
  icon: Icon = Activity,
  description,
  actionLabel,
  onAction
}: VitalityCardProps) {
  const getStatusColor = () => {
    switch (status) {
      case "optimal": return "text-secondary"
      case "warning": return "text-warning"
      case "critical": return "text-destructive"
      default: return "text-muted-foreground"
    }
  }

  const getStatusBadge = () => {
    switch (status) {
      case "optimal": return <Badge variant="secondary" className="bg-secondary/20 text-secondary">Optimal</Badge>
      case "warning": return <Badge variant="outline" className="border-warning text-warning">Monitor</Badge>
      case "critical": return <Badge variant="destructive">Critical</Badge>
      default: return null
    }
  }

  const getTrendIcon = () => {
    if (!change) return null
    
    if (changeType === "positive") {
      return <TrendingUp className="w-3 h-3 text-secondary" />
    } else if (changeType === "negative") {
      return <TrendingDown className="w-3 h-3 text-destructive" />
    }
    return null
  }

  return (
    <Card className="relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
            <Icon className={`w-4 h-4 ${getStatusColor()}`} />
            {title}
          </CardTitle>
          {getStatusBadge()}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-3">
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-foreground">{value}</span>
          {unit && <span className="text-sm text-muted-foreground">{unit}</span>}
          {change && (
            <div className="flex items-center gap-1 text-xs">
              {getTrendIcon()}
              <span className={changeType === "positive" ? "text-secondary" : changeType === "negative" ? "text-destructive" : "text-muted-foreground"}>
                {change > 0 ? "+" : ""}{change}%
              </span>
            </div>
          )}
        </div>
        
        {progress !== undefined && (
          <div className="space-y-1">
            <Progress value={progress} className="h-2" />
            <p className="text-xs text-muted-foreground">{progress}% of optimal range</p>
          </div>
        )}
        
        {description && (
          <p className="text-xs text-muted-foreground">{description}</p>
        )}
        
        {actionLabel && onAction && (
          <Button 
            variant="ghost" 
            size="sm" 
            className="w-full text-xs h-8 hover:bg-accent/50"
            onClick={onAction}
          >
            {actionLabel}
          </Button>
        )}
      </CardContent>
      
      {/* Glow effect for optimal status */}
      {status === "optimal" && (
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-accent/5 pointer-events-none" />
      )}
    </Card>
  )
}