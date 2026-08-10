import { projects } from '../data/resume.js'

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-head reveal">
          <span className="sec-index">03</span>
          <h2>Key Projects</h2>
          <span className="cn">代表项目</span>
        </div>
        <div className="proj-grid">
          {projects.map((p) => (
            <div key={p.name} className="panel proj reveal">
              <div className="proj-top">
                <span className="proj-tag">{p.tag || 'PROJECT'}</span>
                <span className="proj-year">{p.period}</span>
              </div>
              <h3>{p.name}</h3>
              <div className="proj-role">{p.role}</div>
              <ul className="proj-points">
                {p.points.map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
