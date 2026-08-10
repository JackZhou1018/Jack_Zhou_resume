import { useEffect } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import VibeCoding from './components/VibeCoding.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  useEffect(() => {
    // 星点粒子
    const canvas = document.getElementById('stars')
    const ctx = canvas.getContext('2d')
    let stars = []
    const resize = () => {
      canvas.width = innerWidth
      canvas.height = innerHeight
      stars = Array.from({ length: Math.min(110, innerWidth / 12) }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.2 + 0.2,
        s: Math.random() * 0.25 + 0.05,
        a: Math.random() * 0.5 + 0.2,
        p: Math.random() * Math.PI * 2,
      }))
    }
    let raf
    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (const st of stars) {
        st.y -= st.s
        st.p += 0.008
        if (st.y < -4) { st.y = canvas.height + 4; st.x = Math.random() * canvas.width }
        ctx.beginPath()
        ctx.arc(st.x, st.y, st.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(180,235,225,${st.a * (0.5 + Math.sin(st.p) * 0.5)})`
        ctx.fill()
      }
      raf = requestAnimationFrame(tick)
    }
    addEventListener('resize', resize)
    resize()
    tick()

    // 顶部滚动进度条
    const bar = document.getElementById('progress')
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - innerHeight
      bar.style.width = (scrollY / h * 100) + '%'
    }
    addEventListener('scroll', onScroll, { passive: true })

    // 滚动显现
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
      })
    }, { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))

    return () => {
      cancelAnimationFrame(raf)
      removeEventListener('resize', resize)
      removeEventListener('scroll', onScroll)
      io.disconnect()
    }
  }, [])

  return (
    <>
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-glow" aria-hidden="true" />
      <canvas id="stars" aria-hidden="true" />
      <div id="progress" />
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <VibeCoding />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
