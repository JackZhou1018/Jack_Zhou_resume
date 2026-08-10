import { skills } from '../data/resume.js'

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-head reveal">
          <span className="sec-index">04</span>
          <h2>Skill Matrix</h2>
          <span className="cn">技能矩阵</span>
        </div>
        <div className="skill-grid">
          {skills.map((g) => (
            <div key={g.group} className="panel skill-card reveal">
              <h3>{g.group}</h3>
              <div className="skill-list">
                {g.items.map((it, i) => (
                  <div key={it} className="skill-row">
                    <span className="skill-name">{it}</span>
                    <span className="skill-bar"><i style={{ '--w': g.levels[i] }} /></span>
                    <span className="skill-pct">{Math.round(g.levels[i] * 100)}%</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
