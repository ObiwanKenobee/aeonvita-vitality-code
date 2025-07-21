import { DashboardLayout } from "@/components/DashboardLayout"
import { VitalityCard } from "@/components/VitalityCard"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Watch, TrendingUp, Moon, Sun, Activity, Heart, Zap, Brain, Clock } from "lucide-react"

export default function TestosteroneRhythm() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Testosterone Rhythm</h1>
            <p className="text-muted-foreground">Hormonal tracking and circadian optimization</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="border-border/50">
              <Watch className="w-4 h-4 mr-2" />
              Sync Devices
            </Button>
            <Button variant="vitality" className="shadow-glow-golden/30">
              <TrendingUp className="w-4 h-4 mr-2" />
              Track Now
            </Button>
          </div>
        </div>

        {/* Current Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <VitalityCard
            title="Current T Level"
            value="720"
            unit="ng/dL"
            change={+12}
            changeType="positive"
            progress={85}
            status="optimal"
            icon={TrendingUp}
            description="Peak morning reading"
            actionLabel="Log Manual"
          />
          <VitalityCard
            title="Daily Peak"
            value="8:15"
            unit="AM"
            progress={90}
            status="optimal"
            icon={Sun}
            description="Optimal timing detected"
            actionLabel="Set Reminder"
          />
          <VitalityCard
            title="Energy Correlation"
            value={92}
            unit="%"
            change={+8}
            changeType="positive"
            progress={92}
            status="optimal"
            icon={Zap}
            description="T-Energy sync rate"
            actionLabel="Optimize"
          />
          <VitalityCard
            title="Sleep Quality"
            value={88}
            unit="%"
            change={+5}
            changeType="positive"
            progress={88}
            status="optimal"
            icon={Moon}
            description="REM recovery score"
            actionLabel="Improve"
          />
        </div>

        {/* Rhythm Tracking Tabs */}
        <Tabs defaultValue="daily" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="daily">Daily Rhythm</TabsTrigger>
            <TabsTrigger value="correlations">Correlations</TabsTrigger>
            <TabsTrigger value="optimization">Optimization</TabsTrigger>
            <TabsTrigger value="insights">AI Insights</TabsTrigger>
          </TabsList>

          <TabsContent value="daily" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* 24-Hour Rhythm Chart */}
              <Card className="bg-gradient-to-br from-vitality/5 to-accent/5 border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-vitality" />
                    24-Hour Testosterone Curve
                  </CardTitle>
                  <Badge variant="secondary" className="w-fit bg-secondary/20 text-secondary">
                    Today's Pattern
                  </Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="h-48 bg-muted/10 rounded-lg flex items-center justify-center relative">
                      <p className="text-muted-foreground">Circadian rhythm chart would appear here</p>
                      {/* Simulated peak markers */}
                      <div className="absolute top-4 left-1/4 w-2 h-2 rounded-full bg-vitality animate-pulse"></div>
                      <div className="absolute top-8 right-1/3 w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-lg font-bold text-vitality">720</div>
                        <p className="text-xs text-muted-foreground">Morning Peak</p>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-accent">450</div>
                        <p className="text-xs text-muted-foreground">Afternoon</p>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-secondary">380</div>
                        <p className="text-xs text-muted-foreground">Evening</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Weekly Patterns */}
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="w-5 h-5 text-primary" />
                    Weekly Patterns
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {[
                      { day: "Monday", level: 680, trend: "up" },
                      { day: "Tuesday", level: 720, trend: "up" },
                      { day: "Wednesday", level: 750, trend: "up" },
                      { day: "Thursday", level: 710, trend: "down" },
                      { day: "Friday", level: 690, trend: "down" },
                      { day: "Saturday", level: 740, trend: "up" },
                      { day: "Sunday", level: 700, trend: "stable" }
                    ].map((day, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <span className="text-sm font-medium">{day.day}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm">{day.level} ng/dL</span>
                          <div className={`w-2 h-2 rounded-full ${
                            day.trend === "up" ? "bg-secondary" :
                            day.trend === "down" ? "bg-destructive" :
                            "bg-accent"
                          }`}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Circadian Disruptions */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Moon className="w-5 h-5 text-accent" />
                  Circadian Health Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Sleep Quality</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Deep Sleep</span>
                        <span className="text-secondary font-medium">22%</span>
                      </div>
                      <Progress value={88} className="h-2" />
                      <div className="flex justify-between text-sm">
                        <span>REM Sleep</span>
                        <span className="text-accent font-medium">18%</span>
                      </div>
                      <Progress value={72} className="h-2" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Cortisol Rhythm</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Morning Peak</span>
                        <span className="text-vitality font-medium">Normal</span>
                      </div>
                      <Progress value={85} className="h-2" />
                      <div className="flex justify-between text-sm">
                        <span>Evening Drop</span>
                        <span className="text-secondary font-medium">Good</span>
                      </div>
                      <Progress value={78} className="h-2" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Light Exposure</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Morning Light</span>
                        <span className="text-accent font-medium">Optimal</span>
                      </div>
                      <Progress value={90} className="h-2" />
                      <div className="flex justify-between text-sm">
                        <span>Blue Light Block</span>
                        <span className="text-warning font-medium">Needs Work</span>
                      </div>
                      <Progress value={45} className="h-2" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="correlations" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Energy Correlation */}
              <Card className="bg-gradient-to-br from-secondary/5 to-accent/5 border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-secondary" />
                    Energy & Performance
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Energy Levels</span>
                      <Badge variant="secondary" className="bg-secondary/20 text-secondary">+92% correlation</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Workout Performance</span>
                      <Badge variant="secondary" className="bg-secondary/20 text-secondary">+85% correlation</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Mental Clarity</span>
                      <Badge variant="secondary" className="bg-secondary/20 text-secondary">+78% correlation</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Motivation</span>
                      <Badge variant="secondary" className="bg-secondary/20 text-secondary">+88% correlation</Badge>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">
                    Strong positive correlation between testosterone levels and subjective energy metrics.
                  </p>
                </CardContent>
              </Card>

              {/* Libido & Mood */}
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-accent" />
                    Libido & Mood
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Libido Intensity</span>
                      <Badge variant="secondary" className="bg-accent/20 text-accent">+94% correlation</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Mood Stability</span>
                      <Badge variant="secondary" className="bg-accent/20 text-accent">+82% correlation</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Confidence</span>
                      <Badge variant="secondary" className="bg-accent/20 text-accent">+76% correlation</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Stress Resilience</span>
                      <Badge variant="secondary" className="bg-accent/20 text-accent">+71% correlation</Badge>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">
                    Testosterone optimization shows strong correlation with psychological well-being metrics.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Muscle & Recovery */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-vitality" />
                  Muscle & Recovery Metrics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center space-y-2">
                    <div className="text-2xl font-bold text-vitality">+18%</div>
                    <p className="text-sm text-muted-foreground">Muscle Growth Rate</p>
                    <Badge variant="outline" className="text-xs border-vitality text-vitality">Strong +</Badge>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-2xl font-bold text-secondary">-25%</div>
                    <p className="text-sm text-muted-foreground">Recovery Time</p>
                    <Badge variant="outline" className="text-xs border-secondary text-secondary">Excellent</Badge>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-2xl font-bold text-accent">+32%</div>
                    <p className="text-sm text-muted-foreground">Strength Gains</p>
                    <Badge variant="outline" className="text-xs border-accent text-accent">Very Strong</Badge>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-2xl font-bold text-primary">+15%</div>
                    <p className="text-sm text-muted-foreground">Fat Loss Rate</p>
                    <Badge variant="outline" className="text-xs border-primary text-primary">Moderate +</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="optimization" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-vitality/5 to-accent/5 border-border/50">
                <CardHeader>
                  <CardTitle>Peak Window Optimization</CardTitle>
                  <Badge variant="outline" className="w-fit border-vitality text-vitality">Active Protocol</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold">Morning Peak (7-9 AM)</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Schedule important meetings</li>
                      <li>• High-intensity workouts</li>
                      <li>• Creative/strategic tasks</li>
                      <li>• Avoid cortisol spikes</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold">Evening Protocol (8-10 PM)</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Blue light blocking glasses</li>
                      <li>• Magnesium supplementation</li>
                      <li>• Cool bedroom environment</li>
                      <li>• Meditation/breathwork</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle>Lifestyle Optimizations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold">Sleep Optimization</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Consistent 10:30 PM bedtime</li>
                      <li>• 68-70°F room temperature</li>
                      <li>• Complete darkness/blackout</li>
                      <li>• 7.5-8.5 hours total sleep</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold">Nutrition Timing</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Protein within 30min of waking</li>
                      <li>• Healthy fats with breakfast</li>
                      <li>• Zinc 2hrs before bed</li>
                      <li>• 12-14hr intermittent fast</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="insights" className="space-y-6">
            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5 text-primary" />
                  AI Hormone Insights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-card/30 border border-border/30">
                    <h4 className="font-semibold text-foreground mb-2">Circadian Misalignment Detected</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Your testosterone peak is occurring 45 minutes later than optimal. This suggests mild circadian rhythm disruption.
                    </p>
                    <div className="flex gap-2">
                      <Badge variant="outline" className="text-xs border-warning text-warning">Action Required</Badge>
                      <Badge variant="outline" className="text-xs">Morning Light</Badge>
                    </div>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-card/30 border border-border/30">
                    <h4 className="font-semibold text-foreground mb-2">Weekend Recovery Pattern</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Your Saturday testosterone levels are 8% higher than weekdays, indicating good stress recovery but potential weekday optimization opportunities.
                    </p>
                    <div className="flex gap-2">
                      <Badge variant="outline" className="text-xs border-secondary text-secondary">Positive Trend</Badge>
                      <Badge variant="outline" className="text-xs">Stress Management</Badge>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-card/30 border border-border/30">
                    <h4 className="font-semibold text-foreground mb-2">Optimization Opportunity</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Based on your rhythm patterns, shifting your workout to 8:30 AM could increase training effectiveness by an estimated 15%.
                    </p>
                    <div className="flex gap-2">
                      <Badge variant="outline" className="text-xs border-vitality text-vitality">Recommended</Badge>
                      <Badge variant="outline" className="text-xs">Training</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}