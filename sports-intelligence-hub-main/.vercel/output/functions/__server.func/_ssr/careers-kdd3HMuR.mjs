import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { nt as ArrowRight } from "../_libs/lucide-react.mjs";
import { c as PageIntro } from "./sports-ui-mspXUiuG.mjs";
import { t as Button } from "./button-DnlbRvtw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/careers-kdd3HMuR.js
var import_jsx_runtime = require_jsx_runtime();
var openings = [
	{
		role: "Senior Computer Vision Engineer",
		dept: "Machine Learning",
		loc: "San Francisco / Remote",
		type: "Full-Time"
	},
	{
		role: "Lead Sports Scientist (Biomechanics)",
		dept: "Athletic Research",
		loc: "London / Hybrid",
		type: "Full-Time"
	},
	{
		role: "Staff Full-Stack Engineer (Real-time Telemetry)",
		dept: "Platform Infrastructure",
		loc: "Remote",
		type: "Full-Time"
	}
];
function CareersPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		eyebrow: "Join Our Team",
		title: "Build the Future of Athletic Performance",
		text: "We are sports scientists, machine learning researchers, and engineers obsessed with pushing the boundaries of human potential."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-12 bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "content-wrap max-w-4xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4",
				children: openings.map((job) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "surface-card p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] font-bold uppercase tracking-wider text-primary",
							children: job.dept
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-bold text-foreground mt-1",
							children: job.role
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 text-xs text-muted-foreground mt-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: job.loc }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: job.type })
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						children: ["Apply Now ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 ml-1.5" })]
					})]
				}, job.role))
			})
		})
	})] });
}
//#endregion
export { CareersPage as component };
