import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { A as HeartPulse, C as Medal, M as Gauge, N as Footprints, P as Flame, V as Clock3, rt as Activity, v as Mountain, w as Map } from "../_libs/lucide-react.mjs";
import { c as PageIntro, l as SectionHead, n as BarChartCard, o as LineChartCard, r as DemoBadge, s as MetricCard, u as Segmented } from "./sports-ui-mspXUiuG.mjs";
import { i as progression, o as runTrend, s as weekly } from "./sports-data-0K1P3zKO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/run-analytics-D1hiUlw_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var metrics = [
	[
		"Distance",
		"8.42 km",
		"Today",
		Map
	],
	[
		"Average pace",
		"5:18 /km",
		"6% faster",
		Activity
	],
	[
		"Average speed",
		"11.3 km/h",
		"Stable",
		Gauge
	],
	[
		"Duration",
		"44:38",
		"Moving time",
		Clock3
	],
	[
		"Cadence",
		"168 spm",
		"Optimal range",
		Footprints
	],
	[
		"Heart rate",
		"154 bpm",
		"Zone 3",
		HeartPulse
	],
	[
		"Calories",
		"624 kcal",
		"Estimated",
		Flame
	],
	[
		"Elevation",
		"86 m",
		"Total gain",
		Mountain
	],
	[
		"Personal best",
		"41:54",
		"10K",
		Medal
	]
];
function RunAnalytics() {
	const [period, setPeriod] = (0, import_react.useState)("4 weeks");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		eyebrow: "Run analytics app",
		title: "Run Smarter. Understand Better. Perform Stronger.",
		text: "Turn every running session into actionable performance intelligence, from GPS traces to training patterns.",
		action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-end gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoBadge, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Segmented, {
				values: [
					"7 days",
					"4 weeks",
					"12 weeks"
				],
				value: period,
				onChange: setPeriod
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "content-wrap",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					title: "Performance summary",
					text: `Latest completed session · ${period} context`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
					children: metrics.map(([label, value, note, Icon]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
						label,
						value,
						note,
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
					}, label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 grid gap-5 lg:grid-cols-[1.25fr_.75fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-card relative min-h-80 overflow-hidden p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 sport-grid opacity-25" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-bold uppercase tracking-widest text-primary",
									children: "GPS route · Riverside loop"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
									viewBox: "0 0 700 260",
									className: "mt-3 w-full",
									role: "img",
									"aria-label": "Demo GPS route line",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											d: "M42 174 C90 38 178 75 224 155 S362 242 398 132 S540 24 657 82",
											fill: "none",
											stroke: "var(--border)",
											strokeWidth: "16",
											strokeLinecap: "round"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											d: "M42 174 C90 38 178 75 224 155 S362 242 398 132 S540 24 657 82",
											fill: "none",
											stroke: "var(--primary)",
											strokeWidth: "4",
											strokeLinecap: "round",
											strokeDasharray: "7 5"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
											cx: "42",
											cy: "174",
											r: "9",
											fill: "var(--accent)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
											cx: "657",
											cy: "82",
											r: "9",
											fill: "var(--primary)"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between text-xs text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Start · Central Track" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Finish · 8.42 km" })]
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LineChartCard, {
						title: "Pace over distance",
						subtitle: "Minutes per kilometer across the latest run",
						data: runTrend,
						keys: ["pace"],
						unit: " min/km"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 grid gap-5 lg:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LineChartCard, {
							title: "Heart rate over time",
							data: runTrend,
							keys: ["heart"],
							unit: " bpm"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LineChartCard, {
							title: "Speed trend",
							data: runTrend,
							keys: ["speed"],
							unit: " km/h"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BarChartCard, {
							title: "Weekly distance",
							data: weekly
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LineChartCard, {
							title: "Performance progression",
							data: progression,
							keys: ["performance", "consistency"],
							unit: "%"
						})
					]
				})
			]
		})
	})] });
}
//#endregion
export { RunAnalytics as component };
