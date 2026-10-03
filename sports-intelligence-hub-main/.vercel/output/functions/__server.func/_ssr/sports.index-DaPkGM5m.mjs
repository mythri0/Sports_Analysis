import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { J as ChartNoAxesColumn, P as Flame, h as Search, j as Goal, nt as ArrowRight } from "../_libs/lucide-react.mjs";
import { c as PageIntro, l as SectionHead, r as DemoBadge } from "./sports-ui-mspXUiuG.mjs";
import { t as Button } from "./button-DnlbRvtw.mjs";
import { t as Input } from "./input-CVsL8r7Y.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sports.index-DaPkGM5m.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var INDIVIDUAL_SPORTS = [
	{
		id: "running",
		name: "Running",
		category: "individual",
		subcategory: "Endurance & Speed",
		href: "/sports/running",
		description: "GPS tracking, cadence analytics, VO2 max estimation, split pacing, and elevation metrics.",
		iconName: "Flame",
		badge: "Flagship",
		metrics: [
			"Pace (min/km)",
			"Cadence (spm)",
			"Heart Rate Zones",
			"Elevation Gain",
			"Split Times"
		],
		primaryStat: {
			label: "Avg Pace",
			value: "5:18 /km",
			trend: "+6.0% faster"
		},
		athletesTracked: "14,250+",
		featured: true
	},
	{
		id: "swimming",
		name: "Swimming",
		category: "individual",
		subcategory: "Aquatics",
		href: "/sports/swimming",
		description: "Stroke count, SWOLF efficiency index, turn velocity, underwater kick phase, and lap-by-lap splits.",
		iconName: "Waves",
		badge: "Popular",
		metrics: [
			"SWOLF Score",
			"Stroke Rate",
			"Turn Time",
			"Underwater Phase",
			"Heart Rate"
		],
		primaryStat: {
			label: "SWOLF Score",
			value: "32.4",
			trend: "Top 5% efficiency"
		},
		athletesTracked: "6,840+",
		featured: true
	},
	{
		id: "high-jump",
		name: "High Jump",
		category: "individual",
		subcategory: "Athletics & Track",
		href: "/sports/athletics/high-jump",
		description: "Approach curve speed, takeoff vertical velocity, Fosbury bar clearance height, and center-of-mass trajectory.",
		iconName: "ArrowUpRight",
		badge: "Field Event",
		metrics: [
			"Approach Speed",
			"Takeoff Angle",
			"Vertical Velocity",
			"Bar Clearance Margin",
			"Plant Foot Force"
		],
		primaryStat: {
			label: "Clearance PB",
			value: "2.28 m",
			trend: "+4 cm this season"
		},
		athletesTracked: "1,920+",
		featured: true
	},
	{
		id: "sprints",
		name: "Sprints (100m - 400m)",
		category: "individual",
		subcategory: "Athletics & Track",
		href: "/sports/athletics/high-jump",
		description: "Block clearance reaction time, 0-30m acceleration phase, max velocity maintenance, and stride frequency.",
		iconName: "Zap",
		metrics: [
			"Block Reaction",
			"0-30m Split",
			"Top Velocity (m/s)",
			"Stride Length",
			"Deceleration Index"
		],
		primaryStat: {
			label: "100m Split",
			value: "10.14 s",
			trend: "0.12s block reaction"
		},
		athletesTracked: "5,410+"
	},
	{
		id: "distance-events",
		name: "Distance Events (5K - Marathon)",
		category: "individual",
		subcategory: "Athletics & Track",
		href: "/sports/running",
		description: "Lactate threshold modeling, sustained aerobic output, carbohydrate burn rates, and pacing strategy.",
		iconName: "Milestone",
		metrics: [
			"Aerobic Threshold",
			"Hydration Loss",
			"Negative Splits",
			"Cadence Drift",
			"Fatigue Resistance"
		],
		primaryStat: {
			label: "Half Marathon",
			value: "1:14:22",
			trend: "Negative split -42s"
		},
		athletesTracked: "9,120+"
	},
	{
		id: "jumps-throws",
		name: "Jumps & Throws",
		category: "individual",
		subcategory: "Athletics & Track",
		href: "/sports/athletics/high-jump",
		description: "Kinematic release angles in shotput, javelin, and discus; long jump approach speed and board precision.",
		iconName: "Crosshair",
		metrics: [
			"Release Velocity",
			"Angle of Release",
			"Approach Speed",
			"Foul Board Margin",
			"Torque Vector"
		],
		primaryStat: {
			label: "Long Jump PB",
			value: "8.12 m",
			trend: "Wind legal +1.2 m/s"
		},
		athletesTracked: "2,380+"
	},
	{
		id: "cycling",
		name: "Cycling",
		category: "individual",
		subcategory: "Endurance & Speed",
		href: "/sports/running",
		description: "Normalized power (NP), Functional Threshold Power (FTP), pedaling torque effectiveness, and cadence smoothing.",
		iconName: "Compass",
		metrics: [
			"FTP (Watts)",
			"W/kg Ratio",
			"Cadence (rpm)",
			"Aerodynamic Drag (CdA)",
			"Elevation Profile"
		],
		primaryStat: {
			label: "FTP Output",
			value: "345 W",
			trend: "4.8 W/kg"
		},
		athletesTracked: "8,900+"
	},
	{
		id: "tennis",
		name: "Tennis & Racket Sports",
		category: "individual",
		subcategory: "Precision & Agility",
		href: "/sports/football",
		description: "Serve speed, rally shot placement depth, spin RPM, court coverage heatmaps, and unforced error tracking.",
		iconName: "Target",
		metrics: [
			"Serve Speed (km/h)",
			"Spin Rate (RPM)",
			"Court Coverage (m)",
			"1st Serve In %",
			"Break Point Conv."
		],
		primaryStat: {
			label: "1st Serve Avg",
			value: "198 km/h",
			trend: "72% In-rate"
		},
		athletesTracked: "4,620+"
	},
	{
		id: "golf",
		name: "Golf",
		category: "individual",
		subcategory: "Precision",
		href: "/sports/athletics/high-jump",
		description: "Clubhead speed, launch angle, smash factor, apex trajectory, spin rate, and strokes gained metrics.",
		iconName: "Flag",
		metrics: [
			"Clubhead Speed",
			"Smash Factor",
			"Launch Angle",
			"Ball Spin (RPM)",
			"Strokes Gained"
		],
		primaryStat: {
			label: "Driver Carry",
			value: "294 yds",
			trend: "Smash factor 1.49"
		},
		athletesTracked: "3,750+"
	},
	{
		id: "combat-sports",
		name: "Combat Sports (Boxing / MMA / Judo)",
		category: "individual",
		subcategory: "Power & Reaction",
		href: "/sports/athletics/high-jump",
		description: "Strike impact velocity, strike accuracy %, takedown defense %, reaction latency, and cardiovascular output.",
		iconName: "Shield",
		metrics: [
			"Strike Velocity",
			"Impact Force (G)",
			"Reaction Time (ms)",
			"Significant Strikes %",
			"Heart Recovery"
		],
		primaryStat: {
			label: "Reaction Time",
			value: "182 ms",
			trend: "Sub-200ms elite tier"
		},
		athletesTracked: "2,190+"
	}
];
var TEAM_SPORTS = [
	{
		id: "football",
		name: "Football / Soccer",
		category: "team",
		subcategory: "Field Team Sport",
		href: "/sports/football",
		description: "Expected Goals (xG), pitch control heatmaps, pressing intensity (PPDA), pass completion clusters, and high-speed running distance.",
		iconName: "Goal",
		badge: "Flagship",
		metrics: [
			"Expected Goals (xG)",
			"PPDA Pressing",
			"Pass Matrix %",
			"High-Speed Sprints",
			"Defensive Line Height"
		],
		primaryStat: {
			label: "xG Created",
			value: "2.48",
			trend: "+0.62 vs opponent"
		},
		athletesTracked: "18,400+",
		featured: true
	},
	{
		id: "hockey",
		name: "Hockey (Ice & Field)",
		category: "team",
		subcategory: "Puck & Stick",
		href: "/sports/hockey",
		description: "Shift length optimization, zone entry transition speed, puck possession %, turnover recovery, and shot suppression.",
		iconName: "ShieldAlert",
		badge: "Popular",
		metrics: [
			"Corsi %",
			"Shift Duration",
			"Zone Entries",
			"Faceoff Win %",
			"Puck Possession (min)"
		],
		primaryStat: {
			label: "Corsi For %",
			value: "58.4%",
			trend: "Elite control tier"
		},
		athletesTracked: "7,310+",
		featured: true
	},
	{
		id: "relay",
		name: "Relay & Combined Events",
		category: "team",
		subcategory: "Track & Multi-Discipline",
		href: "/sports/relay",
		description: "Baton exchange box speed differentials, 20m acceleration zone splits, decathlon/heptathlon point curves.",
		iconName: "Shuffle",
		badge: "Track & Field",
		metrics: [
			"Baton Transfer Delta",
			"Exchange Speed (m/s)",
			"Split Pacing",
			"Point Aggregation",
			"Foul Margin"
		],
		primaryStat: {
			label: "4x100m Exchange",
			value: "1.74 s",
			trend: "0.18s faster than average"
		},
		athletesTracked: "3,140+",
		featured: true
	},
	{
		id: "basketball",
		name: "Basketball",
		category: "team",
		subcategory: "Court Team Sport",
		href: "/sports/football",
		description: "True Shooting % (TS%), defensive rating, pace-adjusted offensive rating, shot chart heatmaps, and pick-and-roll efficiency.",
		iconName: "CircleDot",
		metrics: [
			"True Shooting %",
			"Net Rating",
			"Rebound %",
			"Assist-to-Turnover",
			"Pace Factor"
		],
		primaryStat: {
			label: "True Shooting %",
			value: "62.1%",
			trend: "Top 4% efficiency"
		},
		athletesTracked: "11,200+"
	},
	{
		id: "volleyball",
		name: "Volleyball",
		category: "team",
		subcategory: "Court Team Sport",
		href: "/sports/relay",
		description: "Spike jump peak height, kill percentage, setter distribution heatmaps, dig conversion rate, and rotational transition speed.",
		iconName: "TrendingUp",
		metrics: [
			"Vertical Spike Height",
			"Hitting %",
			"Service Ace Ratio",
			"Dig Conversion",
			"Side-Out Efficiency"
		],
		primaryStat: {
			label: "Kill Efficiency",
			value: "48.2%",
			trend: "3.28m spike reach"
		},
		athletesTracked: "4,820+"
	},
	{
		id: "rugby",
		name: "Rugby / American Football",
		category: "team",
		subcategory: "Collision Team Sport",
		href: "/sports/football",
		description: "Tackle completion %, scrum torque impact, route separation distance, EPA (Expected Points Added), and sprint deceleration.",
		iconName: "Shield",
		metrics: [
			"Tackle Completion",
			"EPA / Play",
			"Meters Gained Post-Contact",
			"Sprint Workload (km)",
			"Turnover Differential"
		],
		primaryStat: {
			label: "EPA / Play",
			value: "+0.18",
			trend: "89% tackle efficiency"
		},
		athletesTracked: "6,940+"
	},
	{
		id: "cricket",
		name: "Cricket",
		category: "team",
		subcategory: "Bat & Ball",
		href: "/sports/football",
		description: "Bowling release trajectory, pitch seam & swing angle (degrees), wagon wheel shot analysis, and run-rate predictive modeling.",
		iconName: "Target",
		metrics: [
			"Bowling Speed (km/h)",
			"Swing / Seam Angle",
			"Dot Ball %",
			"Wagon Wheel Placement",
			"Expected Wickets (xW)"
		],
		primaryStat: {
			label: "Bowling Speed",
			value: "144.2 km/h",
			trend: "1.8° late outswing"
		},
		athletesTracked: "5,890+"
	}
];
var GAME_ANALYSIS_MODULES = [
	{
		id: "match-dashboard",
		name: "Match Dashboard",
		category: "analysis",
		href: "/sports/game-analysis",
		description: "Real-time game clock tracking, live score events, momentum shifts, pitch control, and instantaneous win probability curves.",
		iconName: "LayoutDashboard",
		stat: "Sub-second live stream feeds"
	},
	{
		id: "tactical-insights",
		name: "Tactical Insights",
		category: "analysis",
		href: "/sports/game-analysis",
		description: "AI formation detection, high-press vulnerability flags, spacing anomalies, and counter-attack phase decomposition.",
		iconName: "BrainCircuit",
		stat: "Over 85 tactical event triggers"
	},
	{
		id: "player-comparison",
		name: "Player Comparison",
		category: "analysis",
		href: "/sports/game-analysis",
		description: "Head-to-head radar charts, speed and endurance percentiles, positional benchmarks, and direct matchup histories.",
		iconName: "Users",
		stat: "12-axis performance spider charts"
	},
	{
		id: "team-comparison",
		name: "Team Comparison",
		category: "analysis",
		href: "/sports/game-analysis",
		description: "Roster aggregate stamina, bench depth evaluation, head-to-head style match ups, and set-piece efficiency ratings.",
		iconName: "BarChart3",
		stat: "Aggregate team chemistry & pace"
	},
	{
		id: "event-detection",
		name: "Event Detection",
		category: "analysis",
		href: "/sports/game-analysis",
		description: "Automated video and sensor timestamping for shots, turnovers, tackles, offside lines, and substitution impacts.",
		iconName: "Video",
		stat: "99.2% automated tagging precision"
	},
	{
		id: "custom-reports",
		name: "Custom Reports",
		category: "analysis",
		href: "/sports/game-analysis",
		description: "One-click PDF/presentation export for coaching staff, post-match debrief sheets, and tailored athlete feedback summaries.",
		iconName: "FileSpreadsheet",
		stat: "Export ready in under 3 seconds"
	}
];
function SportsDirectoryPage() {
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [search, setSearch] = (0, import_react.useState)("");
	const allItems = [...INDIVIDUAL_SPORTS, ...TEAM_SPORTS];
	const filteredSports = allItems.filter((item) => {
		const matchesFilter = filter === "all" || item.category === filter;
		const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) || item.description.toLowerCase().includes(search.toLowerCase()) || item.metrics.some((m) => m.toLowerCase().includes(search.toLowerCase()));
		return matchesFilter && matchesSearch;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		eyebrow: "Primary Section",
		title: "Sports Intelligence Directory",
		text: "A dedicated performance and tactical architecture for 24+ individual and team sports, powered by sensor telemetry and computer vision models.",
		action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-end gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoBadge, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-muted-foreground",
						children: "Quick Switch:"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "sm",
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/sports/running",
							children: "🏃 Running"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "sm",
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/sports/football",
							children: "⚽ Football"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "sm",
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/sports/game-analysis",
							children: "📊 Game Analysis"
						})
					})
				]
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-12 bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "content-wrap",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 sm:grid-cols-3 mb-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/sports",
							onClick: () => setFilter("individual"),
							className: `rounded-xl border p-5 transition-all text-left group ${filter === "individual" ? "border-primary bg-primary/5 shadow-md" : "border-border bg-card hover:border-primary/40 shadow-xs"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "h-5 w-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-bold uppercase tracking-wider text-primary",
										children: "10+ Sports"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 text-lg font-bold text-foreground group-hover:text-primary transition",
									children: "Individual Sports"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground leading-relaxed",
									children: "Running, Swimming, High Jump, Sprints, Distance, Cycling, Tennis, Golf, and Combat."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/sports",
							onClick: () => setFilter("team"),
							className: `rounded-xl border p-5 transition-all text-left group ${filter === "team" ? "border-primary bg-primary/5 shadow-md" : "border-border bg-card hover:border-primary/40 shadow-xs"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-10 w-10 place-items-center rounded-lg bg-accent/15 text-accent",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Goal, { className: "h-5 w-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-bold uppercase tracking-wider text-accent",
										children: "8+ Sports"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 text-lg font-bold text-foreground group-hover:text-primary transition",
									children: "Team Sports"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground leading-relaxed",
									children: "Football / Soccer, Hockey, Relay & Combined, Basketball, Volleyball, Rugby, Cricket."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/sports/game-analysis",
							className: "rounded-xl border border-border bg-card p-5 hover:border-primary/40 shadow-xs transition-all text-left group",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-10 w-10 place-items-center rounded-lg bg-chart-4/15 text-chart-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartNoAxesColumn, { className: "h-5 w-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded bg-chart-4/15 px-2 py-0.5 text-[10px] font-bold text-chart-4 uppercase",
										children: "Tactical Suite"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 text-lg font-bold text-foreground group-hover:text-primary transition",
									children: "Game Analysis"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground leading-relaxed",
									children: "Match Dashboard, Tactical Insights, Player Comparison, Event Detection & Reports."
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-b border-border pb-6 mb-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: filter === "all" ? "default" : "outline",
								size: "sm",
								onClick: () => setFilter("all"),
								className: "rounded-full text-xs font-semibold",
								children: [
									"All Sports (",
									allItems.length,
									")"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: filter === "individual" ? "default" : "outline",
								size: "sm",
								onClick: () => setFilter("individual"),
								className: "rounded-full text-xs font-semibold",
								children: [
									"Individual Sports (",
									INDIVIDUAL_SPORTS.length,
									")"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: filter === "team" ? "default" : "outline",
								size: "sm",
								onClick: () => setFilter("team"),
								className: "rounded-full text-xs font-semibold",
								children: [
									"Team Sports (",
									TEAM_SPORTS.length,
									")"
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative w-full sm:w-72",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							placeholder: "Search sports or metrics...",
							value: search,
							onChange: (e) => setSearch(e.target.value),
							className: "pl-9 bg-card text-xs h-9"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
					children: filteredSports.map((sport) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SportCard, { sport }, sport.id))
				}),
				filteredSports.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center py-16 surface-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-base font-semibold",
							children: [
								"No sports found matching \"",
								search,
								"\""
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted-foreground",
							children: "Try searching for \"pace\", \"xG\", \"SWOLF\", \"heart rate\", or \"cadence\"."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "sm",
							className: "mt-4",
							onClick: () => {
								setSearch("");
								setFilter("all");
							},
							children: "Reset filters"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16 border-t border-border pt-14",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
						eyebrow: "Tactical Modules",
						title: "Dedicated Game Analysis Suite",
						text: "Engineered for performance analysts, technical directors, and coaches looking for tactical precision.",
						action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/sports/game-analysis",
								children: ["Launch Game Analysis Suite ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 ml-1" })]
							})
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-6",
						children: GAME_ANALYSIS_MODULES.map((mod) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "surface-card p-6 flex flex-col justify-between hover:border-primary/50 transition group",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-bold uppercase tracking-wider text-primary",
										children: "Analysis Module"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] font-mono text-muted-foreground bg-secondary px-2 py-0.5 rounded",
										children: mod.stat
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 text-lg font-bold group-hover:text-primary transition",
									children: mod.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs text-muted-foreground leading-relaxed",
									children: mod.description
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 pt-4 border-t border-border flex items-center justify-between text-xs font-semibold text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/sports/game-analysis",
									className: "hover:underline flex items-center gap-1",
									children: ["Open in Suite ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
								})
							})]
						}, mod.id))
					})]
				})
			]
		})
	})] });
}
function SportCard({ sport }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "surface-card p-6 flex flex-col justify-between hover:border-primary/50 transition group",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground",
					children: sport.subcategory ?? (sport.category === "individual" ? "Individual" : "Team")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xl font-bold mt-1 text-foreground group-hover:text-primary transition",
					children: sport.name
				})] }), sport.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full bg-primary/10 text-primary border border-primary/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider",
					children: sport.badge
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-xs text-muted-foreground leading-relaxed",
				children: sport.description
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 rounded-lg bg-secondary/60 p-3 border border-border/60",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between text-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground",
						children: sport.primaryStat.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono font-bold text-foreground text-sm",
						children: sport.primaryStat.value
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-[11px] font-semibold text-primary",
					children: sport.primaryStat.trend
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-wrap gap-1.5",
				children: [sport.metrics.slice(0, 4).map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded bg-background border border-border px-2 py-0.5 text-[10px] font-medium text-foreground",
					children: m
				}, m)), sport.metrics.length > 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-[10px] text-muted-foreground self-center",
					children: [
						"+",
						sport.metrics.length - 4,
						" more"
					]
				})]
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 pt-4 border-t border-border flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-[11px] text-muted-foreground",
				children: ["Tracked: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					className: "text-foreground",
					children: sport.athletesTracked
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				size: "sm",
				variant: "ghost",
				className: "text-xs font-bold text-primary hover:text-primary group-hover:bg-primary/10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: sport.href,
					children: ["Explore Sport ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5 ml-1" })]
				})
			})]
		})]
	});
}
//#endregion
export { SportsDirectoryPage as component };
