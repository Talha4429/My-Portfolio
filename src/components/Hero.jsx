export default function Hero() {
  return (
    <section id="about" className="d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-12 col-lg-6">
            <p className="accent mb-2">Software Engineer | Ruby on Rails | Backend Developer</p>

            <h1
              style={{
                fontSize: "clamp(36px, 6vw, 68px)",
                fontWeight: 800,
                color: "#fff",
                lineHeight: 1.1,
              }}
            >
              Muhammad <br />
              <span className="accent">Talha</span>
            </h1>

            <p style={{ color: "#94A3B8", maxWidth: 500 }}>
              Software Engineer with hands-on experience building and maintaining production Ruby on Rails applications, including a multi-tenant restaurant POS system and a Spree-based e-commerce platform. Also builds full-stack Next.js applications with PostgreSQL and Supabase.
            </p>

            <div className="d-flex gap-3 flex-wrap mt-4">
              <a
                href="/Muhammad_Talha_Resume.pdf"
                download
                className="btn btn-cyan px-4 py-2"
              >
                Resume ↓
              </a>

              <a
                href="https://github.com/Talha4429"
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost px-4 py-2"
              >
                GitHub ↗
              </a>

              <a
                href="https://linkedin.com/in/muhammad-talha-2b49451ba"
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost px-4 py-2"
              >
                LinkedIn ↗
              </a>
            </div>

            {/* Desktop-only Stats Strip */}
            <div className="stats-strip d-none d-lg-flex align-items-center gap-4 mt-5 pt-3 border-top border-secondary border-opacity-25">
              <div className="stat-item">
                <span className="fw-bold text-white fs-5">2</span>
                <span className="text-muted-custom ms-2" style={{ fontSize: 13 }}>production Rails platforms</span>
              </div>
              <div className="text-muted-custom opacity-50" aria-hidden="true">|</div>
              <div className="stat-item">
                <span className="fw-bold text-white fs-5">7</span>
                <span className="text-muted-custom ms-2" style={{ fontSize: 13 }}>languages in i18n</span>
              </div>
              <div className="text-muted-custom opacity-50" aria-hidden="true">|</div>
              <div className="stat-item">
                <span className="fw-bold text-white fs-5">2</span>
                <span className="text-muted-custom ms-2" style={{ fontSize: 13 }}>Next.js sites shipped</span>
              </div>
            </div>
          </div>

          {/* Desktop-only Terminal Card */}
          <div className="col-12 col-lg-6 d-none d-lg-block ps-lg-5">
            <div className="terminal-card">
              <div className="terminal-header d-flex align-items-center justify-content-between px-3 py-2">
                <div className="d-flex gap-2">
                  <span className="terminal-dot terminal-dot-red" />
                  <span className="terminal-dot terminal-dot-yellow" />
                  <span className="terminal-dot terminal-dot-green" />
                </div>
                <span className="terminal-title">rails console</span>
                <div style={{ width: 42 }} />
              </div>
              <div className="terminal-body p-3">
                <div className="mb-2">
                  <span className="terminal-prompt">irb(main):001&gt;</span>{" "}
                  <span className="terminal-command">Developer.find_by(name: &quot;Muhammad Talha&quot;)</span>
                </div>
                <div className="terminal-output">
                  <span className="text-muted-custom">=&gt;</span> {"{"}
                  <div className="ps-3">
                    <span className="text-muted-custom">role:</span> <span className="text-light">&quot;Backend Developer&quot;</span>,<br />
                    <span className="text-muted-custom">stack:</span> [<span className="text-light">&quot;Rails&quot;</span>, <span className="text-light">&quot;Spree&quot;</span>, <span className="text-light">&quot;Next.js&quot;</span>],<br />
                    <span className="text-muted-custom">location:</span> <span className="text-light">&quot;Lahore&quot;</span>
                  </div>
                  {"}"}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}