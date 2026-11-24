export default function Contact() {
  return (
    <section id="contact" className="container py-5 text-center reveal-on-scroll">
      <div className="section-number">05 / Contact</div>
      <h2 className="section-title">Contact</h2>
      <div className="section-line mx-auto" />

      <p
        className="mx-auto mb-4"
        style={{
          color: "#94A3B8",
          fontSize: 16,
          maxWidth: 460,
          lineHeight: 1.8,
        }}
      >
        Open to full-time roles, freelance work, and collaborations.
        Feel free to reach out anytime.
      </p>

      <div className="d-flex justify-content-center gap-3 flex-wrap mb-5">
        <a
          href="mailto:talhaehsan282@gmail.com"
          className="btn btn-cyan px-4 py-2"
        >
          Email Me
        </a>

        {/* LINKEDIN BUTTON */}
        <a
          href="https://linkedin.com/in/muhammad-talha-2b49451ba"
          target="_blank"
          rel="noreferrer"
          className="btn btn-ghost px-4 py-2"
        >
          LinkedIn ↗
        </a>

        {/* GITHUB BUTTON */}
        <a
          href="https://github.com/Talha4429"
          target="_blank"
          rel="noreferrer"
          className="btn btn-ghost px-4 py-2"
        >
          GitHub ↗
        </a>
      </div>

      <p style={{ color: "#94A3B8", fontSize: 13 }}>
        +92 317 4661456 · Lahore, Pakistan
      </p>
    </section>
  );
}