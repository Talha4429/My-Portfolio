export default function Hero() {
  return (
    <section
      id="about"
      className="d-flex align-items-center"
      style={{
        minHeight: "100vh",

        backgroundImage:
          "linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.2)), url('/bgimage.png')",

        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",

        // ✅ FIXED
        backgroundPosition: "center",

        // ✅ better mobile handling
        backgroundAttachment: "scroll",
      }}
    >
      <div className="container">
        <div className="row align-items-center">

          <div className="col-12 col-md-6">
            <p className="accent mb-2">Software Engineer</p>

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
              Full-stack developer and data science enthusiast with a passion for building scalable web applications and turning data into meaningful insights. I enjoy working across both frontend and backend technologies, while also exploring machine learning and analytics to solve real-world problems.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}