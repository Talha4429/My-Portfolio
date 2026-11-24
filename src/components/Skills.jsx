import { skills } from '../data/portfolioData'

const primaryStack = [
  "Ruby on Rails",
  "Spree Commerce",
  "Next.js",
  "PostgreSQL",
  "Tailwind CSS",
]

export default function Skills() {
  return (
    <section id="skills" className="container py-5 reveal-on-scroll">
      <div className="section-number">01 / Skills</div>
      <h2 className="section-title">Skills</h2>
      <div className="section-line" />

      {/* Primary Stack Card */}
      <div className="card-dark p-4 mb-4 primary-stack-card">
        <p
          className="accent mb-3"
          style={{ fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600 }}
        >
          Primary Stack
        </p>
        <div className="d-flex flex-wrap gap-2">
          {primaryStack.map((item) => (
            <span className="tag primary-tag" key={item}>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Compact Categories */}
      <div className="row g-4">
        {skills.map(({ category, items }) => (
          <div className="col-sm-6 col-lg-4" key={category}>
            <div className="card-dark p-4 h-100">
              <p className="accent mb-3" style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                {category}
              </p>
              <div className="d-flex flex-wrap gap-2">
                {items.map(item => (
                  <span className="tag" key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}