export default function Hero() {
  return (
    <section id="about" className="d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-12 col-md-6">
            <p className="accent mb-2">Software Engineer | Ruby on Rails Backend Developer</p>

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
          </div>

        </div>
      </div>
    </section>
  );
}