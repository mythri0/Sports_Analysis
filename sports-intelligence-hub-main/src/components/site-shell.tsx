import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Bot,
  BrainCircuit,
  ChevronDown,
  ChevronRight,
  Database,
  Flame,
  Gauge,
  Globe,
  Goal,
  Layers,
  LogIn,
  Menu,
  Milestone,
  Search,
  Shield,
  ShieldAlert,
  Sparkles,
  Trophy,
  Users,
  Waves,
  X,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export function Brand() {
  return (
    <Link to="/" className="flex shrink-0 items-center gap-2.5 group" aria-label="SportsMax home">
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground shadow-sm transition-transform group-hover:scale-105">
        <Activity className="h-5 w-5" />
      </span>
      <div className="flex flex-col">
        <span className="font-display text-lg font-bold tracking-tight text-foreground">
          SPORTS<span className="text-primary font-black">MAX</span>
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground -mt-1 hidden sm:block">
          Intelligence Hub
        </span>
      </div>
    </Link>
  );
}

export function AuthDialog({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<"login" | "signup">("login");
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="border-border bg-card shadow-2xl sm:max-w-md">
        <DialogHeader>
          <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Activity className="h-6 w-6" />
          </div>
          <DialogTitle className="text-center text-xl font-bold">
            {mode === "login" ? "Welcome back to SportsMax" : "Create your SportsMax account"}
          </DialogTitle>
          <DialogDescription className="text-center text-sm text-muted-foreground">
            {mode === "login"
              ? "Access athlete telemetry, tactical analytics, and AI training models."
              : "Start your 14-day free intelligence trial for athletes and coaching staffs."}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 pt-2">
          {mode === "signup" && (
            <label className="grid gap-1.5 text-xs font-semibold text-foreground">
              Full Name
              <Input placeholder="Alex Jordan" className="bg-background" />
            </label>
          )}
          <label className="grid gap-1.5 text-xs font-semibold text-foreground">
            Email address
            <Input type="email" placeholder="athlete@sportsmax.ai" className="bg-background" />
          </label>
          <label className="grid gap-1.5 text-xs font-semibold text-foreground">
            Password
            <Input type="password" placeholder="••••••••" className="bg-background" />
          </label>
          <Button type="button" className="w-full mt-2 font-semibold">
            {mode === "login" ? "Sign in to Dashboard" : "Create Free Account"}
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
          <div className="text-center mt-2">
            <button
              type="button"
              className="text-xs text-muted-foreground hover:text-primary transition underline underline-offset-4"
              onClick={() => setMode(mode === "login" ? "signup" : "login")}
            >
              {mode === "login"
                ? "Don't have an account? Sign up free"
                : "Already registered? Log in here"}
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sportsHover, setSportsHover] = useState(false);
  const [platformHover, setPlatformHover] = useState(false);
  const [analyticsHover, setAnalyticsHover] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur-md shadow-xs">
      <div className="content-wrap flex h-18 items-center justify-between gap-4">
        <Brand />

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1" aria-label="Main navigation">
          {/* Sports Dropdown (NEW PRIMARY SECTION) */}
          <div
            className="relative"
            onMouseEnter={() => setSportsHover(true)}
            onMouseLeave={() => setSportsHover(false)}
          >
            <Link
              to="/sports"
              className="inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-xs font-bold uppercase tracking-wider text-foreground hover:bg-secondary transition"
            >
              <span className="flex items-center gap-1 text-primary">
                <Flame className="h-4 w-4 fill-primary/20 text-primary" />
                Sports
              </span>
              <span className="rounded bg-primary/15 px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-primary">
                New
              </span>
              <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
            </Link>

            {sportsHover && (
              <div className="absolute left-0 top-full mt-1 w-[780px] rounded-xl border border-border bg-card p-6 shadow-2xl animate-in fade-in-50 zoom-in-95 duration-150 z-50">
                <div className="grid grid-cols-3 gap-6">
                  {/* Individual Sports Column */}
                  <div>
                    <div className="flex items-center justify-between border-b border-border/70 pb-2 mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-foreground">
                        Individual Sports
                      </span>
                      <Link
                        to="/sports"
                        className="text-[11px] font-semibold text-primary hover:underline"
                        onClick={() => setSportsHover(false)}
                      >
                        All
                      </Link>
                    </div>
                    <ul className="grid gap-1 text-xs">
                      <li>
                        <Link
                          to="/sports/running"
                          onClick={() => setSportsHover(false)}
                          className="flex items-center justify-between rounded-md p-2 hover:bg-secondary text-foreground group"
                        >
                          <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-primary" />
                            <span className="font-semibold group-hover:text-primary">Running</span>
                          </div>
                          <span className="text-[10px] text-muted-foreground">GPS & Pace</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/sports/swimming"
                          onClick={() => setSportsHover(false)}
                          className="flex items-center justify-between rounded-md p-2 hover:bg-secondary text-foreground group"
                        >
                          <div className="flex items-center gap-2">
                            <Waves className="h-3.5 w-3.5 text-accent" />
                            <span className="font-semibold group-hover:text-primary">Swimming</span>
                          </div>
                          <span className="text-[10px] text-muted-foreground">SWOLF & Turns</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/sports/athletics/high-jump"
                          onClick={() => setSportsHover(false)}
                          className="flex items-center justify-between rounded-md p-2 hover:bg-secondary text-foreground group"
                        >
                          <div className="flex items-center gap-2">
                            <Activity className="h-3.5 w-3.5 text-chart-3" />
                            <span className="font-semibold group-hover:text-primary">High Jump</span>
                          </div>
                          <span className="text-[10px] text-muted-foreground">Takeoff & Angle</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/sports/athletics/high-jump"
                          onClick={() => setSportsHover(false)}
                          className="flex items-center justify-between rounded-md p-2 hover:bg-secondary text-muted-foreground hover:text-foreground"
                        >
                          <span>Sprints (100m–400m)</span>
                          <span className="text-[10px]">Acceleration</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/sports/running"
                          onClick={() => setSportsHover(false)}
                          className="flex items-center justify-between rounded-md p-2 hover:bg-secondary text-muted-foreground hover:text-foreground"
                        >
                          <span>Distance & Marathon</span>
                          <span className="text-[10px]">Endurance</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/sports/running"
                          onClick={() => setSportsHover(false)}
                          className="flex items-center justify-between rounded-md p-2 hover:bg-secondary text-muted-foreground hover:text-foreground"
                        >
                          <span>Cycling</span>
                          <span className="text-[10px]">Watts / FTP</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/sports"
                          onClick={() => setSportsHover(false)}
                          className="flex items-center justify-between rounded-md p-2 hover:bg-secondary text-muted-foreground hover:text-foreground"
                        >
                          <span>Tennis, Golf & Combat</span>
                          <span className="text-[10px]">More &rarr;</span>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Team Sports Column */}
                  <div>
                    <div className="flex items-center justify-between border-b border-border/70 pb-2 mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-foreground">
                        Team Sports
                      </span>
                      <Link
                        to="/sports"
                        className="text-[11px] font-semibold text-primary hover:underline"
                        onClick={() => setSportsHover(false)}
                      >
                        All
                      </Link>
                    </div>
                    <ul className="grid gap-1 text-xs">
                      <li>
                        <Link
                          to="/sports/football"
                          onClick={() => setSportsHover(false)}
                          className="flex items-center justify-between rounded-md p-2 hover:bg-secondary text-foreground group"
                        >
                          <div className="flex items-center gap-2">
                            <Goal className="h-3.5 w-3.5 text-primary" />
                            <span className="font-semibold group-hover:text-primary">
                              Football / Soccer
                            </span>
                          </div>
                          <span className="text-[10px] text-muted-foreground">xG & Press</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/sports/hockey"
                          onClick={() => setSportsHover(false)}
                          className="flex items-center justify-between rounded-md p-2 hover:bg-secondary text-foreground group"
                        >
                          <div className="flex items-center gap-2">
                            <ShieldAlert className="h-3.5 w-3.5 text-chart-4" />
                            <span className="font-semibold group-hover:text-primary">Hockey</span>
                          </div>
                          <span className="text-[10px] text-muted-foreground">Shifts & Corsi</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/sports/relay"
                          onClick={() => setSportsHover(false)}
                          className="flex items-center justify-between rounded-md p-2 hover:bg-secondary text-foreground group"
                        >
                          <div className="flex items-center gap-2">
                            <Milestone className="h-3.5 w-3.5 text-accent" />
                            <span className="font-semibold group-hover:text-primary">
                              Relay & Combined
                            </span>
                          </div>
                          <span className="text-[10px] text-muted-foreground">Transfer Box</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/sports/football"
                          onClick={() => setSportsHover(false)}
                          className="flex items-center justify-between rounded-md p-2 hover:bg-secondary text-muted-foreground hover:text-foreground"
                        >
                          <span>Basketball</span>
                          <span className="text-[10px]">True Shooting</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/sports/relay"
                          onClick={() => setSportsHover(false)}
                          className="flex items-center justify-between rounded-md p-2 hover:bg-secondary text-muted-foreground hover:text-foreground"
                        >
                          <span>Volleyball</span>
                          <span className="text-[10px]">Spike Reach</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/sports/football"
                          onClick={() => setSportsHover(false)}
                          className="flex items-center justify-between rounded-md p-2 hover:bg-secondary text-muted-foreground hover:text-foreground"
                        >
                          <span>Cricket & Rugby</span>
                          <span className="text-[10px]">Telemetry</span>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Game Analysis Column */}
                  <div className="bg-secondary/40 rounded-lg p-3.5 border border-border/60">
                    <span className="text-xs font-bold uppercase tracking-wider text-foreground block mb-2">
                      Game Analysis
                    </span>
                    <ul className="grid gap-1.5 text-xs">
                      <li>
                        <Link
                          to="/sports/game-analysis"
                          onClick={() => setSportsHover(false)}
                          className="font-medium text-foreground hover:text-primary block"
                        >
                          Match Dashboard
                        </Link>
                        <span className="text-[10px] text-muted-foreground">Live telemetry</span>
                      </li>
                      <li>
                        <Link
                          to="/sports/game-analysis"
                          onClick={() => setSportsHover(false)}
                          className="font-medium text-foreground hover:text-primary block"
                        >
                          Tactical Insights
                        </Link>
                        <span className="text-[10px] text-muted-foreground">AI formation detection</span>
                      </li>
                      <li>
                        <Link
                          to="/sports/game-analysis"
                          onClick={() => setSportsHover(false)}
                          className="font-medium text-foreground hover:text-primary block"
                        >
                          Player & Team Comparison
                        </Link>
                        <span className="text-[10px] text-muted-foreground">Radar matrices</span>
                      </li>
                      <li>
                        <Link
                          to="/sports/game-analysis"
                          onClick={() => setSportsHover(false)}
                          className="font-medium text-foreground hover:text-primary block"
                        >
                          Event Detection & Reports
                        </Link>
                        <span className="text-[10px] text-muted-foreground">Automated tags</span>
                      </li>
                    </ul>
                    <div className="mt-4 pt-3 border-t border-border">
                      <Link
                        to="/sports"
                        onClick={() => setSportsHover(false)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                      >
                        All Sports Directory <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Platform Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setPlatformHover(true)}
            onMouseLeave={() => setPlatformHover(false)}
          >
            <Link
              to="/platform"
              className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-xs font-semibold text-foreground hover:bg-secondary transition"
            >
              Platform
              <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
            </Link>

            {platformHover && (
              <div className="absolute left-0 top-full mt-1 w-64 rounded-xl border border-border bg-card p-3 shadow-2xl animate-in fade-in-50 zoom-in-95 duration-150 z-50">
                <Link
                  to="/platform"
                  onClick={() => setPlatformHover(false)}
                  className="block rounded-md p-2.5 hover:bg-secondary transition"
                >
                  <div className="font-semibold text-xs text-foreground">Overview</div>
                  <div className="text-[11px] text-muted-foreground">The architecture of SportsMax</div>
                </Link>
                <Link
                  to="/platform"
                  onClick={() => setPlatformHover(false)}
                  className="block rounded-md p-2.5 hover:bg-secondary transition"
                >
                  <div className="font-semibold text-xs text-foreground">How It Works</div>
                  <div className="text-[11px] text-muted-foreground">Data capture, AI models & feedback</div>
                </Link>
                <Link
                  to="/platform"
                  onClick={() => setPlatformHover(false)}
                  className="block rounded-md p-2.5 hover:bg-secondary transition"
                >
                  <div className="font-semibold text-xs text-foreground">Technology</div>
                  <div className="text-[11px] text-muted-foreground">Kinematics, computer vision & ML</div>
                </Link>
                <Link
                  to="/platform"
                  onClick={() => setPlatformHover(false)}
                  className="block rounded-md p-2.5 hover:bg-secondary transition"
                >
                  <div className="font-semibold text-xs text-foreground">Integrations</div>
                  <div className="text-[11px] text-muted-foreground">Garmin, Polar, Catapult & APIs</div>
                </Link>
              </div>
            )}
          </div>

          {/* Analytics Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setAnalyticsHover(true)}
            onMouseLeave={() => setAnalyticsHover(false)}
          >
            <Link
              to="/analytics"
              className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-xs font-semibold text-foreground hover:bg-secondary transition"
            >
              Analytics
              <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
            </Link>

            {analyticsHover && (
              <div className="absolute left-0 top-full mt-1 w-68 rounded-xl border border-border bg-card p-3 shadow-2xl animate-in fade-in-50 zoom-in-95 duration-150 z-50">
                <Link
                  to="/analytics"
                  onClick={() => setAnalyticsHover(false)}
                  className="block rounded-md p-2.5 hover:bg-secondary transition"
                >
                  <div className="font-semibold text-xs text-foreground">Performance Insights</div>
                  <div className="text-[11px] text-muted-foreground">Session deep-dives & telemetry</div>
                </Link>
                <Link
                  to="/analytics"
                  onClick={() => setAnalyticsHover(false)}
                  className="block rounded-md p-2.5 hover:bg-secondary transition"
                >
                  <div className="font-semibold text-xs text-foreground">Training Load & Recovery</div>
                  <div className="text-[11px] text-muted-foreground">Acute vs. Chronic load ratios</div>
                </Link>
                <Link
                  to="/analytics"
                  onClick={() => setAnalyticsHover(false)}
                  className="block rounded-md p-2.5 hover:bg-secondary transition"
                >
                  <div className="font-semibold text-xs text-foreground">Comparative Analytics</div>
                  <div className="text-[11px] text-muted-foreground">Benchmark against cohorts</div>
                </Link>
                <Link
                  to="/analytics"
                  onClick={() => setAnalyticsHover(false)}
                  className="block rounded-md p-2.5 hover:bg-secondary transition"
                >
                  <div className="font-semibold text-xs text-foreground">Trend & Pattern Detection</div>
                  <div className="text-[11px] text-muted-foreground">Macrocycle tracking</div>
                </Link>
                <Link
                  to="/analytics"
                  onClick={() => setAnalyticsHover(false)}
                  className="block rounded-md p-2.5 hover:bg-secondary transition"
                >
                  <div className="font-semibold text-xs text-primary flex items-center gap-1">
                    <Sparkles className="h-3.5 w-3.5" /> AI Recommendations
                  </div>
                  <div className="text-[11px] text-muted-foreground">Automated coaching cues</div>
                </Link>
              </div>
            )}
          </div>

          {/* Athletes */}
          <Link
            to="/athletes"
            className="rounded-md px-3 py-2 text-xs font-semibold text-foreground hover:bg-secondary transition"
          >
            Athletes
          </Link>

          {/* Coaches & Teams */}
          <Link
            to="/coaches"
            className="rounded-md px-3 py-2 text-xs font-semibold text-foreground hover:bg-secondary transition"
          >
            Coaches & Teams
          </Link>

          {/* Ecosystem */}
          <Link
            to="/ecosystem"
            className="rounded-md px-3 py-2 text-xs font-semibold text-foreground hover:bg-secondary transition"
          >
            Ecosystem
          </Link>

          {/* Pricing */}
          <Link
            to="/pricing"
            className="rounded-md px-3 py-2 text-xs font-semibold text-foreground hover:bg-secondary transition"
          >
            Pricing
          </Link>

          {/* Resources */}
          <Link
            to="/resources"
            className="rounded-md px-3 py-2 text-xs font-semibold text-foreground hover:bg-secondary transition"
          >
            Resources
          </Link>
        </nav>

        {/* Action Controls */}
        <div className="hidden xl:flex items-center gap-2.5">
          <AuthDialog>
            <Button variant="ghost" size="sm" className="font-semibold text-xs">
              <LogIn className="h-4 w-4 mr-1 text-muted-foreground" />
              Log in
            </Button>
          </AuthDialog>

          <Button asChild size="sm" className="font-semibold text-xs shadow-sm">
            <Link to="/sports">
              Explore Sports <ArrowRight className="h-3.5 w-3.5 ml-1" />
            </Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <Button
          aria-label="Open mobile menu"
          variant="outline"
          size="icon"
          className="xl:hidden bg-background"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="border-t border-border bg-card/98 backdrop-blur-xl p-5 xl:hidden max-h-[85vh] overflow-y-auto">
          <div className="grid gap-4">
            <div className="rounded-lg bg-primary/10 p-3 border border-primary/20">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  Primary Sports Hub
                </span>
                <span className="rounded bg-primary text-primary-foreground px-1.5 py-0.5 text-[9px] font-black uppercase">
                  New
                </span>
              </div>
              <p className="text-xs text-muted-foreground mb-3">
                Individual sports, team leagues, and match analysis.
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <Link
                  to="/sports/running"
                  onClick={() => setMobileOpen(false)}
                  className="rounded bg-background p-2 font-medium hover:text-primary shadow-xs"
                >
                  🏃 Running
                </Link>
                <Link
                  to="/sports/swimming"
                  onClick={() => setMobileOpen(false)}
                  className="rounded bg-background p-2 font-medium hover:text-primary shadow-xs"
                >
                  🏊 Swimming
                </Link>
                <Link
                  to="/sports/athletics/high-jump"
                  onClick={() => setMobileOpen(false)}
                  className="rounded bg-background p-2 font-medium hover:text-primary shadow-xs"
                >
                  👟 High Jump
                </Link>
                <Link
                  to="/sports/football"
                  onClick={() => setMobileOpen(false)}
                  className="rounded bg-background p-2 font-medium hover:text-primary shadow-xs"
                >
                  ⚽ Football / Soccer
                </Link>
                <Link
                  to="/sports/hockey"
                  onClick={() => setMobileOpen(false)}
                  className="rounded bg-background p-2 font-medium hover:text-primary shadow-xs"
                >
                  🏒 Hockey
                </Link>
                <Link
                  to="/sports/relay"
                  onClick={() => setMobileOpen(false)}
                  className="rounded bg-background p-2 font-medium hover:text-primary shadow-xs"
                >
                  🔄 Relay Events
                </Link>
                <Link
                  to="/sports/game-analysis"
                  onClick={() => setMobileOpen(false)}
                  className="col-span-2 rounded bg-background p-2 font-medium hover:text-primary shadow-xs text-center"
                >
                  📊 Game Analysis Suite
                </Link>
                <Link
                  to="/sports"
                  onClick={() => setMobileOpen(false)}
                  className="col-span-2 text-center text-xs font-bold text-primary py-1"
                >
                  View All Sports Directory &rarr;
                </Link>
              </div>
            </div>

            <div className="grid gap-1 border-t border-border pt-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground px-2">
                Main Sections
              </span>
              <Link
                to="/platform"
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-semibold hover:bg-secondary"
              >
                Platform Architecture
              </Link>
              <Link
                to="/analytics"
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-semibold hover:bg-secondary"
              >
                Analytics & Insights
              </Link>
              <Link
                to="/athletes"
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-semibold hover:bg-secondary"
              >
                Athlete Profiles & Bests
              </Link>
              <Link
                to="/coaches"
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-semibold hover:bg-secondary"
              >
                Coaches & Teams
              </Link>
              <Link
                to="/ecosystem"
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-semibold hover:bg-secondary"
              >
                Sports Ecosystem
              </Link>
              <Link
                to="/pricing"
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-semibold hover:bg-secondary"
              >
                Pricing Plans
              </Link>
              <Link
                to="/resources"
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-semibold hover:bg-secondary"
              >
                Resources & Documentation
              </Link>
              <Link
                to="/about"
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-semibold hover:bg-secondary"
              >
                About Company & Mission
              </Link>
            </div>

            <div className="mt-2 grid grid-cols-2 gap-2 pt-2 border-t border-border">
              <AuthDialog>
                <Button variant="outline" className="w-full">
                  Log in
                </Button>
              </AuthDialog>
              <Button asChild className="w-full">
                <Link to="/sports" onClick={() => setMobileOpen(false)}>
                  Get started
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card text-foreground">
      <div className="content-wrap py-16">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {/* Col 1: Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Brand />
            <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
              Sports intelligence, biomechanical modeling, automated tactical detection, and team
              load management in one unified platform.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-xs">
              <span className="rounded-full bg-secondary border border-border px-3 py-1 font-medium text-foreground">
                24+ Sports
              </span>
              <span className="rounded-full bg-secondary border border-border px-3 py-1 font-medium text-foreground">
                Real-Time Telemetry
              </span>
              <span className="rounded-full bg-secondary border border-border px-3 py-1 font-medium text-foreground">
                AI Diagnostics
              </span>
            </div>
            <p className="mt-8 text-xs text-muted-foreground">
              &copy; 2026 SportsMax Technologies Inc. All rights reserved.
            </p>
          </div>

          {/* Col 2: Platform */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">Platform</h3>
            <ul className="mt-4 grid gap-2.5 text-sm text-muted-foreground">
              <li>
                <Link to="/platform" className="hover:text-primary transition">
                  Overview
                </Link>
              </li>
              <li>
                <Link to="/platform" className="hover:text-primary transition">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/platform" className="hover:text-primary transition">
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/platform" className="hover:text-primary transition">
                  Integrations
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-primary transition">
                  Pricing & Plans
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Sports (NEW PRIMARY SECTION) */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
              <span>Sports Hub</span>
              <span className="rounded bg-primary/15 px-1 py-0.2 text-[8px] font-black uppercase text-primary">
                New
              </span>
            </h3>
            <ul className="mt-4 grid gap-2.5 text-sm text-muted-foreground">
              <li>
                <Link to="/sports/running" className="hover:text-primary transition font-medium">
                  Running (GPS & Pace)
                </Link>
              </li>
              <li>
                <Link to="/sports/swimming" className="hover:text-primary transition">
                  Swimming (SWOLF)
                </Link>
              </li>
              <li>
                <Link to="/sports/athletics/high-jump" className="hover:text-primary transition">
                  High Jump & Track
                </Link>
              </li>
              <li>
                <Link to="/sports/football" className="hover:text-primary transition">
                  Football / Soccer (xG)
                </Link>
              </li>
              <li>
                <Link to="/sports/hockey" className="hover:text-primary transition">
                  Hockey & Ice Sports
                </Link>
              </li>
              <li>
                <Link to="/sports/relay" className="hover:text-primary transition">
                  Relay & Combined
                </Link>
              </li>
              <li>
                <Link to="/sports/game-analysis" className="hover:text-primary transition">
                  Game Analysis Suite
                </Link>
              </li>
              <li>
                <Link
                  to="/sports"
                  className="font-bold text-primary hover:underline transition pt-1 block"
                >
                  All Sports Directory &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Analytics & Athletes */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
              Intelligence
            </h3>
            <ul className="mt-4 grid gap-2.5 text-sm text-muted-foreground">
              <li>
                <Link to="/analytics" className="hover:text-primary transition">
                  Performance Insights
                </Link>
              </li>
              <li>
                <Link to="/analytics" className="hover:text-primary transition">
                  Load & Recovery
                </Link>
              </li>
              <li>
                <Link to="/analytics" className="hover:text-primary transition">
                  AI Recommendations
                </Link>
              </li>
              <li>
                <Link to="/athletes" className="hover:text-primary transition">
                  Athletes Dashboard
                </Link>
              </li>
              <li>
                <Link to="/coaches" className="hover:text-primary transition">
                  Coaches & Teams
                </Link>
              </li>
              <li>
                <Link to="/ecosystem" className="hover:text-primary transition">
                  Sports Ecosystem
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Company & Legal */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
              Company & Legal
            </h3>
            <ul className="mt-4 grid gap-2.5 text-sm text-muted-foreground">
              <li>
                <Link to="/about" className="hover:text-primary transition">
                  Company & Team
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-primary transition">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-primary transition">
                  API & Docs
                </Link>
              </li>
              <li>
                <Link to="/help" className="hover:text-primary transition">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-primary transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-primary transition">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
