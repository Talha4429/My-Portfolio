import { featuredProjects, academicProjects } from '../data/portfolioData'

export default function Projects() {
  return (
    <section id="projects" className="container py-5">
      <h2 className="section-title">Projects</h2>
      <div className="section-line" />

      {/* Featured Projects */}
      <div className="row g-4 mb-5">
        {featuredProjects.map(({ title, tech, desc, bullets, link, code }) => (
          <div className="col-12 col-lg-6" key={title}>
            <div className="card-dark p-4 h-100 d-flex flex-column justify-content-between">
              <div>
                <p className="accent mb-2" style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                  {tech}
                </p>
                <h3 className="mb-3" style={{ fontFamily: 'Syne, sans-serif', fontSize: 19, fontWeight: 700, color: '#fff' }}>
                  {title}
                </h3>
                {bullets ? (
                  <ul className="ps-3 mb-3" style={{ fontSize: 14, color: '#94A3B8', lineHeight: 1.7 }}>
                    {bullets.map((b, i) => (
                      <li key={i} className="mb-1">{b}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="mb-3" style={{ fontSize: 14, color: '#94A3B8', lineHeight: 1.7 }}>
                    {desc}
                  </p>
                )}
              </div>
              {(link || code) && (
                <div className="d-flex gap-2 pt-2">
                  {link && (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-cyan px-3 py-1"
                      style={{ fontSize: 13 }}
                    >
                      Live Site ↗
                    </a>
                  )}
                  {/* {code && (
                    <a
                      href={code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-ghost px-3 py-1"
                      style={{ fontSize: 13 }}
                    >
                      View Code ↗
                    </a>
                  )} */}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Academic Projects */}
      <h3 className="section-title" style={{ fontSize: 24 }}>Academic Projects</h3>
      <div className="section-line" />

      <div className="row g-4">
        {academicProjects.map(({ title, tech, desc }) => (
          <div className="col-sm-6 col-lg-4" key={title}>
            <div className="card-dark p-4 h-100">
              <p className="accent mb-2" style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                {tech}
              </p>
              <h4 className="mb-2" style={{ fontFamily: 'Syne, sans-serif', fontSize: 17, fontWeight: 700, color: '#fff' }}>
                {title}
              </h4>
              <p className="mb-0" style={{ fontSize: 14, color: '#94A3B8', lineHeight: 1.7 }}>
                {desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}