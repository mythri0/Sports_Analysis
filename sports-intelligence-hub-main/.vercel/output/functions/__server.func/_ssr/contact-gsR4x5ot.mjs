import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { E as Mail, U as CircleCheck, a as Users, x as MessageSquareText } from "../_libs/lucide-react.mjs";
import { c as PageIntro, f as cn, r as DemoBadge } from "./sports-ui-mspXUiuG.mjs";
import { t as Button } from "./button-DnlbRvtw.mjs";
import { t as Input } from "./input-CVsL8r7Y.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-gsR4x5ot.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
function Contact() {
	const [sent, setSent] = (0, import_react.useState)(false);
	function submit(e) {
		e.preventDefault();
		setSent(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		eyebrow: "Contact",
		title: "Let’s build a clearer view of performance.",
		text: "Tell us about your athletes, organization, or analytics goals. This prototype form demonstrates the intended contact experience.",
		action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoBadge, {})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "content-wrap grid gap-8 lg:grid-cols-[.72fr_1.28fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-semibold",
					children: "Start a conversation"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm leading-6 text-muted-foreground",
					children: "SportsMax is designed for teams that want to move from scattered metrics to useful, repeatable intelligence."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-5",
					children: [
						[
							Users,
							"Sports organizations",
							"Explore multi-athlete analytics"
						],
						[
							MessageSquareText,
							"Coaches & analysts",
							"Discuss workflow automation"
						],
						[
							Mail,
							"Partnerships",
							"Connect performance and engagement"
						]
					].map(([Ico, a, b]) => {
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-10 w-10 shrink-0 place-items-center rounded-md bg-primary/10 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ico, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold",
								children: String(a)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: String(b)
							})] })]
						}, String(a));
					})
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "surface-card p-6 sm:p-8",
				children: sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid min-h-96 place-items-center text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mx-auto h-12 w-12 text-primary" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-5 text-2xl font-semibold",
							children: "Message captured"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-3 max-w-sm text-sm leading-6 text-muted-foreground",
							children: "Thanks for exploring SportsMax. This demo confirmation is local; no message was sent."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "mt-6",
							variant: "outline",
							onClick: () => setSent(false),
							children: "Send another"
						})
					] })
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: submit,
					className: "grid gap-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-5 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "grid gap-2 text-sm font-medium",
								children: ["Name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									required: true,
									placeholder: "Your name"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "grid gap-2 text-sm font-medium",
								children: ["Work email", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									required: true,
									type: "email",
									placeholder: "you@organization.com"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "grid gap-2 text-sm font-medium",
							children: ["Organization", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { placeholder: "Team or organization" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "grid gap-2 text-sm font-medium",
							children: ["I’m interested in", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								className: "h-9 rounded-md border border-input bg-background px-3 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Run analytics" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Athlete performance" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Organization dashboard" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Community engagement" })
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "grid gap-2 text-sm font-medium",
							children: ["Message", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								required: true,
								className: "min-h-32",
								placeholder: "Tell us what you want to understand or improve."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							size: "lg",
							children: "Send message"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Demo form only. No personal information is stored or transmitted."
						})
					]
				})
			})]
		})
	})] });
}
//#endregion
export { Contact as component };
