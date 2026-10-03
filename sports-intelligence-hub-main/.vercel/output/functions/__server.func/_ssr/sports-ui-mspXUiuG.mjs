import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { c as TrendingUp, k as Info, tt as ArrowUpRight, u as Sparkles } from "../_libs/lucide-react.mjs";
import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as XAxis, c as CartesianGrid, d as Tooltip, i as YAxis, l as Bar, n as BarChart, o as Area, r as LineChart, s as Line, t as AreaChart, u as ResponsiveContainer } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sports-ui-mspXUiuG.js
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function DemoBadge() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" }), "Demo data"]
	});
}
function Eyebrow({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-primary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-7 bg-primary" }), children]
	});
}
function PageIntro({ eyebrow, title, text, action }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "page-intro",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "content-wrap grid gap-7 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: eyebrow }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-balance text-4xl font-semibold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg",
						children: text
					})
				]
			}), action]
		})
	});
}
function SectionHead({ eyebrow, title, text, action }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-8 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [
				eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: eyebrow }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-balance text-2xl font-semibold sm:text-3xl",
					children: title
				}),
				text && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl leading-7 text-muted-foreground",
					children: text
				})
			]
		}), action]
	});
}
function MetricCard({ label, value, note, icon }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "metric-card",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground",
					children: label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-primary",
					children: icon ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-4 w-4" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 text-3xl font-semibold tabular-nums text-foreground",
				children: value
			}),
			note && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-xs text-muted-foreground",
				children: note
			})
		]
	});
}
var tooltipStyle = {
	backgroundColor: "var(--popover)",
	border: "1px solid var(--border)",
	borderRadius: "8px",
	color: "var(--popover-foreground)",
	fontSize: "12px",
	boxShadow: "0 10px 25px -5px rgba(15, 23, 42, 0.1)"
};
function LineChartCard({ title, subtitle, data, keys = ["performance"], unit = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "chart-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-semibold",
				children: title
			}), subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-muted-foreground",
				children: subtitle
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-64 w-full",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
				width: "100%",
				height: "100%",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
					data,
					margin: {
						top: 8,
						right: 8,
						left: -22,
						bottom: 0
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
							stroke: "var(--border)",
							strokeDasharray: "3 3",
							vertical: false
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
							dataKey: "label",
							stroke: "var(--muted-foreground)",
							tickLine: false,
							axisLine: false
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
							stroke: "var(--muted-foreground)",
							tickLine: false,
							axisLine: false
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
							contentStyle: tooltipStyle,
							formatter: (value) => [`${value}${unit}`, ""]
						}),
						keys.map((key, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
							type: "monotone",
							dataKey: key,
							stroke: i === 0 ? "var(--primary)" : "var(--chart-2)",
							strokeWidth: 2.5,
							dot: false,
							activeDot: { r: 5 }
						}, key))
					]
				})
			})
		})]
	});
}
function BarChartCard({ title, subtitle, data, dataKey = "distance" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "chart-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-semibold",
				children: title
			}), subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-muted-foreground",
				children: subtitle
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-64 w-full",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
				width: "100%",
				height: "100%",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
					data,
					margin: {
						top: 8,
						right: 8,
						left: -22,
						bottom: 0
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
							stroke: "var(--border)",
							strokeDasharray: "3 3",
							vertical: false
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
							dataKey: "label",
							stroke: "var(--muted-foreground)",
							tickLine: false,
							axisLine: false
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
							stroke: "var(--muted-foreground)",
							tickLine: false,
							axisLine: false
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: tooltipStyle }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
							dataKey,
							fill: "var(--primary)",
							radius: [
								3,
								3,
								0,
								0
							]
						})
					]
				})
			})
		})]
	});
}
function AreaChartCard({ title, data }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "chart-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "mb-6 font-semibold",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-64",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
				data,
				margin: {
					top: 8,
					right: 8,
					left: -22,
					bottom: 0
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
						id: "areaFill",
						x1: "0",
						y1: "0",
						x2: "0",
						y2: "1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "0%",
							stopColor: "var(--primary)",
							stopOpacity: .35
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "100%",
							stopColor: "var(--primary)",
							stopOpacity: 0
						})]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
						stroke: "var(--border)",
						strokeDasharray: "3 3",
						vertical: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
						dataKey: "label",
						stroke: "var(--muted-foreground)",
						tickLine: false,
						axisLine: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
						stroke: "var(--muted-foreground)",
						tickLine: false,
						axisLine: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: tooltipStyle }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
						type: "monotone",
						dataKey: "performance",
						stroke: "var(--primary)",
						fill: "url(#areaFill)",
						strokeWidth: 2.5
					})
				]
			}) })
		})]
	});
}
function InsightCard({ type, title, detail, metric, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: cn("group surface-card p-5 transition hover:border-primary/35", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[11px] font-bold uppercase tracking-[0.14em] text-primary",
					children: type
				}), metric && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-sm text-foreground",
					children: metric
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-4 text-lg font-semibold",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-6 text-muted-foreground",
				children: detail
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 flex items-center gap-2 text-xs font-semibold text-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 text-primary" }), "Generated from performance signals"]
			})
		]
	});
}
function Workflow({ title, steps, description }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "surface-card overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-b border-border p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-bold uppercase tracking-[0.14em] text-primary",
					children: "Automation flow"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-2 text-xl font-semibold",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-6 text-muted-foreground",
					children: description
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-0 p-4 sm:grid-cols-3 lg:grid-cols-6",
			children: steps.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex min-h-24 items-center gap-3 border-b border-border p-3 last:border-0 sm:border-b-0 sm:border-r sm:last:border-r-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-8 w-8 shrink-0 place-items-center rounded-md bg-primary/10 font-mono text-xs font-bold text-primary",
						children: String(index + 1).padStart(2, "0")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm font-medium",
						children: step
					}),
					index < steps.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "absolute right-1 top-2 h-3.5 w-3.5 text-muted-foreground" })
				]
			}, step))
		})]
	});
}
function DemoNotice({ children = "Analytics-based demo guidance. Not medical advice." }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-start gap-3 rounded-md border border-accent/30 bg-accent/10 p-4 text-sm text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "mt-0.5 h-4 w-4 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children })]
	});
}
function Segmented({ values, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "inline-flex rounded-md border border-border bg-secondary p-1",
		role: "group",
		"aria-label": "Time period",
		children: values.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: () => onChange(item),
			className: cn("rounded px-3 py-1.5 text-xs font-semibold transition", value === item ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"),
			children: item
		}, item))
	});
}
//#endregion
export { InsightCard as a, PageIntro as c, Workflow as d, cn as f, DemoNotice as i, SectionHead as l, BarChartCard as n, LineChartCard as o, DemoBadge as r, MetricCard as s, AreaChartCard as t, Segmented as u };
