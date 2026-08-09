import { highlights, vibe } from '../data/resume.js'

export default function About() {
  return (
    <section id="highlights" className="container">
      <div className="section-head">
        <p className="kicker">// Core Strengths</p>
        <h2>核心优势</h2>
      </div>
      <div className="highlight-grid">
        {highlights.map((h, i) => (
          <article key={h.title} className="panel highlight">
            <span className="hl-index mono">0{i + 1}</span>
            <h3>{h.title}</h3>
            <p>{h.desc}</p>
          </article>
        ))}
      </div>
      <div className="panel vibe-banner">
        <div>
          <h3>{vibe.title}</h3>
          <p>{vibe.desc}</p>
        </div>
        <div className="vibe-tags">
          {vibe.tags.map((t) => <span key={t} className="tag">{t}</span>)}
        </div>
      </div>
    </section>
  )
}
