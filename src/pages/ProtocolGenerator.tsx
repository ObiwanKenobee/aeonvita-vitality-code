import { DashboardLayout } from "@/components/DashboardLayout"
import { VitalityCard } from "@/components/VitalityCard"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Beaker, Target, Calendar, Utensils, Clock, CheckCircle, Sparkles, TrendingUp } from "lucide-react"

export default function ProtocolGenerator() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Protocol Generator</h1>
            <p className="text-muted-foreground">Personalized optimization powered by AI</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="border-border/50">
              <Calendar className="w-4 h-4 mr-2" />
              Schedule Review
            </Button>
            <Button variant="biotech" className="shadow-glow-emerald/30">
              <Sparkles className="w-4 h-4 mr-2" />
              Generate New
            </Button>
          </div>
        </div>

        {/* Current Protocol Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <VitalityCard
            title="Protocol Adherence"
            value={88}
            unit="%"
            change={+5}
            changeType="positive"
            progress={88}
            status="optimal"
            icon={Target}
            description="Last 30 days"
            actionLabel="View Details"
          />
          <VitalityCard
            title="Cycle Progress"
            value={65}
            unit="/90 days"
            progress={72}
            status="optimal"
            icon={Calendar}
            description="Current regeneration cycle"
            actionLabel="Track"
          />
          <VitalityCard
            title="Stack Effectiveness"
            value={92}
            unit="%"
            change={+12}
            changeType="positive"
            progress={92}
            status="optimal"
            icon={Beaker}
            description="Biomarker improvements"
            actionLabel="Optimize"
          />
          <VitalityCard
            title="Next Milestone"
            value={18}
            unit="days"
            progress={45}
            status="optimal"
            icon={TrendingUp}
            description="Until reassessment"
            actionLabel="Schedule"
          />
        </div>

        {/* Protocol Tabs */}
        <Tabs defaultValue="current" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="current">Current Protocol</TabsTrigger>
            <TabsTrigger value="supplements">Supplement Stack</TabsTrigger>
            <TabsTrigger value="nutrition">Nutrition Plan</TabsTrigger>
            <TabsTrigger value="biohacks">Daily Rituals</TabsTrigger>
          </TabsList>

          <TabsContent value="current" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Active Protocol Overview */}
              <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    Fertility Enhancement Protocol v2.1
                  </CardTitle>
                  <Badge variant="secondary" className="w-fit bg-secondary/20 text-secondary">
                    Active Since Nov 15
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Sperm Quality Focus</span>
                      <Badge variant="outline" className="text-xs border-secondary text-secondary">Primary</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Testosterone Optimization</span>
                      <Badge variant="outline" className="text-xs border-accent text-accent">Secondary</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Detox Support</span>
                      <Badge variant="outline" className="text-xs border-vitality text-vitality">Supporting</Badge>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Expected Timeline</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span>Initial improvements</span>
                        <span className="text-muted-foreground">2-4 weeks</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span>Significant changes</span>
                        <span className="text-muted-foreground">6-8 weeks</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span>Full cycle benefits</span>
                        <span className="text-muted-foreground">90 days</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Progress Tracking */}
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-accent" />
                    Progress Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Sperm Concentration</span>
                        <span className="text-secondary font-medium">+24%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Motility</span>
                        <span className="text-accent font-medium">+18%</span>
                      </div>
                      <Progress value={72} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>DNA Integrity</span>
                        <span className="text-vitality font-medium">+12%</span>
                      </div>
                      <Progress value={68} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Testosterone Levels</span>
                        <span className="text-primary font-medium">+15%</span>
                      </div>
                      <Progress value={78} className="h-2" />
                    </div>
                  </div>
                  <div className="pt-2">
                    <p className="text-xs text-muted-foreground">
                      All metrics trending positive. Protocol effectiveness: 92%
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Daily Schedule */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Daily Schedule Optimization
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Morning (6-10 AM)</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-secondary" />
                        <span className="text-sm">Zinc + Vitamin D</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-secondary" />
                        <span className="text-sm">Protein-rich breakfast</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-secondary" />
                        <span className="text-sm">Morning sunlight exposure</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-secondary" />
                        <span className="text-sm">High-intensity workout</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Afternoon (12-6 PM)</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-accent" />
                        <span className="text-sm">CoQ10 with lunch</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-accent" />
                        <span className="text-sm">Antioxidant-rich meal</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-accent" />
                        <span className="text-sm">Stress management</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-accent" />
                        <span className="text-sm">Hydration focus</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Evening (6-10 PM)</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-vitality" />
                        <span className="text-sm">Magnesium + Ashwagandha</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-vitality" />
                        <span className="text-sm">Blue light blocking</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-vitality" />
                        <span className="text-sm">Recovery activities</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-vitality" />
                        <span className="text-sm">Sleep optimization</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="supplements" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Core Stack */}
              <Card className="bg-gradient-to-br from-secondary/5 to-accent/5 border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Beaker className="w-5 h-5 text-secondary" />
                    Core Fertility Stack
                  </CardTitle>
                  <Badge variant="secondary" className="w-fit bg-secondary/20 text-secondary">
                    Daily Essentials
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {[
                      { name: "Zinc Bisglycinate", dose: "15mg", timing: "Morning with food", status: "optimal" },
                      { name: "CoQ10 Ubiquinol", dose: "200mg", timing: "With lunch", status: "optimal" },
                      { name: "Vitamin D3 + K2", dose: "4000IU + 100mcg", timing: "Morning", status: "optimal" },
                      { name: "Folate (5-MTHF)", dose: "400mcg", timing: "Morning", status: "optimal" },
                      { name: "Selenium", dose: "200mcg", timing: "With dinner", status: "optimal" }
                    ].map((supplement, i) => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-card/30">
                        <div>
                          <p className="font-medium text-sm">{supplement.name}</p>
                          <p className="text-xs text-muted-foreground">{supplement.dose} - {supplement.timing}</p>
                        </div>
                        <Badge variant="secondary" className="text-xs bg-secondary/20 text-secondary">
                          Active
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Support Stack */}
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-accent" />
                    Support & Enhancement
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {[
                      { name: "Ashwagandha KSM-66", dose: "600mg", timing: "Evening", status: "optimal" },
                      { name: "NAC", dose: "600mg", timing: "Empty stomach", status: "optimal" },
                      { name: "Vitamin E Complex", dose: "400IU", timing: "With fats", status: "optimal" },
                      { name: "Omega-3 EPA/DHA", dose: "2000mg", timing: "With meals", status: "optimal" },
                      { name: "Magnesium Glycinate", dose: "400mg", timing: "Before bed", status: "optimal" }
                    ].map((supplement, i) => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-card/30">
                        <div>
                          <p className="font-medium text-sm">{supplement.name}</p>
                          <p className="text-xs text-muted-foreground">{supplement.dose} - {supplement.timing}</p>
                        </div>
                        <Badge variant="outline" className="text-xs border-accent text-accent">
                          Support
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Cycling Schedule */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Cycling & Optimization Schedule
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Weeks 1-4 (Foundation)</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• Establish baseline with core stack</p>
                      <p>• Monitor tolerance and absorption</p>
                      <p>• Focus on consistency</p>
                      <p>• Weekly biomarker tracking</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Weeks 5-8 (Optimization)</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• Add performance enhancers</p>
                      <p>• Adjust doses based on response</p>
                      <p>• Introduce cycling protocols</p>
                      <p>• Mid-cycle assessment</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Weeks 9-12 (Refinement)</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• Fine-tune based on results</p>
                      <p>• Prepare for next cycle</p>
                      <p>• Consolidate gains</p>
                      <p>• Comprehensive evaluation</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="nutrition" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-vitality/5 to-accent/5 border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Utensils className="w-5 h-5 text-vitality" />
                    Fertility-Boosting Foods
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">High Priority Foods</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-secondary"></div>
                        <span>Brazil nuts (selenium)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-secondary"></div>
                        <span>Oysters (zinc)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-secondary"></div>
                        <span>Wild salmon (omega-3)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-secondary"></div>
                        <span>Dark leafy greens</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-secondary"></div>
                        <span>Pomegranate</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-secondary"></div>
                        <span>Walnuts</span>
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">Foods to Minimize</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-destructive"></div>
                        <span>Processed meats</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-destructive"></div>
                        <span>Trans fats</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-destructive"></div>
                        <span>High mercury fish</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-destructive"></div>
                        <span>Excessive soy</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-destructive"></div>
                        <span>Plastic packaging</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-destructive"></div>
                        <span>Refined sugars</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle>Meal Timing Strategy</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-secondary/10 to-accent/10">
                      <h4 className="font-semibold text-sm mb-2">Breakfast (7-8 AM)</h4>
                      <p className="text-xs text-muted-foreground">
                        High protein + healthy fats to support morning testosterone peak
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-gradient-to-r from-accent/10 to-vitality/10">
                      <h4 className="font-semibold text-sm mb-2">Lunch (12-1 PM)</h4>
                      <p className="text-xs text-muted-foreground">
                        Antioxidant-rich vegetables + lean protein for midday energy
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-gradient-to-r from-vitality/10 to-primary/10">
                      <h4 className="font-semibold text-sm mb-2">Dinner (6-7 PM)</h4>
                      <p className="text-xs text-muted-foreground">
                        Lighter meal with sleep-supporting nutrients and magnesium
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="biohacks" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-secondary/5 to-accent/5 border-border/50">
                <CardHeader>
                  <CardTitle className="text-base">Morning Vitality Ritual</CardTitle>
                  <Badge variant="secondary" className="w-fit bg-secondary/20 text-secondary text-xs">
                    6:30 - 9:00 AM
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-secondary" />
                      <span>Cold shower (2-3 min)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-secondary" />
                      <span>Sunlight exposure (10-15 min)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-secondary" />
                      <span>Breathwork (5 min)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-secondary" />
                      <span>Movement activation</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="text-base">Midday Reset</CardTitle>
                  <Badge variant="outline" className="w-fit border-accent text-accent text-xs">
                    12:00 - 2:00 PM
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-accent" />
                      <span>Stress check-in</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-accent" />
                      <span>Hydration boost</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-accent" />
                      <span>Movement break</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-accent" />
                      <span>Mindful eating</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-vitality/5 to-primary/5 border-border/50">
                <CardHeader>
                  <CardTitle className="text-base">Evening Wind-Down</CardTitle>
                  <Badge variant="outline" className="w-fit border-vitality text-vitality text-xs">
                    8:00 - 10:00 PM
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-vitality" />
                      <span>Blue light blocking</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-vitality" />
                      <span>Meditation (10 min)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-vitality" />
                      <span>Gratitude practice</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-vitality" />
                      <span>Sleep environment prep</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Weekly Biohacks */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  Weekly Enhancement Protocols
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">Recovery & Repair</h4>
                    <div className="space-y-3">
                      <div className="p-3 rounded-lg bg-gradient-to-r from-secondary/10 to-accent/10">
                        <h5 className="font-medium text-sm mb-1">Sauna Sessions</h5>
                        <p className="text-xs text-muted-foreground">3x/week, 15-20 min at 160-180°F</p>
                      </div>
                      <div className="p-3 rounded-lg bg-gradient-to-r from-accent/10 to-vitality/10">
                        <h5 className="font-medium text-sm mb-1">Ice Bath/Cold Plunge</h5>
                        <p className="text-xs text-muted-foreground">2x/week, 2-3 min at 50-59°F</p>
                      </div>
                      <div className="p-3 rounded-lg bg-gradient-to-r from-vitality/10 to-primary/10">
                        <h5 className="font-medium text-sm mb-1">Massage Therapy</h5>
                        <p className="text-xs text-muted-foreground">1x/week, focus on lymphatic drainage</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">Performance Optimization</h4>
                    <div className="space-y-3">
                      <div className="p-3 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10">
                        <h5 className="font-medium text-sm mb-1">Red Light Therapy</h5>
                        <p className="text-xs text-muted-foreground">Daily, 10-15 min targeted exposure</p>
                      </div>
                      <div className="p-3 rounded-lg bg-gradient-to-r from-secondary/10 to-accent/10">
                        <h5 className="font-medium text-sm mb-1">Grounding/Earthing</h5>
                        <p className="text-xs text-muted-foreground">Daily, 20+ min barefoot on natural surfaces</p>
                      </div>
                      <div className="p-3 rounded-lg bg-gradient-to-r from-accent/10 to-vitality/10">
                        <h5 className="font-medium text-sm mb-1">EMF Protection</h5>
                        <p className="text-xs text-muted-foreground">Airplane mode at night, EMF shields</p>
                      </div>
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