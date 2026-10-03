import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { h as Search } from "../_libs/lucide-react.mjs";
import { c as PageIntro } from "./sports-ui-mspXUiuG.mjs";
import { t as Button } from "./button-DnlbRvtw.mjs";
import { t as Input } from "./input-CVsL8r7Y.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/help-CJ9oglg8.js
var import_jsx_runtime = require_jsx_runtime();
function HelpPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		eyebrow: "Support & FAQ",
		title: "SportsMax Help Center",
		text: "Everything you need to know about setting up sensors, syncing team rosters, and analyzing tactical feeds."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-12 bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "content-wrap max-w-4xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mb-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3.5 top-3 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					placeholder: "Search help articles, sensor setup guides...",
					className: "pl-10 h-10 bg-card"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-card p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-bold text-base mb-2",
							children: "How do I pair my Garmin or Apple Watch?"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground leading-relaxed",
							children: "Navigate to your account profile settings and select \"Connected Devices\". Authorize the OAuth integration to allow automatic background activity synchronization."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-card p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-bold text-base mb-2",
							children: "How is the Acute-to-Chronic Workload Ratio calculated?"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground leading-relaxed",
							children: "Acute load is your rolling 7-day training volume. Chronic load is your rolling 28-day average. Dividing acute by chronic provides the ACWR score."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-card p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-bold text-base mb-2",
							children: "Can coaches manage multi-sport rosters?"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground leading-relaxed",
							children: "Yes. Coaches can group athletes by sport or discipline (e.g. Sprints, Distance, Football, Swimming) with custom metrics tailored to each event."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-card p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-bold text-base mb-2",
								children: "Need live coaching staff support?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground leading-relaxed mb-4",
								children: "Our sports science engineering team is available 24/7 for collegiate and professional matchday operations."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "sm",
								variant: "outline",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									children: "Contact Support →"
								})
							})
						]
					})
				]
			})]
		})
	})] });
}
//#endregion
export { HelpPage as component };
