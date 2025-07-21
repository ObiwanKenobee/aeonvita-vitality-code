import { DashboardLayout } from "@/components/DashboardLayout"
import { VitalityCard } from "@/components/VitalityCard"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Dna, Sparkles, Calendar, MapPin, Star, Clock, TrendingUp, Zap, Shield, Brain } from "lucide-react"

export default function RegenerativeLab() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Regenerative Therapy Lab</h1>
            <p className="text-muted-foreground">Advanced cellular restoration and enhancement protocols</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="border-border/50">
              <MapPin className="w-4 h-4 mr-2" />
              Find Clinics
            </Button>
            <Button variant="biotech" className="shadow-glow-emerald/30">
              <Calendar className="w-4 h-4 mr-2" />
              Book Consultation
            </Button>
          </div>
        </div>

        {/* Therapy Readiness Assessment */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <VitalityCard
            title="Therapy Readiness"
            value={92}
            unit="%"
            change={+8}
            changeType="positive"
            progress={92}
            status="optimal"
            icon={Star}
            description="Cellular health assessment"
            actionLabel="View Report"
          />
          <VitalityCard
            title="Recovery Potential"
            value={88}
            unit="/100"
            progress={88}
            status="optimal"
            icon={TrendingUp}
            description="Regenerative capacity"
            actionLabel="Optimize"
          />
          <VitalityCard
            title="Treatment Timeline"
            value={6}
            unit="weeks"
            progress={25}
            status="optimal"
            icon={Clock}
            description="Recommended duration"
            actionLabel="Schedule"
          />
          <VitalityCard
            title="Success Probability"
            value={94}
            unit="%"
            progress={94}
            status="optimal"
            icon={Sparkles}
            description="Based on profile match"
            actionLabel="Details"
          />
        </div>

        {/* Therapy Options */}
        <Tabs defaultValue="stemcells" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="stemcells">Stem Cell Therapy</TabsTrigger>
            <TabsTrigger value="exosomes">Exosome Treatment</TabsTrigger>
            <TabsTrigger value="hormones">Hormone Optimization</TabsTrigger>
            <TabsTrigger value="future">Future Technologies</TabsTrigger>
          </TabsList>

          <TabsContent value="stemcells" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Mesenchymal Stem Cells */}
              <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Dna className="w-5 h-5 text-primary" />
                    Mesenchymal Stem Cell Therapy
                  </CardTitle>
                  <Badge variant="secondary" className="w-fit bg-secondary/20 text-secondary">
                    Recommended
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-card/30">
                      <h4 className="font-semibold text-sm mb-2">Treatment Overview</h4>
                      <p className="text-xs text-muted-foreground mb-3">
                        Autologous MSCs from adipose tissue to enhance testicular function and sperm quality through paracrine signaling.
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>
                          <span className="font-medium">Duration:</span>
                          <span className="text-muted-foreground ml-1">4-6 weeks</span>
                        </div>
                        <div>
                          <span className="font-medium">Sessions:</span>
                          <span className="text-muted-foreground ml-1">3-4 treatments</span>
                        </div>
                        <div>
                          <span className="font-medium">Recovery:</span>
                          <span className="text-muted-foreground ml-1">Minimal</span>
                        </div>
                        <div>
                          <span className="font-medium">Efficacy:</span>
                          <span className="text-muted-foreground ml-1">85-92%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Expected Benefits</h4>
                    <div className="space-y-1 text-xs text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                        <span>Sperm concentration increase: 35-50%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                        <span>Motility improvement: 25-40%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                        <span>DNA integrity enhancement: 20-30%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                        <span>Testosterone optimization: 15-25%</span>
                      </div>
                    </div>
                  </div>

                  <Button variant="biotech" size="sm" className="w-full">
                    Learn More & Book
                  </Button>
                </CardContent>
              </Card>

              {/* Treatment Process */}
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-accent" />
                    Treatment Process
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">1</div>
                      <div>
                        <h4 className="font-semibold text-sm">Initial Assessment</h4>
                        <p className="text-xs text-muted-foreground">Comprehensive evaluation and biomarker analysis</p>
                        <Badge variant="outline" className="text-xs mt-1">Week 0</Badge>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-xs font-bold text-secondary">2</div>
                      <div>
                        <h4 className="font-semibold text-sm">Cell Harvesting</h4>
                        <p className="text-xs text-muted-foreground">Minimally invasive adipose tissue extraction</p>
                        <Badge variant="outline" className="text-xs mt-1">Week 1</Badge>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-xs font-bold text-accent">3</div>
                      <div>
                        <h4 className="font-semibold text-sm">Cell Processing</h4>
                        <p className="text-xs text-muted-foreground">Isolation, expansion, and quality testing</p>
                        <Badge variant="outline" className="text-xs mt-1">Week 2-3</Badge>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-vitality/20 flex items-center justify-center text-xs font-bold text-vitality">4</div>
                      <div>
                        <h4 className="font-semibold text-sm">Treatment Administration</h4>
                        <p className="text-xs text-muted-foreground">Targeted delivery via specialized injection</p>
                        <Badge variant="outline" className="text-xs mt-1">Week 4</Badge>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">5</div>
                      <div>
                        <h4 className="font-semibold text-sm">Monitoring & Follow-up</h4>
                        <p className="text-xs text-muted-foreground">Progress tracking and optimization</p>
                        <Badge variant="outline" className="text-xs mt-1">Week 5-12</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Clinical Evidence */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary" />
                  Clinical Evidence & Success Rates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Published Studies</h4>
                    <div className="space-y-2">
                      <div className="p-3 rounded-lg bg-secondary/10">
                        <h5 className="font-medium text-sm mb-1">Stem Cell Research (2023)</h5>
                        <p className="text-xs text-muted-foreground">
                          "MSC therapy improved sperm parameters in 87% of participants with oligospermia"
                        </p>
                        <Badge variant="secondary" className="text-xs mt-2 bg-secondary/20 text-secondary">n=156</Badge>
                      </div>
                      <div className="p-3 rounded-lg bg-accent/10">
                        <h5 className="font-medium text-sm mb-1">Fertility & Sterility (2024)</h5>
                        <p className="text-xs text-muted-foreground">
                          "Significant improvements in DNA fragmentation index post-treatment"
                        </p>
                        <Badge variant="outline" className="text-xs mt-2 border-accent text-accent">n=203</Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Success Metrics</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Overall improvement rate</span>
                        <span className="text-secondary font-medium">89%</span>
                      </div>
                      <Progress value={89} className="h-2" />
                      <div className="flex justify-between text-sm">
                        <span>Pregnancy success rate</span>
                        <span className="text-accent font-medium">76%</span>
                      </div>
                      <Progress value={76} className="h-2" />
                      <div className="flex justify-between text-sm">
                        <span>Long-term benefits (2+ years)</span>
                        <span className="text-vitality font-medium">82%</span>
                      </div>
                      <Progress value={82} className="h-2" />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Safety Profile</h4>
                    <div className="space-y-2">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <h5 className="font-medium text-sm mb-1">Adverse Events</h5>
                        <p className="text-xs text-muted-foreground">
                          Minimal side effects reported in <2% of cases. Mild injection site discomfort most common.
                        </p>
                      </div>
                      <div className="p-3 rounded-lg bg-secondary/10">
                        <h5 className="font-medium text-sm mb-1">FDA Status</h5>
                        <p className="text-xs text-muted-foreground">
                          Expanded access protocols available. Full approval pending Phase III results.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="exosomes" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-accent/5 to-vitality/5 border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-accent" />
                    Exosome Therapy Protocol
                  </CardTitle>
                  <Badge variant="outline" className="w-fit border-accent text-accent">
                    Next Generation
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      Advanced cellular communication therapy using purified exosomes to enhance cellular repair and regeneration.
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Treatment Advantages</h4>
                      <div className="space-y-1 text-xs text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                          <span>Non-invasive delivery method</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                          <span>Faster results (2-4 weeks)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                          <span>Lower immunogenic risk</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                          <span>Targeted molecular signaling</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator />
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Protocol Details</h4>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <span className="font-medium">Treatments:</span>
                        <span className="text-muted-foreground ml-1">4 sessions</span>
                      </div>
                      <div>
                        <span className="font-medium">Frequency:</span>
                        <span className="text-muted-foreground ml-1">Weekly</span>
                      </div>
                      <div>
                        <span className="font-medium">Duration:</span>
                        <span className="text-muted-foreground ml-1">1 month</span>
                      </div>
                      <div>
                        <span className="font-medium">Maintenance:</span>
                        <span className="text-muted-foreground ml-1">Quarterly</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-vitality" />
                    Mechanism of Action
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-accent/10 to-vitality/10">
                      <h4 className="font-semibold text-sm mb-2">Cellular Communication</h4>
                      <p className="text-xs text-muted-foreground">
                        Exosomes carry growth factors, microRNAs, and proteins that enhance testicular Leydig and Sertoli cell function.
                      </p>
                    </div>
                    
                    <div className="p-3 rounded-lg bg-gradient-to-r from-vitality/10 to-primary/10">
                      <h4 className="font-semibold text-sm mb-2">Regenerative Signaling</h4>
                      <p className="text-xs text-muted-foreground">
                        Promotes angiogenesis, reduces inflammation, and stimulates endogenous stem cell activation.
                      </p>
                    </div>
                    
                    <div className="p-3 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10">
                      <h4 className="font-semibold text-sm mb-2">Quality Enhancement</h4>
                      <p className="text-xs text-muted-foreground">
                        Improves mitochondrial function in sperm, enhancing motility and reducing DNA fragmentation.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Clinical Outcomes */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Clinical Outcomes & Biomarkers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center space-y-2">
                    <div className="text-2xl font-bold text-accent">+42%</div>
                    <p className="text-sm text-muted-foreground">Sperm Concentration</p>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-2xl font-bold text-vitality">+38%</div>
                    <p className="text-sm text-muted-foreground">Progressive Motility</p>
                    <Progress value={82} className="h-2" />
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-2xl font-bold text-secondary">-28%</div>
                    <p className="text-sm text-muted-foreground">DNA Fragmentation</p>
                    <Progress value={78} className="h-2" />
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-2xl font-bold text-primary">+22%</div>
                    <p className="text-sm text-muted-foreground">Testosterone Levels</p>
                    <Progress value={75} className="h-2" />
                  </div>
                </div>
                
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-gradient-to-r from-accent/10 to-vitality/10">
                    <h4 className="font-semibold text-sm mb-2">Timeline to Results</h4>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span>Initial improvements</span>
                        <span className="text-muted-foreground">2 weeks</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Peak benefits</span>
                        <span className="text-muted-foreground">6-8 weeks</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Duration of effects</span>
                        <span className="text-muted-foreground">4-6 months</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10">
                    <h4 className="font-semibold text-sm mb-2">Success Predictors</h4>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span>Age ≤40 years</span>
                        <Badge variant="secondary" className="text-xs bg-secondary/20 text-secondary">+25% success</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>Baseline motility >20%</span>
                        <Badge variant="outline" className="text-xs border-accent text-accent">+18% success</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>Normal hormone levels</span>
                        <Badge variant="outline" className="text-xs border-vitality text-vitality">+15% success</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="hormones" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-secondary/5 to-accent/5 border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-secondary" />
                    Hormone Replacement Therapy
                  </CardTitle>
                  <Badge variant="secondary" className="w-fit bg-secondary/20 text-secondary">
                    Precision Medicine
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">Bioidentical Hormone Optimization</h4>
                    <p className="text-xs text-muted-foreground">
                      Personalized hormone replacement using bioidentical compounds to restore optimal endocrine function.
                    </p>
                    
                    <div className="space-y-2">
                      <div className="p-3 rounded-lg bg-card/30">
                        <h5 className="font-medium text-sm mb-1">Testosterone Replacement</h5>
                        <p className="text-xs text-muted-foreground">
                          Customized dosing via cream, injection, or pellet therapy
                        </p>
                      </div>
                      <div className="p-3 rounded-lg bg-card/30">
                        <h5 className="font-medium text-sm mb-1">Growth Hormone Support</h5>
                        <p className="text-xs text-muted-foreground">
                          Peptide therapy to enhance natural GH production
                        </p>
                      </div>
                      <div className="p-3 rounded-lg bg-card/30">
                        <h5 className="font-medium text-sm mb-1">Thyroid Optimization</h5>
                        <p className="text-xs text-muted-foreground">
                          T3/T4 balance for metabolic enhancement
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-accent" />
                    Peptide Protocols
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">Advanced Peptide Therapy</h4>
                    <div className="space-y-2">
                      {[
                        { name: "BPC-157", benefit: "Tissue repair & healing", dosage: "250mcg daily" },
                        { name: "CJC-1295", benefit: "Growth hormone release", dosage: "2mg 2x/week" },
                        { name: "PT-141", benefit: "Libido enhancement", dosage: "1.75mg as needed" },
                        { name: "TB-500", benefit: "Recovery acceleration", dosage: "5mg 2x/week" }
                      ].map((peptide, i) => (
                        <div key={i} className="p-2 rounded-lg bg-gradient-to-r from-accent/10 to-secondary/10">
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-medium text-sm">{peptide.name}</span>
                            <span className="text-xs text-muted-foreground">{peptide.dosage}</span>
                          </div>
                          <p className="text-xs text-muted-foreground">{peptide.benefit}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Monitoring Protocol */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Monitoring & Optimization Protocol
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Week 1-4: Initiation</h4>
                    <div className="space-y-2">
                      <div className="p-3 rounded-lg bg-secondary/10">
                        <h5 className="font-medium text-sm mb-1">Baseline Testing</h5>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>• Comprehensive hormone panel</li>
                          <li>• Metabolic markers</li>
                          <li>• Safety parameters</li>
                        </ul>
                      </div>
                      <div className="p-3 rounded-lg bg-accent/10">
                        <h5 className="font-medium text-sm mb-1">Treatment Start</h5>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>• Conservative dosing</li>
                          <li>• Weekly check-ins</li>
                          <li>• Symptom tracking</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Week 5-12: Optimization</h4>
                    <div className="space-y-2">
                      <div className="p-3 rounded-lg bg-vitality/10">
                        <h5 className="font-medium text-sm mb-1">Dose Titration</h5>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>• Monthly lab monitoring</li>
                          <li>• Symptom optimization</li>
                          <li>• Side effect management</li>
                        </ul>
                      </div>
                      <div className="p-3 rounded-lg bg-primary/10">
                        <h5 className="font-medium text-sm mb-1">Peak Benefits</h5>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>• Energy stabilization</li>
                          <li>• Libido restoration</li>
                          <li>• Body composition changes</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Week 13+: Maintenance</h4>
                    <div className="space-y-2">
                      <div className="p-3 rounded-lg bg-secondary/10">
                        <h5 className="font-medium text-sm mb-1">Long-term Protocol</h5>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>• Quarterly assessments</li>
                          <li>• Dose adjustments</li>
                          <li>• Lifestyle integration</li>
                        </ul>
                      </div>
                      <div className="p-3 rounded-lg bg-accent/10">
                        <h5 className="font-medium text-sm mb-1">Health Monitoring</h5>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>• Cardiovascular health</li>
                          <li>• Prostate monitoring</li>
                          <li>• Metabolic parameters</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="future" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Dna className="w-5 h-5 text-primary" />
                    CRISPR Gene Therapy
                  </CardTitle>
                  <Badge variant="outline" className="w-fit border-primary text-primary">
                    Research Preview
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      Next-generation gene editing for hereditary fertility markers and optimization of reproductive genetics.
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Target Applications</h4>
                      <div className="space-y-1 text-xs text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                          <span>Y-chromosome microdeletions</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                          <span>CFTR gene mutations</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                          <span>Androgen receptor variants</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                          <span>Metabolic enzyme deficiencies</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-3 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10">
                      <h4 className="font-semibold text-sm mb-1">Timeline to Availability</h4>
                      <p className="text-xs text-muted-foreground">
                        Clinical trials expected 2025-2027. Regulatory approval estimated 2028-2030.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-accent" />
                    Nanotechnology Solutions
                  </CardTitle>
                  <Badge variant="outline" className="w-fit border-accent text-accent">
                    Development Phase
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      Targeted nanoparticle delivery systems for precision medicine and cellular repair.
                    </p>
                    
                    <div className="space-y-2">
                      <div className="p-3 rounded-lg bg-accent/10">
                        <h4 className="font-semibold text-sm mb-1">Targeted Drug Delivery</h4>
                        <p className="text-xs text-muted-foreground">
                          Nanocarriers for precise testicular delivery of growth factors and antioxidants.
                        </p>
                      </div>
                      
                      <div className="p-3 rounded-lg bg-vitality/10">
                        <h4 className="font-semibold text-sm mb-1">Cellular Repair Systems</h4>
                        <p className="text-xs text-muted-foreground">
                          Programmable nanorobots for mitochondrial repair and DNA damage correction.
                        </p>
                      </div>
                      
                      <div className="p-3 rounded-lg bg-secondary/10">
                        <h4 className="font-semibold text-sm mb-1">Real-time Monitoring</h4>
                        <p className="text-xs text-muted-foreground">
                          Biosensor networks for continuous hormone and biomarker tracking.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Future Timeline */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Technology Development Timeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="space-y-3">
                      <div className="text-center">
                        <h4 className="font-semibold text-foreground">2024-2025</h4>
                        <Badge variant="secondary" className="text-xs bg-secondary/20 text-secondary">Current</Badge>
                      </div>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p>• Stem cell therapy optimization</p>
                        <p>• Advanced exosome protocols</p>
                        <p>• Precision hormone therapy</p>
                        <p>• AI-driven personalization</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="text-center">
                        <h4 className="font-semibold text-foreground">2026-2027</h4>
                        <Badge variant="outline" className="text-xs border-accent text-accent">Near Term</Badge>
                      </div>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p>• Gene therapy trials</p>
                        <p>• Nanotechnology pilots</p>
                        <p>• Organ-on-chip testing</p>
                        <p>• Bioprinting research</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="text-center">
                        <h4 className="font-semibold text-foreground">2028-2030</h4>
                        <Badge variant="outline" className="text-xs border-vitality text-vitality">Future</Badge>
                      </div>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p>• CRISPR applications</p>
                        <p>• Quantum diagnostics</p>
                        <p>• Synthetic biology</p>
                        <p>• Neural interfaces</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="text-center">
                        <h4 className="font-semibold text-foreground">2031+</h4>
                        <Badge variant="outline" className="text-xs border-primary text-primary">Vision</Badge>
                      </div>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p>• Regenerative organs</p>
                        <p>• Digital twins</p>
                        <p>• Longevity protocols</p>
                        <p>• Consciousness interface</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10">
                    <h4 className="font-semibold text-sm mb-2">Early Access Programs</h4>
                    <p className="text-xs text-muted-foreground mb-3">
                      Join our research consortium to access cutting-edge therapies before general availability.
                    </p>
                    <Button variant="biotech" size="sm">
                      <Sparkles className="w-3 h-3 mr-2" />
                      Join Research Program
                    </Button>
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