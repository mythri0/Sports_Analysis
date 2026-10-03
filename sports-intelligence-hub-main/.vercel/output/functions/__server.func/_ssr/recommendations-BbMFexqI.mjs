import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { H as CircleGauge, L as Dumbbell, nt as ArrowRight, q as Check, y as MoonStar } from "../_libs/lucide-react.mjs";
import { c as PageIntro, i as DemoNotice, r as DemoBadge, u as Segmented } from "./sports-ui-mspXUiuG.mjs";
import { a as recommendations } from "./sports-data-0K1P3zKO.mjs";
import { t as Button } from "./button-DnlbRvtw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/recommendations-BbMFexqI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var icons = [
	MoonStar,
	Dumbbell,
	CircleGauge
];
function Recommendations() {
	const [filter, setFilter] = (0, import_react.useState)("All");
	const [saved, setSaved] = (0, import_react.useState)([]);
	const shown = filter === "All" ? recommendations : recommendations.filter((r) => r.type === filter);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		eyebrow: "Actionable intelligence",
		title: "Personalized Performance Recommendations",
		text: "Demo analytics translate recent training signals into focused next steps you can review with your coach.",
		action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoBadge, {})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "content-wrap",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-6 flex flex-wrap items-center justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Segmented, {
						values: [
							"All",
							"Recovery",
							"Endurance",
							"Consistency"
						],
						value: filter,
						onChange: setFilter
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-muted-foreground",
						children: "Based on the latest 28 sessions"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 lg:grid-cols-3",
					children: shown.map((r) => {
						const actualIndex = recommendations.indexOf(r);
						const Icon = icons[actualIndex] ?? CircleGauge;
						const isSaved = saved.includes(actualIndex);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "surface-card flex min-h-96 flex-col p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-mono text-xs text-muted-foreground",
										children: ["REC / ", r.number]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded border border-primary/25 bg-primary/10 px-2 py-1 text-[11px] font-semibold text-primary",
										children: r.priority
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "mt-8 h-9 w-9 text-accent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 text-xs font-bold uppercase tracking-widest text-primary",
									children: r.type
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-2 text-2xl font-semibold",
									children: r.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 flex-1 text-sm leading-6 text-muted-foreground",
									children: r.detail
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 border-t border-border pt-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground",
											children: "Supporting signal"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 font-mono text-sm",
											children: r.evidence
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											onClick: () => setSaved(isSaved ? saved.filter((i) => i !== actualIndex) : [...saved, actualIndex]),
											variant: isSaved ? "secondary" : "outline",
											className: "mt-4 w-full",
											children: isSaved ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {}), "Added to plan"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Review action", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})] })
										})
									]
								})
							]
						}, r.number);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoNotice, {})
				})
			]
		})
	})] });
}
//#endregion
export { Recommendations as component };
