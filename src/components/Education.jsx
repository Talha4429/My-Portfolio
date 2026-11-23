import { education, experience } from '../data/portfolioData'

export default function Education() {
  return (
    <>
      {/* Experience Section */}
      <section id="experience" className="container py-5">
        <h2 className="section-title">Experience</h2>
        <div className="section-line" />
        {experience.map(({ role, company, desc, period, bullets }) => (
          <div className="timeline-item" key={role}>
            <div className="d-flex justify-content-between align-items-baseline flex-wrap gap-2">
              <h3 className="mb-1" style={{ fontSize: 16, fontWeight: 500, color: '#fff' }}>{role}</h3>
              {period && (
                <span style={{ fontSize: 13, color: '#94A3B8' }}>{period}</span>
              )}
            </div>
            <p className="accent mb-2" style={{ fontSize: 13 }}>{company}</p>
            {bullets ? (
              <ul className="ps-3 mb-0" style={{ fontSize: 14, color: '#94A3B8', lineHeight: 1.7 }}>
                {bullets.map((b, i) => (
                  <li key={i} className="mb-1">{b}</li>
                ))}
              </ul>
            ) : (
              <p className="mb-0" style={{ fontSize: 14, color: '#94A3B8', lineHeight: 1.7 }}>{desc}</p>
            )}
          </div>
        ))}
      </section>

      {/* Education Section */}
      <section id="education" className="container py-5">
        <h2 className="section-title">Education</h2>
        <div className="section-line" />
        {education.map(({ degree, institution, years }) => (
          <div className="timeline-item" key={degree}>
            <h3 className="mb-1" style={{ fontSize: 16, fontWeight: 500, color: '#fff' }}>{degree}</h3>
            <p className="accent mb-1" style={{ fontSize: 13 }}>{institution}</p>
            <p className="mb-0" style={{ fontSize: 13, color: '#94A3B8' }}>{years}</p>
          </div>
        ))}
      </section>
    </>
  )
}