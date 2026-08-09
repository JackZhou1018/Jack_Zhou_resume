import { education } from '../data/resume.js'

export default function Education() {
  return (
    <section id="education" className="container">
      <div className="section-head">
        <p className="kicker">// Education</p>
        <h2>教育经历</h2>
      </div>
      <div className="timeline">
        {education.map((e) => (
          <article key={e.school} className="timeline-item panel">
            <span className="tl-period mono">{e.period}</span>
            <h3>{e.school}</h3>
            <p className="tl-role">{e.major} · {e.degree}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
