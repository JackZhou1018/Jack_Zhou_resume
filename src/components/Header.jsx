const links = [
  ['核心优势', '#about'],
  ['经历', '#experience'],
  ['项目', '#projects'],
  ['技能', '#skills'],
  ['Vibe Coding', '#vibe'],
  ['联系', '#contact'],
]

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          <span className="brand-mark">JZ</span>
          <span className="brand-name">JACK<em> ZHOU</em></span>
        </div>
        <nav className="nav">
          {links.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>
        <span className="status-chip"><i />OPEN TO WORK</span>
      </div>
    </header>
  )
}
