import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { $ as BellRing, Q as BrainCircuit, R as Database, T as MapPinned, Y as ChartColumn, _ as Radio, rt as Activity, u as Sparkles } from "../_libs/lucide-react.mjs";
import { c as PageIntro, d as Workflow, l as SectionHead, r as DemoBadge } from "./sports-ui-mspXUiuG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-BuiCODVW.js
var import_jsx_runtime = require_jsx_runtime();
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		eyebrow: "About SportsMax",
		title: "Making Sports Data More Meaningful",
		text: "SportsMax transforms performance data into understandable insights and actionable intelligence for athletes, coaches, analysts, organizations, and communities.",
		action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoBadge, {})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "content-wrap",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 lg:grid-cols-2 lg:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
						eyebrow: "Our purpose",
						title: "Clarity between effort and improvement"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "leading-7 text-muted-foreground",
						children: "Raw metrics only become useful when they reveal what changed, why it matters, and what to do next. SportsMax connects capture, analysis, dashboards, and automation so the complete performance story stays visible."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-3",
						children: [
							["Athletes", "Personal progress"],
							["Coaches", "Program visibility"],
							["Analysts", "Faster interpretation"],
							["Communities", "Smarter engagement"]
						].map(([a, b]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "surface-card p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold",
								children: a
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: b
							})]
						}, a))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
						eyebrow: "Platform architecture",
						title: "Three layers. One intelligence system."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 lg:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layer, {
								title: "Data layer",
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Database, {}),
								items: [
									[Activity, "Athlete data"],
									[MapPinned, "GPS data"],
									[Radio, "Engagement data"]
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layer, {
								title: "Intelligence layer",
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrainCircuit, {}),
								items: [
									[ChartColumn, "Performance analysis"],
									[Sparkles, "Trend detection"],
									[Activity, "Predictive insights"]
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layer, {
								title: "Automation layer",
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BellRing, {}),
								items: [
									[ChartColumn, "Automated reports"],
									[Sparkles, "Recommendations"],
									[BellRing, "Alerts & engagement"]
								]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-20 grid gap-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Workflow, {
						title: "Internal Analytics Automation",
						description: "Less time preparing data. More time understanding performance.",
						steps: [
							"Data capture",
							"Processing",
							"Analytics engine",
							"Insight generation",
							"Dashboard",
							"Report"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Workflow, {
						title: "External Engagement Automation",
						description: "Turn performance events into relevant athlete and fan experiences.",
						steps: [
							"Performance data",
							"Insight",
							"Recommendation",
							"Notification",
							"Athlete update",
							"Engagement"
						]
					})]
				})
			]
		})
	})] });
}
function Layer({ title, icon, items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "surface-card p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-primary",
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-5 text-xl font-semibold",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-3",
				children: items.map(([Icon, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 border-t border-border pt-3 text-sm text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4 text-accent" }), label]
				}, label))
			})
		]
	});
}
//#endregion
export { About as component };
