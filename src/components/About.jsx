import { highlights, vibe } from '../data/resume.js'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-head reveal">
          <span className="sec-index">01</span>
          <h2>Core Advantages</h2>
          <span className="cn">核心优势</span>
        </div>
        <div className="highlight-grid">
          {highlights.map((h, i) => (
            <div key={h.title} className="panel highlight reveal">
              <div className="hl-top">
                <span className="hl-icon">◈</span>
                <span className="hl-index">HIGHLIGHT / 0{i + 1}</span>
              </div>
              <h3>{h.title}</h3>
              <p>{h.desc}</p>
            </div>
          ))}
        </div>
        <div className="panel vibe-banner reveal">
          <div>
            <h3>⚡ {vibe.title}</h3>
            <p>{vibe.desc}</p>
          </div>
          <div className="vibe-tags">
            {vibe.tags.map((t) => <span key={t}>{t}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}
