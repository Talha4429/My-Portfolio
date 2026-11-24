export default function Footer() {
  return (
    <footer className="py-4 border-top border-secondary border-opacity-25" style={{ background: "rgba(7, 12, 21, 0.95)" }}>
      <div className="container d-flex flex-column flex-sm-row justify-content-between align-items-center gap-3 text-center text-sm-start">
        <div>
          <span className="text-white fw-bold">Muhammad Talha</span>
          <span className="text-muted-custom ms-2" style={{ fontSize: 13 }}>
            · Built with React and Vite
          </span>
        </div>
        <div className="d-flex gap-3">
          <a
            href="https://github.com/Talha4429"
            target="_blank"
            rel="noreferrer"
            className="text-muted-custom text-decoration-none footer-link"
            style={{ fontSize: 14 }}
          >
            GitHub ↗
          </a>
          <a
            href="https://linkedin.com/in/muhammad-talha-2b49451ba"
            target="_blank"
            rel="noreferrer"
            className="text-muted-custom text-decoration-none footer-link"
            style={{ fontSize: 14 }}
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </footer>
  );
}

