import { projects } from '../data/portfolioData'

export default function Projects() {
  return (
    <section id="projects" className="container py-5">
      <h2 className="section-title">Projects</h2>
      <div className="section-line" />

      <div className="row g-4">
        {projects.map(({ title, tech, desc }) => (
          <div className="col-sm-6 col-lg-4" key={title}>
            <div className="card-dark p-4 h-100">
              <p className="accent mb-2" style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                {tech}
              </p>
              <h3 className="mb-2" style={{ fontFamily: 'Syne, sans-serif', fontSize: 17, fontWeight: 700, color: '#fff' }}>
                {title}
              </h3>
              <p className="mb-0" style={{ fontSize: 14, color: '#64748B', lineHeight: 1.7 }}>
                {desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}