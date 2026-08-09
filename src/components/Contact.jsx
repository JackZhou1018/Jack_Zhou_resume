import { profile } from '../data/resume.js'

export default function Contact() {
  return (
    <section id="contact" className="container">
      <div className="section-head">
        <p className="kicker">// Contact</p>
        <h2>联系方式</h2>
      </div>
      <div className="panel contact-panel">
        <p className="contact-line">
          <span className="mono c-label">电话</span>
          <a href={`tel:${profile.phone}`}>{profile.phone}</a>
        </p>
        <p className="contact-line">
          <span className="mono c-label">邮箱</span>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </p>
        <p className="contact-line">
          <span className="mono c-label">地点</span>
          <span>{profile.location} · {profile.expectation}</span>
        </p>
        <p className="contact-note">欢迎技术交流与工作机会沟通。</p>
      </div>
    </section>
  )
}
