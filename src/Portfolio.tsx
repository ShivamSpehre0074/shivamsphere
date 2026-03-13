import hero from "./assets/hero.png";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  Github, 
  Linkedin, 
  Instagram, 
  ExternalLink, 
  Code2, 
  Smartphone, 
  Palette, 
  ChevronDown, 
  ChevronUp,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

// --- Types ---
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
  avatar: string;
  logo: string;
}

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-bg-primary/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-display font-bold tracking-tighter text-white">
          SHIVAM<span className="text-accent-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-text-secondary hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
         <button
  onClick={() => window.open("https://calendly.com/shivamthakur70815/30min", "_blank")}
  aria-label="Book a call with Shivam"
  className="glow-button px-6 py-2.5 bg-accent-primary text-white rounded-full text-sm font-semibold"
>
  Book a Call
</button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-bg-secondary border-b border-white/5 p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium text-text-secondary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="w-full py-3 bg-accent-primary text-white rounded-xl font-semibold mt-2">
                Book a Call
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent-primary/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-secondary/20 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-xs font-bold tracking-widest uppercase mb-6">
            Available for new projects
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6 leading-[1.1]">
            Hi, I'm Shivam Singh<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-highlight">
              Digital Experiences That Scale.
            </span>
          </h1>
          <p className="text-lg text-text-secondary mb-10 max-w-lg leading-relaxed">
            Full Stack Developer specializing in building high-performance web applications and seamless digital products with a focus on modern craftsmanship.
          </p>
          <div className="flex flex-wrap gap-4">

  <button
    onClick={() => window.open("https://calendly.com/shivamthakur70815/30min", "_blank")}
    className="glow-button px-8 py-4 bg-accent-primary text-white rounded-full font-bold hover:opacity-90 transition-all"
  >
    Start a Project
  </button>

  <a
    href="#projects"
    className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold hover:bg-white/10 transition-colors"
  >
    See My Work
  </a>

</div>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {[
              { label: 'Successful Clients', value: '50+' },
              { label: 'Projects Completed', value: '50+' },
              { label: 'Years Experience', value: '5+' },
              { label: 'Coding Hours', value: '500K+' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-display font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-text-secondary uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 aspect-[4/5] bg-bg-secondary">
  <img 
    src={hero}
    alt="Shivam Singh" 
    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
  />
</div>
          {/* Floating Cards */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 glass-card p-4 rounded-2xl z-20"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <div className="text-sm font-bold">100% Success</div>
                <div className="text-[10px] text-text-secondary uppercase">Project Delivery</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-6 -left-6 glass-card p-4 rounded-2xl z-20"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent-primary/20 flex items-center justify-center text-accent-primary">
                <Code2 size={20} />
              </div>
              <div>
                <div className="text-sm font-bold">Full Stack</div>
                <div className="text-[10px] text-text-secondary uppercase">Expertise</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const TrustedBy = () => {
  const logos = ['React', 'Next.js', 'Node.js', 'MongoDB', 'AWS', 'Docker'];

  return (
    <section className="py-12 border-y border-white/5 bg-bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-center text-xs font-bold text-text-secondary uppercase tracking-[0.2em] mb-10">
          TECH STACK
        </p>

        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-12 opacity-40 grayscale">
          {logos.map(logo => (
            <span key={logo} className="text-xl md:text-2xl font-display font-bold text-white">
              {logo}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
};
import eazygrad from "./assets/eazygrad.png";
import poineer from "./assets/poineer.png";
import e2test from "./assets/e2test.png";
import hariguru from "./assets/hariguru.png";
const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "EazyGrad",
      description: "Being a lead developer, revamped the site to a highly responsive and interactive website. Created new features and pages, and collaborated closely with the product manager and UX designer.",
      image: eazygrad,
      tags: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "MongoDB Atlas",
        "EJS",
        "Swiper.js",
        "HTML",
        "CSS",
        "JavaScript",
        "Lighthouse",
        "Figma"
      ],
      link: "https://www.eazygrad.com/"
    },
    {
      id: 2,
      title: "Pioneer Digital",
      description: "One of the featured site while working with TheBrandWick.com (agency). Worked as a frontend developer to make the site user-interactive and responsive.",
      image: poineer,
      tags: ["Javascript", "BootStrap", "css" , "sass"],
      link: "https://digi-drive.netlify.app/"
    },
    {
      id: 3,
      title: "E2 language",
      description: "US-based English Coach's website for guiding techies. Improved existing look and added new features and sections.",
      image: e2test,
      tags: ["WordPress", "elementor", "Javascript" ,"css" ,"html" , "figma"],
      link: "https://www.e2language.com/"
    },
    {
      id: 4,
      title: "Harigurus",
      description: "HariGurus is a one-stop-shop for all Hindu religious, customs and traditional requirements. Built the complete site from scratch.",
      image: hariguru,
      tags: ["React.js","Express.js","Node.js","Swiper.js","MongoDB","Mongoose","CSS","Javascript"],
      link: "https://www.harigurus.com/"
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Recent Projects</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            A curated mix of projects—scalable, fast, and future-ready—blending design, code, and creativity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              whileHover={{ y: -10 }}
              className="glass-card rounded-3xl overflow-hidden group"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <div className="flex gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-accent-primary/10 text-accent-primary text-[10px] font-bold uppercase tracking-wider rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-display font-bold mb-3">{project.title}</h3>
                <p className="text-text-secondary text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
                <a 
  href={project.link} 
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 text-white font-bold text-sm hover:text-accent-primary transition-colors"
>
  View Project <ExternalLink size={16} />
</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Code2 size={40} />,
      title: "Web Development",
      description: "Build fast, scalable, and modern web apps tailored for performance and impact using the latest technologies."
    },
    {
      icon: <Smartphone size={40} />,
      title: "Cross-Platform Development",
      description: "Create seamless experiences across web, mobile, and desktop with one codebase, ensuring maximum reach."
    },
    {
      icon: <Palette size={40} />,
      title: "UI/UX Design",
      description: "Design intuitive, conversion-driven interfaces that users love to interact with, blending aesthetics and utility."
    }
  ];

  return (
    <section id="services" className="section-padding bg-bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Services</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            From interfaces to full-stack, I build modern products that are scalable and user-friendly.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(37, 99, 235, 0.05)' }}
              className="glass-card p-10 rounded-3xl border-white/5 hover:border-accent-primary/30 transition-all duration-300"
            >
              <div className="text-accent-primary mb-6">{service.icon}</div>
              <h3 className="text-2xl font-display font-bold mb-4">{service.title}</h3>
              <p className="text-text-secondary leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { value: '5+', label: 'Years of Experience' },
    { value: '50+', label: 'Projects Completed' },
    { value: '50+', label: 'Satisfied Clients' },
    { value: '500K+', label: 'Coding Hours' },
  ];

  return (
    <section className="py-20 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm text-text-secondary uppercase tracking-widest font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    {
      num: '01',
      title: 'Define & Design',
      description: 'Define goals, map systems, and set the foundation for scalable code and intuitive user flows.'
    },
    {
      num: '02',
      title: 'Build & Develop',
      description: 'Write clean, modular code with seamless UI and robust APIs, ensuring high performance.'
    },
    {
      num: '03',
      title: 'Deploy & Support',
      description: 'Deploy, monitor, and optimize to keep products fast, reliable, and future-proof.'
    }
  ];

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Process</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            A clear workflow drives each project—from strategy and design to development and post-launch support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-[120px] font-display font-black text-white/5 absolute -top-20 -left-4 select-none">
                {step.num}
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-display font-bold mb-4">{step.title}</h3>
                <p className="text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 glass-card p-8 md:p-12 rounded-[40px] flex flex-col md:flex-row items-center justify-between gap-8">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-center md:text-left">
            Build reliable, user-focused products with expert code.
          </h3>
          <button
  onClick={() => window.open("https://calendly.com/shivamthakur70815/30min", "_blank")}
  aria-label="Book a call with Shivam"
  className="glow-button px-6 py-2.5 bg-accent-primary text-white rounded-full text-sm font-semibold"
>
  Book a Call
</button>
        </div>
      </div>
    </section>
  );
};

const AboutMe = () => {
  const skills = [
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'TailwindCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' }
];

  return (
    <section id="about" className="section-padding bg-bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">About Me</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            I build intuitive digital products—scalable, high-performing, and made through collaboration.
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr_1.5fr] gap-16 items-start">
          <div className="glass-card p-8 rounded-[32px] text-center">
            <div className="w-48 h-48 mx-auto rounded-3xl overflow-hidden mb-8 border border-white/10">
              <img 
                src={hero}
                alt="Shivam Singh" 
                className="w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 text-green-500 text-[10px] font-bold uppercase tracking-widest rounded-full mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Available for work
            </div>
            <h3 className="text-2xl font-display font-bold mb-2">SHIVAM SINGH</h3>
            <p className="text-text-secondary text-sm mb-8">
              Create seamless experiences across web, mobile, and desktop with one codebase.
            </p>
            <div className="flex justify-center gap-4 mb-8">
              {[Instagram, Linkedin, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-text-secondary hover:text-white hover:bg-accent-primary transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
            <button className="w-full py-4 bg-accent-primary text-white rounded-2xl font-bold">
              Let's Connect
            </button>
          </div>

          <div>
            <h3 className="text-3xl font-display font-bold mb-6">Hi! I'm Shivam Singh,</h3>
            <p className="text-text-secondary leading-relaxed mb-8">
              A developer passionate about building meaningful digital experiences. With a focus on clean code, thoughtful design, and scalable solutions, I help turn ideas into products that people love to use.
            </p>
            <p className="text-text-secondary leading-relaxed mb-12">
              I specialize in web development, cross-platform applications, and UI/UX design, blending creativity with technical expertise to deliver work that's both functional and visually compelling.
            </p>

            <div className="mb-12">
              <h4 className="text-lg font-bold mb-6 flex items-center gap-3">
                My Tech Stack: <div className="h-px flex-1 bg-white/10" />
              </h4>
              <div className="flex flex-wrap gap-6">
                {skills.map(skill => (
                  <div key={skill.name} className="flex items-center gap-3 glass-card px-4 py-2 rounded-xl">
                    <img src={skill.icon} alt={skill.name} className="w-6 h-6" referrerPolicy="no-referrer" />
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
  <h4 className="text-lg font-bold mb-6 flex items-center gap-3">
    Experience: <div className="h-px flex-1 bg-white/10" />
  </h4>

  <div className="space-y-4">
    {[
      { role: 'Freelance Web Developer', company: 'Self-Employed', year: '2025 – Present' },
      { role: 'Full Stack Developer – Personal Projects', company: 'Independent Projects', year: '2024 – Present' },
      { role: 'B.Tech Computer Science', company: 'University', year: '2022 – 2026' }
    ].map((exp, i) => (
      <div key={i} className="flex justify-between items-center p-4 rounded-2xl bg-white/5 border border-white/5">
        <div>
          <div className="font-bold">{exp.role}</div>
          <div className="text-xs text-text-secondary">{exp.company}</div>
        </div>
        <div className="text-sm font-medium text-text-secondary">{exp.year}</div>
      </div>
    ))}
  </div>
</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Elena Matsuura",
      role: "Finance Lead",
      company: "Zentricon",
      text: "When working with Shivam we had a great pleasure, his ideas were amazing and he delivered beyond our expectations.",
      avatar: "https://i.pravatar.cc/150?u=elena",
      logo: "Google"
    },
    {
      id: 2,
      name: "Marcus Thorne",
      role: "CTO",
      company: "CloudPeak",
      text: "What impressed me most was his ability to think beyond code. He was deeply involved in UX decisions and helped us identify user pain points.",
      avatar: "https://i.pravatar.cc/150?u=marcus",
      logo: "Stripe"
    },
    {
      id: 3,
      name: "Sarah Jenkins",
      role: "Founder",
      company: "Vibe Social",
      text: "The speed and quality of work were exceptional. Shivam is a rare talent who understands both the business and technical side of products.",
      avatar: "https://i.pravatar.cc/150?u=sarah",
      logo: "Airbnb"
    }
  ];

  return (
    <section id="testimonials" className="section-padding">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Testimonials</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Feedback from clients and collaborators, reflecting my commitment to quality and reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="glass-card p-8 rounded-[32px] flex flex-col">
              <p className="text-text-secondary leading-relaxed mb-8 italic">"{t.text}"</p>
              <div className="mt-auto flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border border-white/10" referrerPolicy="no-referrer" />
                <div>
                  <div className="font-bold text-sm">{t.name}</div>
                  <div className="text-[10px] text-text-secondary uppercase tracking-wider">{t.role} @ {t.company}</div>
                </div>
                <div className="ml-auto opacity-30 font-display font-bold text-xs">{t.logo}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: "What kind of projects do you work on?",
      answer: "I specialize in web development, cross-platform applications, and UI/UX solutions — from prototypes to production-ready products. I've worked with startups and established enterprises across various industries."
    },
    {
      id: 2,
      question: "Do you take on freelance or full-time work?",
      answer: "I am currently available for both freelance projects and long-term contract roles. I enjoy collaborating on innovative products that challenge my technical skills."
    },
    {
      id: 3,
      question: "How do you approach new projects?",
      answer: "My approach starts with a deep dive into the problem space and user needs. I then move to strategy, design, and iterative development, ensuring constant communication with stakeholders."
    },
    {
      id: 4,
      question: "What's your typical project timeline?",
      answer: "Timelines vary depending on complexity. A typical MVP might take 4-8 weeks, while larger enterprise platforms can take several months. I provide detailed estimates after our initial discovery call."
    },
    {
      id: 5,
      question: "How can we get started?",
      answer: "The best way is to book a discovery call or send me a message through the contact form. We'll discuss your vision, requirements, and how I can help you achieve your goals."
    }
  ];

  return (
    <section id="faq" className="section-padding bg-bg-secondary/30">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-text-secondary">Answers to common questions about my work and process.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="glass-card rounded-2xl overflow-hidden">
              <button 
                className="w-full p-6 flex items-center justify-between text-left"
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
              >
                <span className="font-bold md:text-lg">{faq.question}</span>
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-text-secondary">
                  {openId === faq.id ? <X size={18} /> : <ChevronDown size={18} />}
                </div>
              </button>
              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-text-secondary leading-relaxed border-t border-white/5">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative glass-card p-12 md:p-24 rounded-[48px] overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
              Your vision, my expertise. Let's create something <span className="text-accent-primary">exceptional.</span>
            </h2>
            <p className="text-lg text-text-secondary mb-12 leading-relaxed">
              Ready to start? Schedule a consultation and let's shape your next big project together.
            </p>
           <button
  onClick={() => window.open("https://calendly.com/shivamthakur70815/30min", "_blank")}
  aria-label="Book a call with Shivam"
  className="glow-button px-6 py-2.5 bg-accent-primary text-white rounded-full text-sm font-semibold"
>
  Book a Call
</button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="text-[80px] md:text-[140px] font-display font-black text-white/5 tracking-tighter mb-8 select-none">
            SHIVAM SINGH
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-text-secondary">
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Work</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQs</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5">
          <div className="flex gap-6">
            {[Linkedin, Github, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="text-text-secondary hover:text-white transition-colors">
                <Icon size={20} />
              </a>
            ))}
          </div>
          <div className="text-xs text-text-secondary">
            © 2026 Shivam Singh. All Rights Reserved.
          </div>
          <div className="flex gap-6 text-[10px] text-text-secondary uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function Portfolio() {
  return (
    <div className="bg-bg-primary">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Projects />
      <Services />
      <Stats />
      <Process />
      <AboutMe />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
