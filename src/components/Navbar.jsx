import { useState, useEffect } from "react";

const links = ["About", "Skills", "Projects", "Experience", "Education", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("About");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;
      const isBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50;

      if (isBottom) {
        setActiveSection(links[links.length - 1]);
        return;
      }

      for (let i = links.length - 1; i >= 0; i--) {
        const el = document.getElementById(links[i].toLowerCase());
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(links[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });

    setActiveSection(id);
    setOpen(false); // close menu on click (important for mobile)
  };

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(7, 12, 21, 0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <div className="d-flex justify-content-between align-items-center px-4 py-3">

        {/* Logo */}
        <span
          style={{
            fontFamily: "Syne, sans-serif",
            fontSize: 20,
            fontWeight: 800,
            color: "#fff",
          }}
        >
          MT<span className="accent">.</span>
        </span>

        {/* Desktop Links */}
        <div className="d-none d-md-flex gap-4">
          {links.map((l) => (
            <button
              key={l}
              className={`nav-link-custom ${activeSection === l ? "active" : ""}`}
              onClick={() => scrollTo(l)}
            >
              {l}
            </button>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="d-md-none">
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
            aria-expanded={open}
            style={{
              background: "none",
              border: "none",
              color: "white",
              fontSize: 24,
            }}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div
          className="d-md-none"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            width: "100%",
            background: "rgba(7, 12, 21, 0.98)",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.5)",
            padding: "10px 20px",
          }}
        >
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              style={{
                display: "block",
                width: "100%",
                padding: "12px 0",
                textAlign: "left",
                background: "none",
                border: "none",
                color: activeSection === l ? "#22D3EE" : "#fff",
                fontWeight: activeSection === l ? 600 : 400,
              }}
            >
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}