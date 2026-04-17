import { education, experience } from '../data/portfolioData'

export default function Education() {
  return (
    <section id="education" className="container py-5">

      <h2 className="section-title">Experience</h2>
      <div className="section-line" />
      {experience.map(({ role, company, desc }) => (
        <div className="timeline-item" key={role}>
          <h3 className="mb-1" style={{ fontSize: 16, fontWeight: 500, color: '#fff' }}>{role}</h3>
          <p className="accent mb-1" style={{ fontSize: 13 }}>{company}</p>
          <p className="mb-0" style={{ fontSize: 14, color: '#64748B', lineHeight: 1.7 }}>{desc}</p>
        </div>
      ))}

      <h2 className="section-title mt-5">Education</h2>
      <div className="section-line" />
      {education.map(({ degree, institution, years }) => (
        <div className="timeline-item" key={degree}>
          <h3 className="mb-1" style={{ fontSize: 16, fontWeight: 500, color: '#fff' }}>{degree}</h3>
          <p className="accent mb-1" style={{ fontSize: 13 }}>{institution}</p>
          <p className="mb-0" style={{ fontSize: 13, color: '#64748B' }}>{years}</p>
        </div>
      ))}

    </section>
  )
}