import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { J as ChartNoAxesColumn, M as Gauge, P as Flame, Q as BrainCircuit, R as Database, _ as Radio, a as Users, j as Goal, nt as ArrowRight, t as Zap } from "../_libs/lucide-react.mjs";
import { a as InsightCard, d as Workflow, l as SectionHead, r as DemoBadge } from "./sports-ui-mspXUiuG.mjs";
import { n as insights } from "./sports-data-0K1P3zKO.mjs";
import { t as Button } from "./button-DnlbRvtw.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BN89tsAO.js
var import_jsx_runtime = require_jsx_runtime();
var sportsmax_runner_default = "/assets/sportsmax-runner-CSzSy2iA.jpg";
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative min-h-[min(880px,92vh)] overflow-hidden border-b border-border pt-18 bg-background",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: sportsmax_runner_default,
					width: 1600,
					height: 1e3,
					alt: "Runner on track with integrated performance data traces",
					className: "absolute inset-0 h-full w-full object-cover object-[68%_center] opacity-85"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(90deg,var(--background)_0%,color-mix(in_oklab,var(--background)_96%,transparent)_42%,color-mix(in_oklab,var(--background)_45%,transparent)_75%,color-mix(in_oklab,var(--background)_75%,transparent)_100%)]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "sport-grid absolute inset-0 opacity-25" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "content-wrap relative flex min-h-[min(790px,calc(92vh-72px))] items-center py-16",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl reveal",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-6 flex flex-wrap items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoBadge, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-xs px-3 py-1 uppercase tracking-wider flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "h-3.5 w-3.5 fill-primary/30" }), " New Primary Sports Hub Added"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "text-balance text-5xl font-black leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-7xl",
								children: [
									"Turn Sports Data Into",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-primary font-black",
										children: "Performance Intelligence"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg",
								children: "SportsMax combines individual athlete biometrics, team tactics, optical computer vision, and automated coaching cues across 24+ sports."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap items-center gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										size: "lg",
										className: "font-bold shadow-md",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/sports",
											children: ["Explore Sports Hub ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 ml-1.5" })]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										size: "lg",
										variant: "outline",
										className: "font-semibold bg-card/80",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/sports/game-analysis",
											children: "Tactical Analysis Suite"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										size: "lg",
										variant: "ghost",
										className: "font-semibold text-muted-foreground hover:text-foreground",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/platform",
											children: "How It Works"
										})
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap items-center gap-2 pt-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-bold uppercase tracking-wider text-muted-foreground mr-1",
										children: "Featured:"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/sports/running",
										className: "rounded-full bg-card/90 border border-border px-3 py-1 text-xs font-semibold text-foreground hover:border-primary/50 shadow-xs transition",
										children: "🏃 Running (GPS & Pace)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/sports/swimming",
										className: "rounded-full bg-card/90 border border-border px-3 py-1 text-xs font-semibold text-foreground hover:border-primary/50 shadow-xs transition",
										children: "🏊 Swimming (SWOLF)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/sports/athletics/high-jump",
										className: "rounded-full bg-card/90 border border-border px-3 py-1 text-xs font-semibold text-foreground hover:border-primary/50 shadow-xs transition",
										children: "👟 High Jump (2.28m)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/sports/football",
										className: "rounded-full bg-card/90 border border-border px-3 py-1 text-xs font-semibold text-foreground hover:border-primary/50 shadow-xs transition",
										children: "⚽ Football (xG)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/sports/hockey",
										className: "rounded-full bg-card/90 border border-border px-3 py-1 text-xs font-semibold text-foreground hover:border-primary/50 shadow-xs transition",
										children: "🏒 Hockey (Corsi)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/sports/relay",
										className: "rounded-full bg-card/90 border border-border px-3 py-1 text-xs font-semibold text-foreground hover:border-primary/50 shadow-xs transition",
										children: "🔄 Relay Events"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-12 grid max-w-xl grid-cols-3 gap-3 border-t border-border/70 pt-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
										value: "24+ Sports",
										label: "Directory coverage"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
										value: "< 50ms",
										label: "Live telemetry feed"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
										value: "99.2%",
										label: "Event detection precision"
									})
								]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute bottom-8 right-[6%] hidden w-80 rounded-xl border border-border/90 bg-card/95 p-5 shadow-xl backdrop-blur-md lg:block",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] font-bold uppercase tracking-wider text-muted-foreground",
								children: "Live Runner Cadence"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1 text-xs font-bold text-primary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-primary animate-pulse" }), "Optimal"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex items-end justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-3xl font-extrabold text-foreground",
								children: "170"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted-foreground ml-1",
								children: "spm"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-mono font-semibold text-primary",
								children: "Pace: 5:14 /km"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 flex h-12 items-end gap-1.5",
							children: [
								45,
								62,
								54,
								72,
								60,
								84,
								70,
								92,
								78,
								96,
								82,
								90
							].map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex-1 rounded-xs bg-primary/80 transition-all hover:bg-primary",
								style: { height: `${v}%` }
							}, i))
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20 bg-background border-b border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "content-wrap",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					eyebrow: "New Primary Section",
					title: "Sports Intelligence Hub",
					text: "Comprehensive telemetry, biomechanical physics, and automated tactical analytics across individual sports, team leagues, and game analysis.",
					action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/sports",
							children: ["Browse All Sports Directory ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 ml-1" })]
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-6 lg:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "surface-card p-6 flex flex-col justify-between border-t-4 border-t-primary shadow-xs hover:shadow-md transition",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "h-5 w-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded bg-primary/10 text-primary text-[10px] font-black uppercase px-2 py-0.5",
										children: "Individual"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 text-xl font-bold text-foreground",
									children: "Individual Sports"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs text-muted-foreground leading-relaxed",
									children: "Precision biometric telemetry, cadence dynamics, ground contact time, and hydrodynamic efficiency."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 grid gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/sports/running",
											className: "flex items-center justify-between rounded-lg p-2.5 bg-secondary/50 hover:bg-secondary border border-border/50 text-xs font-semibold text-foreground group transition",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🏃 Running (Enhanced Telemetry)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] text-primary font-bold group-hover:translate-x-0.5 transition-transform",
												children: "5:14 /km →"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/sports/swimming",
											className: "flex items-center justify-between rounded-lg p-2.5 bg-secondary/50 hover:bg-secondary border border-border/50 text-xs font-semibold text-foreground group transition",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🏊 Swimming (SWOLF Index)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] text-primary font-bold group-hover:translate-x-0.5 transition-transform",
												children: "32.4 SWOLF →"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/sports/athletics/high-jump",
											className: "flex items-center justify-between rounded-lg p-2.5 bg-secondary/50 hover:bg-secondary border border-border/50 text-xs font-semibold text-foreground group transition",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "👟 High Jump & Field Events" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] text-primary font-bold group-hover:translate-x-0.5 transition-transform",
												children: "2.28m Apex →"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-wrap gap-1.5 pt-2 text-[11px] text-muted-foreground",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Sprints (100m-400m)" }),
												" • ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Distance" }),
												" • ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Cycling" }),
												" • ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Tennis" }),
												" • ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Golf" }),
												" • ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Combat" })
											]
										})
									]
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 pt-4 border-t border-border",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/sports",
									className: "text-xs font-bold text-primary hover:underline flex items-center gap-1",
									children: "View All Individual Sports →"
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "surface-card p-6 flex flex-col justify-between border-t-4 border-t-accent shadow-xs hover:shadow-md transition",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-10 w-10 place-items-center rounded-lg bg-accent/15 text-accent",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Goal, { className: "h-5 w-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded bg-accent/15 text-accent text-[10px] font-black uppercase px-2 py-0.5",
										children: "Team Sports"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 text-xl font-bold text-foreground",
									children: "Team Sports"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs text-muted-foreground leading-relaxed",
									children: "Expected Goals (xG), pressing intensity (PPDA), shift length fatigue, and baton acceleration boxes."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 grid gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/sports/football",
											className: "flex items-center justify-between rounded-lg p-2.5 bg-secondary/50 hover:bg-secondary border border-border/50 text-xs font-semibold text-foreground group transition",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "⚽ Football / Soccer" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] text-accent font-bold group-hover:translate-x-0.5 transition-transform",
												children: "2.48 xG →"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/sports/hockey",
											className: "flex items-center justify-between rounded-lg p-2.5 bg-secondary/50 hover:bg-secondary border border-border/50 text-xs font-semibold text-foreground group transition",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🏒 Hockey (Shift & Corsi)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] text-accent font-bold group-hover:translate-x-0.5 transition-transform",
												children: "58.4% Corsi →"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/sports/relay",
											className: "flex items-center justify-between rounded-lg p-2.5 bg-secondary/50 hover:bg-secondary border border-border/50 text-xs font-semibold text-foreground group transition",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🔄 Relay & Combined Events" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] text-accent font-bold group-hover:translate-x-0.5 transition-transform",
												children: "1.71s Delta →"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-wrap gap-1.5 pt-2 text-[11px] text-muted-foreground",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Basketball" }),
												" • ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Volleyball" }),
												" • ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Rugby / Football" }),
												" • ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Cricket" })
											]
										})
									]
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 pt-4 border-t border-border",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/sports",
									className: "text-xs font-bold text-accent hover:underline flex items-center gap-1",
									children: "View All Team Sports →"
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "surface-card p-6 flex flex-col justify-between border-t-4 border-t-chart-4 shadow-xs hover:shadow-md transition",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-10 w-10 place-items-center rounded-lg bg-chart-4/15 text-chart-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartNoAxesColumn, { className: "h-5 w-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded bg-chart-4/15 text-chart-4 text-[10px] font-black uppercase px-2 py-0.5",
										children: "Tactical Suite"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 text-xl font-bold text-foreground",
									children: "Game Analysis Suite"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs text-muted-foreground leading-relaxed",
									children: "Real-time match dashboards, tactical anomaly detection, radar player comparisons, and automated tagging."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 grid gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/sports/game-analysis",
											className: "flex items-center justify-between rounded-lg p-2.5 bg-secondary/50 hover:bg-secondary border border-border/50 text-xs font-semibold text-foreground group transition",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "📊 Match Dashboard" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] text-chart-4 font-bold",
												children: "Sub-second →"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/sports/game-analysis",
											className: "flex items-center justify-between rounded-lg p-2.5 bg-secondary/50 hover:bg-secondary border border-border/50 text-xs font-semibold text-foreground group transition",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🧠 Tactical Insights" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] text-chart-4 font-bold",
												children: "AI formations →"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/sports/game-analysis",
											className: "flex items-center justify-between rounded-lg p-2.5 bg-secondary/50 hover:bg-secondary border border-border/50 text-xs font-semibold text-foreground group transition",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "👥 Player & Team Comparison" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] text-chart-4 font-bold",
												children: "Radar charts →"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-wrap gap-1.5 pt-2 text-[11px] text-muted-foreground",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Event Detection" }),
												" • ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Custom Reports" }),
												" • ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Export PDF" })
											]
										})
									]
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 pt-4 border-t border-border",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/sports/game-analysis",
									className: "text-xs font-bold text-chart-4 hover:underline flex items-center gap-1",
									children: "Launch Game Analysis Suite →"
								})
							})]
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20 bg-secondary/30",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "content-wrap",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					eyebrow: "Platform Architecture",
					title: "From Raw Sensor Signals to Game-Winning Strategy",
					text: "Every training session and competitive fixture moves through an end-to-end intelligence pipeline.",
					action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/platform",
							children: "Full Technology Overview →"
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 lg:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layer, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Database, { className: "h-5 w-5" }),
							number: "01",
							title: "Capture",
							text: "Stream telemetry from GPS watches, heart rate straps, optical tracking cameras, and RFID chips.",
							tags: [
								"Distance",
								"Pace",
								"Speed",
								"Cadence",
								"Heart Rate",
								"GPS",
								"Optical 120fps"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layer, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrainCircuit, { className: "h-5 w-5" }),
							number: "02",
							title: "Analyze",
							text: "Transform kinematics into acute-to-chronic workload ratios, fatigue markers, and tactical formations.",
							tags: [
								"ACWR Ratio",
								"xG / xT",
								"SWOLF",
								"Consistency",
								"Fatigue",
								"Spatial Press"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layer, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-5 w-5" }),
							number: "03",
							title: "Automate",
							text: "Deliver pitch-side tactical dashboards, injury risk alerts, and tailored coaching feedback sheets.",
							tags: [
								"Live Dashboards",
								"Injury Alerts",
								"AI Cues",
								"Export PDF",
								"Personal Bests"
							]
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-card py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "content-wrap",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					eyebrow: "Automated Intelligence",
					title: "Diagnostic Signals That Drive Results",
					text: "SportsMax continuously monitors physical telemetry to surface actionable adjustments.",
					action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/analytics",
							children: ["All Analytics Insights ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 ml-1" })]
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4",
					children: insights.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InsightCard, { ...i }, i.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20 bg-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "content-wrap",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					eyebrow: "Connected Automation",
					title: "Two Intelligent Feedback Loops",
					text: "Reduce manual analyst workload internally while delivering timely feedback to athletes and coaches."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Workflow, {
						title: "Internal Analytics Automation",
						description: "For analysts, coaches, sports scientists, and athletic directors.",
						steps: [
							"Data capture",
							"Sensor filtering",
							"Kinematic models",
							"Insight generation",
							"Dashboard",
							"Staff Report"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Workflow, {
						title: "External Athlete & Fan Engagement",
						description: "For athletes, club communities, broadcast audiences, and fans.",
						steps: [
							"Session sync",
							"Performance score",
							"Personal Best",
							"Coaching cue",
							"Community feed",
							"Fan Story"
						]
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border bg-secondary/40 py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "content-wrap",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					eyebrow: "Sports Ecosystem",
					title: "Purpose-Built for Every Side of Sport",
					action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/ecosystem",
							children: "Explore Ecosystem →"
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Use, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gauge, { className: "h-5 w-5" }),
							title: "Athletes",
							text: "Understand cardiac strain, pace adaptation, and verified personal best milestones.",
							href: "/athletes"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Use, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrainCircuit, { className: "h-5 w-5" }),
							title: "Coaches",
							text: "Govern squad acute-to-chronic workload, manage rosters, and mitigate injury risks.",
							href: "/coaches"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Use, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-5 w-5" }),
							title: "Communities",
							text: "Organize local running clubs, track leaderboards, and celebrate group achievements.",
							href: "/ecosystem"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Use, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Radio, { className: "h-5 w-5" }),
							title: "Fans",
							text: "Engage with live broadcast sprint velocities, shot arcs, and tactical pitch overlays.",
							href: "/sports/game-analysis"
						})
					]
				})]
			})
		})
	] });
}
function Stat({ value, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "font-display text-2xl font-black text-foreground",
		children: value
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-1 text-[11px] font-bold uppercase tracking-wider text-muted-foreground",
		children: label
	})] });
}
function Layer({ icon, number, title, text, tags }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "surface-card p-6 shadow-xs",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid h-11 w-11 place-items-center rounded-lg bg-primary/10 text-primary",
					children: icon
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-xs font-bold text-muted-foreground",
					children: number
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-8 text-2xl font-bold text-foreground",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-xs leading-relaxed text-muted-foreground",
				children: text
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 flex flex-wrap gap-1.5",
				children: tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded bg-secondary border border-border px-2.5 py-1 text-[11px] font-medium text-muted-foreground",
					children: tag
				}, tag))
			})
		]
	});
}
function Use({ icon, title, text, href }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: href,
		className: "border-l-4 border-primary bg-card p-5 surface-card hover:border-primary/80 transition block group",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-primary",
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-4 font-bold text-base text-foreground group-hover:text-primary transition",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-xs leading-relaxed text-muted-foreground",
				children: text
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-4 inline-flex items-center text-xs font-bold text-primary group-hover:underline",
				children: "Explore →"
			})
		]
	});
}
//#endregion
export { HomePage as component };
