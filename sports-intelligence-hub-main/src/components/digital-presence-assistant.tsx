import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "@tanstack/react-router";
import { MessageCircle, X, Navigation, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

// Utility: Time-based greeting
function getTimeBasedGreeting() {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return "Good Morning! 🌅";
  if (hour >= 12 && hour < 17) return "Good Afternoon! ☀️";
  if (hour >= 17 && hour < 21) return "Good Evening! 🌆";
  return "Good Night! 🌙";
}

// Utility: Navigation Suggestions
const SUGGESTION_MAP: Record<string, { next: string; text: string }> = {
  "/dashboard": { next: "/run-analytics", text: "You may want to explore Run Analytics next." },
  "/run-analytics": { next: "/athlete-performance", text: "Want deeper athlete insights? Try Athlete Performance." },
  "/athlete-performance": { next: "/recommendations", text: "You may want to explore Recommendations next." },
  "/insights": { next: "/recommendations", text: "Looking for actionable guidance? Check Recommendations." },
  "/recommendations": { next: "/dashboard", text: "Want to explore your overall activity? Return to Dashboard." },
  "/": { next: "/sports", text: "Ready to explore? Check out our Sports directory." },
};

function getNavigationSuggestion(currentPath: string) {
  return SUGGESTION_MAP[currentPath] || { next: "/", text: "Want to explore another SportsMax feature?" };
}

// Format path for display
function formatPathName(path: string) {
  if (path === "/") return "Home";
  return path
    .replace(/^\//, "")
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function DigitalPresenceAssistant() {
  const location = useLocation();
  const currentPath = location.pathname;

  const [isOpen, setIsOpen] = useState(false);
  const [popupMsg, setPopupMsg] = useState<{ title: string; desc: string } | null>(null);
  
  const [visitorState, setVisitorState] = useState({
    isNew: false,
    visitorId: "",
    sessionId: "",
  });

  const prevPathRef = useRef<string | null>(null);
  const hasGreetedSession = useRef(false);

  // Initialize tracking
  useEffect(() => {
    let vId = localStorage.getItem("smx_visitorId");
    let isNew = false;
    if (!vId) {
      vId = "v_" + Math.random().toString(36).substring(2, 9);
      localStorage.setItem("smx_visitorId", vId);
      isNew = true;
    }
    const sId = "s_" + Math.random().toString(36).substring(2, 9);
    
    setVisitorState({ isNew, visitorId: vId, sessionId: sId });
    
    // Feature 1 & 2: Time-based & New/Returning Greeting
    if (!hasGreetedSession.current) {
      const timeGreeting = getTimeBasedGreeting();
      const userGreeting = isNew ? "Welcome to SportsMax!" : "Welcome back!";
      
      setPopupMsg({
        title: timeGreeting,
        desc: `${userGreeting} 👋`,
      });
      
      trackEvent("greeting_shown", { type: isNew ? "new" : "returning", visitorId: vId });
      
      setTimeout(() => setPopupMsg(null), 5000);
      hasGreetedSession.current = true;
    }
  }, []);

  // Track Navigation & Popup Context
  useEffect(() => {
    if (prevPathRef.current && prevPathRef.current !== currentPath) {
      const prevName = formatPathName(prevPathRef.current);
      const currName = formatPathName(currentPath);
      const suggestion = getNavigationSuggestion(currentPath);
      
      setPopupMsg({
        title: "Navigation Insight",
        desc: `Previously you were viewing ${prevName}. Now you're exploring ${currName}. ${suggestion.text}`,
      });

      trackEvent("navigation_context_shown", {
        from: prevPathRef.current,
        to: currentPath,
        suggestion: suggestion.next,
      });

      setTimeout(() => setPopupMsg(null), 6000);
    }
    prevPathRef.current = currentPath;
  }, [currentPath]);

  // Analytics — sends event to Google Apps Script backend, falls back to console.log in dev
  const trackEvent = (eventName: string, data: Record<string, unknown>) => {
    const payload = {
      event: eventName,
      ...data,
      timestamp: new Date().toISOString(),
      visitorId: visitorState.visitorId,
      sessionId: visitorState.sessionId,
      path: currentPath,
      referrer: typeof document !== "undefined" ? document.referrer : "",
      userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
    };

    // Always log for debugging
    console.log(`[Analytics Track] ${eventName}:`, payload);

    const analyticsUrl = import.meta.env["VITE_ANALYTICS_URL"] as string | undefined;

    if (!analyticsUrl) {
      // URL not configured — skip network send (expected in local dev without .env)
      return;
    }

    // IMPORTANT: We use text/plain;charset=UTF-8 intentionally.
    // application/json triggers a CORS preflight (OPTIONS) which Google Apps Script
    // /exec does NOT handle, causing the browser to block the request.
    // text/plain is a CORS-safe "simple" content type — no preflight is sent.
    // The body is still valid JSON; Apps Script reads it via JSON.parse(e.postData.contents).
    const body = JSON.stringify(payload);

    // Try sendBeacon first — fire-and-forget, survives page unloads, no preflight
    const sent =
      typeof navigator !== "undefined" &&
      typeof navigator.sendBeacon === "function" &&
      navigator.sendBeacon(
        analyticsUrl,
        new Blob([body], { type: "text/plain;charset=UTF-8" }),
      );

    if (!sent) {
      // Beacon unavailable or returned false — fall back to fetch
      fetch(analyticsUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          // text/plain avoids an OPTIONS preflight; body remains JSON
          "Content-Type": "text/plain;charset=UTF-8",
        },
        body,
        keepalive: true,
      }).catch(() => {
        // Silently swallow network errors so analytics never breaks the UI
      });
    }
  };

  const handleOpenChatbot = () => {
    setIsOpen(true);
    setPopupMsg(null); // Hide popup when chatbot opens
    trackEvent("chatbot_opened", {});
  };

  const handleSuggestionClick = (path: string) => {
    trackEvent("chatbot_suggestion_clicked", { target: path });
    // Note: Use router push if needed, relying on native <a> for simplicity here
    window.location.href = path;
  };

  const currentSuggestion = getNavigationSuggestion(currentPath);
  const timeGreeting = getTimeBasedGreeting();

  return (
    <>
      {/* Toast Popup */}
      {popupMsg && !isOpen && (
        <div className="fixed top-24 right-6 z-50 animate-in slide-in-from-top-5 fade-in duration-300">
          <div className="bg-card border shadow-lg rounded-xl p-4 max-w-sm flex items-start gap-3">
            <div className="mt-1 text-primary">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-semibold mb-1">{popupMsg.title}</h4>
              <p className="text-sm text-muted-foreground">{popupMsg.desc}</p>
            </div>
            <button 
              onClick={() => setPopupMsg(null)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Chatbot Interface */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 bg-card border shadow-xl rounded-2xl overflow-hidden animate-in zoom-in-95 duration-200">
          <div className="bg-primary p-4 text-primary-foreground flex justify-between items-center">
            <h3 className="font-semibold flex items-center gap-2">
              <MessageCircle className="w-5 h-5" /> Assistant
            </h3>
            <button onClick={() => setIsOpen(false)} className="hover:opacity-80">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="p-4 bg-muted/30 h-64 overflow-y-auto flex flex-col gap-3">
            <div className="bg-background border rounded-lg p-3 text-sm">
              {timeGreeting} 👋 {visitorState.isNew ? "Welcome to SportsMax." : "Welcome back!"}
            </div>
            <div className="bg-background border rounded-lg p-3 text-sm">
              You're currently exploring <strong>{formatPathName(currentPath)}</strong>.
            </div>
            <div className="bg-primary/10 border-primary/20 border rounded-lg p-3 text-sm">
              <div className="font-medium mb-2 flex items-center gap-2 text-primary">
                <Navigation className="w-4 h-4" /> What should I check next?
              </div>
              <p className="text-muted-foreground mb-3">{currentSuggestion.text}</p>
              <Button 
                size="sm" 
                className="w-full"
                onClick={() => handleSuggestionClick(currentSuggestion.next)}
              >
                Go to {formatPathName(currentSuggestion.next)}
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* FAB */}
      <button
        onClick={isOpen ? () => setIsOpen(false) : handleOpenChatbot}
        className="fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground p-4 rounded-full shadow-xl hover:shadow-primary/25 hover:scale-105 transition-all duration-200"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </>
  );
}
