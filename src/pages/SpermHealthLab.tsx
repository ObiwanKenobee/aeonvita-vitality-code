import { DashboardLayout } from "@/components/DashboardLayout"
import { VitalityCard } from "@/components/VitalityCard"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Microscope, Upload, Dna, TrendingUp, AlertTriangle, CheckCircle, Target, Calendar } from "lucide-react"

export default function SpermHealthLab() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Sperm Health Lab</h1>
            <p className="text-muted-foreground">AI-powered analysis and fertility optimization</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="border-border/50">
              <Upload className="w-4 h-4 mr-2" />
              Upload Results
            </Button>
            <Button variant="biotech" className="shadow-glow-emerald/30">
              <Microscope className="w-4 h-4 mr-2" />
              Smart Analysis
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <VitalityCard
            title="Sperm Count"
            value="68M"
            unit="/mL"
            change={+15}
            changeType="positive"
            progress={85}
            status="optimal"
            icon={Target}
            description="WHO reference: >15M/mL"
            actionLabel="Track History"
          />
          <VitalityCard
            title="Motility"
            value={72}
            unit="%"
            change={+8}
            changeType="positive"
            progress={72}
            status="optimal"
            icon={TrendingUp}
            description="Progressive movement"
            actionLabel="Optimize"
          />
          <VitalityCard
            title="Morphology"
            value={12}
            unit="%"
            change={+3}
            changeType="positive"
            progress={60}
            status="warning"
            icon={Dna}
            description="Normal forms"
            actionLabel="Improve"
          />
          <VitalityCard
            title="DNA Integrity"
            value={88}
            unit="%"
            change={+5}
            changeType="positive"
            progress={88}
            status="optimal"
            icon={CheckCircle}
            description="Low fragmentation"
            actionLabel="Maintain"
          />
        </div>

        {/* Analysis Tabs */}
        <Tabs defaultValue="analysis" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="analysis">AI Analysis</TabsTrigger>
            <TabsTrigger value="trends">Trends</TabsTrigger>
            <TabsTrigger value="protocols">Protocols</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="analysis" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* AI Analysis Results */}
              <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Microscope className="w-5 h-5 text-primary" />
                    Latest Analysis
                  </CardTitle>
                  <Badge variant="secondary" className="w-fit bg-secondary/20 text-secondary">
                    Completed 2 hours ago
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-secondary" />
                      <span className="text-sm font-medium">Concentration: Excellent</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-secondary" />
                      <span className="text-sm font-medium">Motility: Above average</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-warning" />
                      <span className="text-sm font-medium">Morphology: Needs attention</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-secondary" />
                      <span className="text-sm font-medium">DNA integrity: Optimal</span>
                    </div>
                  </div>
                  <div className="pt-4">
                    <h4 className="font-semibold mb-2">AI Recommendations</h4>
                    <p className="text-sm text-muted-foreground">
                      Focus on antioxidant supplementation and reduce heat exposure to improve morphology scores.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Fertility Age Calculator */}
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-accent" />
                    Fertility Age Assessment
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center space-y-2">
                    <div className="text-3xl font-bold text-foreground">28 years</div>
                    <p className="text-sm text-muted-foreground">Fertility age vs chronological age: 32</p>
                    <Badge variant="secondary" className="bg-secondary/20 text-secondary">
                      4 years younger!
                    </Badge>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Sperm quality factors</span>
                      <span className="text-secondary font-medium">Excellent</span>
                    </div>
                    <Progress value={90} className="h-2" />
                    <div className="flex justify-between text-sm">
                      <span>Genetic factors</span>
                      <span className="text-accent font-medium">Good</span>
                    </div>
                    <Progress value={75} className="h-2" />
                    <div className="flex justify-between text-sm">
                      <span>Lifestyle factors</span>
                      <span className="text-vitality font-medium">Very Good</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* DNA Fragmentation Heatmap */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Dna className="w-5 h-5 text-primary" />
                  DNA Fragmentation Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-8 gap-2">
                    {Array.from({ length: 64 }, (_, i) => (
                      <div
                        key={i}
                        className={`aspect-square rounded-sm ${
                          i % 8 < 6
                            ? 'bg-secondary/30'
                            : i % 8 < 7
                            ? 'bg-warning/30'
                            : 'bg-destructive/30'
                        }`}
                      />
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded bg-secondary/30"></div>
                      <span>Intact DNA (88%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded bg-warning/30"></div>
                      <span>Minor damage (9%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded bg-destructive/30"></div>
                      <span>Fragmented (3%)</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    DNA Fragmentation Index (DFI): 12% - Excellent fertility potential
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="trends" className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle>90-Day Sperm Regeneration Cycle</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-secondary">+24%</div>
                      <p className="text-sm text-muted-foreground">Count improvement</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent">+18%</div>
                      <p className="text-sm text-muted-foreground">Motility increase</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-vitality">+12%</div>
                      <p className="text-sm text-muted-foreground">Morphology progress</p>
                    </div>
                  </div>
                  <div className="h-64 bg-muted/10 rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">Trend chart visualization would appear here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="protocols" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-secondary/5 to-accent/5 border-border/50">
                <CardHeader>
                  <CardTitle>Morphology Enhancement Protocol</CardTitle>
                  <Badge variant="outline" className="w-fit border-warning text-warning">Active</Badge>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Supplements:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• CoQ10: 200mg daily</li>
                      <li>• Selenium: 200mcg daily</li>
                      <li>• Vitamin E: 400IU daily</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Lifestyle:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Reduce heat exposure</li>
                      <li>• Increase antioxidant foods</li>
                      <li>• Optimize sleep schedule</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle>DNA Protection Protocol</CardTitle>
                  <Badge variant="secondary" className="w-fit bg-secondary/20 text-secondary">Maintenance</Badge>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Antioxidants:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Zinc: 15mg daily</li>
                      <li>• Folate: 400mcg daily</li>
                      <li>• Vitamin C: 1000mg daily</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Environmental:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Air purifier in bedroom</li>
                      <li>• Organic foods priority</li>
                      <li>• EMF protection protocols</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle>Analysis History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { date: "Dec 15, 2024", score: "88/100", status: "Excellent" },
                    { date: "Nov 15, 2024", score: "82/100", status: "Very Good" },
                    { date: "Oct 15, 2024", score: "78/100", status: "Good" },
                    { date: "Sep 15, 2024", score: "74/100", status: "Fair" }
                  ].map((report, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted/20">
                      <div>
                        <p className="font-medium">{report.date}</p>
                        <p className="text-sm text-muted-foreground">Complete analysis</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">{report.score}</p>
                        <Badge variant="secondary" className="text-xs bg-secondary/20 text-secondary">
                          {report.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}