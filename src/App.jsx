import React, { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  FileText, 
  Code, 
  Server, 
  Layers, 
  ExternalLink, 
  Menu, 
  X, 
  GraduationCap, 
  ChevronRight,
  Sparkles
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

  const profile = {
    firstName: "Hilina",
    fullName: "Hilina Mogess Tadesse",
    title: "Software Engineer & MERN Stack Developer",
    subTitle: "5th Year Software Engineering Student",
    location: "Addis Ababa, Ethiopia",
    bio: "Passionate Software Engineering student specializing in building high-performance web applications. Focused on writing robust backend architectures, clean user interfaces, and solving real-world computing problems through agile software methodologies.",
    email: "hilinamogess@gmail.com", 
    github: "https://github.com", 
    linkedin: "https://linkedin.com", 
    resume: "#" 
  };

  const skills = [
    {
      category: "Frontend Engineering",
      icon: <Code className="text-teal-400" size={20} />,
      items: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3", "Redux Toolkit"]
    },
    {
      category: "Backend & Systems",
      icon: <Server className="text-teal-400" size={20} />,
      items: ["Node.js", "Express.js", "RESTful API Design", "JWT Authentication", "System Architecture"]
    },
    {
      category: "Databases & DevOps",
      icon: <Layers className="text-teal-400" size={20} />,
      items: ["MongoDB", "Mongoose ODM", "Git & GitHub Workflow", "Postman API Testing", "Agile / Scrum"]
    }
  ];

  const projects = [
    {
      title: "Enterprise MERN E-Commerce Ecosystem",
      category: "MERN Stack",
      description: "A production-ready e-commerce platform built with MongoDB, Express, React, and Node. Featuring state management, secure token-based authentication, structured databases, and custom dashboard tracking pipelines.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
      githubLink: "#",
      liveLink: "#"
    },
    {
      title: "Real-time Task Management System",
      category: "MERN Stack",
      description: "Collaborative project management dashboard built utilizing WebSockets for instant updates. Features relational database simulation schemas, custom authentication layers, and dynamic progress metrics.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind"],
      githubLink: "#",
      liveLink: "#"
    },
    {
      title: "University Academic Analytics Dashboard",
      category: "Frontend",
      description: "A data-driven frontend application optimized for student scheduling, historical performance parsing, tracking credits, and modeling dynamic structural course progressions metrics.",
      tech: ["React.js", "Tailwind CSS", "Context API", "Recharts (Visualizations)"],
      githubLink: "#",
      liveLink: "#"
    },
    {
      title: "Secure JWT Authentication & Notification Service API",
      category: "Backend",
      description: "A backend microservice engineered to abstract user login validation, security tracking vectors, access tokens management, and transactional email triggers.",
      tech: ["Node.js", "Express.js", "MongoDB", "JSON Web Tokens", "Nodemailer"],
      githubLink: "#",
      liveLink: "#"
    }
  ];

  const filterOptions = ['All', 'MERN Stack', 'Frontend', 'Backend'];
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#0b111e] text-slate-100 font-sans selection:bg-teal-500 selection:text-slate-900 scroll-smooth">
      <nav className="fixed top-0 w-full bg-[#0b111e]/80 backdrop-blur-md z-50 border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#hero" className="text-lg font-mono font-bold tracking-tight text-teal-400 hover:text-teal-300 transition">
            &lt;{profile.firstName} .Dev /&gt;
          </a>
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-teal-400 transition">About</a>
            <a href="#skills" className="hover:text-teal-400 transition">Skills</a>
            <a href="#projects" className="hover:text-teal-400 transition">Projects</a>
            <a href="#education" className="hover:text-teal-400 transition">Education</a>
            <a href="#contact" className="px-4 py-2 border border-teal-500/30 text-teal-400 rounded hover:bg-teal-500/10 transition">Let's Talk</a>
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-slate-400 hover:text-white transition">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-[#0b111e] border-b border-slate-800 px-4 pt-2 pb-6 space-y-4 shadow-xl">
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="block text-slate-300 hover:text-teal-400">About</a>
            <a href="#skills" onClick={() => setIsMenuOpen(false)} className="block text-slate-300 hover:text-teal-400">Skills</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)} className="block text-slate-300 hover:text-teal-400">Projects</a>
            <a href="#education" onClick={() => setIsMenuOpen(false)} className="block text-slate-300 hover:text-teal-400">Education</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block text-teal-400 font-medium">Contact</a>
          </div>
        )}
      </nav>

      <section id="hero" className="min-h-screen flex items-center pt-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 text-xs font-mono mb-6 border border-teal-500/20">
            <Sparkles size={12} /> Ready for Global Engineering Roles
          </div>
          <h1 className="text-slate-400 font-mono text-sm sm:text-base mb-3">Hi, my name is</h1>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-3">{profile.fullName}.</h2>
          <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-400 mb-6 leading-tight">I construct scalable digital ecosystems.</h3>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed mb-10 max-w-2xl">{profile.bio}</p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="px-6 py-3.5 bg-teal-500 text-slate-950 font-semibold rounded hover:bg-teal-400 transition-all duration-200 shadow-lg shadow-teal-500/10">Explore Projects</a>
            <a href={profile.resume} className="px-6 py-3.5 border border-slate-700 rounded text-slate-300 font-semibold hover:border-teal-400 hover:text-teal-400 transition-all duration-200 flex items-center gap-2">
              <FileText size={18} /> Download CV
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-slate-900/30 border-t border-slate-800/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-teal-400 font-mono text-lg">01.</span> About Professional Focus
          </h2>
          <div className="grid md:grid-cols-5 gap-8 text-slate-400 leading-relaxed">
            <div className="md:col-span-3 space-y-4 text-base">
              <p>Hello! I am a final-year software engineering student with deep structural instincts for systems building. My engineering journey centers around decoupling complex problems into highly cohesive, modular web systems.</p>
              <p>Throughout my 5-year academic tenure, I've transitioned from handling fundamental data structures to engineering high-performance applications built using the <strong>MERN stack</strong> architecture.</p>
              <p>My absolute focus is ensuring that backend security layers perform seamlessly with highly modern, production-speed interfaces.</p>
            </div>
            <div className="md:col-span-2 bg-slate-900 border border-slate-800 p-6 rounded-xl flex flex-col justify-between">
              <div>
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2 text-sm uppercase tracking-wider font-mono text-teal-400">Current Footprint</h4>
                <p className="text-sm text-slate-400 font-medium mb-4">{profile.subTitle}</p>
              </div>
              <div className="space-y-2 text-xs font-mono text-slate-500">
                <div>📍 Location: {profile.location}</div>
                <div>💼 Direct Allocation: Open for Junior Roles</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-24 border-t border-slate-800/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-12 flex items-center gap-3">
            <span className="text-teal-400 font-mono text-lg">02.</span> Core Capabilities
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-slate-900/60 p-6 rounded-xl border border-slate-800/80 hover:border-slate-700/60 transition-colors">
                <div className="flex items-center gap-3 mb-6">
                  {skillGroup.icon}
                  <h3 className="text-white font-bold text-base tracking-tight">{skillGroup.category}</h3>
                </div>
Use code with caution.{skillGroup.items.map((item, idx) => ({item}))}))});}
