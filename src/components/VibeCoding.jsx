import { useEffect, useRef } from 'react'
import { vibe } from '../data/resume.js'

const typingLines = [
  'vibe-coding --tool 集群巡检脚本',
  'vibe-coding --tool 每日大盘监控',
  'vibe-coding --tool 星舰 V3 工程级 3D 交付',
]

export default function VibeCoding() {
  const cursorRef = useRef(null)
  useEffect(() => {
    let li = 0, ci = 0, timer
    const el = cursorRef.current
    const type = () => {
      if (li >= typingLines.length) { timer = setTimeout(type, 4000); return }
      const line = typingLines[li]
      if (ci <= line.length) {
        el.textContent = line.slice(0, ci++)
        timer = setTimeout(type, 55)
      } else {
        li++; ci = 0
        timer = setTimeout(() => { el.textContent = ''; type() }, 1300)
      }
    }
    timer = setTimeout(type, 1200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="section" id="vibe">
      <div className="container">
        <div className="section-head reveal">
          <span className="sec-index">05</span>
          <h2>Vibe Coding</h2>
          <span className="cn">AI 原生作品</span>
        </div>
        <div className="panel term reveal">
          <div className="term-bar"><i /><i /><i /><span className="term-title">jack@jackzhou: ~/workspace</span></div>
          <div className="term-body">
            <div><span className="ln">01</span><span className="dim"># 我的 AI 原生效率工具箱</span></div>
            <div><span className="ln">02</span><span className="cmd">$ vibe-coding --profile FAE</span></div>
            <div><span className="ln">03</span><span className="ok">✔ 集群巡检脚本</span><span className="dim">    // 一键巡检 GPU 集群健康状态</span></div>
            <div><span className="ln">04</span><span className="ok">✔ 每日大盘监控</span><span className="dim">    // 自动盯盘 + 行情看板</span></div>
            <div><span className="ln">05</span><span className="ok">✔ 星舰 V3 工程级 3D 交付</span><span className="dim">    // 参数化建模 · 图纸 · 维修手册</span></div>
            <div><span className="ln">06</span><span className="dim">… 作品持续补充中</span></div>
            <div className="term-typing"><span className="ln">&gt;</span> <span className="cmd" ref={cursorRef} /><span className="term-cursor" /></div>
          </div>
        </div>
        <div className="works-grid">
          {vibe.works.map((w, i) => (
            <div key={w.name} className="panel work-card reveal">
              <div className="work-top">
                <h3>{w.name}</h3>
                <span className="work-num">WORK / {String(i + 1).padStart(2, '0')}</span>
              </div>
              <p>{w.desc}</p>
              {w.stats && (
                <div className="work-stats">
                  {w.stats.map((st) => <span key={st} className="work-stat">{st}</span>)}
                </div>
              )}
              {w.tags && (
                <div className="work-tags">
                  {w.tags.map((t) => <span key={t} className="work-tag">{t}</span>)}
                </div>
              )}
              {w.link && <a href={w.link} target="_blank" rel="noreferrer">查看作品 →</a>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
