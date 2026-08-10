import avatar from '../assets/avatar.webp'
import heroBg from '../assets/hero-bg.webp'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg" style={{ backgroundImage: `url(${heroBg})` }} />
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="hero-role mono">FAE · AI 算力全栈技术支持</p>
          <h1>Jack Zhou<span className="cn-name">周猛</span></h1>
          <p className="hero-desc">
            资深 FAE 工程师，深耕 AI GPU 算力领域：从大客户 POC 验证、大模型适配，
            到集群交付与故障闭环，再到用 Vibe Coding 把重复劳动工具化。
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">查看项目经历</a>
            <a className="btn btn-ghost" href="#contact">联系方式</a>
          </div>
        </div>
        <div className="hero-avatar-wrap">
          <img className="hero-avatar" src={avatar} alt="Jack Zhou 卡通形象" />
          <div className="avatar-ring" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
