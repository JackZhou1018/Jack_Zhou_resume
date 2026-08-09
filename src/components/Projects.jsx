import { projects } from '../data/resume.js'

export default function Projects() {
  return (
    <section id="projects" className="container">
      <div className="section-head">
        <p className="kicker">// Selected Projects</p>
        <h2>项目经历</h2>
        <p>POC 验证、集采投标、集群交付与展会支持——从技术攻坚到商业落地的完整闭环。</p>
      </div>
      <div className="project-list">
        {projects.map((p) => (
          <article key={p.name} className="panel project">
            <div className="project-head">
              <span className="tl-period mono">{p.period}</span>
              <h3>{p.name}</h3>
              <span className="project-role">{p.role}</span>
            </div>
            <ul className="project-points">
              {p.points.map((pt) => <li key={pt}>{pt}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
