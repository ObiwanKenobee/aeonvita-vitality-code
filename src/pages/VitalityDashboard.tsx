import { DashboardLayout } from "@/components/DashboardLayout"
import { VitalityCard } from "@/components/VitalityCard"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Activity, Heart, Zap, Shield, TrendingUp, Calendar, Target, Brain } from "lucide-react"

export default function VitalityDashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Vitality Dashboard</h1>
            <p className="text-muted-foreground">Complete overview of your bio-optimization journey</p>
          </div>
          <Button variant="biotech" className="shadow-glow-emerald/30">
            <Target className="w-4 h-4 mr-2" />
            Generate Report
          </Button>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <VitalityCard
            title="Vitality Score"
            value={87}
            unit="/100"
            change={+12}
            changeType="positive"
            progress={87}
            status="optimal"
            icon={Activity}
            description="Overall bio-optimization index"
            actionLabel="View Details"
          />
          <VitalityCard
            title="Fertility Age"
            value={28}
            unit="years"
            change={-3}
            changeType="positive"
            progress={75}
            status="optimal"
            icon={Heart}
            description="vs chronological age: 32"
            actionLabel="Analyze"
          />
          <VitalityCard
            title="Energy Index"
            value={92}
            unit="%"
            change={+8}
            changeType="positive"
            progress={92}
            status="optimal"
            icon={Zap}
            description="Peak performance capacity"
            actionLabel="Optimize"
          />
          <VitalityCard
            title="Protection Score"
            value={78}
            unit="/100"
            change={+5}
            changeType="positive"
            progress={78}
            status="warning"
            icon={Shield}
            description="Environmental resistance"
            actionLabel="Enhance"
          />
        </div>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-secondary" />
                90-Day Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Sperm Quality</span>
                  <span className="font-medium">+24%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Testosterone Optimization</span>
                  <span className="font-medium">+18%</span>
                </div>
                <Progress value={72} className="h-2" />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Detox Efficiency</span>
                  <span className="font-medium">+15%</span>
                </div>
                <Progress value={68} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-accent" />
                Recent Milestones
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Sperm motility improved by 22%</p>
                  <p className="text-xs text-muted-foreground">3 days ago</p>
                </div>
                <Badge variant="secondary" className="bg-secondary/20 text-secondary">New</Badge>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Testosterone rhythm stabilized</p>
                  <p className="text-xs text-muted-foreground">1 week ago</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-vitality"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Heavy metal detox completed</p>
                  <p className="text-xs text-muted-foreground">2 weeks ago</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* AI Insights */}
        <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-primary" />
              AI Vitality Insights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card/30 border border-border/30">
                <h4 className="font-semibold text-foreground mb-2">Peak Performance Window</h4>
                <p className="text-sm text-muted-foreground">
                  Your testosterone levels peak between 7-9 AM. Schedule important activities and workouts during this window for optimal results.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-card/30 border border-border/30">
                <h4 className="font-semibold text-foreground mb-2">Nutrition Optimization</h4>
                <p className="text-sm text-muted-foreground">
                  Increase zinc intake by 15mg daily and add selenium-rich foods to boost sperm DNA integrity by an estimated 12%.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-card/30 border border-border/30">
                <h4 className="font-semibold text-foreground mb-2">Environmental Alert</h4>
                <p className="text-sm text-muted-foreground">
                  Air quality in your area is suboptimal today. Consider indoor workouts and activated charcoal supplementation.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}