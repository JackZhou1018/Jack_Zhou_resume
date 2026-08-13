import { profile } from '../data/resume.js'

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-head reveal">
          <span className="sec-index">07</span>
          <h2>Contact</h2>
          <span className="cn">联系我</span>
        </div>
        <div className="contact-grid">
          <div className="panel contact-item reveal">
            <span className="contact-ico">✆</span>
            <div>
              <div className="lbl">电话</div>
              <div className="val"><a href={`tel:${profile.phone}`}>{profile.phone}</a></div>
            </div>
          </div>
          <div className="panel contact-item reveal">
            <span className="contact-ico">⌘</span>
            <div>
              <div className="lbl">GitHub</div>
              <div className="val"><a href="https://github.com/jackzhou1018" target="_blank" rel="noreferrer">github.com/jackzhou1018</a></div>
            </div>
          </div>
          <div className="panel contact-item reveal">
            <span className="contact-ico">微</span>
            <div>
              <div className="lbl">微信</div>
              <div className="val">{profile.phone}</div>
            </div>
          </div>
          <div className="panel contact-item reveal">
            <span className="contact-ico">✉</span>
            <div>
              <div className="lbl">邮箱</div>
              <div className="val"><a href={`mailto:${profile.email}`}>{profile.email}</a></div>
            </div>
          </div>
          <div className="panel contact-item reveal">
            <span className="contact-ico">◉</span>
            <div>
              <div className="lbl">坐标 / 期望</div>
              <div className="val">{profile.expectShort}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
