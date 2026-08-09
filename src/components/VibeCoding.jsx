import { vibe } from '../data/resume.js'

export default function VibeCoding() {
  return (
    <section id="vibe" className="container">
      <div className="section-head">
        <p className="kicker">// Vibe Coding</p>
        <h2>AI 原生效率实践</h2>
        <p>把 FAE 日常的重复劳动，用自然语言变成真正能用的工具。</p>
      </div>
      {vibe.works.length > 0 ? (
        <div className="works-rail">
          {vibe.works.map((w) => (
            <article key={w.name} className="panel work-card">
              <h3>{w.name}</h3>
              <p>{w.desc}</p>
              {w.link && <a href={w.link} target="_blank" rel="noreferrer">查看作品 →</a>}
            </article>
          ))}
        </div>
      ) : (
        <div className="panel work-placeholder">
          <span className="mono placeholder-code">{"$ vibe coding works // 作品整理中"}</span>
          <p>集群巡检脚本、股票盯盘看板等作品正在整理中，稍后加入。</p>
        </div>
      )}
    </section>
  )
}
