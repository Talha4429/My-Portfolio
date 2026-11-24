import { useState } from 'react'
import { featuredProjects, academicProjects } from '../data/portfolioData'

export default function Projects() {
  const [showAllAcademic, setShowAllAcademic] = useState(false)
  const displayedAcademic = showAllAcademic ? academicProjects : academicProjects.slice(0, 3)

  return (
    <section id="projects" className="container py-5 reveal-on-scroll">
      <div className="section-number">02 / Projects</div>
      <h2 className="section-title">Projects</h2>
      <div className="section-line" />

      {/* Featured Projects */}
      <div className="row g-4 mb-5">
        {featuredProjects.map(({ title, tech, desc, bullets, link, image, imageAlt }) => (
          <div className="col-12 col-lg-6" key={title}>
            <div className="card-dark p-4 h-100 d-flex flex-column justify-content-between">
              <div>
                {image && (
                  <div className="browser-frame mb-3">
                    <div className="browser-header d-flex align-items-center gap-2 px-3 py-2">
                      <span className="terminal-dot terminal-dot-red" />
                      <span className="terminal-dot terminal-dot-yellow" />
                      <span className="terminal-dot terminal-dot-green" />
                    </div>
                    <div className="browser-body">
                      <img
                        src={image}
                        alt={imageAlt}
                        loading="lazy"
                        width={1200}
                        height={600}
                        className="browser-img"
                      />
                    </div>
                  </div>
                )}

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

              <div className="d-flex gap-2 pt-2 align-items-center">
                {link ? (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-cyan px-3 py-1"
                    style={{ fontSize: 13 }}
                  >
                    Live Site ↗
                  </a>
                ) : (
                  <span className="text-muted-custom" style={{ fontSize: 13 }}>
                    Private project
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Academic Projects */}
      <h3 className="section-title" style={{ fontSize: 24 }}>Academic Projects</h3>
      <div className="section-line" />

      <div className="row g-4">
        {displayedAcademic.map(({ title, tech, desc }) => (
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

      <div className="text-center mt-4">
        <button
          className="btn btn-ghost px-4 py-2"
          style={{ fontSize: 14 }}
          onClick={() => setShowAllAcademic((prev) => !prev)}
          aria-expanded={showAllAcademic}
        >
          {showAllAcademic ? 'Show fewer projects' : 'Show all projects'}
        </button>
      </div>
    </section>
  )
}