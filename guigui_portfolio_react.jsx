// Project: Guigui Portfolio (React + Tailwind + Framer Motion)
// Single-file preview App exported as default React component (App.jsx)
// Additional files and setup instructions included below in this single document.

/*
README (quick start)

Option A - Quick with Vite (recommended):
1. npm create vite@latest guigui-portfolio -- --template react
2. cd guigui-portfolio
3. Replace src/ with the provided src/ files (App.jsx, main.jsx, index.css, assets folder)
4. npm install
   npm i framer-motion react-icons
5. For Tailwind (recommended production):
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   // add content paths in tailwind.config.js and the @tailwind directives in index.css
6. dev: npm run dev
7. build: npm run build

Option B - Super quick (no build) - React + Tailwind CDN
- Create index.html that loads React (via unpkg) + Tailwind CDN and a compiled script
- Not recommended for production

Deployment: connect repo to Vercel (frontend) for automatic deploy

---

Below: important files you should add to your project.

*/

// package.json
{
  "name": "guigui-portfolio",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "framer-motion": "^10.12.16",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^4.10.1"
  },
  "devDependencies": {
    "vite": "^5.0.0",
    "tailwindcss": "^4.0.0",
    "postcss": "^8.0.0",
    "autoprefixer": "^10.0.0"
  }
}

// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6C5CE7",
        accent: "#00BFA6",
        glass: 'rgba(255,255,255,0.06)'
      },
      fontFamily: {
        display: ["Satoshi", "Inter", "system-ui", "-apple-system"],
      }
    }
  },
  plugins: []
}

// src/main.jsx
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// src/index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

html, body, #root { height: 100%; }
body { @apply bg-[#0b1020] text-slate-200; }

/* small helpers */
.glass {
  background: linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02));
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

// src/App.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaDownload, FaEnvelope, FaLinkedin } from 'react-icons/fa'

const projects = [
  {
    id: 1,
    title: 'Bus Driver Management',
    desc: 'Full-stack app to manage drivers, tours, and schedules. Real-time dashboards and reports.',
    stack: ['React', 'Django', 'Postgres', 'Render'],
    live: '#',
    github: 'https://github.com/MGuyF/Bus-Driver-FullStack',
    img: '/assets/busDRIVER_bg.png'
  },
  // add more projects as needed
]

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg glass flex items-center justify-center">
            <img src="/assets/busDRIVER_logo.png" alt="logo" className="w-10 h-10" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold">Guigui</h1>
            <div className="text-sm text-slate-400">Full-Stack Developer</div>
          </div>
        </div>
        <nav className="flex items-center gap-4 text-sm text-slate-300">
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contact" className="hover:text-white">Contact</a>
          <a href="/Guigui-CV.pdf" className="ml-4 inline-flex items-center gap-2 px-3 py-2 bg-primary/80 rounded-full shadow-md hover:scale-105 transition"> <FaDownload /> CV</a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6">
        {/* Hero */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-16">
          <motion.div initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Hey, I'm <span className="text-primary">Guigui</span> — I build modern web apps.</h2>
            <p className="mt-4 text-slate-300 max-w-xl">I design and ship full-stack applications with a focus on performance, clean UX and reliable deployments. React, Django, and production pipelines are my tools of choice.</p>
            <div className="mt-6 flex gap-3">
              <a href="#projects" className="px-5 py-3 bg-primary rounded-full font-medium shadow-lg hover:scale-105 transition">See my work</a>
              <a href="/Guigui-CV.pdf" className="px-5 py-3 border border-slate-600 rounded-full font-medium hover:bg-slate-800 transition inline-flex items-center gap-2"><FaDownload /> Download CV</a>
            </div>

            <div className="mt-8 flex gap-4 items-center text-slate-300">
              <a href="https://github.com/MGuyF" aria-label="github" className="p-3 rounded-lg glass hover:scale-105 transition"><FaGithub /></a>
              <a href="#" aria-label="linkedin" className="p-3 rounded-lg glass hover:scale-105 transition"><FaLinkedin /></a>
              <a href="#contact" aria-label="email" className="p-3 rounded-lg glass hover:scale-105 transition"><FaEnvelope /></a>
            </div>
          </motion.div>

          <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} className="flex items-center justify-center">
            <div className="w-full max-w-md bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-2xl p-6 glass shadow-xl">
              <img src="/assets/busDRIVER_bg.png" alt="hero" className="w-full rounded-lg object-cover h-64" />
              <div className="mt-4">
                <h3 className="text-xl font-semibold">Bus Driver Management</h3>
                <p className="text-slate-400 mt-1">A complete system for managing drivers, tours and reporting.</p>
                <div className="mt-3 flex gap-2">
                  <a href="#" className="text-sm inline-flex items-center gap-2 px-3 py-2 bg-primary/80 rounded-md">Live <FaExternalLinkAlt /></a>
                  <a href="https://github.com/MGuyF/Bus-Driver-FullStack" className="text-sm inline-flex items-center gap-2 px-3 py-2 border border-slate-700 rounded-md">Code <FaGithub /></a>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Projects grid */}
        <section id="projects" className="py-12">
          <h3 className="text-3xl font-bold">Selected Projects</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map(p => (
              <motion.article key={p.id} className="bg-slate-900/50 glass rounded-xl p-4 shadow-md hover:scale-[1.02] transition" whileHover={{ y: -4 }}>
                <div className="flex gap-4">
                  <img src={p.img} alt={p.title} className="w-36 h-24 object-cover rounded-md" />
                  <div>
                    <h4 className="text-xl font-semibold">{p.title}</h4>
                    <p className="text-slate-400 text-sm mt-1">{p.desc}</p>
                    <div className="mt-3 flex gap-2 flex-wrap">
                      {p.stack.map(s => <span key={s} className="text-xs px-2 py-1 bg-slate-800/60 rounded-md">{s}</span>)}
                    </div>
                    <div className="mt-3 flex gap-2">
                      <a href={p.live} className="text-sm inline-flex items-center gap-2 px-3 py-2 bg-primary/80 rounded-md">Live</a>
                      <a href={p.github} className="text-sm inline-flex items-center gap-2 px-3 py-2 border border-slate-700 rounded-md">Code</a>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-12">
          <h3 className="text-3xl font-bold">About me</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            <div className="col-span-1">
              <div className="w-full rounded-xl glass p-4">
                <img src="/assets/busDRIVER_logo.png" alt="avatar" className="w-36 h-36 object-cover rounded-full mx-auto" />
                <h4 className="text-center mt-4 font-semibold">Guigui</h4>
                <p className="text-center text-slate-400 text-sm">Full-Stack Developer</p>
                <div className="mt-4 flex justify-center gap-2">
                  <span className="px-3 py-1 bg-slate-800/50 rounded-full text-xs">React</span>
                  <span className="px-3 py-1 bg-slate-800/50 rounded-full text-xs">Django</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="bg-slate-900/50 glass p-6 rounded-xl">
                <h4 className="text-xl font-semibold">My approach</h4>
                <p className="text-slate-300 mt-2">I build production-ready applications with clean code, accessible UI and automated deployments. I enjoy solving real problems with reliable architectures and clear UX.</p>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div>
                    <h5 className="text-sm text-slate-400">Frontend</h5>
                    <p className="font-medium">React, Vite, Tailwind</p>
                  </div>
                  <div>
                    <h5 className="text-sm text-slate-400">Backend</h5>
                    <p className="font-medium">Django, DRF, PostgreSQL</p>
                  </div>
                  <div>
                    <h5 className="text-sm text-slate-400">Deployment</h5>
                    <p className="font-medium">Render, Vercel, CI/CD</p>
                  </div>
                  <div>
                    <h5 className="text-sm text-slate-400">Tools</h5>
                    <p className="font-medium">Git, Docker, GitHub Actions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-12">
          <h3 className="text-3xl font-bold">Contact</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass p-6 rounded-xl">
              <h4 className="font-semibold">Let’s build something</h4>
              <p className="text-slate-400 mt-2">Send me a message and I’ll reply quickly. Available for freelance and full-time roles.</p>
              <div className="mt-4 flex gap-3">
                <a href="mailto:you@example.com" className="inline-flex items-center gap-2 px-4 py-2 bg-primary rounded-md"><FaEnvelope /> Email</a>
                <a href="#" className="inline-flex items-center gap-2 px-4 py-2 border rounded-md">LinkedIn</a>
              </div>
            </div>

            <form className="glass p-6 rounded-xl">
              <label className="block text-sm text-slate-300">Your name</label>
              <input className="w-full mt-2 p-2 bg-transparent border border-slate-700 rounded-md" />
              <label className="block text-sm text-slate-300 mt-4">Email</label>
              <input className="w-full mt-2 p-2 bg-transparent border border-slate-700 rounded-md" />
              <label className="block text-sm text-slate-300 mt-4">Message</label>
              <textarea className="w-full mt-2 p-2 bg-transparent border border-slate-700 rounded-md h-28" />
              <div className="mt-4">
                <button type="submit" className="px-4 py-2 bg-primary rounded-md">Send message</button>
              </div>
            </form>
          </div>
        </section>

        <footer className="py-12 text-center text-sm text-slate-500">© {new Date().getFullYear()} Guigui — Built with ❤️</footer>
      </main>
    </div>
  )
}

/*
Notes and next steps:
- Replace placeholder links, images, and texts with your real assets.
- Add responsive tweaks if you need specific mobile handling.
- To host: push to GitHub and connect to Vercel (select project root). For Tailwind production, ensure tailwind.config.js content points to ./index.html and ./src.
- If you want, I can generate the full GitHub repo structure and the exact files to paste.
*/
