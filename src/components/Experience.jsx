import { experiences } from '../data/resume.js'

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-head reveal">
          <span className="sec-index">02</span>
          <h2>Experience</h2>
          <span className="cn">工作经历</span>
        </div>
        <div className="timeline">
          {experiences.map((e) => (
            <div key={e.company} className="t-item reveal">
              <div className="t-dot" />
              <div className="t-head">
                <span className="t-period">{e.period}</span>
                <span className="t-company">{e.company}</span>
                <span className="t-role">{e.role}</span>
              </div>
              <p className="t-desc">{e.desc}</p>
              <ul className="t-items">
                {e.items.map((it) => <li key={it}>{it}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
