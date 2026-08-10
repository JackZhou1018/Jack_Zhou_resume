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
          {vibe.works.map((w, i) => (
            <article key={w.name} className="panel work-card">
              <div className="work-top">
                <h3>{w.name}</h3>
                <span className="mono work-num">WORK / {String(i + 1).padStart(2, '0')}</span>
              </div>
              <p>{w.desc}</p>
              {w.stats && (
                <div className="work-stats">
                  {w.stats.map((st) => <span key={st} className="work-stat">{st}</span>)}
                </div>
              )}
              {w.tags && (
                <div className="work-tags">
                  {w.tags.map((t) => <span key={t} className="mono work-tag">{t}</span>)}
                </div>
              )}
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
