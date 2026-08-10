import { education } from '../data/resume.js'

export default function Education() {
  return (
    <section className="section" id="education" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="section-head reveal">
          <span className="sec-index">06</span>
          <h2>Education</h2>
          <span className="cn">教育背景</span>
        </div>
        {education.map((e) => (
          <div key={e.school} className="panel edu-row reveal">
            <span className="edu-period">{e.period}</span>
            <div>
              <div className="edu-school">{e.school}</div>
              <div className="edu-major">{e.major}</div>
            </div>
            <span className="edu-degree" style={{ marginLeft: 'auto' }}>{e.degree}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
