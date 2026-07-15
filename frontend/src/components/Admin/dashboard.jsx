"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "./sidebar";

const C = {
  sand: "#f2ede6",
  sandMid: "#e8e0d4",
  sandDeep: "#d9cfc1",
  cream: "#faf7f2",
  bark: "#5c4a32",
  barkDeep: "#3d3020",
  clay: "#b5704a",
  claySoft: "#d4956e",
  olive: "#6b7057",
  stone: "#8a7f72",
  stoneLt: "#b5afa7",
  ink: "#2c251c",
};

export default function AdminDashboard() {
  const [loading, setLoading] = useState(true);
  const [adminName, setAdminName] = useState("Admin");
  const [hoveredAction, setHoveredAction] = useState(null);
  const [logoutHovered, setLogoutHovered] = useState(false);
  const [stats, setStats] = useState({
    portfolioItems: 0,
    totalUsers: 0,
    storageUsed: "0 MB",
    activeSessions: 0,
  });
  const router = useRouter();

  useEffect(() => {
    localStorage.getItem("token");
    setTimeout(() => {
      setStats({
        portfolioItems: 24,
        totalUsers: 156,
        storageUsed: "45.2 MB",
        activeSessions: 12,
      });
      setLoading(false);
    }, 1500);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/login");
  };

  const quickActions = [
    {
      title: "Portfolio",
      description: "Manage portfolio items",
      path: "/admin/portfolio",
      icon: (
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      title: "Users",
      description: "Manage user accounts",
      path: "/admin/user",
      icon: (
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
  ];

  const recentActivities = [
    { action: "New portfolio item added", time: "2 mins ago", type: "success" },
    { action: "User registration completed", time: "1 hour ago", type: "info" },
    { action: "System backup completed", time: "3 hours ago", type: "success" },
    { action: "Storage usage alert", time: "5 hours ago", type: "warning" },
  ];

  const dotColors = {
    success: { bg: "rgba(92,173,106,0.12)", dot: "#5cad6a" },
    info:    { bg: "rgba(92,132,196,0.12)", dot: "#5c84c4" },
    warning: { bg: "rgba(196,138,58,0.12)", dot: "#c48a3a" },
  };

  const badgeColors = {
    operational: { bg: "rgba(92,173,106,0.1)", color: "#2e7d3a", border: "rgba(92,173,106,0.25)", dot: "#5cad6a", glow: "rgba(92,173,106,0.18)" },
    degraded:    { bg: "rgba(196,138,58,0.1)",  color: "#8a5a1a", border: "rgba(196,138,58,0.3)",  dot: "#c48a3a", glow: "rgba(196,138,58,0.18)" },
  };

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long", month: "long", day: "numeric",
  });

  // ── Loading screen ──
  if (loading) {
    return (
      <div style={{
        minHeight: "100vh", background: C.sand,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: "'DM Sans', sans-serif",
      }}>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&family=DM+Mono:wght@400&display=swap" />
        <style>{`@keyframes ad-spin { to { transform: rotate(360deg); } }`}</style>
        <div style={{ textAlign: "center" }}>
          <div style={{
            width: 38, height: 38,
            border: `2px solid ${C.sandDeep}`,
            borderTopColor: C.bark,
            borderRadius: "50%",
            animation: "ad-spin 0.8s linear infinite",
            margin: "0 auto 14px",
          }} />
          <p style={{ fontSize: 13, color: C.stone }}>Preparing your dashboard…</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: C.sand, fontFamily: "'DM Sans', sans-serif" }}>

      {/* Google Fonts */}
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&family=DM+Mono:wght@400&display=swap" />

      {/* Sidebar */}
      <Sidebar />

      {/* ── Right side: header + scrollable content ── */}
      <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", minHeight: "100vh" }}>

        {/* Top header */}
        <header style={{
          background: C.cream,
          borderBottom: `1px solid ${C.sandDeep}`,
          position: "sticky",
          top: 0,
          zIndex: 30,
          boxShadow: "0 2px 16px rgba(92,74,50,0.07)",
          flexShrink: 0,
        }}>
          <div style={{
            padding: "0 36px",
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
            {/* Page title */}
            <div>
              <p style={{ fontSize: 11, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: C.stoneLt, marginBottom: 2 }}>
                Admin Console
              </p>
              <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 600, color: C.barkDeep, letterSpacing: "-0.01em", lineHeight: 1 }}>
                Dashboard
              </h1>
            </div>

            {/* Right: greeting + avatar + logout */}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontSize: 13, color: C.stone }}>Hello, {adminName}</span>
              <div style={{
                width: 34, height: 34,
                borderRadius: "50%",
                background: C.claySoft,
                border: `2px solid ${C.clay}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 13, fontWeight: 500, color: "#fff",
              }}>
                {adminName.charAt(0)}
              </div>
              <button
                onClick={handleLogout}
                onMouseEnter={() => setLogoutHovered(true)}
                onMouseLeave={() => setLogoutHovered(false)}
                style={{
                  fontSize: 12, fontWeight: 500,
                  fontFamily: "'DM Sans', sans-serif",
                  color: logoutHovered ? "#9b3a30" : C.stone,
                  background: logoutHovered ? "#fdecea" : "transparent",
                  border: `1px solid ${logoutHovered ? "#e5b8b0" : C.sandDeep}`,
                  borderRadius: 8,
                  padding: "7px 16px",
                  cursor: "pointer",
                  transition: "all 0.18s",
                  letterSpacing: "0.01em",
                }}
              >
                Sign out
              </button>
            </div>
          </div>
        </header>

        {/* ── Scrollable main content ── */}
        <main style={{ flex: 1, padding: "36px 36px 64px", overflowY: "auto" }}>

          {/* Hero banner */}
          <div style={{
            background: C.bark,
            borderRadius: 18,
            padding: "38px 44px",
            marginBottom: 28,
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 10px 40px rgba(60,40,20,0.2)",
          }}>
            {/* Decorative rings */}
            <div style={{ position: "absolute", top: -80, right: -80, width: 320, height: 320, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.06)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: -100, right: 60, width: 240, height: 240, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.04)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", top: -40, right: 160, width: 160, height: 160, borderRadius: "50%", background: "rgba(181,112,74,0.12)", pointerEvents: "none" }} />

            <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: C.claySoft, marginBottom: 12 }}>
              Overview
            </p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 38, fontWeight: 600, color: C.cream, letterSpacing: "-0.01em", lineHeight: 1.05, marginBottom: 10 }}>
              Welcome back, {adminName}
            </h2>
            <p style={{ fontSize: 14, color: "rgba(250,247,242,0.5)", fontWeight: 300 }}>
              Your platform is running smoothly. Here's today's overview.
            </p>
            <span style={{ position: "absolute", top: 38, right: 44, fontSize: 11.5, color: "rgba(250,247,242,0.35)", fontFamily: "'DM Mono', monospace", letterSpacing: "0.04em" }}>
              {today}
            </span>
          </div>

          {/* Stats grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginBottom: 28 }}>

            {/* Portfolio */}
            {/* <div style={{ background: C.cream, border: `1px solid ${C.sandDeep}`, borderRadius: 14, padding: "22px 22px 18px", position: "relative", overflow: "hidden", transition: "box-shadow 0.22s, transform 0.22s" }}>
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, background: C.clay, borderRadius: "0 0 14px 14px" }} />
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 14 }}>
                <span style={{ fontSize: 10.5, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: C.stoneLt }}>Portfolio Items</span>
                <div style={{ width: 34, height: 34, borderRadius: 9, background: C.sand, border: `1px solid ${C.sandDeep}`, display: "flex", alignItems: "center", justifyContent: "center", color: C.stone }}>
                  <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                </div>
              </div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 32, fontWeight: 400, color: C.barkDeep, letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 12 }}>
                {String(stats.portfolioItems).padStart(2, "0")}
              </div>
              <div style={{ fontSize: 12, color: C.olive, display: "flex", alignItems: "center", gap: 5 }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
                +2 added today
              </div>
            </div> */}

            {/* Users */}
            {/* <div style={{ background: C.cream, border: `1px solid ${C.sandDeep}`, borderRadius: 14, padding: "22px 22px 18px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, background: C.sandMid, borderRadius: "0 0 14px 14px" }} />
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 14 }}>
                <span style={{ fontSize: 10.5, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: C.stoneLt }}>Total Users</span>
                <div style={{ width: 34, height: 34, borderRadius: 9, background: C.sand, border: `1px solid ${C.sandDeep}`, display: "flex", alignItems: "center", justifyContent: "center", color: C.stone }}>
                  <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
                </div>
              </div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 32, fontWeight: 400, color: C.barkDeep, letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 12 }}>
                {stats.totalUsers}
              </div>
              <div style={{ fontSize: 12, color: C.olive, display: "flex", alignItems: "center", gap: 5 }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
                +5 this week
              </div>
            </div> */}

            {/* Storage */}
            {/* <div style={{ background: C.cream, border: `1px solid ${C.sandDeep}`, borderRadius: 14, padding: "22px 22px 18px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, background: C.sandMid, borderRadius: "0 0 14px 14px" }} />
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 14 }}>
                <span style={{ fontSize: 10.5, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: C.stoneLt }}>Storage Used</span>
                <div style={{ width: 34, height: 34, borderRadius: 9, background: C.sand, border: `1px solid ${C.sandDeep}`, display: "flex", alignItems: "center", justifyContent: "center", color: C.stone }}>
                  <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/></svg>
                </div>
              </div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 22, fontWeight: 400, color: C.barkDeep, letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 10 }}>
                {stats.storageUsed}
              </div>
              <div style={{ height: 4, background: C.sandMid, borderRadius: 99, marginBottom: 10, overflow: "hidden" }}>
                <div style={{ height: "100%", width: "45%", background: C.clay, borderRadius: 99 }} />
              </div>
              <div style={{ fontSize: 12, color: C.stoneLt }}>45% of total quota used</div>
            </div> */}

            {/* Sessions */}
            {/* <div style={{ background: C.cream, border: `1px solid ${C.sandDeep}`, borderRadius: 14, padding: "22px 22px 18px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, background: C.sandMid, borderRadius: "0 0 14px 14px" }} />
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 14 }}>
                <span style={{ fontSize: 10.5, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: C.stoneLt }}>Active Sessions</span>
                <div style={{ width: 34, height: 34, borderRadius: 9, background: C.sand, border: `1px solid ${C.sandDeep}`, display: "flex", alignItems: "center", justifyContent: "center", color: C.stone }}>
                  <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                </div>
              </div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 32, fontWeight: 400, color: C.barkDeep, letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 12 }}>
                {String(stats.activeSessions).padStart(2, "0")}
              </div>
              <div style={{ fontSize: 12, color: C.stoneLt, display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#5cad6a", display: "inline-block", boxShadow: "0 0 0 3px rgba(92,173,106,0.2)", flexShrink: 0 }} />
                Currently online
              </div>
            </div> */}
          </div>

          {/* Quick Actions */}
          <div style={{ marginBottom: 28 }}>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 16 }}>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 21, fontWeight: 600, color: C.barkDeep, letterSpacing: "0.005em" }}>
                Quick Actions
              </h2>
              <span style={{ fontSize: 12, color: C.stoneLt }}>Most used functions</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
              {quickActions.map((action, i) => (
                <div
                  key={i}
                  onClick={() => router.push(action.path)}
                  onMouseEnter={() => setHoveredAction(i)}
                  onMouseLeave={() => setHoveredAction(null)}
                  style={{
                    background: C.cream,
                    border: `1px solid ${C.sandDeep}`,
                    borderRadius: 14,
                    padding: "22px 20px 18px",
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    gap: 14,
                    boxShadow: hoveredAction === i ? "0 8px 28px rgba(92,74,50,0.13)" : "none",
                    transform: hoveredAction === i ? "translateY(-2px)" : "none",
                    transition: "box-shadow 0.22s, transform 0.22s",
                  }}
                >
                  <div style={{
                    width: 44, height: 44,
                    background: hoveredAction === i ? C.bark : C.sand,
                    border: `1px solid ${hoveredAction === i ? C.bark : C.sandDeep}`,
                    borderRadius: 12,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: hoveredAction === i ? C.cream : C.bark,
                    transition: "background 0.2s, color 0.2s, border-color 0.2s",
                  }}>
                    {action.icon}
                  </div>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 500, color: C.barkDeep, marginBottom: 3 }}>{action.title}</p>
                    <p style={{ fontSize: 12, color: C.stoneLt }}>{action.description}</p>
                  </div>
                  <div style={{
                    color: hoveredAction === i ? C.clay : C.sandDeep,
                    alignSelf: "flex-end",
                    marginTop: "auto",
                    transform: hoveredAction === i ? "translateX(3px)" : "none",
                    transition: "color 0.2s, transform 0.2s",
                  }}>
                    <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom row */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>

            {/* Recent Activity */}
            <div style={{ background: C.cream, border: `1px solid ${C.sandDeep}`, borderRadius: 14, padding: 24, boxShadow: "0 2px 8px rgba(92,74,50,0.04)" }}>
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 16 }}>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 21, fontWeight: 600, color: C.barkDeep }}>Recent Activity</h2>
                {/* <button style={{ fontSize: 12, color: C.stoneLt, background: "none", border: "none", cursor: "pointer", fontFamily: "'DM Sans', sans-serif", padding: 0 }}>View all</button> */}
              </div>
              {recentActivities.map((a, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "flex-start", gap: 13,
                  padding: "13px 0",
                  borderBottom: i < recentActivities.length - 1 ? `1px solid ${C.sandMid}` : "none",
                  paddingTop: i === 0 ? 0 : undefined,
                }}>
                  <div style={{ width: 30, height: 30, borderRadius: "50%", flexShrink: 0, marginTop: 1, display: "flex", alignItems: "center", justifyContent: "center", background: dotColors[a.type].bg }}>
                    <span style={{ width: 8, height: 8, borderRadius: "50%", background: dotColors[a.type].dot, display: "block" }} />
                  </div>
                  <div>
                    <p style={{ fontSize: 13, fontWeight: 500, color: C.ink, marginBottom: 3, lineHeight: 1.35 }}>{a.action}</p>
                    <p style={{ fontSize: 11, color: C.stoneLt, fontFamily: "'DM Mono', monospace" }}>{a.time}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* System Status */}
            {/* <div style={{ background: C.cream, border: `1px solid ${C.sandDeep}`, borderRadius: 14, padding: 24, boxShadow: "0 2px 8px rgba(92,74,50,0.04)" }}>
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 16 }}>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 21, fontWeight: 600, color: C.barkDeep }}>System Status</h2>
                <span style={{ fontSize: 12, color: C.stoneLt }}>All services</span>
              </div>
              {systemServices.map((s, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "12px 0",
                  borderBottom: i < systemServices.length - 1 ? `1px solid ${C.sandMid}` : "none",
                  paddingTop: i === 0 ? 0 : undefined,
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ width: 8, height: 8, borderRadius: "50%", background: badgeColors[s.status].dot, display: "inline-block", boxShadow: `0 0 0 3px ${badgeColors[s.status].glow}` }} />
                    <span style={{ fontSize: 13, fontWeight: 500, color: C.ink }}>{s.service}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ fontSize: 11.5, color: C.stoneLt, fontFamily: "'DM Mono', monospace" }}>{s.response}</span>
                    <span style={{
                      fontSize: 10, fontWeight: 500,
                      textTransform: "uppercase", letterSpacing: "0.07em",
                      padding: "3px 9px", borderRadius: 20,
                      background: badgeColors[s.status].bg,
                      color: badgeColors[s.status].color,
                      border: `1px solid ${badgeColors[s.status].border}`,
                    }}>
                      {s.status}
                    </span>
                  </div>
                </div>
              ))}
            </div> */}

          </div>
        </main>
      </div>
    </div>
  );
}