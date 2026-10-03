import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { M as Gauge, a as Users, c as TrendingUp, rt as Activity, w as Map } from "../_libs/lucide-react.mjs";
import { c as PageIntro, n as BarChartCard, r as DemoBadge, s as MetricCard, t as AreaChartCard, u as Segmented } from "./sports-ui-mspXUiuG.mjs";
import { i as progression, s as weekly, t as athletes } from "./sports-data-0K1P3zKO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard-DAFQk_1v.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Dashboard() {
	const [period, setPeriod] = (0, import_react.useState)("Monthly");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		eyebrow: "Organization analytics",
		title: "Performance at a glance.",
		text: "Monitor activity, compare athlete progress, and surface the signals that matter across your program.",
		action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-end gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoBadge, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Segmented, {
				values: [
					"Weekly",
					"Monthly",
					"Yearly"
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
							label: "Active athletes",
							value: "248",
							note: "+12 this month",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
							label: "Total sessions",
							value: "1,842",
							note: period,
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
							label: "Total distance",
							value: "12,406 km",
							note: "+9.4%",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Map, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
							label: "Average pace",
							value: "5:24 /km",
							note: "12 sec faster",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gauge, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
							label: "Improvement",
							value: "+8.6%",
							note: "Program average",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, {})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 grid gap-5 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AreaChartCard, {
						title: "Performance trend",
						data: progression
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BarChartCard, {
						title: "Weekly activity",
						subtitle: "Distance completed across all active athletes",
						data: weekly
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 surface-card overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between border-b border-border p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-semibold",
							children: "Athlete performance"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-xs text-muted-foreground",
							children: ["Current period · ", period]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoBadge, {})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full min-w-[660px] text-left text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
								className: "bg-secondary text-xs uppercase tracking-wider text-muted-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: [
									"Athlete",
									"Sessions",
									"Distance",
									"Avg pace",
									"Progress"
								].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-5 py-3 font-semibold",
									children: x
								}, x)) })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: athletes.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-t border-border",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-5 py-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "grid h-8 w-8 place-items-center rounded-full bg-accent/15 text-xs font-bold text-accent",
												children: a.initials
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-medium",
												children: a.name
											})]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-5 py-4 text-muted-foreground",
										children: a.sessions
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-5 py-4 text-muted-foreground",
										children: a.distance
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-5 py-4 font-mono",
										children: a.pace
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-5 py-4 font-semibold text-primary",
										children: a.progress
									})
								]
							}, a.name)) })]
						})
					})]
				})
			]
		})
	})] });
}
//#endregion
export { Dashboard as component };
