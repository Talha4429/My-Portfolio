import { useState } from "react";

const links = ["About", "Skills", "Projects", "Education", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });

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
            <button key={l} className="nav-link-custom" onClick={() => scrollTo(l)}>
              {l}
            </button>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="d-md-none">
          <button
            onClick={() => setOpen(!open)}
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
            background: "rgba(7, 12, 21, 0.98)",
            borderTop: "1px solid rgba(255,255,255,0.08)",
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
                color: "#fff",
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