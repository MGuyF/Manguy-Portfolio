import React, { useState } from 'react';
import userAvatar from './avatar.png';
import busDriverScreenshot from './Bus-Driver-SShoot.png';
import blogScreenshot from './Mini-Blog-SShot.png';
import cvPdf from './Guy Fleury_MANIRAKIZA_CV.pdf';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Download, Mail, Linkedin, LayoutGrid, User, Send, Menu, X } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mgvglere");

  if (state.succeeded) {
    return (
      <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl flex items-center justify-center">
        <p className="text-center text-lg font-semibold">Merci ! Votre message a bien été envoyé.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl">
      <label htmlFor="name" className="block text-sm text-slate-300">Votre nom</label>
      <input
        id="name"
        type="text"
        name="name"
        className="w-full mt-2 p-2 bg-slate-800/50 border border-slate-700 rounded-md focus:border-primary outline-none transition"
        required
      />
      <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-sm mt-1" />

      <label htmlFor="email" className="block text-sm text-slate-300 mt-4">Email</label>
      <input
        id="email"
        type="email"
        name="email"
        className="w-full mt-2 p-2 bg-slate-800/50 border border-slate-700 rounded-md focus:border-primary outline-none transition"
        required
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm mt-1" />

      <label htmlFor="message" className="block text-sm text-slate-300 mt-4">Message</label>
      <textarea
        id="message"
        name="message"
        className="w-full mt-2 p-2 bg-slate-800/50 border border-slate-700 rounded-md h-28 focus:border-primary outline-none transition"
        required
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm mt-1" />

      <div className="mt-4">
        <button type="submit" disabled={state.submitting} className="px-4 py-2 bg-gradient-to-r from-primary to-secondary rounded-md hover:scale-105 transition disabled:opacity-50 disabled:cursor-not-allowed">
          Envoyer le message
        </button>
      </div>
    </form>
  );
}

const projects = [
  {
    id: 1,
    title: 'Bus Driver Management',
    desc: 'Application full-stack pour gérer les chauffeurs, les tournées et les horaires. Tableaux de bord et rapports en temps réel.',
    stack: ['React', 'Django', 'Postgres', 'Render'],
    live: 'https://bus-driver-full-stack.vercel.app/',
    github: 'https://github.com/MGuyF/Bus-Driver-FullStack',
    img: busDriverScreenshot
  },
  {
    id: 2,
    title: 'Blog Laravel/Vue',
    desc: 'Un mini blog moderne avec authentification et CRUD complet, développé avec Laravel et Vue.js.',
    stack: ['Laravel', 'Vue.js', 'Inertia.js', 'Tailwind CSS'],
    live: '#', // Remplacez par l'URL de démo si disponible
    github: 'https://github.com/MGuyF/blog-laravue-demo',
    img: blogScreenshot
  },
];

// Composant pour les points animés
const AnimatedDots = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Points en haut à gauche */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`tl-${i}`}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${i % 2 === 0 ? '#18ad8f' : '#3b82f6'} 0%, transparent 70%)`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
              x: [0, Math.random() * 20 - 10, 0],
              y: [0, Math.random() * 20 - 10, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Points en bas à droite */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`br-${i}`}
            className="absolute w-2 h-2 rounded-full"
            style={{
              right: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${i % 2 === 0 ? '#8b5cf6' : '#3b82f6'} 0%, transparent 70%)`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
              x: [0, Math.random() * 20 - 10, 0],
              y: [0, Math.random() * 20 - 10, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Lueur douce d'ambiance */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />
    </div>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="min-h-screen font-sans relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Points animés en arrière-plan */}
      <AnimatedDots />
      


            {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-slate-950 z-20 flex flex-col items-center justify-center gap-6">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-6 text-slate-300 hover:text-white transition">
            <X size={28} />
          </button>
          <a href="#projects" className="text-2xl hover:text-primary transition" onClick={() => setIsMenuOpen(false)}>Projects</a>
          <a href="#about" className="text-2xl hover:text-primary transition" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#contact" className="text-2xl hover:text-primary transition" onClick={() => setIsMenuOpen(false)}>Contact</a>
          <a href="/Manguy-CV.pdf" className="mt-4 inline-flex items-center gap-2 px-4 py-3 bg-primary/80 rounded-full shadow-md hover:scale-105 transition">
            <Download size={18} /> CV
          </a>
        </div>
      )}

      <div className="relative z-10">
        <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between backdrop-blur-sm">
          <div className={`flex items-center gap-3 ${isMenuOpen ? 'relative z-30' : ''}`}>
            <div className="w-12 h-12 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 2H20C23.3137 2 26 4.68629 26 8V20C26 23.3137 23.3137 26 20 26H8C4.68629 26 2 23.3137 2 20V8C2 4.68629 4.68629 2 8 2Z" stroke="url(#paint0_linear_1_2)" stroke-width="3"/>
                <path d="M14 8V20" stroke="url(#paint1_linear_1_2)" stroke-width="3" stroke-linecap="round"/>
                <defs>
                  <linearGradient id="paint0_linear_1_2" x1="2" y1="2" x2="26" y2="26" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#18ad8f"/>
                    <stop offset="1" stop-color="#3b82f6"/>
                  </linearGradient>
                  <linearGradient id="paint1_linear_1_2" x1="14" y1="8" x2="14" y2="20" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#18ad8f"/>
                    <stop offset="1" stop-color="#3b82f6"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-semibold">Manguy</h1>
              <div className="text-sm text-slate-400">Développeur Full-Stack</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-4 text-sm text-slate-300">
            <a href="#projects" className="hover:text-white transition">Projets</a>
            <a href="#about" className="hover:text-white transition">À propos</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
            <a href={cvPdf} download="Guy_Fleury_MANIRAKIZA_CV.pdf" className="ml-4 inline-flex items-center gap-2 px-3 py-2 bg-primary/80 rounded-full shadow-md hover:scale-105 transition">
              <Download size={16} /> CV
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-6">
          {/* Hero */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-16">
            <motion.div 
              initial={{ x: -40, opacity: 0 }} 
              animate={{ x: 0, opacity: 1 }} 
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
                Bonjour, je suis <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Manguy</span> — je crée des applications web modernes.
              </h2>
              <p className="mt-4 text-slate-300 max-w-xl">
                Je conçois et déploie des applications full-stack en mettant l'accent sur la performance, une expérience utilisateur claire et des déploiements fiables. React, Django et les pipelines de production sont mes outils de prédilection.
              </p>
              <div className="mt-6 flex gap-3">
                <a href="#projects" className="px-5 py-3 bg-gradient-to-r from-primary to-secondary rounded-full font-medium shadow-lg hover:scale-105 transition">
                  Voir mes projets
                </a>
                <a href={cvPdf} download="Guy_Fleury_MANIRAKIZA_CV.pdf" className="px-5 py-3 border border-slate-600 rounded-full font-medium hover:bg-slate-800 transition inline-flex items-center gap-2">
                  <Download size={18} /> Télécharger le CV
                </a>
              </div>

              <div className="mt-8 flex gap-4 items-center text-slate-300">
                <a href="https://github.com/MGuyF" aria-label="github" className="p-3 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 hover:scale-105 transition">
                  <Github size={18} />
                </a>
                <a href="https://www.linkedin.com/in/gfmanirakiza29-1-bdi/" aria-label="linkedin" className="p-3 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 hover:scale-105 transition">
                  <Linkedin size={18} />
                </a>
                <a href="#contact" aria-label="email" className="p-3 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 hover:scale-105 transition">
                  <Mail size={18} />
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              transition={{ duration: 0.6 }} 
              className="flex items-center justify-center"
            >
              <div className="w-full max-w-md bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-xl">
                <img src={busDriverScreenshot} alt="Bus Driver Management Preview" className="w-full rounded-lg object-contain h-64" />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold">Bus Driver Management</h3>
                  <p className="text-slate-400 mt-1">Un système complet pour la gestion des chauffeurs, des tournées et des rapports.</p>
                  <div className="mt-3 flex gap-2">
                    <a href="https://bus-driver-full-stack.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-sm inline-flex items-center gap-2 px-3 py-2 bg-primary/80 rounded-md hover:bg-primary transition">
                      Démo <ExternalLink size={14} />
                    </a>
                    <a href="https://github.com/MGuyF/Bus-Driver-FullStack" className="text-sm inline-flex items-center gap-2 px-3 py-2 border border-slate-700 rounded-md hover:bg-slate-800 transition">
                      Code <Github size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Projects grid */}
          <section id="projects" className="py-12">
            <h3 className="text-2xl md:text-3xl font-bold flex items-center gap-3"><LayoutGrid size={28} className="text-primary" />Projets Sélectionnés</h3>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map(p => (
                <motion.article 
                  key={p.id} 
                  className="bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-md hover:scale-[1.02] transition" 
                  whileHover={{ y: -4 }}
                >
                  <div className="flex gap-4">
                    <img src={p.img} alt={p.title} className="w-36 h-24 object-contain rounded-md" />
                    <div>
                      <h4 className="text-xl font-semibold">{p.title}</h4>
                      <p className="text-slate-400 text-sm mt-1">{p.desc}</p>
                      <div className="mt-3 flex gap-2 flex-wrap">
                        {p.stack.map(s => (
                          <span key={s} className="text-xs px-2 py-1 bg-slate-800/60 rounded-md border border-white/5">
                            {s}
                          </span>
                        ))}
                      </div>
                      <div className="mt-3 flex gap-2">
                        <a href={p.live} className="text-sm inline-flex items-center gap-2 px-3 py-2 bg-primary/80 rounded-md hover:bg-primary transition">
                          Démo
                        </a>
                        <a href={p.github} className="text-sm inline-flex items-center gap-2 px-3 py-2 border border-slate-700 rounded-md hover:bg-slate-800 transition">
                          Code
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          {/* About */}
          <section id="about" className="py-12">
            <h3 className="text-2xl md:text-3xl font-bold flex items-center gap-3"><User size={28} className="text-primary" />À propos de moi</h3>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              <div className="col-span-1">
                <div className="w-full rounded-xl bg-white/5 backdrop-blur-md border border-white/10 p-4">
                  <div className="w-36 h-36 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto p-1">
                  <img src={userAvatar} alt="Manguy" className="w-full h-full object-cover rounded-full" />
                </div>
                  <h4 className="text-center mt-4 font-semibold">Manguy</h4>
                  <p className="text-center text-slate-400 text-sm">Développeur Full-Stack</p>
                  <div className="mt-4 flex justify-center gap-2">
                    <span className="px-3 py-1 bg-slate-800/50 rounded-full text-xs">React</span>
                    <span className="px-3 py-1 bg-slate-800/50 rounded-full text-xs">Django</span>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2">
                <div className="bg-slate-900/50 backdrop-blur-md border border-white/10 p-6 rounded-xl">
                  <h4 className="text-xl font-semibold">Mon approche</h4>
                  <p className="text-slate-300 mt-2">
                    Je conçois et développe des applications web performantes avec une attention particulière portée à l'expérience utilisateur et à la qualité du code. J'aime résoudre des problèmes complexes avec des architectures robustes et maintenables, en utilisant les meilleures pratiques du développement moderne.
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div>
                      <h5 className="text-sm text-slate-400">Frontend</h5>
                      <p className="font-medium">React, Vue.js, Vite, Tailwind</p>
                    </div>
                    <div>
                      <h5 className="text-sm text-slate-400">Backend</h5>
                      <p className="font-medium">Django REST, Laravel, PostgreSQL</p>
                    </div>
                    <div>
                      <h5 className="text-sm text-slate-400">Frameworks Full-Stack</h5>
                      <p className="font-medium">Inertia.js, REST APIs</p>
                    </div>
                    <div>
                      <h5 className="text-sm text-slate-400">Déploiement</h5>
                      <p className="font-medium">Vercel, Render</p>
                    </div>
                    <div>
                      <h5 className="text-sm text-slate-400">Outils & Méthodes</h5>
                      <p className="font-medium">Git, GitHub Actions, VS Code, Windsurf IDE</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="py-12">
            <h3 className="text-2xl md:text-3xl font-bold flex items-center gap-3"><Send size={28} className="text-primary" />Contact</h3>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl">
                <h4 className="font-semibold">Construisons quelque chose</h4>
                <p className="text-slate-400 mt-2">
                  Envoyez-moi un message et je vous répondrai rapidement. Disponible pour des missions freelance et des postes à temps plein.
                </p>
                <div className="mt-4 flex gap-3">
                  <a href="mailto:2000291gf@gmail.com" className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-secondary rounded-md hover:scale-105 transition">
                    <Mail size={18} /> Email
                  </a>
                  <a href="https://www.linkedin.com/in/gfmanirakiza29-1-bdi/" className="inline-flex items-center gap-2 px-4 py-2 border border-slate-700 rounded-md hover:bg-slate-800 transition">
                    LinkedIn
                  </a>
                </div>
              </div>

              <ContactForm />
            </div>
          </section>

          <footer className="py-12 text-center text-sm text-slate-500">
            © {new Date().getFullYear()} Manguy — Créé avec ❤️
          </footer>
        </main>
      </div>
    </div>
  );
}