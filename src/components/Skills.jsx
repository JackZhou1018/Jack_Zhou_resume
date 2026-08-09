import { skills } from '../data/resume.js'

export default function Skills() {
  return (
    <section id="skills" className="container">
      <div className="section-head">
        <p className="kicker">// Capabilities</p>
        <h2>技能矩阵</h2>
      </div>
      <div className="skill-grid">
        {skills.map((g) => (
          <div key={g.group} className="panel skill-group">
            <h3>{g.group}</h3>
            <div className="skill-tags">
              {g.items.map((it) => <span key={it} className="tag">{it}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
