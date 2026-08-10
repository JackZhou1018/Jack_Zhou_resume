import avatar from '../assets/avatar.webp'
import heroBg from '../assets/hero-bg.webp'

const stats = [
  { num: '5', suffix: '+', label: 'POC 项目' },
  { num: '40', suffix: '万', label: 'GPU 订单量' },
  { num: '50', suffix: '+', label: '展会 Demo' },
  { num: '98', suffix: '%', label: '客户满意度' },
]

const huds = [
  ['hud-1', 'AI 算力全栈'],
  ['hud-2', '500+ 服务器交付'],
  ['hud-3', '40万+ GPU 订单'],
]

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg" style={{ backgroundImage: `url(${heroBg})` }} />
      <div className="hero-inner">
        <div>
          <div className="hero-role">FAE Engineer · AI Compute</div>
          <h1>
            <span className="en">JACK ZHOU</span>
            <span className="cn">周 猛</span>
          </h1>
          <p className="hero-desc">
            <b>FAE 工程师 · AI 算力技术支持</b>。主导 GPU 服务器 / 加速卡 POC 验证、大模型适配与集群部署，
            从方案设计到量产交付全流程闭环，用 AI 原生方法把重复劳动快速工具化。
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">查看项目 <span className="arrow">→</span></a>
            <a className="btn btn-ghost" href="#contact">联系我</a>
          </div>
          <div className="hero-stats">
            {stats.map((st) => (
              <div key={st.label} className="stat">
                <div className="num">{st.num}<em>{st.suffix}</em></div>
                <div className="lbl">{st.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-avatar-wrap">
          <div className="avatar-orbit orbit-3" />
          <div className="avatar-orbit orbit-2" />
          <div className="avatar-orbit orbit-1" />
          <img className="hero-avatar" src={avatar} alt="Jack Zhou 卡通头像" fetchpriority="high" decoding="async" />
          <div className="avatar-scan" />
          {huds.map(([cls, text]) => (
            <div key={cls} className={`hud ${cls}`}>{text}</div>
          ))}
        </div>
      </div>
      <div className="scroll-hint">SCROLL</div>
    </section>
  )
}
