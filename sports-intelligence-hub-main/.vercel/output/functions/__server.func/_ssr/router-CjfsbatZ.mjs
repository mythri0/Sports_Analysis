import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { A as HeartPulse, B as Compass, C as Medal, D as LogIn, G as ChevronRight, I as FileSpreadsheet, J as ChartNoAxesColumn, K as ChevronDown, M as Gauge, N as Footprints, O as LayoutDashboard, P as Flame, Q as BrainCircuit, R as Database, S as Menu, U as CircleCheck, V as Clock3, Z as CalendarCheck, _ as Radio, a as Users, b as Milestone, c as TrendingUp, d as Shuffle, f as Shield, g as RotateCcw, i as Video, j as Goal, l as Target, m as Share2, n as X, nt as ArrowRight, o as Trophy, p as ShieldAlert, r as Waves, rt as Activity, s as TriangleAlert, t as Zap, tt as ArrowUpRight, u as Sparkles, w as Map, z as Crosshair } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay$1, c as DialogTrigger$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { a as InsightCard, c as PageIntro, d as Workflow, f as cn, l as SectionHead, n as BarChartCard, o as LineChartCard, r as DemoBadge, s as MetricCard, t as AreaChartCard, u as Segmented } from "./sports-ui-mspXUiuG.mjs";
import { a as recommendations, i as progression, n as insights, o as runTrend, r as leaderboard, s as weekly, t as athletes } from "./sports-data-0K1P3zKO.mjs";
import { t as Button } from "./button-DnlbRvtw.mjs";
import { t as Input } from "./input-CVsL8r7Y.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CjfsbatZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-B9JpDY9n.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var Dialog = Dialog$1;
var DialogTrigger = DialogTrigger$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
function Brand() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		className: "flex shrink-0 items-center gap-2.5 group",
		"aria-label": "SportsMax home",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground shadow-sm transition-transform group-hover:scale-105",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "h-5 w-5" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "font-display text-lg font-bold tracking-tight text-foreground",
				children: ["SPORTS", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-primary font-black",
					children: "MAX"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[10px] font-semibold uppercase tracking-widest text-muted-foreground -mt-1 hidden sm:block",
				children: "Intelligence Hub"
			})]
		})]
	});
}
function AuthDialog({ children }) {
	const [mode, setMode] = (0, import_react.useState)("login");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
		asChild: true,
		children
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
		className: "border-border bg-card shadow-2xl sm:max-w-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "h-6 w-6" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
				className: "text-center text-xl font-bold",
				children: mode === "login" ? "Welcome back to SportsMax" : "Create your SportsMax account"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
				className: "text-center text-sm text-muted-foreground",
				children: mode === "login" ? "Access athlete telemetry, tactical analytics, and AI training models." : "Start your 14-day free intelligence trial for athletes and coaching staffs."
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 pt-2",
			children: [
				mode === "signup" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "grid gap-1.5 text-xs font-semibold text-foreground",
					children: ["Full Name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						placeholder: "Alex Jordan",
						className: "bg-background"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "grid gap-1.5 text-xs font-semibold text-foreground",
					children: ["Email address", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "email",
						placeholder: "athlete@sportsmax.ai",
						className: "bg-background"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "grid gap-1.5 text-xs font-semibold text-foreground",
					children: ["Password", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "password",
						placeholder: "••••••••",
						className: "bg-background"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "button",
					className: "w-full mt-2 font-semibold",
					children: [mode === "login" ? "Sign in to Dashboard" : "Create Free Account", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4 ml-1" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-center mt-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "text-xs text-muted-foreground hover:text-primary transition underline underline-offset-4",
						onClick: () => setMode(mode === "login" ? "signup" : "login"),
						children: mode === "login" ? "Don't have an account? Sign up free" : "Already registered? Log in here"
					})
				})
			]
		})]
	})] });
}
function SiteHeader() {
	const [mobileOpen, setMobileOpen] = (0, import_react.useState)(false);
	const [sportsHover, setSportsHover] = (0, import_react.useState)(false);
	const [platformHover, setPlatformHover] = (0, import_react.useState)(false);
	const [analyticsHover, setAnalyticsHover] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur-md shadow-xs",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "content-wrap flex h-18 items-center justify-between gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brand, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden xl:flex items-center gap-1",
					"aria-label": "Main navigation",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							onMouseEnter: () => setSportsHover(true),
							onMouseLeave: () => setSportsHover(false),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/sports",
								className: "inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-xs font-bold uppercase tracking-wider text-foreground hover:bg-secondary transition",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1 text-primary",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "h-4 w-4 fill-primary/20 text-primary" }), "Sports"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded bg-primary/15 px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-primary",
										children: "New"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3.5 w-3.5 text-muted-foreground" })
								]
							}), sportsHover && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute left-0 top-full mt-1 w-[780px] rounded-xl border border-border bg-card p-6 shadow-2xl animate-in fade-in-50 zoom-in-95 duration-150 z-50",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-3 gap-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between border-b border-border/70 pb-2 mb-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-bold uppercase tracking-wider text-foreground",
												children: "Individual Sports"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: "/sports",
												className: "text-[11px] font-semibold text-primary hover:underline",
												onClick: () => setSportsHover(false),
												children: "All"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
											className: "grid gap-1 text-xs",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
													to: "/sports/running",
													onClick: () => setSportsHover(false),
													className: "flex items-center justify-between rounded-md p-2 hover:bg-secondary text-foreground group",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center gap-2",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-semibold group-hover:text-primary",
															children: "Running"
														})]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[10px] text-muted-foreground",
														children: "GPS & Pace"
													})]
												}) }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
													to: "/sports/swimming",
													onClick: () => setSportsHover(false),
													className: "flex items-center justify-between rounded-md p-2 hover:bg-secondary text-foreground group",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center gap-2",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Waves, { className: "h-3.5 w-3.5 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-semibold group-hover:text-primary",
															children: "Swimming"
														})]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[10px] text-muted-foreground",
														children: "SWOLF & Turns"
													})]
												}) }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
													to: "/sports/athletics/high-jump",
													onClick: () => setSportsHover(false),
													className: "flex items-center justify-between rounded-md p-2 hover:bg-secondary text-foreground group",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center gap-2",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "h-3.5 w-3.5 text-chart-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-semibold group-hover:text-primary",
															children: "High Jump"
														})]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[10px] text-muted-foreground",
														children: "Takeoff & Angle"
													})]
												}) }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
													to: "/sports/athletics/high-jump",
													onClick: () => setSportsHover(false),
													className: "flex items-center justify-between rounded-md p-2 hover:bg-secondary text-muted-foreground hover:text-foreground",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Sprints (100m–400m)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[10px]",
														children: "Acceleration"
													})]
												}) }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
													to: "/sports/running",
													onClick: () => setSportsHover(false),
													className: "flex items-center justify-between rounded-md p-2 hover:bg-secondary text-muted-foreground hover:text-foreground",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Distance & Marathon" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[10px]",
														children: "Endurance"
													})]
												}) }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
													to: "/sports/running",
													onClick: () => setSportsHover(false),
													className: "flex items-center justify-between rounded-md p-2 hover:bg-secondary text-muted-foreground hover:text-foreground",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Cycling" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[10px]",
														children: "Watts / FTP"
													})]
												}) }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
													to: "/sports",
													onClick: () => setSportsHover(false),
													className: "flex items-center justify-between rounded-md p-2 hover:bg-secondary text-muted-foreground hover:text-foreground",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Tennis, Golf & Combat" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[10px]",
														children: "More →"
													})]
												}) })
											]
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between border-b border-border/70 pb-2 mb-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-bold uppercase tracking-wider text-foreground",
												children: "Team Sports"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: "/sports",
												className: "text-[11px] font-semibold text-primary hover:underline",
												onClick: () => setSportsHover(false),
												children: "All"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
											className: "grid gap-1 text-xs",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
													to: "/sports/football",
													onClick: () => setSportsHover(false),
													className: "flex items-center justify-between rounded-md p-2 hover:bg-secondary text-foreground group",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center gap-2",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Goal, { className: "h-3.5 w-3.5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-semibold group-hover:text-primary",
															children: "Football / Soccer"
														})]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[10px] text-muted-foreground",
														children: "xG & Press"
													})]
												}) }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
													to: "/sports/hockey",
													onClick: () => setSportsHover(false),
													className: "flex items-center justify-between rounded-md p-2 hover:bg-secondary text-foreground group",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center gap-2",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "h-3.5 w-3.5 text-chart-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-semibold group-hover:text-primary",
															children: "Hockey"
														})]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[10px] text-muted-foreground",
														children: "Shifts & Corsi"
													})]
												}) }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
													to: "/sports/relay",
													onClick: () => setSportsHover(false),
													className: "flex items-center justify-between rounded-md p-2 hover:bg-secondary text-foreground group",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center gap-2",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Milestone, { className: "h-3.5 w-3.5 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-semibold group-hover:text-primary",
															children: "Relay & Combined"
														})]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[10px] text-muted-foreground",
														children: "Transfer Box"
													})]
												}) }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
													to: "/sports/football",
													onClick: () => setSportsHover(false),
													className: "flex items-center justify-between rounded-md p-2 hover:bg-secondary text-muted-foreground hover:text-foreground",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Basketball" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[10px]",
														children: "True Shooting"
													})]
												}) }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
													to: "/sports/relay",
													onClick: () => setSportsHover(false),
													className: "flex items-center justify-between rounded-md p-2 hover:bg-secondary text-muted-foreground hover:text-foreground",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Volleyball" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[10px]",
														children: "Spike Reach"
													})]
												}) }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
													to: "/sports/football",
													onClick: () => setSportsHover(false),
													className: "flex items-center justify-between rounded-md p-2 hover:bg-secondary text-muted-foreground hover:text-foreground",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Cricket & Rugby" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[10px]",
														children: "Telemetry"
													})]
												}) })
											]
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "bg-secondary/40 rounded-lg p-3.5 border border-border/60",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xs font-bold uppercase tracking-wider text-foreground block mb-2",
													children: "Game Analysis"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
													className: "grid gap-1.5 text-xs",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
															to: "/sports/game-analysis",
															onClick: () => setSportsHover(false),
															className: "font-medium text-foreground hover:text-primary block",
															children: "Match Dashboard"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-[10px] text-muted-foreground",
															children: "Live telemetry"
														})] }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
															to: "/sports/game-analysis",
															onClick: () => setSportsHover(false),
															className: "font-medium text-foreground hover:text-primary block",
															children: "Tactical Insights"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-[10px] text-muted-foreground",
															children: "AI formation detection"
														})] }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
															to: "/sports/game-analysis",
															onClick: () => setSportsHover(false),
															className: "font-medium text-foreground hover:text-primary block",
															children: "Player & Team Comparison"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-[10px] text-muted-foreground",
															children: "Radar matrices"
														})] }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
															to: "/sports/game-analysis",
															onClick: () => setSportsHover(false),
															className: "font-medium text-foreground hover:text-primary block",
															children: "Event Detection & Reports"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-[10px] text-muted-foreground",
															children: "Automated tags"
														})] })
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "mt-4 pt-3 border-t border-border",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
														to: "/sports",
														onClick: () => setSportsHover(false),
														className: "inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline",
														children: ["All Sports Directory ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
													})
												})
											]
										})
									]
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							onMouseEnter: () => setPlatformHover(true),
							onMouseLeave: () => setPlatformHover(false),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/platform",
								className: "inline-flex items-center gap-1 rounded-md px-3 py-2 text-xs font-semibold text-foreground hover:bg-secondary transition",
								children: ["Platform", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3.5 w-3.5 text-muted-foreground" })]
							}), platformHover && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute left-0 top-full mt-1 w-64 rounded-xl border border-border bg-card p-3 shadow-2xl animate-in fade-in-50 zoom-in-95 duration-150 z-50",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/platform",
										onClick: () => setPlatformHover(false),
										className: "block rounded-md p-2.5 hover:bg-secondary transition",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-semibold text-xs text-foreground",
											children: "Overview"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[11px] text-muted-foreground",
											children: "The architecture of SportsMax"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/platform",
										onClick: () => setPlatformHover(false),
										className: "block rounded-md p-2.5 hover:bg-secondary transition",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-semibold text-xs text-foreground",
											children: "How It Works"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[11px] text-muted-foreground",
											children: "Data capture, AI models & feedback"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/platform",
										onClick: () => setPlatformHover(false),
										className: "block rounded-md p-2.5 hover:bg-secondary transition",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-semibold text-xs text-foreground",
											children: "Technology"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[11px] text-muted-foreground",
											children: "Kinematics, computer vision & ML"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/platform",
										onClick: () => setPlatformHover(false),
										className: "block rounded-md p-2.5 hover:bg-secondary transition",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-semibold text-xs text-foreground",
											children: "Integrations"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[11px] text-muted-foreground",
											children: "Garmin, Polar, Catapult & APIs"
										})]
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							onMouseEnter: () => setAnalyticsHover(true),
							onMouseLeave: () => setAnalyticsHover(false),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/analytics",
								className: "inline-flex items-center gap-1 rounded-md px-3 py-2 text-xs font-semibold text-foreground hover:bg-secondary transition",
								children: ["Analytics", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3.5 w-3.5 text-muted-foreground" })]
							}), analyticsHover && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute left-0 top-full mt-1 w-68 rounded-xl border border-border bg-card p-3 shadow-2xl animate-in fade-in-50 zoom-in-95 duration-150 z-50",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/analytics",
										onClick: () => setAnalyticsHover(false),
										className: "block rounded-md p-2.5 hover:bg-secondary transition",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-semibold text-xs text-foreground",
											children: "Performance Insights"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[11px] text-muted-foreground",
											children: "Session deep-dives & telemetry"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/analytics",
										onClick: () => setAnalyticsHover(false),
										className: "block rounded-md p-2.5 hover:bg-secondary transition",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-semibold text-xs text-foreground",
											children: "Training Load & Recovery"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[11px] text-muted-foreground",
											children: "Acute vs. Chronic load ratios"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/analytics",
										onClick: () => setAnalyticsHover(false),
										className: "block rounded-md p-2.5 hover:bg-secondary transition",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-semibold text-xs text-foreground",
											children: "Comparative Analytics"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[11px] text-muted-foreground",
											children: "Benchmark against cohorts"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/analytics",
										onClick: () => setAnalyticsHover(false),
										className: "block rounded-md p-2.5 hover:bg-secondary transition",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-semibold text-xs text-foreground",
											children: "Trend & Pattern Detection"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[11px] text-muted-foreground",
											children: "Macrocycle tracking"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/analytics",
										onClick: () => setAnalyticsHover(false),
										className: "block rounded-md p-2.5 hover:bg-secondary transition",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "font-semibold text-xs text-primary flex items-center gap-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), " AI Recommendations"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[11px] text-muted-foreground",
											children: "Automated coaching cues"
										})]
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/athletes",
							className: "rounded-md px-3 py-2 text-xs font-semibold text-foreground hover:bg-secondary transition",
							children: "Athletes"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/coaches",
							className: "rounded-md px-3 py-2 text-xs font-semibold text-foreground hover:bg-secondary transition",
							children: "Coaches & Teams"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/ecosystem",
							className: "rounded-md px-3 py-2 text-xs font-semibold text-foreground hover:bg-secondary transition",
							children: "Ecosystem"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/pricing",
							className: "rounded-md px-3 py-2 text-xs font-semibold text-foreground hover:bg-secondary transition",
							children: "Pricing"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/resources",
							className: "rounded-md px-3 py-2 text-xs font-semibold text-foreground hover:bg-secondary transition",
							children: "Resources"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden xl:flex items-center gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthDialog, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "ghost",
						size: "sm",
						className: "font-semibold text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogIn, { className: "h-4 w-4 mr-1 text-muted-foreground" }), "Log in"]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "sm",
						className: "font-semibold text-xs shadow-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/sports",
							children: ["Explore Sports ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5 ml-1" })]
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					"aria-label": "Open mobile menu",
					variant: "outline",
					size: "icon",
					className: "xl:hidden bg-background",
					onClick: () => setMobileOpen(!mobileOpen),
					children: mobileOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
				})
			]
		}), mobileOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border bg-card/98 backdrop-blur-xl p-5 xl:hidden max-h-[85vh] overflow-y-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg bg-primary/10 p-3 border border-primary/20",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between mb-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-bold uppercase tracking-wider text-primary",
									children: "Primary Sports Hub"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded bg-primary text-primary-foreground px-1.5 py-0.5 text-[9px] font-black uppercase",
									children: "New"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground mb-3",
								children: "Individual sports, team leagues, and match analysis."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-2 text-xs",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/sports/running",
										onClick: () => setMobileOpen(false),
										className: "rounded bg-background p-2 font-medium hover:text-primary shadow-xs",
										children: "🏃 Running"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/sports/swimming",
										onClick: () => setMobileOpen(false),
										className: "rounded bg-background p-2 font-medium hover:text-primary shadow-xs",
										children: "🏊 Swimming"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/sports/athletics/high-jump",
										onClick: () => setMobileOpen(false),
										className: "rounded bg-background p-2 font-medium hover:text-primary shadow-xs",
										children: "👟 High Jump"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/sports/football",
										onClick: () => setMobileOpen(false),
										className: "rounded bg-background p-2 font-medium hover:text-primary shadow-xs",
										children: "⚽ Football / Soccer"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/sports/hockey",
										onClick: () => setMobileOpen(false),
										className: "rounded bg-background p-2 font-medium hover:text-primary shadow-xs",
										children: "🏒 Hockey"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/sports/relay",
										onClick: () => setMobileOpen(false),
										className: "rounded bg-background p-2 font-medium hover:text-primary shadow-xs",
										children: "🔄 Relay Events"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/sports/game-analysis",
										onClick: () => setMobileOpen(false),
										className: "col-span-2 rounded bg-background p-2 font-medium hover:text-primary shadow-xs text-center",
										children: "📊 Game Analysis Suite"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/sports",
										onClick: () => setMobileOpen(false),
										className: "col-span-2 text-center text-xs font-bold text-primary py-1",
										children: "View All Sports Directory →"
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-1 border-t border-border pt-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] font-bold uppercase tracking-wider text-muted-foreground px-2",
								children: "Main Sections"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/platform",
								onClick: () => setMobileOpen(false),
								className: "rounded-md px-3 py-2 text-sm font-semibold hover:bg-secondary",
								children: "Platform Architecture"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/analytics",
								onClick: () => setMobileOpen(false),
								className: "rounded-md px-3 py-2 text-sm font-semibold hover:bg-secondary",
								children: "Analytics & Insights"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/athletes",
								onClick: () => setMobileOpen(false),
								className: "rounded-md px-3 py-2 text-sm font-semibold hover:bg-secondary",
								children: "Athlete Profiles & Bests"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/coaches",
								onClick: () => setMobileOpen(false),
								className: "rounded-md px-3 py-2 text-sm font-semibold hover:bg-secondary",
								children: "Coaches & Teams"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/ecosystem",
								onClick: () => setMobileOpen(false),
								className: "rounded-md px-3 py-2 text-sm font-semibold hover:bg-secondary",
								children: "Sports Ecosystem"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/pricing",
								onClick: () => setMobileOpen(false),
								className: "rounded-md px-3 py-2 text-sm font-semibold hover:bg-secondary",
								children: "Pricing Plans"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/resources",
								onClick: () => setMobileOpen(false),
								className: "rounded-md px-3 py-2 text-sm font-semibold hover:bg-secondary",
								children: "Resources & Documentation"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/about",
								onClick: () => setMobileOpen(false),
								className: "rounded-md px-3 py-2 text-sm font-semibold hover:bg-secondary",
								children: "About Company & Mission"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 grid grid-cols-2 gap-2 pt-2 border-t border-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthDialog, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							className: "w-full",
							children: "Log in"
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							className: "w-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/sports",
								onClick: () => setMobileOpen(false),
								children: "Get started"
							})
						})]
					})
				]
			})
		})]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border bg-card text-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "content-wrap py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sm:col-span-2 lg:col-span-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brand, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-sm text-sm leading-6 text-muted-foreground",
								children: "Sports intelligence, biomechanical modeling, automated tactical detection, and team load management in one unified platform."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex flex-wrap gap-2 text-xs",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full bg-secondary border border-border px-3 py-1 font-medium text-foreground",
										children: "24+ Sports"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full bg-secondary border border-border px-3 py-1 font-medium text-foreground",
										children: "Real-Time Telemetry"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full bg-secondary border border-border px-3 py-1 font-medium text-foreground",
										children: "AI Diagnostics"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-8 text-xs text-muted-foreground",
								children: "© 2026 SportsMax Technologies Inc. All rights reserved."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xs font-bold uppercase tracking-wider text-foreground",
						children: "Platform"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 grid gap-2.5 text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/platform",
								className: "hover:text-primary transition",
								children: "Overview"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/platform",
								className: "hover:text-primary transition",
								children: "How It Works"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/platform",
								className: "hover:text-primary transition",
								children: "Technology"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/platform",
								className: "hover:text-primary transition",
								children: "Integrations"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/pricing",
								className: "hover:text-primary transition",
								children: "Pricing & Plans"
							}) })
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Sports Hub" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded bg-primary/15 px-1 py-0.2 text-[8px] font-black uppercase text-primary",
							children: "New"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 grid gap-2.5 text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/sports/running",
								className: "hover:text-primary transition font-medium",
								children: "Running (GPS & Pace)"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/sports/swimming",
								className: "hover:text-primary transition",
								children: "Swimming (SWOLF)"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/sports/athletics/high-jump",
								className: "hover:text-primary transition",
								children: "High Jump & Track"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/sports/football",
								className: "hover:text-primary transition",
								children: "Football / Soccer (xG)"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/sports/hockey",
								className: "hover:text-primary transition",
								children: "Hockey & Ice Sports"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/sports/relay",
								className: "hover:text-primary transition",
								children: "Relay & Combined"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/sports/game-analysis",
								className: "hover:text-primary transition",
								children: "Game Analysis Suite"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/sports",
								className: "font-bold text-primary hover:underline transition pt-1 block",
								children: "All Sports Directory →"
							}) })
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xs font-bold uppercase tracking-wider text-foreground",
						children: "Intelligence"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 grid gap-2.5 text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/analytics",
								className: "hover:text-primary transition",
								children: "Performance Insights"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/analytics",
								className: "hover:text-primary transition",
								children: "Load & Recovery"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/analytics",
								className: "hover:text-primary transition",
								children: "AI Recommendations"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/athletes",
								className: "hover:text-primary transition",
								children: "Athletes Dashboard"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/coaches",
								className: "hover:text-primary transition",
								children: "Coaches & Teams"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/ecosystem",
								className: "hover:text-primary transition",
								children: "Sports Ecosystem"
							}) })
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xs font-bold uppercase tracking-wider text-foreground",
						children: "Company & Legal"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 grid gap-2.5 text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/about",
								className: "hover:text-primary transition",
								children: "Company & Team"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/careers",
								className: "hover:text-primary transition",
								children: "Careers"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/resources",
								className: "hover:text-primary transition",
								children: "API & Docs"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/help",
								className: "hover:text-primary transition",
								children: "Help Center"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "hover:text-primary transition",
								children: "Contact"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/privacy",
								className: "hover:text-primary transition",
								children: "Privacy Policy"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/terms",
								className: "hover:text-primary transition",
								children: "Terms of Service"
							}) })
						]
					})] })
				]
			})
		})
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$28 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{
				name: "author",
				content: "SportsMax"
			},
			{
				property: "og:site_name",
				content: "SportsMax"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.png",
				type: "image/png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$28.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
var $$splitComponentImporter$13 = () => import("./routes-BN89tsAO.mjs");
var Route$27 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "SportsMax — Sports Analytics & Performance Intelligence" },
			{
				name: "description",
				content: "Turn athlete telemetry, match tracking, and tactical video into performance intelligence across 24+ individual and team sports."
			},
			{
				property: "og:title",
				content: "SportsMax — Performance Intelligence"
			},
			{
				property: "og:description",
				content: "Sports data, analytics, intelligence, automation, and engagement in one platform."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./about-BuiCODVW.mjs");
var Route$26 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "About SportsMax — Making Sports Data Meaningful" },
			{
				name: "description",
				content: "Learn how SportsMax combines athlete data, analytics, dashboards, and automation into actionable intelligence."
			},
			{
				property: "og:title",
				content: "About SportsMax"
			},
			{
				property: "og:description",
				content: "Making sports data more meaningful for athletes, coaches, analysts, and communities."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/about"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var Route$25 = createFileRoute("/analytics")({
	head: () => ({ meta: [{ title: "Analytics & AI Intelligence — SportsMax" }, {
		name: "description",
		content: "Performance insights, acute-to-chronic training load, recovery readiness, comparative analytics, and automated AI recommendations."
	}] }),
	component: AnalyticsSuitePage
});
function AnalyticsSuitePage() {
	const [activeTab, setActiveTab] = (0, import_react.useState)("performance");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		eyebrow: "Analytics Suite",
		title: "Comprehensive Performance Analytics & Machine Learning",
		text: "Turn millions of data points across sessions into clear diagnostic trends, acute-to-chronic load monitoring, and prescriptive coaching cues.",
		action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-end gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoBadge, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-1 bg-secondary p-1 rounded-lg border border-border",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setActiveTab("performance"),
						className: `px-3 py-1.5 rounded text-xs font-bold transition ${activeTab === "performance" ? "bg-primary text-primary-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"}`,
						children: "Performance Insights"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setActiveTab("load-recovery"),
						className: `px-3 py-1.5 rounded text-xs font-bold transition ${activeTab === "load-recovery" ? "bg-primary text-primary-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"}`,
						children: "Training Load & Recovery"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setActiveTab("comparative"),
						className: `px-3 py-1.5 rounded text-xs font-bold transition ${activeTab === "comparative" ? "bg-primary text-primary-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"}`,
						children: "Comparative Analytics"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setActiveTab("trends"),
						className: `px-3 py-1.5 rounded text-xs font-bold transition ${activeTab === "trends" ? "bg-primary text-primary-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"}`,
						children: "Trend Detection"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setActiveTab("ai-recs"),
						className: `px-3 py-1.5 rounded text-xs font-bold transition ${activeTab === "ai-recs" ? "bg-primary text-primary-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"}`,
						children: "AI Recommendations"
					})
				]
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-12 bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "content-wrap",
			children: [
				activeTab === "performance" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
						eyebrow: "Diagnostic Signals",
						title: "Automated Performance Insights",
						text: "Generated continuously by scanning pace efficiency, cardiac drift, and volume markers."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
						children: insights.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InsightCard, { ...item }, item.title))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 grid gap-6 lg:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LineChartCard, {
							title: "Pace vs Heart Rate Efficiency",
							data: runTrend,
							keys: ["pace", "heart"],
							unit: ""
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AreaChartCard, {
							title: "Progression Index (6 Months)",
							data: progression
						})]
					})
				] }),
				activeTab === "load-recovery" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
						eyebrow: "Biometrics & Load",
						title: "Acute-to-Chronic Workload Ratio (ACWR)",
						text: "Keep athletes in the sweet spot (0.8 - 1.3 ACWR) to optimize adaptation while preventing soft-tissue injury spikes."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
								label: "Acute Workload (7 Days)",
								value: "524 AU",
								note: "Optimal training stimulus",
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "h-4 w-4 text-primary" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
								label: "Chronic Workload (28 Days)",
								value: "480 AU",
								note: "Established fitness base",
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "h-4 w-4 text-accent" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
								label: "ACWR Index",
								value: "1.09",
								note: "Sweet spot (0.8 - 1.3)",
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-4 w-4 text-chart-1" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
								label: "Recovery Readiness",
								value: "92 / 100",
								note: "HRV: 68ms · Fully primed",
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartPulse, { className: "h-4 w-4 text-primary" })
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 surface-card p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-bold text-base mb-2",
								children: "Training Load Distribution (Sweet Spot Range)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground mb-4",
								children: "The green corridor indicates the optimal workload window. Recent sessions remain safely within the safe adaptation tier."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-48 w-full bg-secondary/40 rounded-lg border border-border p-4 flex items-center justify-center text-xs text-muted-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono font-bold text-primary text-sm",
									children: "Current ACWR: 1.09 (Safe & Progressive) · 0 Overload Warnings Detected"
								})
							})
						]
					})
				] }),
				activeTab === "comparative" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					eyebrow: "Cohort Benchmarks",
					title: "Comparative Cohort Analytics",
					text: "Benchmark against top 10% age-group and division peers across pace, volume, and recovery."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "surface-card overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full text-left text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "bg-secondary/70 text-muted-foreground font-semibold uppercase tracking-wider",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-6 py-3.5",
									children: "Metric"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-6 py-3.5",
									children: "Athlete Score"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-6 py-3.5",
									children: "Cohort Median"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-6 py-3.5",
									children: "Top 10% Elite Tier"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-6 py-3.5",
									children: "Percentile"
								})
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", {
							className: "divide-y divide-border",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "hover:bg-secondary/30 transition",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-3.5 font-bold",
											children: "10K Race Pace"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-3.5 font-mono text-primary font-bold",
											children: "4:58 /km"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-3.5 font-mono text-muted-foreground",
											children: "5:45 /km"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-3.5 font-mono text-foreground",
											children: "4:40 /km"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-3.5 font-bold text-primary",
											children: "88th Percentile"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "hover:bg-secondary/30 transition",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-3.5 font-bold",
											children: "Monthly Mileage"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-3.5 font-mono text-primary font-bold",
											children: "124 km"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-3.5 font-mono text-muted-foreground",
											children: "85 km"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-3.5 font-mono text-foreground",
											children: "140 km"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-3.5 font-bold text-primary",
											children: "91st Percentile"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "hover:bg-secondary/30 transition",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-3.5 font-bold",
											children: "Weekly Consistency"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-3.5 font-mono text-primary font-bold",
											children: "94%"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-3.5 font-mono text-muted-foreground",
											children: "72%"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-3.5 font-mono text-foreground",
											children: "92%"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-3.5 font-bold text-primary",
											children: "95th Percentile"
										})
									]
								})
							]
						})]
					})
				})] }),
				activeTab === "trends" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					eyebrow: "Macrocycle Tracking",
					title: "Trend & Pattern Detection",
					text: "Longitudinal analysis identifying micro-adaptations over 12 and 24-week blocks."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-6 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LineChartCard, {
						title: "Pace Adaptation vs Cardiac Load",
						data: runTrend,
						keys: ["pace", "heart"],
						unit: ""
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BarChartCard, {
						title: "Weekly Training Volume (km)",
						data: weekly
					})]
				})] }),
				activeTab === "ai-recs" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					eyebrow: "Prescriptive Cues",
					title: "AI Training Recommendations",
					text: "Automated microcycle adjustments formulated by SportsMax AI models."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 md:grid-cols-3",
					children: recommendations.map((rec) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-card p-6 flex flex-col justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono text-xs font-bold text-primary",
									children: ["Cue #", rec.number]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded bg-primary/10 text-primary px-2 py-0.5 text-[10px] font-bold uppercase",
									children: rec.priority
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 text-lg font-bold text-foreground",
								children: rec.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs text-muted-foreground leading-relaxed",
								children: rec.detail
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 pt-4 border-t border-border flex items-center justify-between text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground font-mono",
								children: rec.evidence
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary font-bold",
								children: "Apply cue →"
							})]
						})]
					}, rec.number))
				})] })
			]
		})
	})] });
}
var $$splitComponentImporter$11 = () => import("./athlete-performance-BoVdvLvC.mjs");
var Route$24 = createFileRoute("/athlete-performance")({
	head: () => ({
		meta: [
			{ title: "Athlete Performance — SportsMax" },
			{
				name: "description",
				content: "Explore a demo athlete profile with progress, consistency, pace, distance, and heart-rate performance trends."
			},
			{
				property: "og:title",
				content: "Athlete Performance — SportsMax"
			},
			{
				property: "og:description",
				content: "Understand an athlete's complete performance story."
			},
			{
				property: "og:type",
				content: "profile"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/athlete-performance"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var Route$23 = createFileRoute("/athletes")({
	head: () => ({ meta: [{ title: "Athletes Hub & Personal Intelligence — SportsMax" }, {
		name: "description",
		content: "Athlete dashboard, detailed biometric profiles, goals and progress tracking, consistency streaks, and verified personal bests."
	}] }),
	component: AthletesPage
});
var personalBests = [
	{
		event: "5K Road",
		mark: "20:45",
		date: "Aug 14, 2026",
		progress: "-42s"
	},
	{
		event: "10K Road",
		mark: "44:12",
		date: "Sep 18, 2026",
		progress: "-1m 18s"
	},
	{
		event: "Half Marathon",
		mark: "1:38:20",
		date: "Jul 02, 2026",
		progress: "-3m 05s"
	},
	{
		event: "100m Freestyle (Swim)",
		mark: "1:02.4",
		date: "Jun 12, 2026",
		progress: "-0.8s"
	},
	{
		event: "High Jump",
		mark: "2.28 m",
		date: "Sep 22, 2026",
		progress: "+4 cm"
	}
];
function AthletesPage() {
	const [activeTab, setActiveTab] = (0, import_react.useState)("dashboard");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		eyebrow: "Athletes Section",
		title: "Athlete Intelligence & Development",
		text: "A dedicated athlete cockpit. Track performance scores, personal records, goal adherence, and training consistency with automated biometric feedback.",
		action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-end gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoBadge, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-1 bg-secondary p-1 rounded-lg border border-border",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setActiveTab("dashboard"),
						className: `px-3 py-1.5 rounded text-xs font-bold transition ${activeTab === "dashboard" ? "bg-primary text-primary-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"}`,
						children: "Dashboard"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setActiveTab("profiles"),
						className: `px-3 py-1.5 rounded text-xs font-bold transition ${activeTab === "profiles" ? "bg-primary text-primary-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"}`,
						children: "Profiles"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setActiveTab("goals"),
						className: `px-3 py-1.5 rounded text-xs font-bold transition ${activeTab === "goals" ? "bg-primary text-primary-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"}`,
						children: "Goals & Progress"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setActiveTab("consistency"),
						className: `px-3 py-1.5 rounded text-xs font-bold transition ${activeTab === "consistency" ? "bg-primary text-primary-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"}`,
						children: "Consistency"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setActiveTab("bests"),
						className: `px-3 py-1.5 rounded text-xs font-bold transition ${activeTab === "bests" ? "bg-primary text-primary-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"}`,
						children: "Personal Bests"
					})
				]
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-12 bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "content-wrap",
			children: [
				activeTab === "dashboard" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "surface-card grid gap-6 p-6 md:grid-cols-[auto_1fr_auto] md:items-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-20 w-20 place-items-center rounded-full bg-primary text-2xl font-bold text-primary-foreground shadow-md",
									children: "AR"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-2xl font-semibold",
										children: "Aisha Raman"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-xs font-bold text-primary",
										children: "Track & Road Runner"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: "SportsMax Athletics Club · Active Goal: Sub-44 minute 10K road race"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-6 text-right",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-2xl font-bold font-mono text-foreground",
										children: "148"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "Logged sessions"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-2xl font-bold font-mono text-foreground",
										children: "1,024 km"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "Season distance"
									})] })]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
									label: "Performance Score",
									value: "88 / 100",
									note: "Top 8% cohort",
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gauge, { className: "h-4 w-4 text-primary" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
									label: "Weekly Volume",
									value: "38.4 km",
									note: "4 sessions completed",
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Target, { className: "h-4 w-4 text-accent" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
									label: "Avg Pace",
									value: "4:58 /km",
									note: "-12s vs last cycle",
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "h-4 w-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
									label: "Personal Best",
									value: "44:12",
									note: "10K · Sep 18",
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "h-4 w-4 text-chart-3" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
									label: "Consistency Streak",
									value: "91%",
									note: "12 weeks unbroken",
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarCheck, { className: "h-4 w-4 text-chart-1" })
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-6 lg:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LineChartCard, {
								title: "Pace Trajectory",
								data: runTrend,
								keys: ["pace"],
								unit: " /km"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BarChartCard, {
								title: "Weekly Mileage Consistency",
								data: weekly
							})]
						})
					]
				}),
				activeTab === "profiles" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					eyebrow: "Roster & Profiles",
					title: "Monitored Athlete Profiles",
					text: "Athletic metrics, current paces, and progression across individual sports."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
					children: athletes.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-card p-6 flex flex-col justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-primary font-bold text-sm",
								children: a.initials
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-bold text-base text-foreground",
								children: a.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs text-muted-foreground",
								children: [a.sessions, " sessions"]
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 grid grid-cols-2 gap-3 text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded bg-secondary p-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground block",
									children: "Distance"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold font-mono text-foreground text-sm",
									children: a.distance
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded bg-secondary p-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground block",
									children: "Avg Pace"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold font-mono text-foreground text-sm",
									children: a.pace
								})]
							})]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 pt-4 border-t border-border flex items-center justify-between text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "Progression"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-bold text-primary",
								children: a.progress
							})]
						})]
					}, a.name))
				})] }),
				activeTab === "goals" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
							eyebrow: "Milestones",
							title: "Active Training Goals",
							text: "Structured microcycle and macrocycle performance milestones."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "surface-card p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between items-center mb-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-bold text-sm",
										children: "Sub-44 Minute 10K Target"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-xs font-bold text-primary",
										children: "82% Completed"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-3 w-full bg-secondary rounded-full overflow-hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-full bg-primary rounded-full",
										style: { width: "82%" }
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-xs text-muted-foreground",
									children: "Current benchmark: 44:12 (-12s needed). Predicted achievement window: Next competitive race in 3 weeks."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "surface-card p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between items-center mb-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-bold text-sm",
										children: "Monthly 140km Mileage Volume"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-xs font-bold text-accent",
										children: "88% Completed"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-3 w-full bg-secondary rounded-full overflow-hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-full bg-accent rounded-full",
										style: { width: "88%" }
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-xs text-muted-foreground",
									children: "124 km logged of 140 km target with 7 days remaining in the training block."
								})
							]
						})
					]
				}),
				activeTab === "consistency" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
						eyebrow: "Routine Adherence",
						title: "Consistency Matrix & Training Streak",
						text: "Consistency is the strongest statistical predictor of long-term athletic durability and performance."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "surface-card p-6 mb-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-bold uppercase tracking-wider text-primary",
								children: "Active Streak"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-2xl font-bold mt-1",
								children: "21 Consecutive Training Days"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-primary/10 text-primary px-3 py-1 font-bold text-xs",
								children: "Level 4 Durability Badge"
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LineChartCard, {
						title: "6-Month Consistency Percentage",
						data: progression,
						keys: ["consistency"],
						unit: "%"
					})
				] }),
				activeTab === "bests" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "surface-card overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-b border-border p-6 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-bold",
							children: "Verified Personal Bests"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground mt-0.5",
							children: "Chronologically verified records"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							children: "Log New PB"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full text-left text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
								className: "bg-secondary/70 text-muted-foreground font-semibold uppercase tracking-wider",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-3.5",
										children: "Event / Discipline"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-3.5",
										children: "Mark / Time"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-3.5",
										children: "Date Achieved"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-3.5",
										children: "Improvement Delta"
									})
								] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
								className: "divide-y divide-border",
								children: personalBests.map((pb) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "hover:bg-secondary/30 transition",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
											className: "px-6 py-3.5 font-bold text-foreground flex items-center gap-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Medal, { className: "h-4 w-4 text-primary" }),
												" ",
												pb.event
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-3.5 font-mono text-base font-bold text-primary",
											children: pb.mark
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-3.5 text-muted-foreground",
											children: pb.date
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-3.5 font-semibold text-foreground",
											children: pb.progress
										})
									]
								}, pb.event))
							})]
						})
					})]
				})
			]
		})
	})] });
}
var $$splitComponentImporter$10 = () => import("./careers-kdd3HMuR.mjs");
var Route$22 = createFileRoute("/careers")({
	head: () => ({ meta: [{ title: "Careers — SportsMax Technologies" }] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var Route$21 = createFileRoute("/coaches")({
	head: () => ({ meta: [{ title: "Coaches & Teams Hub — SportsMax" }, {
		name: "description",
		content: "Team dashboard, roster management, squad load monitoring, athlete comparison, and injury risk prevention models."
	}] }),
	component: CoachesPage
});
var rosterMembers = [
	{
		name: "Aisha Raman",
		status: "Optimal",
		acwr: "1.08",
		weeklyLoad: "480 AU",
		injuryRisk: "Low (4%)",
		position: "Mid-distance"
	},
	{
		name: "Maya Chen",
		status: "Optimal",
		acwr: "1.12",
		weeklyLoad: "510 AU",
		injuryRisk: "Low (6%)",
		position: "Speed"
	},
	{
		name: "Leo Martins",
		status: "Warning: High Acute Spike",
		acwr: "1.42",
		weeklyLoad: "640 AU",
		injuryRisk: "Elevated (24%)",
		position: "Sprint / Relay"
	},
	{
		name: "Noah Williams",
		status: "Deloading",
		acwr: "0.82",
		weeklyLoad: "320 AU",
		injuryRisk: "Low (2%)",
		position: "Endurance"
	}
];
function CoachesPage() {
	const [activeTab, setActiveTab] = (0, import_react.useState)("team-dashboard");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		eyebrow: "Coaches & Teams Section",
		title: "Squad Intelligence & Load Governance",
		text: "A unified command center for coaches, physical performance directors, and athletic trainers. Monitor squad readiness, mitigate soft-tissue injury risk, and benchmark roster depth.",
		action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-end gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoBadge, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-1 bg-secondary p-1 rounded-lg border border-border",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setActiveTab("team-dashboard"),
						className: `px-3 py-1.5 rounded text-xs font-bold transition ${activeTab === "team-dashboard" ? "bg-primary text-primary-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"}`,
						children: "Team Dashboard"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setActiveTab("roster"),
						className: `px-3 py-1.5 rounded text-xs font-bold transition ${activeTab === "roster" ? "bg-primary text-primary-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"}`,
						children: "Roster Management"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setActiveTab("comparison"),
						className: `px-3 py-1.5 rounded text-xs font-bold transition ${activeTab === "comparison" ? "bg-primary text-primary-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"}`,
						children: "Athlete Comparison"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setActiveTab("load"),
						className: `px-3 py-1.5 rounded text-xs font-bold transition ${activeTab === "load" ? "bg-primary text-primary-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"}`,
						children: "Load Management"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setActiveTab("injury"),
						className: `px-3 py-1.5 rounded text-xs font-bold transition ${activeTab === "injury" ? "bg-primary text-primary-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"}`,
						children: "Injury Risk"
					})
				]
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-12 bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "content-wrap",
			children: [
				activeTab === "team-dashboard" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
								label: "Active Squad Size",
								value: "32 Athletes",
								note: "28 fully available",
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-4 w-4 text-primary" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
								label: "Team Readiness",
								value: "94.2%",
								note: "Optimal training state",
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "h-4 w-4 text-accent" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
								label: "Mean ACWR",
								value: "1.06",
								note: "Safe progression",
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
								label: "Elevated Risk Flag",
								value: "1 Athlete",
								note: "Requires load reduction",
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-4 w-4 text-chart-3" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
								label: "Weekly High-Speed",
								value: "142 km",
								note: "Squad sprint aggregate",
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "h-4 w-4 text-chart-1" })
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-6 lg:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BarChartCard, {
							title: "Squad Aggregate Weekly Mileage",
							subtitle: "Total volume distributed across all athletes",
							data: weekly
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "surface-card p-6 flex flex-col justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-bold uppercase tracking-wider text-primary",
									children: "Coaching Action Item"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-bold mt-1",
									children: "Microcycle Load Prescription"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs text-muted-foreground leading-relaxed",
									children: "Squad average acute load is up 8.4% over baseline. Recommendation: Maintain current volume for Thursday's tactical session and cap high-speed sprint distance at 800m per athlete."
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 pt-4 border-t border-border flex items-center justify-between text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "Generated by SportsMax AI"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									children: "Push Cues to Squad"
								})]
							})]
						})]
					})]
				}),
				activeTab === "roster" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "surface-card overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-b border-border p-6 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-bold",
							children: "Squad Roster & Availability Status"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground mt-0.5",
							children: "Real-time status based on morning biometrics"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							children: "Add Athlete"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full text-left text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
								className: "bg-secondary/70 text-muted-foreground font-semibold uppercase tracking-wider",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-3.5",
										children: "Athlete"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-3.5",
										children: "Discipline / Role"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-3.5",
										children: "ACWR"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-3.5",
										children: "Weekly Load"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-3.5",
										children: "Availability"
									})
								] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
								className: "divide-y divide-border",
								children: rosterMembers.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "hover:bg-secondary/30 transition",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-3.5 font-bold text-foreground",
											children: r.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-3.5 text-muted-foreground",
											children: r.position
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-3.5 font-mono font-bold text-foreground",
											children: r.acwr
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-3.5 font-mono text-foreground",
											children: r.weeklyLoad
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-3.5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `rounded px-2 py-0.5 text-[10px] font-bold ${r.status.includes("Warning") ? "bg-destructive/10 text-destructive" : "bg-primary/10 text-primary"}`,
												children: r.status
											})
										})
									]
								}, r.name))
							})]
						})
					})]
				}),
				activeTab === "comparison" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "surface-card p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-bold mb-2",
							children: "Squad Athlete Comparison Matrix"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground mb-6",
							children: "Evaluate two athletes simultaneously across physical output, recovery rates, and speed percentiles."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border border-border rounded-lg p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-bold text-primary",
										children: "Athlete 1"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "text-base font-bold mt-1",
										children: "Aisha Raman"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground mt-1",
										children: "VO2 Max: 56.4 · 10K PB: 44:12 · Consistency: 94%"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border border-border rounded-lg p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-bold text-accent",
										children: "Athlete 2"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "text-base font-bold mt-1",
										children: "Maya Chen"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground mt-1",
										children: "VO2 Max: 54.8 · 10K PB: 45:30 · Consistency: 88%"
									})
								]
							})]
						})
					]
				}),
				activeTab === "load" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
						eyebrow: "Workload Governance",
						title: "Squad Workload & Progression Guardrails",
						text: "Automated monitoring ensures weekly mileage and sprint meters stay within safe adaptation limits."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-card p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-base font-bold mb-4",
							children: "Acute vs Chronic Workload Distribution"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-44 bg-secondary/50 rounded-lg flex items-center justify-center text-xs text-muted-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-primary",
								children: "All squad training blocks mapped to acute-to-chronic sweet spot (0.8 - 1.3)"
							})
						})]
					})]
				}),
				activeTab === "injury" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "surface-card p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-bold uppercase tracking-wider text-destructive",
								children: "Proactive Prevention"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-bold",
								children: "Injury Risk Prevention & Soft-Tissue Alerts"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-destructive/10 text-destructive border border-destructive/20 px-3 py-1 text-xs font-bold",
								children: "1 Alert Active"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground mb-6",
							children: "Machine learning models analyze asymmetric ground contact times, sudden sprint volume surges, and heart rate variability (HRV) depression to predict fatigue before clinical symptoms appear."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-destructive/30 bg-destructive/5 p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-destructive font-bold text-xs uppercase tracking-wider",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "h-4 w-4" }), " High Risk Alert: Leo Martins"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-foreground mt-2 leading-relaxed",
								children: "Leo's acute sprint volume increased by 38% over the past 4 days, resulting in an ACWR spike to 1.42. Asymmetric ground contact balance shifted 3.8% to the right leg. Action: Reduce intensity for 48 hours."
							})]
						})
					]
				})
			]
		})
	})] });
}
var $$splitComponentImporter$9 = () => import("./community-CmqivxLu.mjs");
var Route$20 = createFileRoute("/community")({
	head: () => ({
		meta: [
			{ title: "Sports Community — SportsMax" },
			{
				name: "description",
				content: "Explore demo athlete milestones, community challenges, leaderboards, events, and fan engagement."
			},
			{
				property: "og:title",
				content: "Sports Community — SportsMax"
			},
			{
				property: "og:description",
				content: "Connect performance intelligence with athletes, challenges, and fans."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/community"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./contact-gsR4x5ot.mjs");
var Route$19 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact SportsMax" },
			{
				name: "description",
				content: "Contact the SportsMax team about sports analytics, athlete performance intelligence, and product demonstrations."
			},
			{
				property: "og:title",
				content: "Contact SportsMax"
			},
			{
				property: "og:description",
				content: "Start a conversation about smarter sports performance intelligence."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./dashboard-DAFQk_1v.mjs");
var Route$18 = createFileRoute("/dashboard")({
	head: () => ({
		meta: [
			{ title: "Analytics Dashboard — SportsMax" },
			{
				name: "description",
				content: "Monitor athletes, sessions, distance, pace, and performance improvement in one sports analytics dashboard."
			},
			{
				property: "og:title",
				content: "Analytics Dashboard — SportsMax"
			},
			{
				property: "og:description",
				content: "A professional demo dashboard for sports performance intelligence."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/dashboard"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var Route$17 = createFileRoute("/ecosystem")({
	head: () => ({ meta: [{ title: "SportsMax Ecosystem — Athletes, Coaches, Communities & Fans" }, {
		name: "description",
		content: "Connect every participant in sport: athletes tracking data, coaches optimizing rosters, communities driving engagement, and fans experiencing live performance stories."
	}] }),
	component: EcosystemPage
});
function EcosystemPage() {
	const [activeTab, setActiveTab] = (0, import_react.useState)("athletes");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		eyebrow: "Ecosystem Section",
		title: "Unifying the Entire Sporting World",
		text: "Sports performance doesn't happen in a vacuum. SportsMax creates a shared data currency linking individual athletes, coaching staffs, local running clubs, and global fan communities.",
		action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-end gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoBadge, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "inline-flex rounded-lg border border-border bg-secondary p-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setActiveTab("athletes"),
						className: `px-3 py-1.5 rounded text-xs font-bold transition ${activeTab === "athletes" ? "bg-primary text-primary-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"}`,
						children: "Athletes"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setActiveTab("coaches"),
						className: `px-3 py-1.5 rounded text-xs font-bold transition ${activeTab === "coaches" ? "bg-primary text-primary-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"}`,
						children: "Coaches"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setActiveTab("communities"),
						className: `px-3 py-1.5 rounded text-xs font-bold transition ${activeTab === "communities" ? "bg-primary text-primary-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"}`,
						children: "Communities"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setActiveTab("fans"),
						className: `px-3 py-1.5 rounded text-xs font-bold transition ${activeTab === "fans" ? "bg-primary text-primary-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"}`,
						children: "Fans"
					})
				]
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-12 bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "content-wrap",
			children: [
				activeTab === "athletes" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "surface-card p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "h-6 w-6" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-bold uppercase tracking-wider text-primary",
								children: "Ecosystem Layer 1"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-2xl font-bold",
								children: "For Athletes: Total Ownership of Performance"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground leading-relaxed max-w-3xl",
							children: "Athletes gain sovereign ownership of their longitudinal physical telemetry. Understand effort curves, personal best progressions, and AI-tailored recovery prescriptions across any sport."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 grid gap-4 sm:grid-cols-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-lg bg-secondary/50 p-4 border border-border",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "font-bold text-sm",
										children: "Automated Training Feedback"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground mt-1",
										children: "Instant pacing and heart-rate zone diagnosis after every session."
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-lg bg-secondary/50 p-4 border border-border",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "font-bold text-sm",
										children: "Longitudinal Milestones"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground mt-1",
										children: "Verified personal records and achievement badges."
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-lg bg-secondary/50 p-4 border border-border",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "font-bold text-sm",
										children: "Health & Fatigue Guard"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground mt-1",
										children: "Proactive alerts to avoid overtraining and injury."
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/athletes",
									children: "Explore Athlete Dashboard →"
								})
							})
						})
					]
				}),
				activeTab === "coaches" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "surface-card p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-12 w-12 place-items-center rounded-xl bg-accent/15 text-accent",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrainCircuit, { className: "h-6 w-6" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-bold uppercase tracking-wider text-accent",
								children: "Ecosystem Layer 2"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-2xl font-bold",
								children: "For Coaches: Evidence-Based Squad Governance"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground leading-relaxed max-w-3xl",
							children: "Replace guesswork with calibrated workload telemetry. Compare athletes across positions, monitor acute-to-chronic load spikes, and prepare tactical game plans with computer vision feedback."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/coaches",
									children: "Explore Coaches & Teams →"
								})
							})
						})
					]
				}),
				activeTab === "communities" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "surface-card p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-12 w-12 place-items-center rounded-xl bg-chart-1/15 text-chart-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-6 w-6" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-bold uppercase tracking-wider text-primary",
								children: "Ecosystem Layer 3"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-2xl font-bold",
								children: "For Communities: Social Challenges & Leaderboards"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground leading-relaxed max-w-3xl mb-6",
							children: "Connect running clubs, collegiate leagues, and local fitness groups with live leaderboards, collective challenges, and friendly peer competition."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "surface-card overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
								className: "w-full text-left text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
									className: "bg-secondary/70 text-muted-foreground font-semibold uppercase",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "px-6 py-3",
											children: "Rank"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "px-6 py-3",
											children: "Athlete"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "px-6 py-3",
											children: "Distance"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "px-6 py-3",
											children: "Sessions"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "px-6 py-3",
											children: "Achievement"
										})
									] })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
									className: "divide-y divide-border",
									children: leaderboard.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										className: "hover:bg-secondary/30 transition",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
												className: "px-6 py-3 font-bold text-primary",
												children: ["#", l.rank]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "px-6 py-3 font-semibold",
												children: l.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "px-6 py-3 font-mono font-bold",
												children: l.distance
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "px-6 py-3 text-muted-foreground",
												children: l.sessions
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "px-6 py-3 font-semibold text-primary",
												children: l.achievement
											})
										]
									}, l.rank))
								})]
							})
						})
					]
				}),
				activeTab === "fans" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "surface-card p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-12 w-12 place-items-center rounded-xl bg-chart-4/15 text-chart-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Radio, { className: "h-6 w-6" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-bold uppercase tracking-wider text-chart-4",
								children: "Ecosystem Layer 4"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-2xl font-bold",
								children: "For Fans: Immersive Next-Gen Sports Data"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground leading-relaxed max-w-3xl",
							children: "Deliver broadcast-quality augmented analytics to sports fans: live sprint speeds, expected goals (xG), shot apex arcs, and tactical replay telemetry."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/sports/game-analysis",
									children: "View Tactical Broadcast Suite →"
								})
							})
						})
					]
				})
			]
		})
	})] });
}
var $$splitComponentImporter$6 = () => import("./help-CJ9oglg8.mjs");
var Route$16 = createFileRoute("/help")({
	head: () => ({ meta: [{ title: "Help Center & Support — SportsMax" }] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./insights-CILGSwKN.mjs");
var Route$15 = createFileRoute("/insights")({
	head: () => ({
		meta: [
			{ title: "Automated Insights — SportsMax" },
			{
				name: "description",
				content: "Review automated performance alerts, training insights, milestones, and recommendations generated from demo sports data."
			},
			{
				property: "og:title",
				content: "Automated Insights — SportsMax"
			},
			{
				property: "og:description",
				content: "Performance signals translated into useful, timely intelligence."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/insights"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var Route$14 = createFileRoute("/platform")({
	head: () => ({ meta: [{ title: "Platform Architecture & Technology — SportsMax" }, {
		name: "description",
		content: "Explore the SportsMax intelligence platform: overview, how it works, biomechanical technology stack, and third-party hardware integrations."
	}] }),
	component: PlatformPage
});
function PlatformPage() {
	const [activeTab, setActiveTab] = (0, import_react.useState)("overview");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		eyebrow: "Platform Architecture",
		title: "Engineered for Continuous Athletic Superiority",
		text: "SportsMax integrates wearable sensor streams, high-speed optical computer vision, and machine learning models to synthesize raw human movement into actionable intelligence.",
		action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-end gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoBadge, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "inline-flex rounded-lg border border-border bg-secondary p-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setActiveTab("overview"),
						className: `rounded px-3 py-1.5 text-xs font-bold transition ${activeTab === "overview" ? "bg-primary text-primary-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"}`,
						children: "Overview"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setActiveTab("how-it-works"),
						className: `rounded px-3 py-1.5 text-xs font-bold transition ${activeTab === "how-it-works" ? "bg-primary text-primary-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"}`,
						children: "How It Works"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setActiveTab("technology"),
						className: `rounded px-3 py-1.5 text-xs font-bold transition ${activeTab === "technology" ? "bg-primary text-primary-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"}`,
						children: "Technology"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setActiveTab("integrations"),
						className: `rounded px-3 py-1.5 text-xs font-bold transition ${activeTab === "integrations" ? "bg-primary text-primary-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"}`,
						children: "Integrations"
					})
				]
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-12 bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "content-wrap",
			children: [
				activeTab === "overview" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
						eyebrow: "End-to-End Pipeline",
						title: "Unified Sports Intelligence Foundation",
						text: "From individual runners on tracks to premier league football stadiums, SportsMax scales seamlessly across sports."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-6 md:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "surface-card p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Database, { className: "h-5 w-5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-4 text-xl font-bold",
										children: "1. Universal Ingestion"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-xs text-muted-foreground leading-relaxed",
										children: "Stream data from GPS watches, chest straps, force plates, optical video cameras, and ball tracking chips at sub-50ms latency."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
										className: "mt-4 grid gap-1.5 text-xs text-foreground font-medium",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5 text-primary" }), " BLE & ANT+ direct feeds"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5 text-primary" }), " 120fps video stream ingestion"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5 text-primary" }), " Standardized FIT/GPX/JSON pipelines"]
											})
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "surface-card p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-10 w-10 place-items-center rounded-lg bg-accent/15 text-accent",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrainCircuit, { className: "h-5 w-5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-4 text-xl font-bold",
										children: "2. Biomechanical AI Engine"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-xs text-muted-foreground leading-relaxed",
										children: "Proprietary physics and machine learning models infer center-of-mass kinematics, joint torque loads, and tactical pitch spatial patterns."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
										className: "mt-4 grid gap-1.5 text-xs text-foreground font-medium",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5 text-accent" }), " Acute-to-chronic workload ratios"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5 text-accent" }), " Expected Goals (xG) & threat matrices"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5 text-accent" }), " Dynamic fatigue modeling"]
											})
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "surface-card p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-10 w-10 place-items-center rounded-lg bg-chart-3/15 text-chart-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-5 w-5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-4 text-xl font-bold",
										children: "3. Automated Execution"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-xs text-muted-foreground leading-relaxed",
										children: "Deliver instantaneous tactical cues to head coaches, training prescriptions to athletes, and automated post-match debrief packages."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
										className: "mt-4 grid gap-1.5 text-xs text-foreground font-medium",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5 text-chart-3" }), " Live match pitch-side displays"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5 text-chart-3" }), " Push alerts for overtraining spikes"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5 text-chart-3" }), " One-click tactical dossiers"]
											})
										]
									})
								]
							})
						]
					})]
				}),
				activeTab === "how-it-works" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
						eyebrow: "Process Workflow",
						title: "How Data Transforms Into Strategy",
						text: "The automated cycle runs before, during, and after every training session and competitive fixture."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Workflow, {
						title: "Biomechanical & Tactical Synthesis Engine",
						description: "From field-level sensors to coaching staff decisions.",
						steps: [
							"Capture Telemetry",
							"Filter & Clean",
							"Kinematic Extraction",
							"Pattern Detection",
							"Alert Generation",
							"Actionable Cue"
						]
					})]
				}),
				activeTab === "technology" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-6 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-card p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-bold uppercase tracking-wider text-primary",
								children: "Core Tech"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl font-bold mt-2",
								children: "Computer Vision & Optical Tracking"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground mt-2 leading-relaxed",
								children: "Real-time multi-camera pose estimation tracks 24 anatomical keypoints at 120 frames per second without requiring reflective markers."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-card p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-bold uppercase tracking-wider text-accent",
								children: "Real-Time Core"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl font-bold mt-2",
								children: "High-Throughput Edge Pipeline"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground mt-2 leading-relaxed",
								children: "Built on ultra-low latency WebSocket streams with sub-50ms round-trip delivery for live coaching pitch-side dashboards."
							})
						]
					})]
				}),
				activeTab === "integrations" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "surface-card p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
						eyebrow: "Device Ecosystem",
						title: "Native Wearable & Hardware Integrations",
						text: "SportsMax syncs directly with industry-standard hardware, devices, and tracking systems."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-4 sm:grid-cols-2 md:grid-cols-4 mt-6",
						children: [
							"Garmin Connect",
							"Polar Flow",
							"Catapult Sports",
							"StatsPerform / Opta",
							"Wahoo Fitness",
							"Apple Health",
							"WHOOP Strap",
							"Kinexon Real-Time"
						].map((brand) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-border bg-secondary/50 p-4 text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-bold text-sm text-foreground",
								children: brand
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] text-primary font-semibold mt-1 block",
								children: "Verified API Sync"
							})]
						}, brand))
					})]
				})
			]
		})
	})] });
}
var Route$13 = createFileRoute("/pricing")({
	head: () => ({ meta: [{ title: "Pricing & Plans — SportsMax" }, {
		name: "description",
		content: "Transparent pricing for individual athletes, coaching staffs, sports teams, and enterprise leagues. Start with a 14-day free trial."
	}] }),
	component: PricingPage
});
function PricingPage() {
	const [billingPeriod, setBillingPeriod] = (0, import_react.useState)("annual");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		eyebrow: "Pricing Plans",
		title: "Predictable Investment for Proven Performance",
		text: "Choose the plan that fits your athletic ambitions. From dedicated individual runners to collegiate athletic departments and professional sports franchises.",
		action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-end gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoBadge, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "inline-flex rounded-lg border border-border bg-secondary p-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setBillingPeriod("monthly"),
					className: `rounded px-3 py-1.5 text-xs font-bold transition ${billingPeriod === "monthly" ? "bg-primary text-primary-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"}`,
					children: "Monthly Billing"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setBillingPeriod("annual"),
					className: `rounded px-3 py-1.5 text-xs font-bold transition ${billingPeriod === "annual" ? "bg-primary text-primary-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"}`,
					children: "Annual (Save 20%)"
				})]
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-12 bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "content-wrap",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-card p-8 flex flex-col justify-between border hover:border-primary/40 transition",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-bold uppercase tracking-wider text-muted-foreground",
								children: "Individual Plan"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-2xl font-bold mt-1 text-foreground",
								children: "Athlete Pro"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground mt-2 leading-relaxed",
								children: "For competitive runners, swimmers, and individual athletes seeking deep biometric precision."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-4xl font-extrabold text-foreground",
									children: billingPeriod === "annual" ? "$19" : "$24"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-muted-foreground ml-1",
									children: "/ month"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-6 grid gap-2.5 text-xs text-foreground font-medium",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-primary shrink-0" }), " Unlimited wearable data sync (Garmin, Polar, Apple)"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-primary shrink-0" }), " Full SWOLF, cadence & cardiac drift modeling"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-primary shrink-0" }), " Automated AI training recommendations"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-primary shrink-0" }), " Verified personal best logging"]
									})
								]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 pt-6 border-t border-border",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthDialog, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								className: "w-full font-bold",
								children: "Start 14-Day Free Trial"
							}) })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-card p-8 flex flex-col justify-between border-2 border-primary relative shadow-lg",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute -top-3.5 right-6 rounded-full bg-primary text-primary-foreground px-3 py-0.5 text-[10px] font-black uppercase tracking-wider shadow-sm",
								children: "Most Popular"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-bold uppercase tracking-wider text-primary",
									children: "Team Plan"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-2xl font-bold mt-1 text-foreground",
									children: "Coach & Squad"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground mt-2 leading-relaxed",
									children: "For coaching staffs, high school/collegiate teams, and athletic clubs up to 35 athletes."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-4xl font-extrabold text-foreground",
										children: billingPeriod === "annual" ? "$99" : "$129"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-muted-foreground ml-1",
										children: "/ month"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "mt-6 grid gap-2.5 text-xs text-foreground font-medium",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-primary shrink-0" }), " Up to 35 athlete profiles included"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-primary shrink-0" }), " Acute-to-Chronic Workload Ratio (ACWR) governance"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-primary shrink-0" }), " Proactive soft-tissue injury risk alerts"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-primary shrink-0" }), " Squad comparison radar charts & reports"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-primary shrink-0" }), " Multi-coach role permission controls"]
										})
									]
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 pt-6 border-t border-border",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthDialog, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									className: "w-full font-bold shadow-md",
									children: "Start 14-Day Free Trial →"
								}) })
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-card p-8 flex flex-col justify-between border hover:border-primary/40 transition",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-bold uppercase tracking-wider text-muted-foreground",
								children: "Enterprise Plan"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-2xl font-bold mt-1 text-foreground",
								children: "Franchise & League"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground mt-2 leading-relaxed",
								children: "For professional sports clubs, national federations, stadium tracking, and broadcast data providers."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-4xl font-extrabold text-foreground",
									children: "Custom"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-muted-foreground ml-1",
									children: "enterprise tier"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-6 grid gap-2.5 text-xs text-foreground font-medium",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-primary shrink-0" }), " Unlimited athlete & squad capacity"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-primary shrink-0" }), " 120fps Optical Computer Vision pitch tracking"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-primary shrink-0" }), " Real-time sub-50ms WebSocket telemetry feeds"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-primary shrink-0" }), " Dedicated SportsMax sports scientist engineer"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-primary shrink-0" }), " Custom tactical algorithms & API access"]
									})
								]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 pt-6 border-t border-border",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "outline",
								className: "w-full font-bold",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									children: "Contact Enterprise Sales"
								})
							})
						})]
					})
				]
			})
		})
	})] });
}
var $$splitComponentImporter$4 = () => import("./privacy-EXU9l2Li.mjs");
var Route$12 = createFileRoute("/privacy")({
	head: () => ({ meta: [{ title: "Privacy Policy — SportsMax" }] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./recommendations-BbMFexqI.mjs");
var Route$11 = createFileRoute("/recommendations")({
	head: () => ({
		meta: [
			{ title: "Performance Recommendations — SportsMax" },
			{
				name: "description",
				content: "Explore personalized demo recommendations based on athlete performance analytics and recent training patterns."
			},
			{
				property: "og:title",
				content: "Personalized Recommendations — SportsMax"
			},
			{
				property: "og:description",
				content: "Analytics-based next steps for recovery, endurance, and consistency."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/recommendations"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var Route$10 = createFileRoute("/resources")({
	head: () => ({ meta: [{ title: "Resources, Research & Documentation — SportsMax" }, {
		name: "description",
		content: "Sports science articles, case studies, athletic intelligence knowledge base, and developer API documentation."
	}] }),
	component: ResourcesPage
});
var articles = [
	{
		title: "The Biomechanics of Fosbury Flop Apex Clearance",
		category: "Sports Science",
		date: "Sep 28, 2026",
		readTime: "5 min read"
	},
	{
		title: "Understanding Acute-to-Chronic Workload Ratio in Elite Runners",
		category: "Load Management",
		date: "Sep 15, 2026",
		readTime: "8 min read"
	},
	{
		title: "How Expected Goals (xG) is Evolving with Optical Tracking",
		category: "Tactical Analytics",
		date: "Aug 30, 2026",
		readTime: "6 min read"
	}
];
var caseStudies = [{
	team: "Metropolitan Athletics Club",
	metric: "-42% Soft Tissue Injuries",
	story: "How continuous ACWR tracking kept 32 sprinters healthy through national championships."
}, {
	team: "Premier League Division 1",
	metric: "+1.34 xG Differential",
	story: "Implementing real-time press resistance heatmaps during live tactical halftime debriefs."
}];
function ResourcesPage() {
	const [activeTab, setActiveTab] = (0, import_react.useState)("blog");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		eyebrow: "Resources & Research",
		title: "Sports Science & Developer Documentation",
		text: "Dive deep into peer-reviewed sports science methodologies, tactical whitepapers, customer case studies, and REST/WebSocket API endpoints.",
		action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-end gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoBadge, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-1 bg-secondary p-1 rounded-lg border border-border",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setActiveTab("blog"),
						className: `px-3 py-1.5 rounded text-xs font-bold transition ${activeTab === "blog" ? "bg-primary text-primary-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"}`,
						children: "Blog & Articles"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setActiveTab("case-studies"),
						className: `px-3 py-1.5 rounded text-xs font-bold transition ${activeTab === "case-studies" ? "bg-primary text-primary-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"}`,
						children: "Case Studies"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setActiveTab("knowledge-base"),
						className: `px-3 py-1.5 rounded text-xs font-bold transition ${activeTab === "knowledge-base" ? "bg-primary text-primary-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"}`,
						children: "Knowledge Base"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setActiveTab("api"),
						className: `px-3 py-1.5 rounded text-xs font-bold transition ${activeTab === "api" ? "bg-primary text-primary-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"}`,
						children: "API Documentation"
					})
				]
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-12 bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "content-wrap",
			children: [
				activeTab === "blog" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
					children: articles.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "surface-card p-6 flex flex-col justify-between hover:border-primary/50 transition",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] font-bold uppercase tracking-wider text-primary",
							children: a.category
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-base font-bold mt-2 text-foreground",
							children: a.title
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: a.date }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: a.readTime })]
						})]
					}, a.title))
				}),
				activeTab === "case-studies" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 sm:grid-cols-2",
					children: caseStudies.map((cs) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-card p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-bold uppercase tracking-wider text-primary",
								children: "Case Study"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl font-bold mt-1 text-foreground",
								children: cs.team
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 inline-block rounded bg-primary/10 text-primary font-mono font-bold text-sm px-2.5 py-1",
								children: cs.metric
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-xs text-muted-foreground leading-relaxed",
								children: cs.story
							})
						]
					}, cs.team))
				}),
				activeTab === "knowledge-base" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "surface-card p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
						eyebrow: "Sports Science Guide",
						title: "Frequently Consulted Methodologies"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2 mt-4 text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border border-border rounded-lg p-4 bg-secondary/30",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "font-bold text-sm text-foreground",
								children: "How is SWOLF calculated?"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground mt-1 leading-relaxed",
								children: "SWOLF combines swim time in seconds plus stroke count for a single pool length. Lower scores represent greater hydrodynamic efficiency."
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border border-border rounded-lg p-4 bg-secondary/30",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "font-bold text-sm text-foreground",
								children: "What constitutes the ACWR sweet spot?"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground mt-1 leading-relaxed",
								children: "A ratio between 0.8 and 1.3 represents safe progressive adaptation. Spikes above 1.5 increase relative risk of soft-tissue fatigue by 2x to 4x."
							})]
						})]
					})]
				}),
				activeTab === "api" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "surface-card p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
							eyebrow: "Developers",
							title: "REST & Streaming WebSocket API"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground mb-6",
							children: "Ingest telemetry and query athlete records programmatically using SportsMax Developer APIs."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg bg-secondary p-4 font-mono text-xs overflow-x-auto border border-border",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground",
								children: "// Sample GET /v1/athletes/:id/telemetry/latest"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
								className: "text-foreground mt-2",
								children: `{
  "athleteId": "ath_94821",
  "sport": "running",
  "timestamp": "2026-10-03T06:45:00Z",
  "metrics": {
    "pace": 5.14,
    "cadence": 170,
    "heartRate": 156,
    "vo2MaxEst": 54.2
  }
}`
							})]
						})
					]
				})
			]
		})
	})] });
}
var $$splitComponentImporter$2 = () => import("./run-analytics-D1hiUlw_.mjs");
var Route$9 = createFileRoute("/run-analytics")({
	head: () => ({
		meta: [
			{ title: "Run Analytics — SportsMax" },
			{
				name: "description",
				content: "Explore a realistic running session dashboard with pace, heart rate, speed, distance, and progression analytics."
			},
			{
				property: "og:title",
				content: "Run Analytics — SportsMax"
			},
			{
				property: "og:description",
				content: "Turn every running session into actionable performance intelligence."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/run-analytics"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./terms-CN3LHHWB.mjs");
var Route$8 = createFileRoute("/terms")({
	head: () => ({ meta: [{ title: "Terms of Service — SportsMax" }] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./sports.index-DaPkGM5m.mjs");
var Route$7 = createFileRoute("/sports/")({
	head: () => ({ meta: [{ title: "All Sports Directory & Intelligence — SportsMax" }, {
		name: "description",
		content: "Explore the complete sports directory across individual disciplines, team sports, and deep game analysis modules."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var Route$6 = createFileRoute("/sports/football")({
	head: () => ({ meta: [{ title: "Football / Soccer Tactical Intelligence — SportsMax" }, {
		name: "description",
		content: "Expected Goals (xG), pressing intensity (PPDA), pitch heatmaps, pass completion matrices, and match event telemetry."
	}] }),
	component: FootballSportPage
});
var xGProgression = [
	{
		label: "15'",
		performance: .12,
		consistency: .08
	},
	{
		label: "30'",
		performance: .44,
		consistency: .18
	},
	{
		label: "45' (HT)",
		performance: .98,
		consistency: .42
	},
	{
		label: "60'",
		performance: 1.45,
		consistency: .65
	},
	{
		label: "75'",
		performance: 2.15,
		consistency: .82
	},
	{
		label: "90' (FT)",
		performance: 2.48,
		consistency: 1.14
	}
];
var matchEvents = [
	{
		minute: "14'",
		event: "Shot on Target",
		player: "M. Sterling",
		xG: "0.24",
		team: "SportsMax FC",
		type: "threat"
	},
	{
		minute: "32'",
		event: "High Press Turnover",
		player: "K. De Jong",
		xG: "—",
		team: "SportsMax FC",
		type: "defense"
	},
	{
		minute: "41'",
		event: "GOAL (Header)",
		player: "L. Martinez",
		xG: "0.54",
		team: "SportsMax FC",
		type: "goal"
	},
	{
		minute: "58'",
		event: "Counter-Attack Shot",
		player: "Opponent Fwd",
		xG: "0.38",
		team: "Opponent",
		type: "opponent"
	},
	{
		minute: "72'",
		event: "GOAL (Open Play)",
		player: "E. Fernandez",
		xG: "0.71",
		team: "SportsMax FC",
		type: "goal"
	}
];
function FootballSportPage() {
	const [activeLayer, setActiveLayer] = (0, import_react.useState)("shots");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		eyebrow: "Team Sports · Football / Soccer",
		title: "Tactical Intelligence & Match Analytics",
		text: "Transform optical pitch tracking and GPS vests into game-winning tactical decisions. Calculate live Expected Goals (xG), pressing effectiveness, and defensive line heights.",
		action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-end gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoBadge, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs text-muted-foreground",
					children: "Match Status:"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full bg-primary/10 text-primary font-bold px-2.5 py-1 text-xs border border-primary/20",
					children: "Full Time · 2 - 0"
				})]
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-12 bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "content-wrap",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					eyebrow: "Match Analysis",
					title: "SportsMax FC 2 — 0 Capital City",
					text: "Premier League Division 1 · Opta & Computer Vision Synchronized Feeds",
					action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/sports/game-analysis",
							children: ["Open Game Analysis Suite ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 ml-1" })]
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
							label: "Expected Goals (xG)",
							value: "2.48 vs 1.14",
							note: "+1.34 xG differential",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Goal, { className: "h-4 w-4 text-primary" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
							label: "Possession %",
							value: "58.2%",
							note: "642 completed passes",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "h-4 w-4 text-accent" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
							label: "PPDA (Pressing)",
							value: "8.4 passes",
							note: "High pressure tier (<10)",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "h-4 w-4 text-chart-3" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
							label: "High-Speed Distance",
							value: "12.8 km",
							note: "Team total > 19.8 km/h",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
							label: "Defensive Line",
							value: "48.2 m",
							note: "High compact block",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
							label: "Pass Accuracy",
							value: "87.4%",
							note: "Final third: 79.1%",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "h-4 w-4" })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid gap-6 lg:grid-cols-[1.3fr_0.9fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-card p-6 flex flex-col justify-between",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center justify-between gap-3 mb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-bold uppercase tracking-wider text-primary",
									children: "Spatial Analysis"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-bold",
									children: "2D Pitch Control & Shot Clusters"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "inline-flex rounded-md border border-border bg-secondary p-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setActiveLayer("shots"),
											className: `rounded px-2.5 py-1 text-xs font-semibold transition ${activeLayer === "shots" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`,
											children: "Shot Map"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setActiveLayer("press"),
											className: `rounded px-2.5 py-1 text-xs font-semibold transition ${activeLayer === "press" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`,
											children: "Pressing Heat"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setActiveLayer("zones"),
											className: `rounded px-2.5 py-1 text-xs font-semibold transition ${activeLayer === "zones" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`,
											children: "Zone 14 Control"
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "py-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
									viewBox: "0 0 700 420",
									className: "w-full h-auto rounded-lg border border-border",
									style: { backgroundColor: "color-mix(in oklab, var(--primary) 7%, white)" },
									role: "img",
									"aria-label": "Football Pitch Tactical View",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
											x: "20",
											y: "20",
											width: "660",
											height: "380",
											fill: "none",
											stroke: "var(--border)",
											strokeWidth: "2"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
											x1: "350",
											y1: "20",
											x2: "350",
											y2: "400",
											stroke: "var(--border)",
											strokeWidth: "2"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
											cx: "350",
											cy: "210",
											r: "60",
											fill: "none",
											stroke: "var(--border)",
											strokeWidth: "2"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
											cx: "350",
											cy: "210",
											r: "3",
											fill: "var(--border)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
											x: "20",
											y: "90",
											width: "110",
											height: "240",
											fill: "none",
											stroke: "var(--border)",
											strokeWidth: "2"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
											x: "20",
											y: "150",
											width: "40",
											height: "120",
											fill: "none",
											stroke: "var(--border)",
											strokeWidth: "2"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
											x: "570",
											y: "90",
											width: "110",
											height: "240",
											fill: "none",
											stroke: "var(--border)",
											strokeWidth: "2"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
											x: "640",
											y: "150",
											width: "40",
											height: "120",
											fill: "none",
											stroke: "var(--border)",
											strokeWidth: "2"
										}),
										activeLayer === "shots" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
												cx: "635",
												cy: "190",
												r: "10",
												fill: "var(--primary)",
												stroke: "white",
												strokeWidth: "2"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
												x: "615",
												y: "170",
												fill: "var(--primary)",
												fontSize: "11",
												fontWeight: "bold",
												children: "GOAL 41' (0.54 xG)"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
												cx: "610",
												cy: "235",
												r: "12",
												fill: "var(--primary)",
												stroke: "white",
												strokeWidth: "2"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
												x: "530",
												y: "260",
												fill: "var(--primary)",
												fontSize: "11",
												fontWeight: "bold",
												children: "GOAL 72' (0.71 xG)"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
												cx: "590",
												cy: "160",
												r: "7",
												fill: "var(--accent)",
												opacity: "0.8"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
												cx: "550",
												cy: "200",
												r: "6",
												fill: "var(--accent)",
												opacity: "0.8"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
												cx: "530",
												cy: "280",
												r: "5",
												fill: "var(--accent)",
												opacity: "0.8"
											})
										] }),
										activeLayer === "press" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
												cx: "480",
												cy: "210",
												r: "80",
												fill: "var(--primary)",
												opacity: "0.25"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
												cx: "480",
												cy: "210",
												r: "50",
												fill: "var(--primary)",
												opacity: "0.35"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
												x: "410",
												y: "215",
												fill: "var(--primary)",
												fontSize: "12",
												fontWeight: "bold",
												children: "High Turnover Zone"
											})
										] }),
										activeLayer === "zones" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
											x: "440",
											y: "140",
											width: "130",
											height: "140",
											fill: "var(--accent)",
											opacity: "0.25",
											stroke: "var(--accent)",
											strokeWidth: "2",
											strokeDasharray: "4 4"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
											x: "465",
											y: "215",
											fill: "var(--accent)",
											fontSize: "13",
											fontWeight: "bold",
											children: "Zone 14 (34 Passes)"
										})] })
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-3 gap-3 pt-4 border-t border-border text-center text-xs",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground block",
										children: "Total Shots"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-bold text-foreground",
										children: "16 (9 on target)"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground block",
										children: "Box Touches"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-bold text-foreground",
										children: "38 touches"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground block",
										children: "xG / Shot"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-bold text-primary",
										children: "0.155 (High Quality)"
									})] })
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LineChartCard, {
						title: "Cumulative Expected Goals (xG)",
						subtitle: "SportsMax FC (Green) vs Capital City (Blue)",
						data: xGProgression,
						keys: ["performance", "consistency"],
						unit: " xG"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 surface-card overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-b border-border p-5 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-bold text-base",
							children: "Key Match Events"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground mt-0.5",
							children: "Automated event detection feed"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "sm",
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/sports/game-analysis",
								children: "Tactical Insights →"
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full text-left text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
								className: "bg-secondary/70 text-muted-foreground font-semibold uppercase tracking-wider",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-3.5",
										children: "Time"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-3.5",
										children: "Event"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-3.5",
										children: "Player"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-3.5",
										children: "Team"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-3.5",
										children: "xG Impact"
									})
								] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
								className: "divide-y divide-border",
								children: matchEvents.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "hover:bg-secondary/30 transition",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-3.5 font-bold font-mono text-primary",
											children: e.minute
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-3.5 font-semibold text-foreground",
											children: e.event
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-3.5 text-muted-foreground",
											children: e.player
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-3.5 text-foreground",
											children: e.team
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-3.5 font-mono font-bold text-foreground",
											children: e.xG
										})
									]
								}, e.minute + e.player))
							})]
						})
					})]
				})
			]
		})
	})] });
}
var Route$5 = createFileRoute("/sports/game-analysis")({
	head: () => ({ meta: [{ title: "Game Analysis & Tactical Intelligence Suite — SportsMax" }, {
		name: "description",
		content: "Match dashboard, tactical insights, player comparison radar, team comparison, automated event detection, and custom coaching reports."
	}] }),
	component: GameAnalysisPage
});
var comparisonMetrics = [
	{
		metric: "Top Sprint Speed",
		playerA: "34.8 km/h",
		playerB: "33.2 km/h",
		winner: "A"
	},
	{
		metric: "Distance Covered (90')",
		playerA: "11.4 km",
		playerB: "12.1 km",
		winner: "B"
	},
	{
		metric: "Pass Completion Rate",
		playerA: "88.4%",
		playerB: "81.6%",
		winner: "A"
	},
	{
		metric: "Key Passes / 90",
		playerA: "2.8",
		playerB: "1.4",
		winner: "A"
	},
	{
		metric: "Pressures Applied",
		playerA: "18.2",
		playerB: "24.6",
		winner: "B"
	},
	{
		metric: "Tackle Success Rate",
		playerA: "64.0%",
		playerB: "78.5%",
		winner: "B"
	},
	{
		metric: "Expected Goals (xG)",
		playerA: "0.42",
		playerB: "0.18",
		winner: "A"
	}
];
function GameAnalysisPage() {
	const [activeModule, setActiveModule] = (0, import_react.useState)("match-dashboard");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		eyebrow: "Sports Intelligence · Game Analysis Suite",
		title: "Tactical Modeling & Match Intelligence",
		text: "A unified multi-sport game analysis engine for video analysts, technical directors, and coaches. Combine synchronized broadcast video, wearable telemetry, and AI detection models.",
		action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-end gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoBadge, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					size: "sm",
					variant: "outline",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "h-4 w-4 mr-1.5" }), " Export PDF"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					size: "sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/sports",
						children: "All Sports Hub →"
					})
				})]
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-12 bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "content-wrap",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2 border-b border-border pb-4 mb-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setActiveModule("match-dashboard"),
							className: `flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition ${activeModule === "match-dashboard" ? "bg-primary text-primary-foreground shadow-xs" : "bg-secondary text-muted-foreground hover:text-foreground"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutDashboard, { className: "h-4 w-4" }), " Match Dashboard"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setActiveModule("tactical"),
							className: `flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition ${activeModule === "tactical" ? "bg-primary text-primary-foreground shadow-xs" : "bg-secondary text-muted-foreground hover:text-foreground"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrainCircuit, { className: "h-4 w-4" }), " Tactical Insights"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setActiveModule("player-comp"),
							className: `flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition ${activeModule === "player-comp" ? "bg-primary text-primary-foreground shadow-xs" : "bg-secondary text-muted-foreground hover:text-foreground"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-4 w-4" }), " Player Comparison"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setActiveModule("team-comp"),
							className: `flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition ${activeModule === "team-comp" ? "bg-primary text-primary-foreground shadow-xs" : "bg-secondary text-muted-foreground hover:text-foreground"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartNoAxesColumn, { className: "h-4 w-4" }), " Team Comparison"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setActiveModule("events"),
							className: `flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition ${activeModule === "events" ? "bg-primary text-primary-foreground shadow-xs" : "bg-secondary text-muted-foreground hover:text-foreground"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Video, { className: "h-4 w-4" }), " Event Detection"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setActiveModule("reports"),
							className: `flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition ${activeModule === "reports" ? "bg-primary text-primary-foreground shadow-xs" : "bg-secondary text-muted-foreground hover:text-foreground"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileSpreadsheet, { className: "h-4 w-4" }), " Custom Reports"]
						})
					]
				}),
				activeModule === "match-dashboard" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
								label: "Live Win Probability",
								value: "78.4%",
								note: "Momentum Peak at 72'",
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-4 w-4 text-primary" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
								label: "Field Tilt %",
								value: "64.1%",
								note: "Dominance in final 3rd",
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compass, { className: "h-4 w-4 text-accent" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
								label: "Expected Threat (xT)",
								value: "+1.84",
								note: "Progressive ball carries",
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-4 w-4 text-chart-3" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
								label: "High Turnover Efficiency",
								value: "44%",
								note: "Shots generated off press",
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "h-4 w-4" })
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-card p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-bold uppercase tracking-wider text-primary",
								children: "Live Match Monitor"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-bold",
								children: "Real-Time Pitch Pressure & Win Expectancy"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-bold",
								children: "Connected to Optical Trackers"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground leading-relaxed",
							children: "SportsMax synthesizes 25 frames-per-second broadcast feed tracking into synchronized positional coordinates. Algorithms calculate live expected threat (xT), passing vectors, and defensive vulnerability in under 300 milliseconds."
						})]
					})]
				}),
				activeModule === "tactical" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "surface-card p-6 border-l-4 border-l-primary",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-bold uppercase tracking-wider text-primary",
									children: "Tactical Alert"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-base font-bold mt-2",
									children: "Opponent Left Flank Vulnerability"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground mt-2 leading-relaxed",
									children: "Opponent fullback is stepping out 12 meters early during press transitions, leaving a 28-meter corridor open for diagonal through balls."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 pt-3 border-t border-border flex justify-between text-xs font-bold text-primary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Confidence: 94%" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "4 Occurrences" })]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "surface-card p-6 border-l-4 border-l-accent",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-bold uppercase tracking-wider text-accent",
									children: "Spacing Anomaly"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-base font-bold mt-2",
									children: "Midfield Compactness Optimal"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground mt-2 leading-relaxed",
									children: "Average distance between center backs and central midfielders is maintained at 14.2 meters, reducing opponent line breaks by 41%."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 pt-3 border-t border-border flex justify-between text-xs font-bold text-accent",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Compactness: High" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Zone 14 Protected" })]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "surface-card p-6 border-l-4 border-l-chart-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-bold uppercase tracking-wider text-chart-3",
									children: "Transition Speed"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-base font-bold mt-2",
									children: "Counter-Attack Phase Velocity"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground mt-2 leading-relaxed",
									children: "Regaining possession in the middle third leads to a shot within 8.6 seconds on average, exceeding league top quartile pace."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 pt-3 border-t border-border flex justify-between text-xs font-bold text-chart-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Speed: 24.2 km/h" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "3 Shots generated" })]
								})
							]
						})
					]
				}),
				activeModule === "player-comp" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "surface-card overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-b border-border p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-bold uppercase tracking-wider text-primary",
							children: "Head-to-Head Radar"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-bold",
							children: "Player A (Winger) vs Player B (Box-to-Box Midfielder)"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 text-xs font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-3 w-3 rounded-full bg-primary" }), " Player A (Green)"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-3 w-3 rounded-full bg-accent" }), " Player B (Blue)"]
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full text-left text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
								className: "bg-secondary/70 text-muted-foreground font-semibold uppercase tracking-wider",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-3.5",
										children: "Performance Metric"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-3.5",
										children: "Player A (Attacking Output)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-3.5",
										children: "Player B (Defensive Engine)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-3.5",
										children: "Advantage"
									})
								] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
								className: "divide-y divide-border",
								children: comparisonMetrics.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "hover:bg-secondary/30 transition",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-3.5 font-bold text-foreground",
											children: m.metric
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-3.5 font-mono text-foreground font-semibold",
											children: m.playerA
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-3.5 font-mono text-foreground font-semibold",
											children: m.playerB
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-3.5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: `rounded px-2 py-0.5 text-[10px] font-bold ${m.winner === "A" ? "bg-primary/10 text-primary" : "bg-accent/15 text-accent"}`,
												children: [
													"Player ",
													m.winner,
													" Advantage"
												]
											})
										})
									]
								}, m.metric))
							})]
						})
					})]
				}),
				activeModule === "team-comp" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "surface-card p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-bold mb-2",
							children: "Team Benchmark: SportsMax FC vs League Median"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground mb-6",
							children: "Comparative percentile ranks normalized across 38 regular season fixtures."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-lg bg-secondary/50 p-4 border border-border",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs text-muted-foreground",
											children: "High Press Intensity"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-2xl font-bold font-mono text-primary mt-1",
											children: "94th Percentile"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[11px] text-muted-foreground",
											children: "PPDA 8.4 vs 12.8"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-lg bg-secondary/50 p-4 border border-border",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs text-muted-foreground",
											children: "Expected Goal Difference"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-2xl font-bold font-mono text-primary mt-1",
											children: "+0.82 / match"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[11px] text-muted-foreground",
											children: "Ranked #2 in division"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-lg bg-secondary/50 p-4 border border-border",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs text-muted-foreground",
											children: "Set Piece Efficiency"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-2xl font-bold font-mono text-accent mt-1",
											children: "88th Percentile"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[11px] text-muted-foreground",
											children: "14 goals scored off corners"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-lg bg-secondary/50 p-4 border border-border",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs text-muted-foreground",
											children: "Roster Age & Mileage"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-2xl font-bold font-mono text-chart-3 mt-1",
											children: "24.6 years"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[11px] text-muted-foreground",
											children: "Optimal physical peak window"
										})
									]
								})
							]
						})
					]
				}),
				activeModule === "events" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "surface-card p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-bold uppercase tracking-wider text-primary",
								children: "Automated Video Tagging"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-bold",
								children: "142 Machine-Detected Match Milestones"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded bg-primary/10 text-primary font-bold text-xs px-2.5 py-1",
								children: "100% Computer Vision Verified"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground mb-6",
							children: "Automated clip generation for video sessions: shots on target, offside calls, set piece routines, tackle regains, and tactical transitions."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-3 sm:grid-cols-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "border border-border rounded-lg p-3 hover:bg-secondary/40 transition",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[11px] font-mono font-bold text-primary",
											children: "Tag #104 · 41:12"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "font-bold text-sm mt-1",
											children: "Goal: Header from Corner Routine"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground mt-1",
											children: "xG: 0.54 · Near post run"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "border border-border rounded-lg p-3 hover:bg-secondary/40 transition",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[11px] font-mono font-bold text-primary",
											children: "Tag #118 · 56:44"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "font-bold text-sm mt-1",
											children: "High Press Ball Recovery"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground mt-1",
											children: "Recovered in 4.2 seconds"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "border border-border rounded-lg p-3 hover:bg-secondary/40 transition",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[11px] font-mono font-bold text-primary",
											children: "Tag #132 · 72:08"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "font-bold text-sm mt-1",
											children: "Goal: Cutback from Right Flank"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground mt-1",
											children: "xG: 0.71 · 6-pass buildup"
										})
									]
								})
							]
						})
					]
				}),
				activeModule === "reports" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "surface-card p-8 text-center max-w-2xl mx-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileSpreadsheet, { className: "h-7 w-7" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl font-bold",
							children: "One-Click Coaching & Executive Reports"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground mt-2 leading-relaxed",
							children: "Generate formatted PDF dossiers, tactical video summaries, and individual player feedback sheets in seconds."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap justify-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "sm",
								children: ["Download Full Match PDF ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "h-4 w-4 ml-1.5" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "outline",
								children: "Download Tactical Slides"
							})]
						})
					]
				})
			]
		})
	})] });
}
var Route$4 = createFileRoute("/sports/hockey")({
	head: () => ({ meta: [{ title: "Hockey Intelligence & Shift Analytics — SportsMax" }, {
		name: "description",
		content: "Ice hockey and field hockey telemetry: shift duration, Corsi possession %, zone entries, and transition acceleration."
	}] }),
	component: HockeySportPage
});
var shiftPacing = [
	{
		label: "P1: 05'",
		performance: 48,
		consistency: 42
	},
	{
		label: "P1: 15'",
		performance: 56,
		consistency: 44
	},
	{
		label: "P2: 05'",
		performance: 59,
		consistency: 41
	},
	{
		label: "P2: 15'",
		performance: 62,
		consistency: 38
	},
	{
		label: "P3: 05'",
		performance: 64,
		consistency: 36
	},
	{
		label: "P3: 15'",
		performance: 58,
		consistency: 42
	}
];
var lineCombinations = [
	{
		line: "Forward Line 1",
		timeOnIce: "18:42",
		corsiForPct: "61.4%",
		xGF: "1.84",
		zoneEntryPct: "74%"
	},
	{
		line: "Forward Line 2",
		timeOnIce: "16:15",
		corsiForPct: "55.2%",
		xGF: "1.12",
		zoneEntryPct: "66%"
	},
	{
		line: "Defensive Pair 1",
		timeOnIce: "22:10",
		corsiForPct: "58.9%",
		xGF: "1.45",
		zoneEntryPct: "69%"
	},
	{
		line: "Powerplay Unit 1",
		timeOnIce: "04:30",
		corsiForPct: "82.1%",
		xGF: "1.25",
		zoneEntryPct: "88%"
	}
];
function HockeySportPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		eyebrow: "Team Sports · Hockey",
		title: "Hockey Shift Velocity & Possession Analytics",
		text: "High-frequency telemetry for on-ice shifts, zone entry velocities, puck possession modeling, and transition defense.",
		action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-end gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoBadge, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "rounded-full bg-chart-4/10 text-chart-4 font-bold px-3 py-1 text-xs border border-chart-4/20",
				children: "Period 3 · 4 - 2 Win"
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-12 bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "content-wrap",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					eyebrow: "Game Summary",
					title: "SportsMax Blades 4 — 2 North Star",
					text: "RFID puck tracking and optical tracking telemetry across 60 minutes of high-tempo hockey."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
							label: "Corsi For %",
							value: "58.4%",
							note: "Shot attempt control",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "h-4 w-4 text-chart-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
							label: "Avg Shift Length",
							value: "42.8 s",
							note: "Optimal (<45s)",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, { className: "h-4 w-4 text-primary" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
							label: "Zone Entries (Controlled)",
							value: "71.2%",
							note: "+14% vs league avg",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 text-accent" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
							label: "Faceoff Win %",
							value: "56.8%",
							note: "33 of 58 won",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
							label: "Transition Speed",
							value: "28.4 km/h",
							note: "Neutral zone breakout",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-4 w-4 text-chart-3" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
							label: "Powerplay Efficiency",
							value: "33.3%",
							note: "2 goals on 6 chances",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "h-4 w-4" })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid gap-6 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LineChartCard, {
						title: "Possession Control (Corsi % by Period)",
						subtitle: "SportsMax Blades sustained high pressure through the 2nd period",
						data: shiftPacing,
						keys: ["performance"],
						unit: "%"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-card p-6 flex flex-col justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-bold uppercase tracking-wider text-primary",
								children: "Shift Fatigue Thresholds"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-bold mt-1",
								children: "Shift Duration vs Skating Velocity"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs text-muted-foreground leading-relaxed",
								children: "Data indicates a 14% drop-off in high-intensity sprint bursts when player shifts exceed 48 seconds. Keeping lines under 45 seconds ensured sustained forechecking pressure."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 grid grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-lg bg-secondary/70 p-3.5 border border-border",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] text-muted-foreground block",
										children: "Shifts < 45s"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-base font-bold text-primary",
										children: "31.2 km/h peak speed"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-lg bg-secondary/70 p-3.5 border border-border",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] text-muted-foreground block",
										children: "Shifts > 55s"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-base font-bold text-destructive",
										children: "25.8 km/h (-17%)"
									})]
								})]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 pt-4 border-t border-border flex items-center justify-between text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "Bench rotation balance: Excellent"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/sports/game-analysis",
								className: "font-bold text-primary hover:underline",
								children: "Full Tactical Analysis →"
							})]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 surface-card overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-b border-border p-5 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-bold text-base",
							children: "Line Combination Effectiveness"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground mt-0.5",
							children: "5v5 on-ice performance rates"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "sm",
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/sports",
								children: "All Sports →"
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full text-left text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
								className: "bg-secondary/70 text-muted-foreground font-semibold uppercase tracking-wider",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-3.5",
										children: "Unit"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-3.5",
										children: "Time on Ice"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-3.5",
										children: "Corsi For %"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-3.5",
										children: "Expected Goals (xGF)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-3.5",
										children: "Controlled Zone Entries"
									})
								] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
								className: "divide-y divide-border",
								children: lineCombinations.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "hover:bg-secondary/30 transition",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-3.5 font-bold text-foreground",
											children: l.line
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-3.5 text-muted-foreground font-mono",
											children: l.timeOnIce
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-3.5 font-mono font-bold text-primary",
											children: l.corsiForPct
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-3.5 font-mono text-foreground",
											children: l.xGF
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-3.5 font-semibold text-foreground",
											children: l.zoneEntryPct
										})
									]
								}, l.line))
							})]
						})
					})]
				})
			]
		})
	})] });
}
var Route$3 = createFileRoute("/sports/relay")({
	head: () => ({ meta: [{ title: "Relay & Combined Events Analytics — SportsMax" }, {
		name: "description",
		content: "Relay baton exchange box velocity differentials, decathlon/heptathlon point scoring curves, and combined events tracking."
	}] }),
	component: RelaySportPage
});
var exchangeData = [
	{
		exchange: "Leg 1 to Leg 2",
		delta: "1.74s",
		incomingSpeed: "10.42 m/s",
		outgoingSpeed: "9.85 m/s",
		efficiency: "96.4%"
	},
	{
		exchange: "Leg 2 to Leg 3",
		delta: "1.68s",
		incomingSpeed: "10.65 m/s",
		outgoingSpeed: "10.12 m/s",
		efficiency: "98.1%"
	},
	{
		exchange: "Leg 3 to Leg 4 (Anchor)",
		delta: "1.71s",
		incomingSpeed: "10.58 m/s",
		outgoingSpeed: "10.25 m/s",
		efficiency: "97.6%"
	}
];
var combinedPoints = [
	{
		event: "100m Dash",
		mark: "10.52s",
		points: 970,
		runningTotal: 970
	},
	{
		event: "Long Jump",
		mark: "7.78m",
		points: 1005,
		runningTotal: 1975
	},
	{
		event: "Shot Put",
		mark: "15.42m",
		points: 816,
		runningTotal: 2791
	},
	{
		event: "High Jump",
		mark: "2.08m",
		points: 878,
		runningTotal: 3669
	},
	{
		event: "400m Dash",
		mark: "47.88s",
		points: 915,
		runningTotal: 4584
	}
];
function RelaySportPage() {
	const [mode, setMode] = (0, import_react.useState)("relay");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		eyebrow: "Athletics · Relay & Combined Events",
		title: "Baton Exchange Velocity & Multi-Discipline Scoring",
		text: "Optimize exchange zone velocity in 4x100m / 4x400m relays and model point-progression trajectories across Decathlon and Heptathlon competitions.",
		action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-end gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoBadge, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "inline-flex rounded-md border border-border bg-secondary p-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setMode("relay"),
					className: `rounded px-3 py-1.5 text-xs font-semibold transition ${mode === "relay" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`,
					children: "4x100m / 4x400m Relay"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setMode("combined"),
					className: `rounded px-3 py-1.5 text-xs font-semibold transition ${mode === "combined" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`,
					children: "Decathlon / Combined"
				})]
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-12 bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "content-wrap",
			children: mode === "relay" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					eyebrow: "Relay Exchange Diagnostics",
					title: "4x100m National Qualifier: 37.94s",
					text: "Optical track tracking over 30-meter acceleration and takeover zones."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
							label: "Total Time",
							value: "37.94 s",
							note: "Season Best (SB)",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "h-4 w-4 text-primary" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
							label: "Avg Exchange Delta",
							value: "1.71 s",
							note: "Sub-1.75s elite benchmark",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shuffle, { className: "h-4 w-4 text-accent" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
							label: "Incoming Velocity",
							value: "10.55 m/s",
							note: "Zone entry peak",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gauge, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
							label: "Outgoing Velocity",
							value: "10.07 m/s",
							note: "Breakout acceleration",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-4 w-4 text-chart-3" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
							label: "Exchange Efficiency",
							value: "97.4%",
							note: "+2.2% vs previous run",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
							label: "Transfer Position",
							value: "18.2 m",
							note: "Optimal 17-21m mark",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Milestone, { className: "h-4 w-4" })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 surface-card p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-bold uppercase tracking-wider text-primary",
							children: "Exchange Box Modeling"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-bold",
							children: "20m Takeover + 10m Acceleration Zone"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded bg-primary/10 text-primary font-bold text-xs px-2.5 py-1",
							children: "Exchange 2: 1.68s Transfer"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "py-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
							viewBox: "0 0 740 160",
							className: "w-full h-auto",
							role: "img",
							"aria-label": "Relay Exchange Zone",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
									x: "20",
									y: "40",
									width: "700",
									height: "80",
									fill: "color-mix(in oklab, var(--primary) 5%, white)",
									stroke: "var(--border)",
									strokeWidth: "2"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
									x1: "160",
									y1: "40",
									x2: "160",
									y2: "120",
									stroke: "var(--border)",
									strokeWidth: "2",
									strokeDasharray: "4 4"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "50",
									y: "30",
									fill: "var(--muted-foreground)",
									fontSize: "11",
									children: "Pre-Zone (10m Accel)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
									x: "160",
									y: "40",
									width: "400",
									height: "80",
									fill: "color-mix(in oklab, var(--primary) 12%, transparent)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
									x1: "560",
									y1: "40",
									x2: "560",
									y2: "120",
									stroke: "var(--border)",
									strokeWidth: "2"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "290",
									y: "30",
									fill: "var(--primary)",
									fontSize: "11",
									fontWeight: "bold",
									children: "20-Meter Passing Zone"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: "420",
									cy: "80",
									r: "10",
									fill: "var(--primary)",
									stroke: "white",
									strokeWidth: "2"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "360",
									y: "145",
									fill: "var(--primary)",
									fontSize: "11",
									fontWeight: "bold",
									children: "Handoff at 18.2m"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
									x1: "220",
									y1: "70",
									x2: "380",
									y2: "70",
									stroke: "var(--accent)",
									strokeWidth: "3",
									markerEnd: "url(#arrow)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "240",
									y: "65",
									fill: "var(--accent)",
									fontSize: "10",
									children: "Incoming: 10.65 m/s"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
									x1: "420",
									y1: "90",
									x2: "580",
									y2: "90",
									stroke: "var(--chart-3)",
									strokeWidth: "3",
									markerEnd: "url(#arrow)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "460",
									y: "105",
									fill: "var(--chart-3)",
									fontSize: "10",
									children: "Outgoing: 10.12 m/s"
								})
							]
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 surface-card overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-b border-border p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-bold text-base",
							children: "Leg-by-Leg Transfer Breakdown"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground mt-0.5",
							children: "Microsecond precision splits"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full text-left text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
								className: "bg-secondary/70 text-muted-foreground font-semibold uppercase tracking-wider",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-3.5",
										children: "Exchange"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-3.5",
										children: "Transfer Delta"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-3.5",
										children: "Incoming Speed"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-3.5",
										children: "Outgoing Speed"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-3.5",
										children: "Transfer Efficiency"
									})
								] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
								className: "divide-y divide-border",
								children: exchangeData.map((ex) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "hover:bg-secondary/30 transition",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-3.5 font-bold text-foreground",
											children: ex.exchange
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-3.5 font-mono font-bold text-primary",
											children: ex.delta
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-3.5 text-muted-foreground",
											children: ex.incomingSpeed
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-3.5 text-foreground",
											children: ex.outgoingSpeed
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-3.5 font-semibold text-foreground",
											children: ex.efficiency
										})
									]
								}, ex.exchange))
							})]
						})
					})]
				})
			] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					eyebrow: "Combined Events",
					title: "Decathlon Multi-Event Scoring Tracker",
					text: "Day 1 point aggregation vs Olympic qualifying benchmark (8,350 pts target)."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4 mb-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
							label: "Current Total",
							value: "4,584 pts",
							note: "Day 1 Complete",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "h-4 w-4 text-primary" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
							label: "Target Pace",
							value: "8,420 pts",
							note: "+70 pts above benchmark",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-4 w-4 text-accent" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
							label: "Strongest Event",
							value: "Long Jump (1,005)",
							note: "7.78m (+1.4 m/s)",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
							label: "Remaining Events",
							value: "5 Events",
							note: "Day 2: Hurdles, Discus, Pole Vault, Javelin, 1500m",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "h-4 w-4" })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "surface-card overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full text-left text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "bg-secondary/70 text-muted-foreground font-semibold uppercase tracking-wider",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-6 py-3.5",
									children: "Event"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-6 py-3.5",
									children: "Mark"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-6 py-3.5",
									children: "Points"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-6 py-3.5",
									children: "Running Cumulative"
								})
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
							className: "divide-y divide-border",
							children: combinedPoints.map((cp) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "hover:bg-secondary/30 transition",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-6 py-3.5 font-bold text-foreground",
										children: cp.event
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-6 py-3.5 font-mono text-foreground",
										children: cp.mark
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
										className: "px-6 py-3.5 font-mono font-bold text-primary",
										children: [
											"+",
											cp.points,
											" pts"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
										className: "px-6 py-3.5 font-mono font-semibold text-foreground",
										children: [cp.runningTotal, " pts"]
									})
								]
							}, cp.event))
						})]
					})
				})
			] })
		})
	})] });
}
var Route$2 = createFileRoute("/sports/running")({
	head: () => ({ meta: [{ title: "Running Intelligence & Telemetry — SportsMax" }, {
		name: "description",
		content: "Advanced running performance metrics, GPS pacing splits, heart rate zone dynamics, cadence, and race time predictions."
	}] }),
	component: RunningSportPage
});
var splitsData = [
	{
		km: "Km 1",
		pace: "5:32",
		elevation: "+12m",
		hr: 142,
		cadence: 164
	},
	{
		km: "Km 2",
		pace: "5:21",
		elevation: "-4m",
		hr: 149,
		cadence: 166
	},
	{
		km: "Km 3",
		pace: "5:18",
		elevation: "+2m",
		hr: 153,
		cadence: 168
	},
	{
		km: "Km 4",
		pace: "5:15",
		elevation: "-1m",
		hr: 156,
		cadence: 169
	},
	{
		km: "Km 5",
		pace: "5:10",
		elevation: "+8m",
		hr: 158,
		cadence: 170
	},
	{
		km: "Km 6",
		pace: "5:12",
		elevation: "+0m",
		hr: 160,
		cadence: 171
	},
	{
		km: "Km 7",
		pace: "5:08",
		elevation: "-15m",
		hr: 162,
		cadence: 172
	},
	{
		km: "Km 8",
		pace: "4:59",
		elevation: "-2m",
		hr: 167,
		cadence: 175
	}
];
var hrZones = [
	{
		zone: "Zone 1: Active Recovery",
		range: "< 130 bpm",
		time: "04:12",
		pct: "9%"
	},
	{
		zone: "Zone 2: Aerobic Base",
		range: "131 - 148 bpm",
		time: "16:45",
		pct: "37%"
	},
	{
		zone: "Zone 3: Tempo / Aerobic",
		range: "149 - 162 bpm",
		time: "18:20",
		pct: "41%"
	},
	{
		zone: "Zone 4: Threshold",
		range: "163 - 174 bpm",
		time: "05:21",
		pct: "13%"
	},
	{
		zone: "Zone 5: Maximum",
		range: "> 175 bpm",
		time: "00:00",
		pct: "0%"
	}
];
function RunningSportPage() {
	const [period, setPeriod] = (0, import_react.useState)("4 weeks");
	const [activeTab, setActiveTab] = (0, import_react.useState)("splits");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		eyebrow: "Individual Sports · Running",
		title: "Running Intelligence & Biomechanics",
		text: "Continuous telemetry for road runners, sprinters, and marathoners. Analyze split distributions, stride cadence, lactate threshold drift, and aerodynamic ground contact time.",
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
		className: "py-12 bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "content-wrap",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					eyebrow: "Session Summary",
					title: "8.42 km Riverside Speed Endurance Run",
					text: "Completed Oct 03, 2026 at 06:45 AM · Optimal weather conditions (16°C, 62% humidity)",
					action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							variant: "outline",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "h-4 w-4 mr-1.5" }), " Export GPX"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/analytics",
								children: "Full Analysis →"
							})
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
							label: "Distance",
							value: "8.42 km",
							note: "Planned: 8.0 km",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Map, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
							label: "Avg Pace",
							value: "5:14 /km",
							note: "Negative split (-18s)",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
							label: "Moving Time",
							value: "44:06",
							note: "Elapsed: 44:38",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
							label: "Avg Cadence",
							value: "170 spm",
							note: "Target: 168-172",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footprints, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
							label: "Avg Heart Rate",
							value: "156 bpm",
							note: "Max: 168 bpm",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartPulse, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
							label: "Est. VO2 Max",
							value: "54.2",
							note: "+0.8 this month",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-4 w-4" })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid gap-6 lg:grid-cols-[1.3fr_0.9fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-card p-6 relative overflow-hidden flex flex-col justify-between",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between mb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-bold uppercase tracking-wider text-primary",
									children: "Telemetry Trace"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-bold",
									children: "Riverside Waterfront Circuit"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded bg-secondary px-2.5 py-1 text-xs font-mono font-semibold",
									children: "86m Elevation Gain"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative py-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
									viewBox: "0 0 740 240",
									className: "w-full h-auto",
									role: "img",
									"aria-label": "Running Route Map",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
											id: "runGlow",
											x1: "0%",
											y1: "0%",
											x2: "100%",
											y2: "0%",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
													offset: "0%",
													stopColor: "var(--primary)",
													stopOpacity: "0.2"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
													offset: "50%",
													stopColor: "var(--accent)",
													stopOpacity: "0.4"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
													offset: "100%",
													stopColor: "var(--primary)",
													stopOpacity: "0.8"
												})
											]
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
											x1: "40",
											y1: "200",
											x2: "700",
											y2: "200",
											stroke: "var(--border)",
											strokeWidth: "1",
											strokeDasharray: "4 4"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
											x1: "40",
											y1: "140",
											x2: "700",
											y2: "140",
											stroke: "var(--border)",
											strokeWidth: "1",
											strokeDasharray: "4 4"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
											x1: "40",
											y1: "80",
											x2: "700",
											y2: "80",
											stroke: "var(--border)",
											strokeWidth: "1",
											strokeDasharray: "4 4"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											d: "M 50 170 C 130 90, 220 180, 310 130 C 400 80, 520 220, 610 100 C 650 50, 680 70, 700 90",
											fill: "none",
											stroke: "var(--border)",
											strokeWidth: "14",
											strokeLinecap: "round"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											d: "M 50 170 C 130 90, 220 180, 310 130 C 400 80, 520 220, 610 100 C 650 50, 680 70, 700 90",
											fill: "none",
											stroke: "var(--primary)",
											strokeWidth: "4",
											strokeLinecap: "round"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
											cx: "50",
											cy: "170",
											r: "7",
											fill: "var(--primary)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
											x: "45",
											y: "215",
											fill: "var(--muted-foreground)",
											fontSize: "11",
											fontFamily: "sans-serif",
											children: "Km 0 (Start)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
											cx: "310",
											cy: "130",
											r: "5",
											fill: "var(--accent)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
											x: "295",
											y: "165",
											fill: "var(--muted-foreground)",
											fontSize: "11",
											fontFamily: "sans-serif",
											children: "Km 4 (5:15)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
											cx: "700",
											cy: "90",
											r: "8",
											fill: "var(--primary)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
											x: "640",
											y: "70",
											fill: "var(--primary)",
											fontSize: "11",
											fontWeight: "bold",
											fontFamily: "sans-serif",
											children: "Km 8.42 (Finish)"
										})
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-3 gap-2 pt-4 border-t border-border text-center text-xs",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground block",
										children: "Max Elevation"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-bold text-foreground",
										children: "42 m"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground block",
										children: "Min Elevation"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-bold text-foreground",
										children: "12 m"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground block",
										children: "Aerobic Efficiency"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-bold text-primary",
										children: "1.62 km / (bpm·min)"
									})] })
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LineChartCard, {
						title: "Pace Progression per Kilometer",
						subtitle: "Negative split achieved during the final 3.4 km",
						data: runTrend,
						keys: ["pace"],
						unit: " min/km"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex border-b border-border gap-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setActiveTab("splits"),
									className: `pb-3 text-sm font-bold border-b-2 transition ${activeTab === "splits" ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`,
									children: "Kilometer Splits Breakdown"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setActiveTab("zones"),
									className: `pb-3 text-sm font-bold border-b-2 transition ${activeTab === "zones" ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`,
									children: "Heart Rate Zones"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setActiveTab("gear"),
									className: `pb-3 text-sm font-bold border-b-2 transition ${activeTab === "gear" ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`,
									children: "Gear & Shoe Wear"
								})
							]
						}),
						activeTab === "splits" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 surface-card overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-x-auto",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
									className: "w-full text-left text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
										className: "bg-secondary/70 text-muted-foreground font-semibold uppercase tracking-wider",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "px-6 py-3.5",
												children: "Split"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "px-6 py-3.5",
												children: "Pace (/km)"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "px-6 py-3.5",
												children: "Elevation"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "px-6 py-3.5",
												children: "Avg Heart Rate"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "px-6 py-3.5",
												children: "Cadence (spm)"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "px-6 py-3.5",
												children: "Status"
											})
										] })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
										className: "divide-y divide-border",
										children: splitsData.map((s, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
											className: "hover:bg-secondary/30 transition",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "px-6 py-3.5 font-bold text-foreground",
													children: s.km
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "px-6 py-3.5 font-mono font-semibold text-foreground",
													children: s.pace
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "px-6 py-3.5 text-muted-foreground",
													children: s.elevation
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
													className: "px-6 py-3.5 text-foreground",
													children: [s.hr, " bpm"]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "px-6 py-3.5 text-foreground",
													children: s.cadence
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "px-6 py-3.5",
													children: idx >= 4 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "rounded bg-primary/10 text-primary font-bold px-2 py-0.5 text-[10px]",
														children: "Negative Split"
													}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "rounded bg-secondary text-muted-foreground px-2 py-0.5 text-[10px]",
														children: "On Target"
													})
												})
											]
										}, s.km))
									})]
								})
							})
						}),
						activeTab === "zones" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5",
							children: hrZones.map((z, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "surface-card p-5 border",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-xs font-bold text-primary",
											children: ["Z", idx + 1]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-mono font-bold",
											children: z.pct
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "mt-2 text-sm font-bold text-foreground",
										children: z.zone.split(":")[1]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-muted-foreground",
										children: z.range
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-4 pt-3 border-t border-border flex items-center justify-between text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "Time in zone"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono font-semibold",
											children: z.time
										})]
									})
								]
							}, z.zone))
						}),
						activeTab === "gear" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 surface-card p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-bold uppercase tracking-wider text-primary",
										children: "Tracked Equipment"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "text-lg font-bold text-foreground mt-0.5",
										children: "Nike Vaporfly 3 (Neon Green)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground mt-1",
										children: "Target retirement: 450 km · Cushioned race day super shoe"
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-primary/10 text-primary border border-primary/20 px-3 py-1 text-xs font-bold",
									children: "Optimal Cushioning"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between text-xs font-semibold mb-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Current mileage: 168.4 km" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-primary",
										children: "37% Life consumed (281.6 km remaining)"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-2.5 w-full bg-secondary rounded-full overflow-hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-full bg-primary rounded-full",
										style: { width: "37%" }
									})
								})]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 grid gap-6 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LineChartCard, {
						title: "Heart Rate vs Speed Velocity",
						subtitle: "Cardiac efficiency index over 4 weeks",
						data: runTrend,
						keys: ["heart", "speed"],
						unit: ""
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BarChartCard, {
						title: "Weekly Training Volume (km)",
						subtitle: "Consistent progressive overload without overreaching",
						data: weekly
					})]
				})
			]
		})
	})] });
}
var Route$1 = createFileRoute("/sports/swimming")({
	head: () => ({ meta: [{ title: "Swimming Analytics & SWOLF Telemetry — SportsMax" }, {
		name: "description",
		content: "High-performance swimming telemetry: SWOLF efficiency index, turn times, stroke frequency, and underwater kick phases."
	}] }),
	component: SwimmingSportPage
});
var swimTrend = [
	{
		label: "Lap 1",
		swolf: 31,
		strokeRate: 34,
		pace: 62
	},
	{
		label: "Lap 2",
		swolf: 32,
		strokeRate: 35,
		pace: 63
	},
	{
		label: "Lap 3",
		swolf: 32,
		strokeRate: 35,
		pace: 64
	},
	{
		label: "Lap 4",
		swolf: 33,
		strokeRate: 36,
		pace: 64
	},
	{
		label: "Lap 5",
		swolf: 34,
		strokeRate: 37,
		pace: 65
	},
	{
		label: "Lap 6",
		swolf: 33,
		strokeRate: 36,
		pace: 64
	},
	{
		label: "Lap 7",
		swolf: 35,
		strokeRate: 38,
		pace: 66
	},
	{
		label: "Lap 8",
		swolf: 34,
		strokeRate: 37,
		pace: 65
	}
];
var strokeBreakdown = [
	{
		stroke: "Freestyle",
		laps: "24 Laps",
		distance: "1,200m",
		avgSwolf: "31.8",
		efficiency: "94%"
	},
	{
		stroke: "Backstroke",
		laps: "12 Laps",
		distance: "600m",
		avgSwolf: "34.2",
		efficiency: "88%"
	},
	{
		stroke: "Breaststroke",
		laps: "8 Laps",
		distance: "400m",
		avgSwolf: "38.5",
		efficiency: "82%"
	},
	{
		stroke: "Butterfly",
		laps: "4 Laps",
		distance: "200m",
		avgSwolf: "36.0",
		efficiency: "86%"
	}
];
function SwimmingSportPage() {
	const [poolType, setPoolType] = (0, import_react.useState)("50m");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		eyebrow: "Individual Sports · Swimming",
		title: "Aquatics & Biomechanical SWOLF Intelligence",
		text: "Measure stroke velocity, flip-turn breakout speed, and hydrodynamic efficiency. SportsMax tracks micro-intervals across 50m Olympic and 25m short-course pools.",
		action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-end gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoBadge, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "inline-flex rounded-md border border-border bg-secondary p-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setPoolType("50m"),
					className: `rounded px-3 py-1.5 text-xs font-semibold transition ${poolType === "50m" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`,
					children: "50m Olympic Pool"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setPoolType("25m"),
					className: `rounded px-3 py-1.5 text-xs font-semibold transition ${poolType === "25m" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`,
					children: "25m Short Course"
				})]
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-12 bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "content-wrap",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					eyebrow: "Session Overview",
					title: "2,400m Threshold Interval Set",
					text: "Completed at Aquatic Center · High-speed optical lane sensors and optical wrist sensor telemetry"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
							label: "Total Distance",
							value: "2,400 m",
							note: "48 Olympic Laps",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Waves, { className: "h-4 w-4 text-accent" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
							label: "Avg SWOLF",
							value: "32.4",
							note: "Top 4% efficiency",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-4 w-4 text-primary" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
							label: "Pace / 100m",
							value: "1:04.2",
							note: "-1.4s vs baseline",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
							label: "Stroke Rate",
							value: "35.8 spm",
							note: "Optimal cadence",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gauge, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
							label: "Turn Time",
							value: "1.42 s",
							note: "Breakout at 11.2m",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
							label: "Active Duration",
							value: "38:14",
							note: "Rest time: 06:20",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, { className: "h-4 w-4" })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LineChartCard, {
						title: "SWOLF Index vs Stroke Cadence",
						subtitle: "Lower SWOLF values indicate higher hydrodynamic stroke efficiency",
						data: swimTrend,
						keys: ["swolf", "strokeRate"],
						unit: ""
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-card p-6 flex flex-col justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-bold uppercase tracking-wider text-primary",
									children: "Flip-Turn Kinematics"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-mono font-bold text-accent",
									children: "1.42s avg"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-bold mt-2",
								children: "Wall Approach & Push-off Velocity"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs text-muted-foreground leading-relaxed",
								children: "Deceleration occurs 1.8 meters before the wall. Push-off generates an initial velocity of 2.84 m/s, stabilizing into a 6-kick butterfly underwater phase before stroke breakout."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 grid grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-lg bg-secondary/70 p-3 border border-border/60",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] text-muted-foreground block",
										children: "Breakout Distance"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-base font-bold text-foreground",
										children: "11.4 m"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-lg bg-secondary/70 p-3 border border-border/60",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] text-muted-foreground block",
										children: "Push-off Force"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-base font-bold text-foreground",
										children: "840 N"
									})]
								})]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 pt-4 border-t border-border flex items-center justify-between text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "Stroke length: 2.14 m/stroke"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-bold text-primary",
								children: "Elite Tier"
							})]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 surface-card overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-b border-border p-5 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-bold text-base",
							children: "Stroke Distribution & Efficiency"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground mt-0.5",
							children: "Four-stroke medley distribution"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "sm",
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/sports",
								children: "All Sports →"
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full text-left text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
								className: "bg-secondary/70 text-muted-foreground font-semibold uppercase tracking-wider",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-3.5",
										children: "Stroke Type"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-3.5",
										children: "Volume"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-3.5",
										children: "Distance"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-3.5",
										children: "Avg SWOLF"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-3.5",
										children: "Hydrodynamic Score"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-3.5",
										children: "Action"
									})
								] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
								className: "divide-y divide-border",
								children: strokeBreakdown.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "hover:bg-secondary/30 transition",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-3.5 font-bold text-foreground",
											children: s.stroke
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-3.5 text-muted-foreground",
											children: s.laps
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-3.5 font-mono text-foreground",
											children: s.distance
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-3.5 font-mono font-bold text-primary",
											children: s.avgSwolf
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-3.5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded bg-primary/10 text-primary font-bold px-2 py-0.5 text-[10px]",
												children: s.efficiency
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-3.5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												variant: "ghost",
												size: "sm",
												className: "h-7 text-xs text-primary",
												children: "View Splits"
											})
										})
									]
								}, s.stroke))
							})]
						})
					})]
				})
			]
		})
	})] });
}
var Route = createFileRoute("/sports/athletics/high-jump")({
	head: () => ({ meta: [{ title: "High Jump & Athletics Intelligence — SportsMax" }, {
		name: "description",
		content: "High jump approach speed, takeoff angle, bar clearance trajectory, and comprehensive track & field telemetry."
	}] }),
	component: AthleticsHighJumpPage
});
var jumpAttempts = [
	{
		height: "2.15 m",
		result: "Cleared (O)",
		approachSpeed: "7.82 m/s",
		takeoffAngle: "51.2°",
		clearanceMargin: "+8.4 cm"
	},
	{
		height: "2.20 m",
		result: "Cleared (XO)",
		approachSpeed: "7.94 m/s",
		takeoffAngle: "52.0°",
		clearanceMargin: "+5.1 cm"
	},
	{
		height: "2.24 m",
		result: "Cleared (O)",
		approachSpeed: "8.08 m/s",
		takeoffAngle: "52.8°",
		clearanceMargin: "+3.8 cm"
	},
	{
		height: "2.28 m",
		result: "Cleared (XXO)",
		approachSpeed: "8.14 m/s",
		takeoffAngle: "53.4°",
		clearanceMargin: "+1.9 cm (PB)"
	},
	{
		height: "2.31 m",
		result: "Missed (XXX)",
		approachSpeed: "8.22 m/s",
		takeoffAngle: "49.6°",
		clearanceMargin: "-2.4 cm (Heel clip)"
	}
];
var kinematicsCurve = [
	{
		label: "Step -5",
		speed: 6.8,
		force: 1200
	},
	{
		label: "Step -4",
		speed: 7.2,
		force: 1450
	},
	{
		label: "Step -3",
		speed: 7.6,
		force: 1800
	},
	{
		label: "Step -2 (Curvature)",
		speed: 7.9,
		force: 2400
	},
	{
		label: "Penultimate",
		speed: 8.1,
		force: 2900
	},
	{
		label: "Plant Foot",
		speed: 8.14,
		force: 4800
	},
	{
		label: "Takeoff Flight",
		speed: 4.8,
		force: 0
	}
];
function AthleticsHighJumpPage() {
	const [activeDiscipline, setActiveDiscipline] = (0, import_react.useState)("high-jump");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		eyebrow: "Athletics & Track · Field Events",
		title: "High Jump Kinematics & Bar Clearance",
		text: "Computer-vision bar clearance tracking, curve approach velocity vectors, and takeoff ground reaction force for elite track and field athletes.",
		action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-end gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoBadge, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-1 bg-secondary p-1 rounded-lg border border-border",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setActiveDiscipline("high-jump"),
						className: `px-3 py-1.5 rounded text-xs font-bold transition ${activeDiscipline === "high-jump" ? "bg-primary text-primary-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"}`,
						children: "High Jump"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setActiveDiscipline("sprints"),
						className: `px-3 py-1.5 rounded text-xs font-bold transition ${activeDiscipline === "sprints" ? "bg-primary text-primary-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"}`,
						children: "Sprints (100-400m)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setActiveDiscipline("distance"),
						className: `px-3 py-1.5 rounded text-xs font-bold transition ${activeDiscipline === "distance" ? "bg-primary text-primary-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"}`,
						children: "Distance Events"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setActiveDiscipline("throws"),
						className: `px-3 py-1.5 rounded text-xs font-bold transition ${activeDiscipline === "throws" ? "bg-primary text-primary-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"}`,
						children: "Jumps & Throws"
					})
				]
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-12 bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "content-wrap",
			children: [activeDiscipline === "high-jump" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					eyebrow: "Competition Diagnostic",
					title: "Personal Best Performance: 2.28 meters",
					text: "Fosbury Flop biomechanics captured via 120fps high-speed side and top optical motion tracking."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
							label: "Best Clearance",
							value: "2.28 m",
							note: "New Personal Best",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "h-4 w-4 text-primary" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
							label: "Approach Speed",
							value: "8.14 m/s",
							note: "Penultimate step peak",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gauge, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
							label: "Takeoff Angle",
							value: "53.4°",
							note: "Optimal window: 50-55°",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 text-accent" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
							label: "Vertical Velocity",
							value: "4.62 m/s",
							note: "+0.18 m/s vs average",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-4 w-4 text-chart-3" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
							label: "Plant Ground Force",
							value: "4.8 kN",
							note: "6.1x body weight",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
							label: "Bar Clearance Margin",
							value: "+1.9 cm",
							note: "Pelvis apex clearance",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crosshair, { className: "h-4 w-4" })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-card p-6 flex flex-col justify-between",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between mb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-bold uppercase tracking-wider text-primary",
									children: "Trajectory Modeling"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-bold",
									children: "Fosbury Flop Flight Parabola"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded bg-primary/10 text-primary px-2.5 py-1 text-xs font-bold",
									children: "Apex: 2.312m (Bar at 2.28m)"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "py-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
									viewBox: "0 0 700 240",
									className: "w-full h-auto",
									role: "img",
									"aria-label": "High Jump Clearance Curve",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
											x1: "50",
											y1: "210",
											x2: "650",
											y2: "210",
											stroke: "var(--border)",
											strokeWidth: "2"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
											x: "50",
											y: "230",
											fill: "var(--muted-foreground)",
											fontSize: "11",
											fontFamily: "sans-serif",
											children: "Approach Runway"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
											x: "520",
											y: "230",
											fill: "var(--muted-foreground)",
											fontSize: "11",
											fontFamily: "sans-serif",
											children: "Landing Mat"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
											x1: "420",
											y1: "210",
											x2: "420",
											y2: "70",
											stroke: "var(--muted-foreground)",
											strokeWidth: "3"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
											x1: "480",
											y1: "210",
											x2: "480",
											y2: "70",
											stroke: "var(--muted-foreground)",
											strokeWidth: "3"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
											x1: "400",
											y1: "80",
											x2: "500",
											y2: "80",
											stroke: "var(--destructive)",
											strokeWidth: "4",
											strokeLinecap: "round"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
											x: "415",
											y: "70",
											fill: "var(--destructive)",
											fontSize: "11",
											fontWeight: "bold",
											fontFamily: "sans-serif",
											children: "Bar: 2.28 m"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											d: "M 120 210 Q 320 200 370 170 Q 450 40 560 190",
											fill: "none",
											stroke: "var(--primary)",
											strokeWidth: "4",
											strokeLinecap: "round"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
											cx: "370",
											cy: "170",
											r: "6",
											fill: "var(--accent)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
											x: "310",
											y: "160",
											fill: "var(--accent)",
											fontSize: "11",
											fontWeight: "bold",
											fontFamily: "sans-serif",
											children: "Takeoff (53.4°)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
											cx: "450",
											cy: "62",
											r: "6",
											fill: "var(--primary)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
											x: "465",
											y: "58",
											fill: "var(--primary)",
											fontSize: "11",
											fontWeight: "bold",
											fontFamily: "sans-serif",
											children: "Apex +1.9cm"
										})
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-3 gap-3 pt-4 border-t border-border text-center text-xs",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground block",
										children: "Curvature Inward Lean"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-bold text-foreground",
										children: "22.4° inward"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground block",
										children: "Time to Apex"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-bold text-foreground",
										children: "0.48 seconds"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground block",
										children: "Bar Center Offset"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-bold text-primary",
										children: "+3.2 cm centered"
									})] })
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LineChartCard, {
						title: "Approach Step Force & Acceleration",
						subtitle: "Ground reaction forces through final five steps",
						data: kinematicsCurve,
						keys: ["speed"],
						unit: " m/s"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 surface-card overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-b border-border p-5 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-bold text-base",
							children: "Session Attempt Series"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground mt-0.5",
							children: "Attempt-by-attempt diagnostic data"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "sm",
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/sports",
								children: "All Sports →"
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full text-left text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
								className: "bg-secondary/70 text-muted-foreground font-semibold uppercase tracking-wider",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-3.5",
										children: "Height"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-3.5",
										children: "Result"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-3.5",
										children: "Approach Velocity"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-3.5",
										children: "Takeoff Angle"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-3.5",
										children: "Clearance Margin"
									})
								] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
								className: "divide-y divide-border",
								children: jumpAttempts.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "hover:bg-secondary/30 transition",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-3.5 font-bold font-mono text-foreground",
											children: a.height
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-3.5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `rounded px-2 py-0.5 text-[10px] font-bold ${a.result.includes("Cleared") ? "bg-primary/10 text-primary" : "bg-destructive/10 text-destructive"}`,
												children: a.result
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-3.5 text-foreground",
											children: a.approachSpeed
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-3.5 font-mono",
											children: a.takeoffAngle
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-3.5 font-semibold text-primary",
											children: a.clearanceMargin
										})
									]
								}, a.height))
							})]
						})
					})]
				})
			] }), activeDiscipline !== "high-jump" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "surface-card p-10 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "h-7 w-7" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xl font-bold capitalize",
						children: activeDiscipline === "sprints" ? "Sprints Track Intelligence (100m - 400m)" : activeDiscipline === "distance" ? "Middle & Long Distance Events" : "Field Jumps & Throws (Long Jump, Shotput, Javelin)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-xl mx-auto text-sm text-muted-foreground",
						children: "Dedicated sensors measure starting block reaction times, stride cadence drift, aerodynamic release angles, and velocity vectors."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex justify-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: () => setActiveDiscipline("high-jump"),
							children: "Return to High Jump Model"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/sports/running",
								children: "View Running Telemetry"
							})
						})]
					})
				]
			})]
		})
	})] });
}
var IndexRoute = Route$27.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$28
});
var AboutRoute = Route$26.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$28
});
var AnalyticsRoute = Route$25.update({
	id: "/analytics",
	path: "/analytics",
	getParentRoute: () => Route$28
});
var AthletePerformanceRoute = Route$24.update({
	id: "/athlete-performance",
	path: "/athlete-performance",
	getParentRoute: () => Route$28
});
var AthletesRoute = Route$23.update({
	id: "/athletes",
	path: "/athletes",
	getParentRoute: () => Route$28
});
var CareersRoute = Route$22.update({
	id: "/careers",
	path: "/careers",
	getParentRoute: () => Route$28
});
var CoachesRoute = Route$21.update({
	id: "/coaches",
	path: "/coaches",
	getParentRoute: () => Route$28
});
var CommunityRoute = Route$20.update({
	id: "/community",
	path: "/community",
	getParentRoute: () => Route$28
});
var ContactRoute = Route$19.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$28
});
var DashboardRoute = Route$18.update({
	id: "/dashboard",
	path: "/dashboard",
	getParentRoute: () => Route$28
});
var EcosystemRoute = Route$17.update({
	id: "/ecosystem",
	path: "/ecosystem",
	getParentRoute: () => Route$28
});
var HelpRoute = Route$16.update({
	id: "/help",
	path: "/help",
	getParentRoute: () => Route$28
});
var InsightsRoute = Route$15.update({
	id: "/insights",
	path: "/insights",
	getParentRoute: () => Route$28
});
var PlatformRoute = Route$14.update({
	id: "/platform",
	path: "/platform",
	getParentRoute: () => Route$28
});
var PricingRoute = Route$13.update({
	id: "/pricing",
	path: "/pricing",
	getParentRoute: () => Route$28
});
var PrivacyRoute = Route$12.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$28
});
var RecommendationsRoute = Route$11.update({
	id: "/recommendations",
	path: "/recommendations",
	getParentRoute: () => Route$28
});
var ResourcesRoute = Route$10.update({
	id: "/resources",
	path: "/resources",
	getParentRoute: () => Route$28
});
var RunAnalyticsRoute = Route$9.update({
	id: "/run-analytics",
	path: "/run-analytics",
	getParentRoute: () => Route$28
});
var TermsRoute = Route$8.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => Route$28
});
var SportsIndexRoute = Route$7.update({
	id: "/sports/",
	path: "/sports/",
	getParentRoute: () => Route$28
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	AnalyticsRoute,
	AthletePerformanceRoute,
	AthletesRoute,
	CareersRoute,
	CoachesRoute,
	CommunityRoute,
	ContactRoute,
	DashboardRoute,
	EcosystemRoute,
	HelpRoute,
	InsightsRoute,
	PlatformRoute,
	PricingRoute,
	PrivacyRoute,
	RecommendationsRoute,
	ResourcesRoute,
	RunAnalyticsRoute,
	TermsRoute,
	SportsFootballRoute: Route$6.update({
		id: "/sports/football",
		path: "/sports/football",
		getParentRoute: () => Route$28
	}),
	SportsGameAnalysisRoute: Route$5.update({
		id: "/sports/game-analysis",
		path: "/sports/game-analysis",
		getParentRoute: () => Route$28
	}),
	SportsHockeyRoute: Route$4.update({
		id: "/sports/hockey",
		path: "/sports/hockey",
		getParentRoute: () => Route$28
	}),
	SportsRelayRoute: Route$3.update({
		id: "/sports/relay",
		path: "/sports/relay",
		getParentRoute: () => Route$28
	}),
	SportsRunningRoute: Route$2.update({
		id: "/sports/running",
		path: "/sports/running",
		getParentRoute: () => Route$28
	}),
	SportsSwimmingRoute: Route$1.update({
		id: "/sports/swimming",
		path: "/sports/swimming",
		getParentRoute: () => Route$28
	}),
	SportsIndexRoute,
	SportsAthleticsHighJumpRoute: Route.update({
		id: "/sports/athletics/high-jump",
		path: "/sports/athletics/high-jump",
		getParentRoute: () => Route$28
	})
};
var routeTree = Route$28._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
