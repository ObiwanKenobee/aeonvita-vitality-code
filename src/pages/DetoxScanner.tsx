import { DashboardLayout } from "@/components/DashboardLayout"
import { VitalityCard } from "@/components/VitalityCard"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertTriangle, Shield, Scan, Wind, Droplets, Home, TrendingDown, CheckCircle, Target } from "lucide-react"

export default function DetoxScanner() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Environmental Detox Scanner</h1>
            <p className="text-muted-foreground">Comprehensive environmental analysis and detoxification protocols</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="border-border/50">
              <Scan className="w-4 h-4 mr-2" />
              New Scan
            </Button>
            <Button variant="biotech" className="shadow-glow-emerald/30">
              <Shield className="w-4 h-4 mr-2" />
              Start Detox
            </Button>
          </div>
        </div>

        {/* Risk Assessment */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <VitalityCard
            title="Toxin Load"
            value={32}
            unit="/100"
            change={-8}
            changeType="positive"
            progress={68}
            status="warning"
            icon={AlertTriangle}
            description="Lower is better"
            actionLabel="Reduce"
          />
          <VitalityCard
            title="Detox Capacity"
            value={78}
            unit="%"
            change={+12}
            changeType="positive"
            progress={78}
            status="optimal"
            icon={Shield}
            description="Body's elimination efficiency"
            actionLabel="Enhance"
          />
          <VitalityCard
            title="Air Quality Index"
            value={58}
            unit="AQI"
            progress={45}
            status="warning"
            icon={Wind}
            description="Current environment"
            actionLabel="Improve"
          />
          <VitalityCard
            title="Water Purity"
            value={92}
            unit="%"
            change={+5}
            changeType="positive"
            progress={92}
            status="optimal"
            icon={Droplets}
            description="Filtration effectiveness"
            actionLabel="Maintain"
          />
        </div>

        {/* Scanner Tabs */}
        <Tabs defaultValue="exposure" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="exposure">Exposure Analysis</TabsTrigger>
            <TabsTrigger value="environment">Environment</TabsTrigger>
            <TabsTrigger value="protocols">Detox Protocols</TabsTrigger>
            <TabsTrigger value="tracking">Progress Tracking</TabsTrigger>
          </TabsList>

          <TabsContent value="exposure" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Chemical Exposure Assessment */}
              <Card className="bg-gradient-to-br from-destructive/5 to-warning/5 border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-warning" />
                    Chemical Exposure Risk
                  </CardTitle>
                  <Badge variant="outline" className="w-fit border-warning text-warning">
                    Moderate Risk
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {[
                      { toxin: "Phthalates", risk: "Medium", source: "Plastics, cosmetics", level: 65 },
                      { toxin: "BPA/BPS", risk: "High", source: "Food packaging", level: 85 },
                      { toxin: "Heavy Metals", risk: "Low", source: "Water, fish", level: 25 },
                      { toxin: "Pesticides", risk: "Medium", source: "Conventional foods", level: 55 },
                      { toxin: "VOCs", risk: "High", source: "Cleaning products", level: 75 }
                    ].map((item, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{item.toxin}</span>
                          <Badge variant={item.risk === "High" ? "destructive" : item.risk === "Medium" ? "outline" : "secondary"} className="text-xs">
                            {item.risk}
                          </Badge>
                        </div>
                        <Progress value={item.level} className="h-2" />
                        <p className="text-xs text-muted-foreground">Source: {item.source}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Endocrine Disruptor Analysis */}
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-accent" />
                    Fertility Impact Assessment
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-sm">High Priority Concerns</h4>
                        <Badge variant="destructive" className="text-xs">Action Required</Badge>
                      </div>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• BPA exposure from food containers</li>
                        <li>• Pesticide residues in diet</li>
                        <li>• VOCs from household cleaners</li>
                      </ul>
                    </div>
                    
                    <div className="p-3 rounded-lg bg-warning/10 border border-warning/20">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-sm">Moderate Concerns</h4>
                        <Badge variant="outline" className="text-xs border-warning text-warning">Monitor</Badge>
                      </div>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• Phthalates from personal care</li>
                        <li>• Air quality fluctuations</li>
                        <li>• EMF exposure patterns</li>
                      </ul>
                    </div>

                    <div className="p-3 rounded-lg bg-secondary/10 border border-secondary/20">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-sm">Low Risk Areas</h4>
                        <Badge variant="secondary" className="text-xs bg-secondary/20 text-secondary">Good</Badge>
                      </div>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• Heavy metal exposure</li>
                        <li>• Water quality</li>
                        <li>• Organic food consumption</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Exposure Heatmap */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scan className="w-5 h-5 text-primary" />
                  Daily Exposure Heatmap
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-12 gap-1">
                    {Array.from({ length: 144 }, (_, i) => {
                      const hour = Math.floor(i / 6);
                      const intensity = 
                        hour >= 7 && hour <= 9 ? 'bg-destructive/40' :  // morning commute/work
                        hour >= 12 && hour <= 14 ? 'bg-warning/40' :    // lunch/outdoor
                        hour >= 18 && hour <= 20 ? 'bg-destructive/40' : // evening commute
                        hour >= 22 || hour <= 6 ? 'bg-secondary/40' :   // home/sleep
                        'bg-accent/40';                                   // regular day
                      return (
                        <div
                          key={i}
                          className={`aspect-square rounded-sm ${intensity}`}
                        />
                      );
                    })}
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded bg-secondary/40"></div>
                      <span>Low exposure</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded bg-accent/40"></div>
                      <span>Moderate</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded bg-warning/40"></div>
                      <span>High</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded bg-destructive/40"></div>
                      <span>Critical</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Peak exposure during commute hours (7-9 AM, 6-8 PM). Consider timing adjustments and protection strategies.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="environment" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Home Environment */}
              <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Home className="w-5 h-5 text-primary" />
                    Home Environment Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Air Quality</span>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs bg-secondary/20 text-secondary">Good</Badge>
                        <span className="text-xs text-muted-foreground">PM2.5: 8 μg/m³</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Water Quality</span>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs bg-secondary/20 text-secondary">Excellent</Badge>
                        <span className="text-xs text-muted-foreground">TDS: 65 ppm</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">EMF Levels</span>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs border-warning text-warning">Moderate</Badge>
                        <span className="text-xs text-muted-foreground">2.1 V/m</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Mold Risk</span>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs bg-secondary/20 text-secondary">Low</Badge>
                        <span className="text-xs text-muted-foreground">Humidity: 45%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Chemical Off-gassing</span>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs border-warning text-warning">Present</Badge>
                        <span className="text-xs text-muted-foreground">VOCs detected</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Work Environment */}
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-accent" />
                    Workplace Assessment
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Indoor Air</span>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs border-warning text-warning">Fair</Badge>
                        <span className="text-xs text-muted-foreground">Recycled air</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Lighting</span>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs border-destructive text-destructive">Poor</Badge>
                        <span className="text-xs text-muted-foreground">Fluorescent</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Wi-Fi/EMF</span>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs border-destructive text-destructive">High</Badge>
                        <span className="text-xs text-muted-foreground">5.2 V/m</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Stress Factors</span>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs border-warning text-warning">Moderate</Badge>
                        <span className="text-xs text-muted-foreground">Open office</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Chemical Exposure</span>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs border-warning text-warning">Present</Badge>
                        <span className="text-xs text-muted-foreground">Cleaning agents</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Environmental Recommendations */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  Optimization Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Immediate Actions</h4>
                    <div className="space-y-2">
                      <div className="p-3 rounded-lg bg-destructive/10">
                        <h5 className="font-medium text-sm mb-1">Replace plastic containers</h5>
                        <p className="text-xs text-muted-foreground">Switch to glass/stainless steel for food storage</p>
                      </div>
                      <div className="p-3 rounded-lg bg-warning/10">
                        <h5 className="font-medium text-sm mb-1">Air purifier installation</h5>
                        <p className="text-xs text-muted-foreground">HEPA + activated carbon for bedroom</p>
                      </div>
                      <div className="p-3 rounded-lg bg-accent/10">
                        <h5 className="font-medium text-sm mb-1">EMF shielding</h5>
                        <p className="text-xs text-muted-foreground">Airplane mode at night, distance from router</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Medium Term (1-3 months)</h4>
                    <div className="space-y-2">
                      <div className="p-3 rounded-lg bg-secondary/10">
                        <h5 className="font-medium text-sm mb-1">Water filtration upgrade</h5>
                        <p className="text-xs text-muted-foreground">Reverse osmosis system installation</p>
                      </div>
                      <div className="p-3 rounded-lg bg-vitality/10">
                        <h5 className="font-medium text-sm mb-1">Non-toxic household products</h5>
                        <p className="text-xs text-muted-foreground">Replace cleaners, cosmetics, toiletries</p>
                      </div>
                      <div className="p-3 rounded-lg bg-primary/10">
                        <h5 className="font-medium text-sm mb-1">Organic diet transition</h5>
                        <p className="text-xs text-muted-foreground">80% organic, especially dirty dozen foods</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Long Term (3+ months)</h4>
                    <div className="space-y-2">
                      <div className="p-3 rounded-lg bg-accent/10">
                        <h5 className="font-medium text-sm mb-1">Home environment overhaul</h5>
                        <p className="text-xs text-muted-foreground">Low-EMF lighting, natural materials</p>
                      </div>
                      <div className="p-3 rounded-lg bg-secondary/10">
                        <h5 className="font-medium text-sm mb-1">Workplace optimization</h5>
                        <p className="text-xs text-muted-foreground">Air quality monitor, plants, lighting</p>
                      </div>
                      <div className="p-3 rounded-lg bg-vitality/10">
                        <h5 className="font-medium text-sm mb-1">Lifestyle integration</h5>
                        <p className="text-xs text-muted-foreground">Regular grounding, nature exposure</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="protocols" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-secondary/5 to-accent/5 border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-secondary" />
                    Active Detox Protocol
                  </CardTitle>
                  <Badge variant="secondary" className="w-fit bg-secondary/20 text-secondary">
                    Phase 2: Enhancement
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">Liver Support Stack</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span>NAC (N-Acetyl Cysteine)</span>
                        <span className="text-muted-foreground">600mg 2x daily</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>Milk Thistle (Silymarin)</span>
                        <span className="text-muted-foreground">150mg 3x daily</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>Glutathione</span>
                        <span className="text-muted-foreground">500mg morning</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>Alpha Lipoic Acid</span>
                        <span className="text-muted-foreground">300mg evening</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">Elimination Support</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span>Activated Charcoal</span>
                        <span className="text-muted-foreground">1g between meals</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>Chlorella</span>
                        <span className="text-muted-foreground">3g daily</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>Fiber Blend</span>
                        <span className="text-muted-foreground">10g morning</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Droplets className="w-5 h-5 text-accent" />
                    Hydration & Sauna Protocol
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">Daily Hydration</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span>Filtered water intake</span>
                        <span className="text-muted-foreground">3-4 liters</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>Electrolyte balance</span>
                        <span className="text-muted-foreground">Morning & post-sauna</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>Lemon water</span>
                        <span className="text-muted-foreground">First thing AM</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">Sauna Sessions</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span>Frequency</span>
                        <span className="text-muted-foreground">4x per week</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>Temperature</span>
                        <span className="text-muted-foreground">160-180°F</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>Duration</span>
                        <span className="text-muted-foreground">20-25 minutes</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>Cool down</span>
                        <span className="text-muted-foreground">Cold shower 2-3 min</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Protocol Timeline */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingDown className="w-5 h-5 text-primary" />
                  Detoxification Timeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Week 1-2: Foundation</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• Basic elimination support</p>
                      <p>• Hydration optimization</p>
                      <p>• Environmental assessment</p>
                      <p>• Initial biomarker testing</p>
                    </div>
                    <Badge variant="secondary" className="text-xs bg-secondary/20 text-secondary">Prep Phase</Badge>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Week 3-6: Active</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• Full supplement stack</p>
                      <p>• Regular sauna sessions</p>
                      <p>• Dietary modifications</p>
                      <p>• Symptom monitoring</p>
                    </div>
                    <Badge variant="outline" className="text-xs border-warning text-warning">Active Phase</Badge>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Week 7-10: Enhancement</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• Advanced protocols</p>
                      <p>• Targeted interventions</p>
                      <p>• Lifestyle optimization</p>
                      <p>• Mid-point assessment</p>
                    </div>
                    <Badge variant="outline" className="text-xs border-accent text-accent">Enhancement</Badge>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Week 11-12: Integration</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• Maintenance protocols</p>
                      <p>• Habit formation</p>
                      <p>• Long-term planning</p>
                      <p>• Final assessment</p>
                    </div>
                    <Badge variant="outline" className="text-xs border-vitality text-vitality">Maintenance</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tracking" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingDown className="w-5 h-5 text-primary" />
                    Toxin Reduction Progress
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {[
                      { toxin: "BPA/BPS", baseline: 85, current: 45, reduction: -47 },
                      { toxin: "Phthalates", baseline: 65, current: 40, reduction: -38 },
                      { toxin: "VOCs", baseline: 75, current: 35, reduction: -53 },
                      { toxin: "Heavy Metals", baseline: 25, current: 15, reduction: -40 },
                      { toxin: "Pesticides", baseline: 55, current: 25, reduction: -55 }
                    ].map((item, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{item.toxin}</span>
                          <Badge variant="secondary" className="text-xs bg-secondary/20 text-secondary">
                            {item.reduction}%
                          </Badge>
                        </div>
                        <div className="flex gap-2">
                          <div className="flex-1">
                            <div className="text-xs text-muted-foreground mb-1">Baseline</div>
                            <Progress value={item.baseline} className="h-2" />
                          </div>
                          <div className="flex-1">
                            <div className="text-xs text-muted-foreground mb-1">Current</div>
                            <Progress value={item.current} className="h-2" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    Biomarker Improvements
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-secondary/10">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-sm">Liver Function</span>
                        <Badge variant="secondary" className="text-xs bg-secondary/20 text-secondary">+28%</Badge>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        ALT: 32 → 22 U/L, AST: 28 → 19 U/L
                      </div>
                    </div>
                    
                    <div className="p-3 rounded-lg bg-accent/10">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-sm">Antioxidant Status</span>
                        <Badge variant="outline" className="text-xs border-accent text-accent">+35%</Badge>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Glutathione, SOD, Catalase all improved
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-vitality/10">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-sm">Inflammatory Markers</span>
                        <Badge variant="outline" className="text-xs border-vitality text-vitality">-42%</Badge>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        CRP: 2.1 → 1.2 mg/L, IL-6 reduced
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-primary/10">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-sm">Hormone Levels</span>
                        <Badge variant="outline" className="text-xs border-primary text-primary">+18%</Badge>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Testosterone optimization continuing
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Progress Chart */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-accent" />
                  12-Week Detox Journey
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="h-64 bg-muted/10 rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">Progress chart visualization would appear here</p>
                  </div>
                  <div className="grid grid-cols-4 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-secondary">-48%</div>
                      <p className="text-sm text-muted-foreground">Total toxin load</p>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent">+32%</div>
                      <p className="text-sm text-muted-foreground">Detox capacity</p>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-vitality">+25%</div>
                      <p className="text-sm text-muted-foreground">Energy levels</p>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">+18%</div>
                      <p className="text-sm text-muted-foreground">Fertility markers</p>
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