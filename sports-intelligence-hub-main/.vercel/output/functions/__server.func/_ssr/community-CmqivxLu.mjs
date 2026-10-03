import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { C as Medal, F as Flag, X as CalendarDays, a as Users, h as Search, o as Trophy } from "../_libs/lucide-react.mjs";
import { c as PageIntro, l as SectionHead, r as DemoBadge, u as Segmented } from "./sports-ui-mspXUiuG.mjs";
import { r as leaderboard } from "./sports-data-0K1P3zKO.mjs";
import { t as Input } from "./input-CVsL8r7Y.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/community-CmqivxLu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var posts = [
	{
		name: "Maya Chen",
		time: "18 min ago",
		text: "New 5K personal best: 24:42. Consistent tempo work is paying off.",
		tag: "Personal best"
	},
	{
		name: "Northside Run Club",
		time: "1 hr ago",
		text: "Our community crossed 10,000 km in the September distance challenge.",
		tag: "Milestone"
	},
	{
		name: "Leo Martins",
		time: "3 hrs ago",
		text: "Twelve-day training streak complete with recovery balance maintained.",
		tag: "Consistency"
	}
];
function Community() {
	const [period, setPeriod] = (0, import_react.useState)("Weekly");
	const [q, setQ] = (0, import_react.useState)("");
	const rows = (0, import_react.useMemo)(() => leaderboard.filter((x) => x.name.toLowerCase().includes(q.toLowerCase())), [q]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		eyebrow: "Sports community",
		title: "Performance is better when it is shared.",
		text: "Connect achievements, challenges, events, and athlete intelligence across an active sports community.",
		action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoBadge, {})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "content-wrap",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					title: "Active challenges",
					text: "Join community goals powered by verified demo activity data."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 md:grid-cols-3",
					children: [
						[
							"10K Challenge",
							"2,340 participants",
							"68% complete",
							Flag
						],
						[
							"Weekly Distance",
							"1,245 participants",
							"42 km average",
							Users
						],
						[
							"Personal Best",
							"856 participants",
							"312 PBs this week",
							Trophy
						]
					].map(([title, count, note, Ico]) => {
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "surface-card p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ico, { className: "h-7 w-7 text-primary" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-6 text-xl font-semibold",
									children: String(title)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: String(count)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-5 h-1.5 overflow-hidden rounded-full bg-secondary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-2/3 rounded-full bg-primary" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-xs text-accent",
									children: String(note)
								})
							]
						}, String(title));
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 grid gap-6 lg:grid-cols-[.8fr_1.2fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, { title: "Community feed" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-3",
						children: posts.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "surface-card p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-9 w-9 place-items-center rounded-full bg-accent/15 font-bold text-accent",
										children: p.name.slice(0, 1)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-semibold",
										children: p.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: p.time
									})] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] font-semibold text-primary",
									children: p.tag
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm leading-6 text-muted-foreground",
								children: p.text
							})]
						}, p.name))
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-8 grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-semibold",
							children: "Leaderboard"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "Top community performances"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Segmented, {
							values: [
								"Weekly",
								"Monthly",
								"All time"
							],
							value: period,
							onChange: setPeriod
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-card overflow-hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "border-b border-border p-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "relative block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: q,
									onChange: (e) => setQ(e.target.value),
									placeholder: "Search athletes",
									className: "pl-9"
								})]
							})
						}), rows.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-[40px_minmax(0,1fr)_auto] items-center gap-3 border-b border-border p-4 last:border-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono text-sm text-primary",
									children: ["#", r.rank]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "truncate text-sm font-semibold",
										children: r.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-muted-foreground",
										children: [
											r.sessions,
											" sessions · ",
											r.achievement
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-sm",
									children: r.distance
								})
							]
						}, r.name))]
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 border-t border-border pt-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
						title: "Fan engagement",
						text: "Analytics turns every result into a richer story."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
						children: [
							[
								"Athlete updates",
								"Live performance narratives",
								Medal
							],
							[
								"Event insights",
								"Context around every result",
								CalendarDays
							],
							[
								"Milestones",
								"Celebrate progress together",
								Trophy
							],
							[
								"Interactive stats",
								"Explore form and trends",
								Users
							]
						].map(([a, b, Ico]) => {
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-l border-primary p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ico, { className: "h-5 w-5 text-primary" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-5 font-semibold",
										children: String(a)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-muted-foreground",
										children: String(b)
									})
								]
							}, String(a));
						})
					})]
				})
			]
		})
	})] });
}
//#endregion
export { Community as component };
