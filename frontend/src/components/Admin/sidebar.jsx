"use client";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

const C = {
    sand: "#f2ede6",
    sandMid: "#e8e0d4",
    sandDeep: "#d9cfc1",
    cream: "#faf7f2",
    bark: "#5c4a32",
    barkDeep: "#3d3020",
    clay: "#b5704a",
    claySoft: "#d4956e",
    stone: "#8a7f72",
    stoneLt: "#b5afa7",
    ink: "#2c251c",
};

export default function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);
    const [logoutHovered, setLogoutHovered] = useState(false);
    const [collapseHovered, setCollapseHovered] = useState(false);
    const [hamburgerHovered, setHamburgerHovered] = useState(false);

    const router = useRouter();
    const pathname = usePathname();

    const navItems = [
        {
            label: "Dashboard",
            path: "/admin",
            icon: (
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    <polyline strokeLinecap="round" strokeLinejoin="round" points="9 22 9 12 15 12 15 22" />
                </svg>
            ),
        },
        {
            label: "Portfolio",
            path: "/admin/portfolio",
   
            icon: (
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ),
        },
        {
            label: "Users",
            path: "/admin/user",
      
            icon: (
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
        },
        // {
        //     label: "Analytics",
        //     path: "/admin/analytics",
        //     icon: (
        //         <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7">
        //             <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        //         </svg>
        //     ),
        // },
        // {
        //     label: "Settings",
        //     path: "/admin/settings",
        //     icon: (
        //         <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7">
        //             <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        //             <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        //         </svg>
        //     ),
        // },
        // {
        //     label: "Help & Support",
        //     path: "/admin/help",
        //     icon: (
        //         <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7">
        //             <circle cx="12" cy="12" r="10" />
        //             <path strokeLinecap="round" strokeLinejoin="round" d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
        //             <line x1="12" y1="17" x2="12.01" y2="17" strokeLinecap="round" strokeWidth="2" />
        //         </svg>
        //     ),
        // },
    ];

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        router.push("/login");
    };

    const isActive = (path) => pathname === path;

    // ── Inline style objects ──

    const sidebarStyle = {
        width: collapsed ? "68px" : "240px",
        minHeight: "100vh",
        background: C.barkDeep,
        display: "flex",
        flexDirection: "column",
        flexShrink: 0,
        transition: "width 0.25s cubic-bezier(0.4,0,0.2,1)",
        zIndex: 45,
        position: "relative",
        overflow: "hidden",
        position: "sticky",
        top: 0,
    };

    const topStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "10px",
        padding: "0 16px",
        minHeight: "64px",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        flexShrink: 0,
    };

    const logoMarkStyle = {
        width: "34px", height: "34px",
        background: C.clay,
        borderRadius: "9px",
        display: "flex", alignItems: "center", justifyContent: "center",
        color: "#fff",
        flexShrink: 0,
        boxShadow: "0 2px 8px rgba(181,112,74,0.35)",
    };

    const logoTextStyle = {
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "19px",
        fontWeight: 600,
        color: C.cream,
        letterSpacing: "0.01em",
        whiteSpace: "nowrap",
        opacity: collapsed ? 0 : 1,
        transition: "opacity 0.15s",
        pointerEvents: collapsed ? "none" : "auto",
    };

    const collapseBtnStyle = {
        width: "28px", height: "28px",
        borderRadius: "7px",
        background: collapseHovered ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.07)",
        border: "1px solid rgba(255,255,255,0.1)",
        display: "flex", alignItems: "center", justifyContent: "center",
        cursor: "pointer",
        color: collapseHovered ? C.cream : C.stoneLt,
        flexShrink: 0,
        transition: "background 0.15s, color 0.15s",
    };

    const navLabelStyle = {
        fontSize: "9.5px",
        fontWeight: 500,
        textTransform: "uppercase",
        letterSpacing: "0.12em",
        color: "rgba(181,175,167,0.5)",
        padding: "20px 18px 8px",
        whiteSpace: "nowrap",
        opacity: collapsed ? 0 : 1,
        transition: "opacity 0.15s",
    };

    const navStyle = {
        flex: 1,
        padding: "6px 10px",
        display: "flex",
        flexDirection: "column",
        gap: "2px",
        overflowY: "auto",
        overflowX: "hidden",
    };

    const getNavItemStyle = (path, idx) => {
        const active = isActive(path);
        const hovered = hoveredItem === idx;
        return {
            position: "relative",
            display: "flex",
            alignItems: "center",
            gap: "11px",
            padding: "10px",
            borderRadius: "9px",
            cursor: "pointer",
            color: active ? C.claySoft : hovered ? C.cream : C.stoneLt,
            background: active
                ? "rgba(181,112,74,0.18)"
                : hovered
                    ? "rgba(255,255,255,0.06)"
                    : "transparent",
            border: active
                ? "1px solid rgba(181,112,74,0.22)"
                : "1px solid transparent",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textDecoration: "none",
            transition: "background 0.15s, color 0.15s, border-color 0.15s",
        };
    };

    const navTextStyle = {
        fontSize: "13.5px",
        fontWeight: 500,
        flex: 1,
        letterSpacing: "0.005em",
        opacity: collapsed ? 0 : 1,
        transition: "opacity 0.15s",
        pointerEvents: collapsed ? "none" : "auto",
    };

    const getBadgeStyle = (path) => ({
        fontSize: "10px",
        fontWeight: 500,
        padding: "2px 7px",
        borderRadius: "20px",
        background: isActive(path) ? "rgba(181,112,74,0.2)" : "rgba(255,255,255,0.08)",
        color: isActive(path) ? C.claySoft : C.stoneLt,
        border: isActive(path)
            ? "1px solid rgba(181,112,74,0.25)"
            : "1px solid rgba(255,255,255,0.08)",
        opacity: collapsed ? 0 : 1,
        transition: "opacity 0.15s",
        flexShrink: 0,
    });

    const dividerStyle = {
        height: "1px",
        background: "rgba(255,255,255,0.06)",
        margin: "6px 0",
    };

    const bottomStyle = {
        padding: "14px 10px",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        flexShrink: 0,
    };

    const userCardStyle = {
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "10px",
        borderRadius: "9px",
        border: "1px solid rgba(255,255,255,0.07)",
        background: "rgba(255,255,255,0.04)",
        marginBottom: "4px",
        overflow: "hidden",
    };

    const userAvatarStyle = {
        width: "32px", height: "32px",
        borderRadius: "50%",
        background: C.clay,
        border: `1.5px solid ${C.claySoft}`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "13px",
        fontWeight: 500,
        color: "#fff",
        flexShrink: 0,
    };

    const userInfoStyle = {
        flex: 1,
        minWidth: 0,
        overflow: "hidden",
        opacity: collapsed ? 0 : 1,
        transition: "opacity 0.15s",
    };

    const logoutBtnStyle = {
        display: "flex",
        alignItems: "center",
        gap: "11px",
        width: "100%",
        padding: "10px",
        borderRadius: "9px",
        cursor: "pointer",
        color: logoutHovered ? "#e08080" : "rgba(181,175,167,0.65)",
        background: logoutHovered ? "rgba(185,74,74,0.12)" : "transparent",
        border: logoutHovered ? "1px solid rgba(185,74,74,0.2)" : "1px solid transparent",
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "13.5px",
        fontWeight: 500,
        whiteSpace: "nowrap",
        overflow: "hidden",
        transition: "background 0.15s, color 0.15s, border-color 0.15s",
        textAlign: "left",
    };

    const logoutTextStyle = {
        opacity: collapsed ? 0 : 1,
        transition: "opacity 0.15s",
    };

    // Mobile bar styles
    const mobileBarStyle = {
        display: "none", // controlled via media query — handled below with a window check workaround
        position: "fixed",
        top: 0, left: 0, right: 0,
        height: "56px",
        background: C.barkDeep,
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        zIndex: 35,
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 18px",
        boxShadow: "0 2px 12px rgba(44,37,28,0.2)",
    };

    return (
        <div style={{ fontFamily: "'DM Sans', sans-serif" }}>

            {/* Google Font import — single link tag, no style block */}
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap"
            />

            {/* Mobile overlay */}
            {mobileOpen && (
                <div
                    onClick={() => setMobileOpen(false)}
                    style={{
                        position: "fixed", inset: 0,
                        background: "rgba(44,37,28,0.5)",
                        zIndex: 40,
                        backdropFilter: "blur(3px)",
                    }}
                />
            )}

            {/* Sidebar */}
            <aside style={sidebarStyle}>

                {/* Logo row */}
                <div style={topStyle}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", overflow: "hidden", flex: 1, minWidth: 0 }}>
                        <img 
                            src="/logo.png"
                            alt="Fortune Logo"
                            style={{ width: "32px", height: "32px" }}

                        />
                        <span className="text-white font-bold text-lg">Fortune</span>
                    </div>

                    <button
                        style={collapseBtnStyle}
                        onClick={() => setCollapsed(!collapsed)}
                        onMouseEnter={() => setCollapseHovered(true)}
                        onMouseLeave={() => setCollapseHovered(false)}
                    >
                        <svg
                            width="13" height="13" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" strokeWidth="2.2"
                            style={{ transition: "transform 0.25s", transform: collapsed ? "rotate(180deg)" : "rotate(0deg)" }}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                </div>

                {/* Nav label */}
                <p style={navLabelStyle}>Navigation</p>

                {/* Nav items */}
                <nav style={navStyle}>
                    {navItems.map((item, i) => (
                        <div key={i}>
                            {/* Divider before Help */}
                            {item.label === "Help & Support" && <div style={dividerStyle} />}

                            <div
                                style={getNavItemStyle(item.path, i)}
                                onMouseEnter={() => setHoveredItem(i)}
                                onMouseLeave={() => setHoveredItem(null)}
                                onClick={() => { router.push(item.path); setMobileOpen(false); }}
                            >
                                {/* Active left bar */}
                                {isActive(item.path) && (
                                    <span style={{
                                        position: "absolute",
                                        left: 0, top: "20%", bottom: "20%",
                                        width: "2.5px",
                                        background: C.clay,
                                        borderRadius: "99px",
                                    }} />
                                )}

                                <span style={{ flexShrink: 0, width: "18px", height: "18px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    {item.icon}
                                </span>

                                <span style={navTextStyle}>{item.label}</span>

                                {item.badge && (
                                    <span style={getBadgeStyle(item.path)}>{item.badge}</span>
                                )}
                            </div>
                        </div>
                    ))}
                </nav>

                {/* Bottom */}
                <div style={bottomStyle}>
                    <div style={userCardStyle}>
                        <div style={userAvatarStyle}>A</div>
                        <div style={userInfoStyle}>
                            <p style={{ fontSize: "13px", fontWeight: 500, color: C.cream, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                Admin
                            </p>
                            <p style={{ fontSize: "11px", color: C.stoneLt, whiteSpace: "nowrap" }}>
                                Administrator
                            </p>
                        </div>
                    </div>

                    <button
                        style={logoutBtnStyle}
                        onClick={handleLogout}
                        onMouseEnter={() => setLogoutHovered(true)}
                        onMouseLeave={() => setLogoutHovered(false)}
                    >
                        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" style={{ flexShrink: 0 }}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        <span style={logoutTextStyle}>Sign out</span>
                    </button>
                </div>
            </aside>
        </div>
    );
}