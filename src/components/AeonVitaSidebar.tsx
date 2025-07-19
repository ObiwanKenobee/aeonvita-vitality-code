import { useState } from "react"
import { 
  Activity, 
  TestTube, 
  TrendingUp, 
  Pill, 
  Shield, 
  Sparkles,
  ChevronRight,
  Dna,
  Flame
} from "lucide-react"
import { NavLink, useLocation } from "react-router-dom"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"

const modules = [
  { 
    title: "Vitality Dashboard", 
    url: "/", 
    icon: Activity,
    description: "Complete overview"
  },
  { 
    title: "Sperm Health Lab", 
    url: "/sperm-health", 
    icon: TestTube,
    description: "AI-powered analysis"
  },
  { 
    title: "Testosterone Rhythm", 
    url: "/testosterone", 
    icon: TrendingUp,
    description: "Hormonal tracking"
  },
  { 
    title: "Protocol Generator", 
    url: "/protocol", 
    icon: Pill,
    description: "Personalized optimization"
  },
  { 
    title: "Detox Scanner", 
    url: "/detox", 
    icon: Shield,
    description: "Environmental analysis"
  },
  { 
    title: "Regenerative Lab", 
    url: "/regenerative", 
    icon: Sparkles,
    description: "Advanced therapies"
  },
]

export function AeonVitaSidebar() {
  const { state } = useSidebar()
  const location = useLocation()
  const currentPath = location.pathname
  const isCollapsed = state === "collapsed"

  const isActive = (path: string) => currentPath === path

  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    `group relative flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-all duration-300 ${
      isActive 
        ? "bg-gradient-primary text-primary-foreground shadow-glow-emerald" 
        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground hover:shadow-glow-bio-blue/50"
    }`

  return (
    <Sidebar
      className="border-r border-sidebar-border bg-sidebar"
      collapsible="icon"
    >
      <SidebarContent className="px-4 py-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow-emerald">
              <Dna className="w-6 h-6 text-primary-foreground" />
            </div>
            {!isCollapsed && (
              <div>
                <h1 className="text-xl font-bold text-foreground">AeonVita</h1>
                <p className="text-xs text-muted-foreground">Biotech Platform</p>
              </div>
            )}
          </div>
          {!isCollapsed && (
            <div className="px-2">
              <div className="flex items-center gap-2 text-xs text-secondary">
                <Flame className="w-3 h-3" />
                <span>Vitality Code: Active</span>
              </div>
            </div>
          )}
        </div>

        <SidebarGroup className="space-y-1">
          {!isCollapsed && (
            <SidebarGroupLabel className="text-xs font-medium text-muted-foreground mb-4">
              Bio-Optimization Modules
            </SidebarGroupLabel>
          )}

          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {modules.map((module) => (
                <SidebarMenuItem key={module.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={module.url} 
                      end 
                      className={getNavCls}
                    >
                      <module.icon className={`${isCollapsed ? "w-5 h-5" : "w-4 h-4"} flex-shrink-0`} />
                      {!isCollapsed && (
                        <>
                          <div className="flex-1">
                            <div className="font-medium">{module.title}</div>
                            <div className="text-xs opacity-70">{module.description}</div>
                          </div>
                          <ChevronRight className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                        </>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Bottom Section */}
        {!isCollapsed && (
          <div className="mt-auto pt-8">
            <div className="p-4 rounded-lg bg-gradient-glow border border-accent/20">
              <div className="flex items-center gap-3 mb-2">
                <Sparkles className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium text-foreground">Regenerative Mode</span>
              </div>
              <p className="text-xs text-muted-foreground mb-3">
                Unlock premium bio-optimization protocols
              </p>
              <button className="w-full py-2 px-3 bg-accent text-accent-foreground rounded-md text-xs font-medium hover:bg-accent/80 transition-colors">
                Activate Protocol
              </button>
            </div>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  )
}