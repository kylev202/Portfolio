import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Navigation configuration
const navigationConfig = {
  brand: { label: "Kyle Vu", href: "/", key: "home" },
  items: [
    { label: "Skills", href: "/skills", key: "skills", icon: "📚" },
    { label: "Calendar", href: "/calendar", key: "calendar", icon: "📅" },
    { label: "Research", href: "/research", key: "research", icon: "🔬" },
    {
      label: "Presentation",
      href: "/presentation",
      key: "presentation",
      icon: "🎯",
    },
  ],
  cta: { label: "Contact Me", href: "/contact", key: "contact" },
};

// NavButton component with simplified animations
const NavButton = ({ label, href, isMain, icon, index, isActive }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      style={{ position: "relative", display: "inline-block" }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: isMain ? 0.1 : 0.3 + index * 0.1,
        ease: "easeOut",
      }}
    >
      <motion.a
        href={href}
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: icon ? "6px" : "0",
          color: isMain ? "#ffffff" : isActive ? "#818cf8" : "#e5e7eb",
          fontWeight: isMain ? 700 : isActive ? 600 : 500,
          fontSize: isMain ? "1.4rem" : "1rem",
          letterSpacing: isMain ? "0.025em" : "0.02em",
          textDecoration: "none",
          borderRadius: isMain ? "14px" : "10px",
          padding: isMain ? "12px 24px" : "10px 18px",
          marginRight: 4,
          cursor: "pointer",
          position: "relative",
          border: "none",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          overflow: "hidden",
          userSelect: "none",
          WebkitUserSelect: "none",
          background: isMain
            ? "linear-gradient(135deg, rgba(129, 140, 248, 0.15), rgba(167, 139, 250, 0.1))"
            : isActive
            ? "linear-gradient(135deg, rgba(129, 140, 248, 0.2), rgba(167, 139, 250, 0.15))"
            : "linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))",
          boxShadow: isMain
            ? "0 4px 15px rgba(129, 140, 248, 0.2), 0 2px 8px rgba(0, 0, 0, 0.1)"
            : isActive
            ? "0 4px 15px rgba(129, 140, 248, 0.3), 0 2px 8px rgba(129, 140, 248, 0.1), 0 0 20px rgba(129, 140, 248, 0.15)"
            : "0 2px 10px rgba(255, 255, 255, 0.05), 0 1px 5px rgba(0, 0, 0, 0.08)",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{
          scale: isMain ? 1.06 : 1.04,
          y: isMain ? -4 : -3,
          boxShadow: isMain
            ? "0 8px 25px rgba(129, 140, 248, 0.3), 0 4px 15px rgba(0, 0, 0, 0.15)"
            : isActive
            ? "0 6px 20px rgba(129, 140, 248, 0.4), 0 3px 12px rgba(129, 140, 248, 0.2), 0 0 30px rgba(129, 140, 248, 0.2)"
            : "0 4px 15px rgba(255, 255, 255, 0.08), 0 2px 8px rgba(0, 0, 0, 0.12)",
        }}
        whileTap={{
          scale: isMain ? 0.98 : 0.96,
          y: 1,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="navbar-link"
        data-main={isMain}
      >
        {/* Active glow effect */}
        {isActive && !isMain && (
          <motion.div
            style={{
              position: "absolute",
              inset: "-2px",
              borderRadius: "12px",
              background:
                "linear-gradient(135deg, rgba(129, 140, 248, 0.4), rgba(167, 139, 250, 0.3))",
              filter: "blur(6px)",
              zIndex: -1,
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.7, 0.9, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}

        {/* Icon */}
        {icon && (
          <motion.span
            style={{
              fontSize: "1.1em",
              filter: "grayscale(0.3)",
            }}
            animate={{
              rotate: isHovered ? [0, 5, -5, 0] : 0,
            }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
          >
            {icon}
          </motion.span>
        )}

        {/* Text */}
        <span
          style={{
            position: "relative",
            zIndex: 2,
            textShadow: isMain
              ? "0 1px 3px rgba(0, 0, 0, 0.4)"
              : "0 1px 2px rgba(0, 0, 0, 0.2)",
          }}
        >
          {label}
        </span>

        {/* Underline */}
        <motion.div
          style={{
            position: "absolute",
            bottom: "3px",
            left: "50%",
            height: "2px",
            background: isMain
              ? "linear-gradient(90deg, transparent, rgba(129, 140, 248, 0.9), transparent)"
              : isActive
              ? "linear-gradient(90deg, transparent, rgba(129, 140, 248, 1), transparent)"
              : "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.7), transparent)",
            borderRadius: "1px",
            transformOrigin: "center",
          }}
          initial={{ width: 0, x: "-50%" }}
          animate={{
            width: isHovered || isActive ? "85%" : isActive ? "60%" : 0,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </motion.a>
    </motion.div>
  );
};

// NavBar component with centered layout
export default function NavBar() {
  const [isContactHovered, setIsContactHovered] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [currentPath, setCurrentPath] = useState("/");

  // Track current route
  useEffect(() => {
    const updateCurrentPath = () => {
      setCurrentPath(window.location.pathname);
    };

    // Set initial path
    updateCurrentPath();

    // Listen for route changes (for SPA navigation)
    window.addEventListener("popstate", updateCurrentPath);

    // Also listen for hash changes if using hash routing
    window.addEventListener("hashchange", updateCurrentPath);

    return () => {
      window.removeEventListener("popstate", updateCurrentPath);
      window.removeEventListener("hashchange", updateCurrentPath);
    };
  }, []);

  // Helper function to check if a route is active
  const isRouteActive = (href) => {
    if (href === "/") {
      return currentPath === "/" || currentPath === "/home";
    }
    return currentPath.startsWith(href);
  };

  // Scroll handling with debounce
  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      // Auto-hide navbar on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setLastScrollY(currentScrollY);
      }, 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, [lastScrollY]);

  // Dynamic navbar background based on scroll
  const navbarOpacity = Math.min(scrollY / 100, 0.95);
  const navbarBackground = `linear-gradient(180deg, 
            rgba(15, 15, 15, ${0.7 + navbarOpacity * 0.2}) 0%, 
            rgba(25, 25, 25, ${0.5 + navbarOpacity * 0.3}) 100%)`;

  const navbarBlur = `blur(${Math.min(scrollY / 10, 20)}px)`;

  return (
    <>
      {/* Backdrop with scroll-reactive blur */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100px",
          zIndex: 9,
          background: navbarBackground,
          backdropFilter: navbarBlur,
          WebkitBackdropFilter: navbarBlur,
          maskImage:
            "linear-gradient(to bottom, black 0%, black 85%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 85%, transparent 100%)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Top border accent */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "2px",
          zIndex: 11,
          background:
            "linear-gradient(90deg, transparent, rgba(129, 140, 248, 0.6), rgba(167, 139, 250, 0.4), transparent)",
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
      />

      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "85px",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 clamp(20px, 5vw, 50px)",
          boxSizing: "border-box",
          transform: isVisible ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {/* Centered navigation container */}
        <motion.div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 12px",
            borderRadius: "16px",
            background: "rgba(255, 255, 255, 0.02)",
            backdropFilter: "blur(8px)",
          }}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {/* Brand section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            <NavButton
              label={navigationConfig.brand.label}
              href={navigationConfig.brand.href}
              isMain={true}
              isActive={isRouteActive(navigationConfig.brand.href)}
              index={0}
            />
          </motion.div>

          {/* Navigation items */}
          <motion.div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2px",
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            {navigationConfig.items.map((item, index) => (
              <NavButton
                key={item.key}
                label={item.label}
                href={item.href}
                icon={item.icon}
                isMain={false}
                isActive={isRouteActive(item.href)}
                index={index}
              />
            ))}
          </motion.div>

          {/* Contact button */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            style={{ position: "relative" }}
          >
            {/* Contact button glow effect */}
            <motion.div
              style={{
                position: "absolute",
                inset: "-4px",
                borderRadius: "18px",
                background: isRouteActive(navigationConfig.cta.href)
                  ? "linear-gradient(135deg, rgba(129, 140, 248, 0.5), rgba(167, 139, 250, 0.4))"
                  : "linear-gradient(135deg, rgba(129, 140, 248, 0.3), rgba(167, 139, 250, 0.2))",
                filter: "blur(8px)",
                opacity: 0,
                zIndex: 0,
              }}
              animate={{
                opacity:
                  isContactHovered || isRouteActive(navigationConfig.cta.href)
                    ? 0.8
                    : 0,
                scale:
                  isContactHovered || isRouteActive(navigationConfig.cta.href)
                    ? 1.1
                    : 1,
              }}
              transition={{ duration: 0.3 }}
            />

            <motion.a
              href={navigationConfig.cta.href}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                color: "#ffffff",
                fontWeight: 600,
                fontSize: "1rem",
                letterSpacing: "0.025em",
                textDecoration: "none",
                borderRadius: "14px",
                padding: "14px 28px",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
                border: "none",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                userSelect: "none",
                WebkitUserSelect: "none",
                background: isRouteActive(navigationConfig.cta.href)
                  ? "linear-gradient(135deg, rgba(129, 140, 248, 0.9) 0%, rgba(167, 139, 250, 0.8) 50%, rgba(99, 102, 241, 0.7) 100%)"
                  : "linear-gradient(135deg, rgba(129, 140, 248, 0.8) 0%, rgba(167, 139, 250, 0.7) 50%, rgba(99, 102, 241, 0.6) 100%)",
                boxShadow: isRouteActive(navigationConfig.cta.href)
                  ? "0 8px 25px rgba(129, 140, 248, 0.35), 0 4px 15px rgba(0, 0, 0, 0.15), 0 0 20px rgba(129, 140, 248, 0.2)"
                  : "0 8px 25px rgba(129, 140, 248, 0.25), 0 4px 15px rgba(0, 0, 0, 0.15)",
                whiteSpace: "nowrap",
                textShadow: "0 1px 3px rgba(0, 0, 0, 0.4)",
                zIndex: 1,
                transition: "all 0.3s ease",
              }}
              onMouseEnter={() => setIsContactHovered(true)}
              onMouseLeave={() => setIsContactHovered(false)}
              whileHover={{
                scale: 1.05,
                y: -3,
                boxShadow:
                  "0 12px 35px rgba(129, 140, 248, 0.35), 0 6px 20px rgba(0, 0, 0, 0.2)",
              }}
              whileTap={{
                scale: 0.97,
                y: 1,
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              {/* Shine effect */}
              <motion.div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "-120%",
                  width: "120%",
                  height: "100%",
                  background:
                    "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.1), transparent)",
                  transform: "skewX(-25deg)",
                  zIndex: 1,
                }}
                animate={{
                  left: isContactHovered ? "120%" : "-120%",
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />

              {/* Contact icon */}
              <motion.span
                style={{ fontSize: "1.1em" }}
                animate={{
                  rotate: isContactHovered ? [0, 15, -15, 0] : 0,
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                }}
              >
                ✉️
              </motion.span>

              {/* Button text */}
              <span style={{ position: "relative", zIndex: 2 }}>
                {navigationConfig.cta.label}
              </span>

              {/* Particle effect on hover */}
              <AnimatePresence>
                {isContactHovered && (
                  <>
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        style={{
                          position: "absolute",
                          width: "4px",
                          height: "4px",
                          borderRadius: "50%",
                          background: "rgba(255, 255, 255, 0.6)",
                          top: "50%",
                          left: "50%",
                        }}
                        initial={{
                          opacity: 0,
                          scale: 0,
                          x: 0,
                          y: 0,
                        }}
                        animate={{
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                          x: Math.cos((i * 60 * Math.PI) / 180) * 30,
                          y: Math.sin((i * 60 * Math.PI) / 180) * 30,
                        }}
                        exit={{
                          opacity: 0,
                          scale: 0,
                        }}
                        transition={{
                          duration: 1,
                          delay: i * 0.1,
                          ease: "easeOut",
                        }}
                      />
                    ))}
                  </>
                )}
              </AnimatePresence>
            </motion.a>
          </motion.div>
        </motion.div>
      </nav>
    </>
  );
}
