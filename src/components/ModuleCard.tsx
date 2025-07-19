import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, Lock } from "lucide-react"
import { cn } from "@/lib/utils"

interface ModuleCardProps {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  status: "active" | "pending" | "locked"
  progress?: number
  lastUpdate?: string
  premium?: boolean
  onClick?: () => void
}

export function ModuleCard({
  title,
  description,
  icon: Icon,
  status,
  progress,
  lastUpdate,
  premium = false,
  onClick
}: ModuleCardProps) {
  const getStatusConfig = () => {
    switch (status) {
      case "active":
        return {
          badge: <Badge variant="secondary" className="bg-secondary/20 text-secondary">Active</Badge>,
          gradient: "from-secondary/10 to-accent/10",
          shadow: "shadow-glow-emerald/20"
        }
      case "pending":
        return {
          badge: <Badge variant="outline" className="border-warning text-warning">Pending Analysis</Badge>,
          gradient: "from-warning/10 to-accent/10",
          shadow: "shadow-glow-golden/20"
        }
      case "locked":
        return {
          badge: <Badge variant="outline" className="border-muted text-muted-foreground">
            <Lock className="w-3 h-3 mr-1" />
            Premium
          </Badge>,
          gradient: "from-muted/5 to-muted/10",
          shadow: ""
        }
    }
  }

  const statusConfig = getStatusConfig()

  return (
    <Card 
      className={cn(
        "relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 cursor-pointer group",
        statusConfig.shadow,
        status === "locked" && "opacity-75"
      )}
      onClick={status !== "locked" ? onClick : undefined}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className={cn(
              "w-10 h-10 rounded-lg flex items-center justify-center",
              status === "active" ? "bg-gradient-primary shadow-glow-emerald/30" :
              status === "pending" ? "bg-gradient-vitality shadow-glow-golden/30" :
              "bg-muted"
            )}>
              <Icon className={cn(
                "w-5 h-5",
                status === "locked" ? "text-muted-foreground" : "text-primary-foreground"
              )} />
            </div>
            <div className="flex-1">
              <CardTitle className="text-base font-semibold text-foreground flex items-center gap-2">
                {title}
                {premium && <Badge variant="outline" className="text-xs">Premium</Badge>}
              </CardTitle>
            </div>
          </div>
          {statusConfig.badge}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{description}</p>
        
        {progress !== undefined && status !== "locked" && (
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Analysis Progress</span>
              <span className="text-foreground font-medium">{progress}%</span>
            </div>
            <div className="h-1.5 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-secondary to-accent transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}
        
        {lastUpdate && status !== "locked" && (
          <p className="text-xs text-muted-foreground">
            Last update: {lastUpdate}
          </p>
        )}
        
        <div className="flex items-center justify-between pt-2">
          <Button 
            variant={status === "active" ? "biotech" : status === "pending" ? "vitality" : "ghost"}
            size="sm"
            className="group-hover:shadow-lg transition-all duration-300"
            disabled={status === "locked"}
          >
            {status === "locked" ? "Premium Required" : 
             status === "pending" ? "Continue Analysis" : 
             "View Dashboard"}
            {status !== "locked" && <ChevronRight className="w-3 h-3 ml-1" />}
          </Button>
        </div>
      </CardContent>
      
      {/* Background gradient */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-br opacity-50 pointer-events-none",
        statusConfig.gradient
      )} />
      
      {/* Hover glow effect */}
      {status !== "locked" && (
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 to-accent/0 group-hover:from-secondary/5 group-hover:to-accent/5 transition-all duration-300 pointer-events-none" />
      )}
    </Card>
  )
}