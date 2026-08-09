import { useState } from 'react'

const links = [
  ['优势', '#highlights'],
  ['经历', '#experience'],
  ['项目', '#projects'],
  ['技能', '#skills'],
  ['联系方式', '#contact'],
]

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#top">
          <span className="brand-mark">JZ</span>
          <span className="brand-name">Jack Zhou</span>
        </a>
        <nav className={`nav ${open ? 'nav-open' : ''}`}>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>联系我</a>
        </nav>
        <button
          className="nav-toggle"
          aria-label="切换导航"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
