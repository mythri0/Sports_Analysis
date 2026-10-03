import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { M as Gauge, Z as CalendarCheck, et as Award, l as Target, o as Trophy, w as Map } from "../_libs/lucide-react.mjs";
import { a as InsightCard, c as PageIntro, o as LineChartCard, r as DemoBadge, s as MetricCard } from "./sports-ui-mspXUiuG.mjs";
import { i as progression, o as runTrend, s as weekly } from "./sports-data-0K1P3zKO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/athlete-performance-BoVdvLvC.js
var import_jsx_runtime = require_jsx_runtime();
function AthletePerformance() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		eyebrow: "Athlete intelligence",
		title: "Every session tells part of the story.",
		text: "Follow progress across pace, volume, effort, and consistency with a complete athlete performance view.",
		action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoBadge, {})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "content-wrap",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "surface-card grid gap-6 p-6 md:grid-cols-[auto_1fr_auto] md:items-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-20 w-20 place-items-center rounded-full bg-primary text-2xl font-bold text-primary-foreground",
							children: "AR"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl font-semibold",
								children: "Aisha Raman"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded border border-accent/30 bg-accent/10 px-2 py-1 text-xs text-accent",
								children: "Advanced runner"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "Road running · Goal: Sub-45 minute 10K"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-6 text-right",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-2xl font-semibold",
								children: "148"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Total sessions"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-2xl font-semibold",
								children: "1,024 km"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Total distance"
							})] })]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
							label: "Current performance",
							value: "88 / 100",
							note: "Excellent",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gauge, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
							label: "Weekly progress",
							value: "+3.2%",
							note: "On target",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Target, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
							label: "Monthly progress",
							value: "+8.6%",
							note: "Ahead of goal",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Map, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
							label: "Personal best",
							value: "44:12",
							note: "10K · Sep 18",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
							label: "Consistency",
							value: "91%",
							note: "12-week high",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarCheck, {})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 grid gap-5 lg:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LineChartCard, {
							title: "Pace improvement",
							data: runTrend,
							keys: ["pace"],
							unit: " /km"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LineChartCard, {
							title: "Distance progression",
							data: weekly,
							keys: ["distance"],
							unit: " km"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LineChartCard, {
							title: "Heart-rate trend",
							data: runTrend,
							keys: ["heart"],
							unit: " bpm"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LineChartCard, {
							title: "Training frequency",
							data: progression,
							keys: ["consistency"],
							unit: "%"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 grid gap-5 lg:grid-cols-[1fr_auto] lg:items-stretch",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InsightCard, {
						type: "Performance insight",
						title: "Pace is improving without increased strain",
						detail: "Your average pace has improved over the last four weeks while training volume and heart-rate effort have remained consistent.",
						metric: "High confidence"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-card grid min-w-64 place-items-center p-7 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-9 w-9 text-primary" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 font-semibold",
								children: "Monthly standout"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: "Top 8% for consistency"
							})
						]
					})]
				})
			]
		})
	})] });
}
//#endregion
export { AthletePerformance as component };
