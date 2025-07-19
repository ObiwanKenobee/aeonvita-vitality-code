import { DashboardLayout } from "@/components/DashboardLayout"
import { VitalityCard } from "@/components/VitalityCard"
import { ModuleCard } from "@/components/ModuleCard"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  TestTube, 
  TrendingUp, 
  Pill, 
  Shield, 
  Sparkles, 
  Activity,
  Zap,
  Heart,
  Brain,
  Target,
  Flame
} from "lucide-react"
import heroImage from "@/assets/hero-biotech.jpg"

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Hero Section */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary to-secondary p-8 text-primary-foreground">
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url(${heroImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className="relative z-10 max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Flame className="w-8 h-8 text-warning" />
              <h1 className="text-3xl font-bold">Decode Your Fertility Timeline</h1>
            </div>
            <p className="text-lg mb-6 text-primary-foreground/90">
              Advanced biotech platform designed to reverse male fertility decline and restore hormonal vitality through precision bio-optimization.
            </p>
            <div className="flex gap-4">
              <Button variant="vitality" size="lg">
                Reclaim Your Vitality
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground">
                View Protocol
              </Button>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">Vitality Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <VitalityCard
              title="Fertility Age"
              value={28}
              unit="years"
              change={-3}
              changeType="positive"
              status="optimal"
              icon={Target}
              description="3 years younger than biological age"
              actionLabel="View Analysis"
            />
            <VitalityCard
              title="Testosterone"
              value={752}
              unit="ng/dL"
              change={12}
              changeType="positive"
              progress={85}
              status="optimal"
              icon={Zap}
              description="Within optimal range for vitality"
            />
            <VitalityCard
              title="Sperm Motility"
              value={78}
              unit="%"
              change={-5}
              changeType="negative"
              progress={78}
              status="warning"
              icon={Activity}
              description="Slightly below optimal range"
            />
            <VitalityCard
              title="Life Spark Index"
              value={94}
              unit="/100"
              change={8}
              changeType="positive"
              progress={94}
              status="optimal"
              icon={Heart}
              description="Exceptional reproductive health"
            />
          </div>
        </div>

        {/* Bio-Optimization Modules */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">Bio-Optimization Modules</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ModuleCard
              title="Sperm Health Lab"
              description="AI-powered analysis of sperm count, motility, morphology with DNA fragmentation insights and fertility age scoring."
              icon={TestTube}
              status="active"
              progress={92}
              lastUpdate="2 hours ago"
            />
            <ModuleCard
              title="Testosterone Rhythm"
              description="Track daily hormonal fluctuations with wearable integration and circadian optimization protocols."
              icon={TrendingUp}
              status="active"
              progress={76}
              lastUpdate="6 hours ago"
            />
            <ModuleCard
              title="Protocol Generator"
              description="Personalized supplement stacks, dietary plans, and biohacks based on your unique biomarkers."
              icon={Pill}
              status="pending"
              progress={45}
              lastUpdate="1 day ago"
            />
            <ModuleCard
              title="Detox Scanner"
              description="Environmental toxin analysis with detox strategies for plastics, EDCs, and heavy metals."
              icon={Shield}
              status="active"
              progress={88}
              lastUpdate="4 hours ago"
            />
            <ModuleCard
              title="Regenerative Lab"
              description="Advanced stem cell and exosome therapy guidance with partner clinic integration."
              icon={Sparkles}
              status="locked"
              premium={true}
            />
            <ModuleCard
              title="Epigenetic Timeline"
              description="Sperm epigenetic profile analysis with long-term reproductive health predictions."
              icon={Brain}
              status="locked"
              premium={true}
            />
          </div>
        </div>

        {/* Quick Actions */}
        <Card className="bg-gradient-glow border-accent/20">
          <CardHeader>
            <CardTitle className="text-foreground flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-accent" />
              Generate Legacy, Not Just Data
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Your future family begins here. Take the next step in your bio-optimization journey.
            </p>
            <div className="flex gap-3">
              <Button variant="glow">
                Start 90-Day Protocol
              </Button>
              <Button variant="outline">
                Book Consultation
              </Button>
              <Button variant="ghost">
                Learn More
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Index;
