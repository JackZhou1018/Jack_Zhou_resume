import { experiences } from '../data/resume.js'

export default function Experience() {
  return (
    <section id="experience" className="container">
      <div className="section-head">
        <p className="kicker">// Career</p>
        <h2>工作经历</h2>
      </div>
      <div className="timeline">
        {experiences.map((e) => (
          <article key={e.company} className="timeline-item panel">
            <div className="tl-head">
              <span className="tl-period mono">{e.period}</span>
              <h3>{e.company}</h3>
              <p className="tl-role">{e.role}</p>
            </div>
            <p className="tl-desc">{e.desc}</p>
            <ul className="tl-items">
              {e.items.map((it) => <li key={it}>{it}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
