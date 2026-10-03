import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { K as ChevronDown, W as ChevronUp, u as Sparkles } from "../_libs/lucide-react.mjs";
import { c as PageIntro, r as DemoBadge, u as Segmented } from "./sports-ui-mspXUiuG.mjs";
import { n as insights } from "./sports-data-0K1P3zKO.mjs";
import { t as Button } from "./button-DnlbRvtw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/insights-CILGSwKN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Insights() {
	const [period, setPeriod] = (0, import_react.useState)("30 days");
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		eyebrow: "Automated insights",
		title: "Intelligence that keeps up with performance.",
		text: "See the alerts, patterns, milestones, and next actions SportsMax detects across training activity.",
		action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-end gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoBadge, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Segmented, {
				values: [
					"7 days",
					"30 days",
					"90 days"
				],
				value: period,
				onChange: setPeriod
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "content-wrap grid gap-5 lg:grid-cols-[minmax(0,1fr)_320px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3",
				children: insights.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "surface-card overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "grid w-full grid-cols-[minmax(0,1fr)_auto] gap-5 p-5 text-left",
						onClick: () => setOpen(open === index ? -1 : index),
						"aria-expanded": open === index,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] font-bold uppercase tracking-widest text-primary",
								children: item.type
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 text-xl font-semibold",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-6 text-muted-foreground",
								children: item.detail
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-sm text-foreground",
								children: item.metric
							}), open === index ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {})]
						})]
					}), open === index && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-border bg-secondary/50 p-5 text-sm leading-6 text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "text-foreground",
							children: "Why this matters:"
						}), " This signal combines recent sessions with your rolling baseline to highlight changes worth reviewing."] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "text-foreground",
								children: "Suggested action:"
							}), " Review the supporting sessions before changing your training plan."]
						})]
					})]
				}, item.title))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "surface-card h-fit p-6 lg:sticky lg:top-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-8 w-8 text-primary" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-5 text-xl font-semibold",
						children: "Insight engine"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-6 text-muted-foreground",
						children: "Four signal types are active for this demo athlete. New sessions refresh trend detection automatically."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid gap-3 text-sm",
						children: [
							["Signals analyzed", "28"],
							["Confidence", "High"],
							["Window", period],
							["Last refresh", "2 min ago"]
						].map(([a, b]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between border-b border-border pb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: a
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium",
								children: b
							})]
						}, a))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "mt-6 w-full",
						children: "Refresh insights"
					})
				]
			})]
		})
	})] });
}
//#endregion
export { Insights as component };
