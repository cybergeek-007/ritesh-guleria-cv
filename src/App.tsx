import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Github, Linkedin, Mail, ExternalLink, Terminal, Shield, 
  Code, Cpu, Globe, Lock, Server, Zap, Award, Calendar,
  MapPin, Users, Trophy, Target, ChevronDown, Menu, X,
  Bug, FileCode, Network, Send, GraduationCap, BookOpen
} from 'lucide-react';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: 'easeOut' as const } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

// Navigation Component
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['hero', 'about', 'skills', 'projects', 'hackathons', 'education', 'certifications', 'methodology', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#hackathons', label: 'Hackathons' },
    { href: '#education', label: 'Education' },
    { href: '#certifications', label: 'Certs' },
    { href: '#methodology', label: 'Methodology' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.a 
            href="#hero"
            className="text-xl font-bold font-mono"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-[#00ff41]">&lt;</span>RG<span className="text-[#00ff41]">/&gt;</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex space-x-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link text-sm transition-colors ${
                  activeSection === link.href.slice(1) 
                    ? 'text-[#00ff41]' 
                    : 'text-gray-400 hover:text-[#00ff41]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden text-gray-300 hover:text-[#00ff41] transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-black/95 border-t border-gray-800 max-h-[80vh] overflow-y-auto"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg transition-colors ${
                    activeSection === link.href.slice(1)
                      ? 'bg-[#00ff41]/10 text-[#00ff41]'
                      : 'text-gray-400 hover:bg-gray-900 hover:text-[#00ff41]'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

// Hero Section
function HeroSection() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Securing the Digital Frontier...';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 px-4">
      <div className="absolute inset-0 animated-grid opacity-30" />
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00ff41]/30 rounded-full"
            initial={{ x: Math.random() * 1000, y: Math.random() * 800 }}
            animate={{ y: [null, -20, 20], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 relative">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          <motion.p variants={fadeInUp} className="text-[#00ff41] font-mono text-xs sm:text-sm mb-4 tracking-widest">
            CYBERSECURITY PROFESSIONAL
          </motion.p>
          
          <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
            <span className="text-[#00ff41]">&lt;</span>Ritesh Guleria<span className="text-[#00ff41]">/&gt;</span>
          </motion.h1>
          
          <motion.h2 variants={fadeInUp} className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-400 mb-6 font-light px-2">
            Penetration Tester <span className="text-[#00ff41]">|</span> Security Researcher <span className="text-[#00ff41]">|</span> Ethical Hacker
          </motion.h2>
          
          <motion.p variants={fadeInUp} className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-500 mb-8 sm:mb-12 max-w-3xl mx-auto font-light italic font-mono px-4">
            &quot;{typedText}<span className="animate-pulse">|</span>&quot;
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <motion.a 
              href="#projects"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#00ff41] text-black font-semibold rounded-lg hover:bg-[#00d936] transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 255, 65, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              <Terminal className="w-4 h-4 sm:w-5 sm:h-5" />
              View Projects
            </motion.a>
            <motion.a 
              href="#contact"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#00ff41] text-[#00ff41] font-semibold rounded-lg hover:bg-[#00ff41] hover:text-black transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              Contact Me
            </motion.a>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-12 sm:mt-16 flex justify-center space-x-6 sm:space-x-8">
            {[
              { href: 'https://github.com/cybergeek-007', icon: Github, color: 'hover:text-[#00ff41]' },
              { href: 'https://www.linkedin.com/in/riteshguleria007', icon: Linkedin, color: 'hover:text-[#00d9ff]' },
              { href: 'mailto:guleriaritesh2@gmail.com', icon: Mail, color: 'hover:text-[#ff3864]' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target={social.href.startsWith('mailto') ? undefined : '_blank'}
                rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className={`text-gray-500 ${social.color} transition-colors`}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon className="w-6 h-6 sm:w-8 sm:h-8" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2" animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
        <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-[#00ff41]" />
      </motion.div>
    </section>
  );
}

// About Section
function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[#00ff41]">//</span> About Me
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-[#00ff41] mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#1a1a1a] border border-gray-800 rounded-2xl p-6 sm:p-8 lg:p-12 gradient-border"
          >
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6">
              I am a dedicated <span className="text-[#00ff41] font-semibold">Cybersecurity Specialist</span> and
              aspiring Penetration Tester currently pursuing my <span className="text-[#00ff41] font-semibold">B.Tech in Computer Science and Engineering
              (Specializing in Cyber Security)</span> at Chitkara University. My focus lies in identifying
              security loopholes and building resilient digital infrastructures.
            </p>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6">
              With a strong foundation in <span className="text-[#00d9ff] font-semibold">Network Security</span> and
              Web Pentesting, I enjoy solving complex security challenges. I follow <span className="font-mono text-sm text-[#00ff41]">OWASP</span> and <span className="font-mono text-sm text-[#00ff41]">MITRE ATT&CK</span> methodologies.
            </p>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6 sm:mb-8">
              My journey is driven by curiosity and a commitment to <span className="text-[#ff3864] font-semibold">ethical responsibility</span>. 
              I actively engage with platforms like TryHackMe to sharpen my skills.
            </p>

            {/* Enlarged TryHackMe Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="thm-badge-container p-4 sm:p-6 mb-6 sm:mb-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-[#00ff41]" />
                <span className="text-sm sm:text-base font-mono text-gray-400">TryHackMe Profile</span>
              </div>
              <div className="w-full overflow-hidden rounded-lg">
                <iframe 
                  src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=3684997" 
                  className="w-full"
                  style={{ border: 'none', minHeight: '220px', height: 'auto' }}
                  title="TryHackMe Badge"
                />
              </div>
            </motion.div>

            <div className="border-t border-gray-700 pt-5 sm:pt-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-[#00ff41] terminal-line">Core Philosophy</h3>
              <motion.ul 
                className="space-y-2 sm:space-y-3 text-gray-400"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  'Security through rigorous, methodical testing and validation',
                  'Continuous learning and adaptation to evolving threat landscapes',
                  'Clear, actionable reporting that bridges technical and business contexts',
                  'Unwavering commitment to legal and ethical standards'
                ].map((item, index) => (
                  <motion.li key={index} variants={fadeInUp} className="flex items-start text-sm sm:text-base">
                    <span className="text-[#00ff41] mr-2 sm:mr-3 mt-1 flex-shrink-0">▹</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Skills Section
function SkillsSection() {
  const skills = [
    { title: 'Web Application Security', icon: Globe, color: '#00ff41', skills: ['SQL Injection', 'XSS', 'CSRF', 'SSRF', 'XXE', 'OWASP Top 10'] },
    { title: 'Network Security', icon: Network, color: '#00d9ff', skills: ['Port Scanning', 'Enumeration', 'Exploitation', 'Privilege Escalation', 'Packet Analysis', 'MITM'] },
    { title: 'API Security', icon: Server, color: '#ff3864', skills: ['REST API Testing', 'GraphQL', 'OAuth/JWT', 'S3 Buckets', 'IAM'] },
    { title: 'Testing Tools', icon: Bug, color: '#00ff41', skills: ['Burp Suite', 'Nmap', 'Metasploit', 'OWASP ZAP', 'Wireshark', 'SQLmap', 'Nuclei', 'Nikto'] },
    { title: 'Programming & Scripting', icon: Code, color: '#00d9ff', skills: ['Python', 'C++', 'Java', 'Bash', 'JavaScript', 'Linux (Kali/Parrot)'] },
    { title: 'Frameworks & Standards', icon: Shield, color: '#ff3864', skills: ['OWASP Top 10', 'MITRE ATT&CK', 'NIST', 'CWE/CVE'] }
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[#00d9ff]">//</span> Skills & Tooling
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-[#00d9ff] mx-auto" />
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((category, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-5 sm:p-6 hover:border-opacity-50 transition-all card-shine"
            >
              <div className="flex items-center mb-3 sm:mb-4">
                <div 
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0"
                  style={{ backgroundColor: `${category.color}15` }}
                >
                  <category.icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: category.color }} />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold" style={{ color: category.color }}>{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="skill-badge px-2 sm:px-3 py-1 bg-[#0a0a0a] border border-gray-700 rounded text-xs sm:text-sm font-mono text-gray-300 hover:border-[#00ff41] hover:text-[#00ff41] transition-colors cursor-default"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Projects Section
function ProjectsSection() {
  const projects = [
    {
      title: 'Advanced Multi-Threaded Port Scanner',
      type: 'Security Tool',
      typeColor: '#00ff41',
      description: 'A robust, high-performance network reconnaissance tool developed in Python for rapid port discovery and service identification.',
      objective: 'Create a custom alternative to standard scanners with specific optimizations for low-bandwidth environments.',
      methodology: ['Multi-threading implementation for concurrency', 'Banner grabbing for service version detection', 'Socket programming and error handling'],
      tools: ['Python 3.x', 'Socket Library', 'Threading'],
      outcome: 'Developed a portable script capable of scanning 1000 ports in under 5 seconds with detailed output formatting.',
      githubUrl: 'https://github.com/cybergeek-007/port-scanner'
    },
    {
      title: 'Educational Keylogger & Monitor',
      type: 'Research',
      typeColor: '#ff8c00',
      description: 'A proof-of-concept system monitoring tool designed for behavioral analysis and educational security awareness.',
      objective: 'Demonstrate the risks of social engineering and the importance of endpoint protection systems.',
      methodology: ['Event hooking for keyboard input capture', 'Secure local logging and remote delivery simulation', 'Stealth technique research for AV evasion'],
      tools: ['Python', 'Pynput', 'Logging API'],
      outcome: 'Successfully modeled data exfiltration paths and provided documentation on mitigating such threats using EDR/AV solutions.',
      githubUrl: 'https://github.com/cybergeek-007/keylogger-monitor'
    },
    {
      title: 'Web Vulnerability Scanner',
      type: 'Security Tool',
      typeColor: '#00d9ff',
      description: 'An automated web application security scanner that detects common vulnerabilities in web applications.',
      objective: 'Build a tool to identify OWASP Top 10 vulnerabilities in web applications efficiently.',
      methodology: ['Automated crawling and endpoint discovery', 'Payload injection for vulnerability detection', 'Comprehensive reporting with remediation steps'],
      tools: ['Python', 'Requests', 'BeautifulSoup', 'Selenium'],
      outcome: 'Successfully identified vulnerabilities in test applications with 85% accuracy and detailed remediation reports.',
      githubUrl: 'https://github.com/cybergeek-007/web-vuln-scanner'
    },
    {
      title: 'Password Strength Analyzer',
      type: 'Utility',
      typeColor: '#ff3864',
      description: 'A comprehensive password analysis tool that evaluates password strength against various attack vectors.',
      objective: 'Create an educational tool to demonstrate password security best practices.',
      methodology: ['Entropy calculation and pattern analysis', 'Dictionary attack simulation', 'Brute-force time estimation'],
      tools: ['Python', 'Hashlib', 'Regex', 'Wordlists'],
      outcome: 'Built a tool that helps users understand password vulnerabilities and create stronger passwords.',
      githubUrl: 'https://github.com/cybergeek-007/password-analyzer'
    }
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[#00ff41]">//</span> Projects & Case Studies
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-[#00ff41] mx-auto mb-3 sm:mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Selected security assessments and vulnerability research conducted in authorized environments
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className="project-card bg-[#1a1a1a] border border-gray-800 rounded-xl p-5 sm:p-6 block group cursor-pointer card-shine"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 sm:mb-4 gap-2">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#00ff41] group-hover:text-[#00d9ff] transition-colors flex items-center gap-2">
                  <FileCode className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                  <span className="line-clamp-2">{project.title}</span>
                </h3>
                <span 
                  className="px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-mono flex items-center gap-1 flex-shrink-0 w-fit"
                  style={{ backgroundColor: `${project.typeColor}20`, color: project.typeColor }}
                >
                  {project.type}
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
              </div>

              <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">{project.description}</p>

              <div className="mb-3 sm:mb-4">
                <h4 className="text-xs sm:text-sm font-semibold text-[#00d9ff] mb-1 sm:mb-2 flex items-center gap-2">
                  <Target className="w-3 h-3 sm:w-4 sm:h-4" />
                  OBJECTIVE
                </h4>
                <p className="text-xs sm:text-sm text-gray-400">{project.objective}</p>
              </div>

              <div className="mb-3 sm:mb-4">
                <h4 className="text-xs sm:text-sm font-semibold text-[#00d9ff] mb-1 sm:mb-2 flex items-center gap-2">
                  <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
                  METHODOLOGY
                </h4>
                <ul className="text-xs sm:text-sm text-gray-400 space-y-1">
                  {project.methodology.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-[#00ff41] mr-2 flex-shrink-0">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-3 sm:mb-4">
                <h4 className="text-xs sm:text-sm font-semibold text-[#00d9ff] mb-1 sm:mb-2 flex items-center gap-2">
                  <Cpu className="w-3 h-3 sm:w-4 sm:h-4" />
                  TOOLS USED
                </h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tools.map((tool, i) => (
                    <span key={i} className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-[#0a0a0a] border border-gray-700 rounded text-xs font-mono text-gray-400">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-800 pt-3 sm:pt-4">
                <h4 className="text-xs sm:text-sm font-semibold text-[#00d9ff] mb-1 sm:mb-2 flex items-center gap-2">
                  <Award className="w-3 h-3 sm:w-4 sm:h-4" />
                  OUTCOME
                </h4>
                <p className="text-xs sm:text-sm text-gray-400">{project.outcome}</p>
              </div>

              <div className="mt-3 sm:mt-4 flex items-center gap-2 text-[#00ff41] opacity-0 group-hover:opacity-100 transition-opacity">
                <Github className="w-4 h-4" />
                <span className="text-xs sm:text-sm font-mono">View on GitHub</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 sm:mt-12 bg-[#1a1a1a] border border-gray-800 rounded-xl p-6 sm:p-8"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-[#00d9ff] flex items-center gap-2">
            <Terminal className="w-5 h-5 sm:w-6 sm:h-6 text-[#00ff41]" />
            <span className="font-mono">~/</span> Continuous Training & Labs
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              { value: '250+', label: 'TryHackMe Rooms Completed', color: '#00ff41' },
              { value: 'Top 1%', label: 'Globally On TryHackMe', color: '#00d9ff' },
              { value: '10+', label: 'Custom Lab Environments', color: '#ff3864' }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl sm:text-4xl font-bold mb-1 sm:mb-2" style={{ color: stat.color }}>{stat.value}</div>
                <p className="text-gray-400 text-xs sm:text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Hackathons Section
function HackathonsSection() {
  const hackathons = [
    {
      name: 'SIH - Smart India Hackathon',
      role: 'Participant',
      date: '2024',
      location: 'India',
      description: 'Participated in India&apos;s largest hackathon, working on innovative solutions for real-world problems under the Ministry of Education.',
      achievements: ['Developed a cybersecurity awareness platform', 'Implemented gamified learning modules', 'Top 50 finalist among 500+ teams'],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      status: 'completed'
    },
    {
      name: 'HackTheBox CTF',
      role: 'Competitor',
      date: '2024',
      location: 'Online',
      description: 'Competed in various Capture The Flag competitions on HackTheBox platform, solving complex security challenges.',
      achievements: ['Solved 50+ machines across different difficulty levels', 'Ranked in top 5% globally', 'Specialized in web and binary exploitation'],
      technologies: ['Python', 'Burp Suite', 'Ghidra', 'Pwntools'],
      status: 'ongoing'
    },
    {
      name: 'TryHackMe Advent of Cyber',
      role: 'Participant',
      date: '2024',
      location: 'Online',
      description: 'Completed the annual Advent of Cyber event, solving daily security challenges throughout December.',
      achievements: ['Completed all 25 days of challenges', 'Learned about emerging threats and attack vectors', 'Earned exclusive badges and certificates'],
      technologies: ['Linux', 'Web Exploitation', 'Forensics', 'Cryptography'],
      status: 'completed'
    },
    {
      name: 'DVWA Security Challenge',
      role: 'Security Researcher',
      date: '2024',
      location: 'Personal Lab',
      description: 'Conducted comprehensive security assessment on Damn Vulnerable Web Application to practice penetration testing methodologies.',
      achievements: ['Identified and exploited all vulnerability categories', 'Documented detailed remediation strategies', 'Created educational content for beginners'],
      technologies: ['SQLMap', 'Burp Suite', 'XSS Payloads', 'Command Injection'],
      status: 'completed'
    }
  ];

  return (
    <section id="hackathons" className="py-16 sm:py-20 lg:py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[#ff3864]">//</span> Hackathon Experience
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-[#ff3864] mx-auto mb-3 sm:mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Competitive programming, CTF challenges, and collaborative problem-solving experiences
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {hackathons.map((hackathon, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="hackathon-card rounded-xl p-5 sm:p-6 relative overflow-hidden"
            >
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                <span className={`status-badge text-xs font-mono ${hackathon.status === 'completed' ? 'text-[#00ff41]' : 'text-[#00d9ff]'}`}>
                  {hackathon.status === 'completed' ? 'Completed' : 'In Progress'}
                </span>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4 pr-20">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#00ff41]/20 to-[#00d9ff]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Trophy className="w-6 h-6 sm:w-7 sm:h-7 text-[#00ff41]" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1 line-clamp-2">{hackathon.name}</h3>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                      {hackathon.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                      {hackathon.location}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">{hackathon.description}</p>

              <div className="mb-3 sm:mb-4">
                <h4 className="text-xs sm:text-sm font-semibold text-[#00d9ff] mb-1 sm:mb-2 flex items-center gap-2">
                  <Award className="w-3 h-3 sm:w-4 sm:h-4" />
                  Key Achievements
                </h4>
                <ul className="space-y-1">
                  {hackathon.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start text-xs sm:text-sm text-gray-400">
                      <span className="text-[#00ff41] mr-2 flex-shrink-0">▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {hackathon.technologies.map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-[#0a0a0a] border border-gray-700 rounded text-xs font-mono text-gray-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 sm:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
        >
          {[
            { icon: Trophy, value: '4+', label: 'Hackathons', color: '#00ff41' },
            { icon: Target, value: '50+', label: 'CTF Challenges', color: '#00d9ff' },
            { icon: Users, value: 'Top 5%', label: 'Global Ranking', color: '#ff3864' },
            { icon: Award, value: '10+', label: 'Certificates', color: '#ff8c00' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-3 sm:p-4 text-center"
              whileHover={{ scale: 1.05, borderColor: stat.color }}
            >
              <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-1 sm:mb-2" style={{ color: stat.color }} />
              <div className="text-xl sm:text-2xl font-bold" style={{ color: stat.color }}>{stat.value}</div>
              <div className="text-xs text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Education Section (Separated)
function EducationSection() {
  const education = [
    {
      title: 'B.E in CSE (Cyber Security)',
      institution: 'Chitkara University',
      period: '2023 - 2027',
      description: 'Bachelor of Engineering in Computer Science and Engineering with specialization in Cyber Security.',
      icon: GraduationCap,
      color: '#ffd700'
    },
    {
      title: 'Minor in CSE and Advanced Technologies',
      institution: 'IIT Mandi',
      period: '2024 - 2025',
      description: 'Minor degree program focusing on advanced computer science concepts and emerging technologies.',
      icon: BookOpen,
      color: '#ff3864'
    }
  ];

  return (
    <section id="education" className="py-16 sm:py-20 lg:py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[#00d9ff]">//</span> Education
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-[#00d9ff] mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="space-y-4 sm:space-y-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
                className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-5 sm:p-6 hover:border-opacity-50 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div 
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${edu.color}15` }}
                  >
                    <edu.icon className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: edu.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 mb-2">
                      <h3 className="text-lg sm:text-xl font-bold text-white">{edu.title}</h3>
                      <span className="text-xs sm:text-sm font-mono text-gray-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-[#00d9ff] font-medium mb-2">{edu.institution}</p>
                    <p className="text-sm text-gray-400">{edu.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Certifications Section (New Separate Section)
function CertificationsSection() {
  const certifications = [
    {
      title: 'Jr Penetration Tester Certificate',
      issuer: 'TryHackMe',
      year: '2025',
      type: 'Verified',
      typeColor: '#00ff41',
      icon: Shield
    },
    {
      title: 'Google Cybersecurity Certificate',
      issuer: 'Google',
      year: '2024',
      type: 'Verified',
      typeColor: '#00d9ff',
      icon: Shield
    }
  ];

  return (
    <section id="certifications" className="py-16 sm:py-20 lg:py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[#00ff41]">//</span> Certifications
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-[#00ff41] mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="space-y-4 sm:space-y-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
                className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 hover:border-opacity-50 transition-all"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div 
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${cert.typeColor}15` }}
                  >
                    <cert.icon className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: cert.typeColor }} />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white">{cert.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-400 font-mono">{cert.issuer} • {cert.year}</p>
                  </div>
                </div>
                <span 
                  className="px-3 py-1.5 rounded text-xs sm:text-sm font-mono w-fit"
                  style={{ backgroundColor: `${cert.typeColor}20`, color: cert.typeColor }}
                >
                  {cert.type}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Learning Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 sm:mt-12 bg-gradient-to-r from-[#1a1a1a] to-[#111111] border border-gray-800 rounded-xl p-5 sm:p-8"
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-[#00ff41] flex items-center gap-2">
              <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
              Continuous Learning Philosophy
            </h3>
            <p className="text-gray-400 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
              Cybersecurity is a rapidly evolving field that demands continuous skill development. I maintain
              an active learning routine through:
            </p>
            <motion.ul 
              className="space-y-2 text-gray-400"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                'Daily engagement with security research, CVE analysis, and proof-of-concept development',
                'Active participation in Hack The Box, TryHackMe, and private bug bounty programs',
                'Building custom vulnerable applications to understand exploitation from both offensive and defensive perspectives',
                'Contributing to open-source security tools and sharing knowledge with the community'
              ].map((item, index) => (
                <motion.li key={index} variants={fadeInUp} className="flex items-start text-sm sm:text-base">
                  <span className="text-[#00ff41] mr-2 sm:mr-3 flex-shrink-0">▹</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Methodology Section
function MethodologySection() {
  const steps = [
    { number: '01', title: 'Pre-Engagement & Scoping', description: 'Establish clear scope, rules of engagement, and authorization. Define testing windows, out-of-scope systems, and communication protocols.', color: '#00ff41' },
    { number: '02', title: 'Intelligence Gathering', description: 'Passive and active reconnaissance to map attack surface. Collect information on technologies, endpoints, personnel, and potential entry points.', color: '#00d9ff' },
    { number: '03', title: 'Vulnerability Assessment', description: 'Systematic identification of security weaknesses using automated scanners, manual testing, and custom tooling.', color: '#ff3864' },
    { number: '04', title: 'Exploitation', description: 'Controlled exploitation of identified vulnerabilities to demonstrate real-world risk while maintaining detailed logs and evidence.', color: '#00ff41' },
    { number: '05', title: 'Post-Exploitation & Privilege Escalation', description: 'Assess the depth of compromise by attempting lateral movement, privilege escalation, and persistent access.', color: '#00d9ff' },
    { number: '06', title: 'Reporting & Remediation', description: 'Deliver comprehensive reports with executive summaries and technical details. Include CVSS scoring and prioritized remediation recommendations.', color: '#ff3864' }
  ];

  return (
    <section id="methodology" className="py-16 sm:py-20 lg:py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[#ff3864]">//</span> Methodology & Ethics
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-[#ff3864] mx-auto mb-3 sm:mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-4">
            A structured, repeatable approach grounded in industry standards and ethical responsibility
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="space-y-3 sm:space-y-4 mb-8 sm:mb-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ x: 10, transition: { duration: 0.2 } }}
                className="bg-[#1a1a1a] border-l-4 rounded-lg p-4 sm:p-6"
                style={{ borderLeftColor: step.color }}
              >
                <div className="flex items-center mb-2 sm:mb-3">
                  <span className="text-xl sm:text-2xl font-bold mr-3 sm:mr-4 font-mono" style={{ color: step.color }}>{step.number}</span>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">{step.title}</h3>
                </div>
                <p className="text-gray-400 text-sm sm:text-base ml-0 sm:ml-12">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border-2 border-[#ff3864] rounded-xl p-5 sm:p-8"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-[#ff3864] flex items-center gap-2 sm:gap-3">
              <Lock className="w-6 h-6 sm:w-8 sm:h-8" />
              Ethical Commitment
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <h4 className="font-semibold text-[#00ff41] mb-2 sm:mb-3 terminal-line text-sm sm:text-base">Legal Boundaries</h4>
                <ul className="space-y-1.5 sm:space-y-2 text-gray-400 text-xs sm:text-sm">
                  {['All testing conducted with explicit written authorization', 'Strict adherence to defined scope and testing windows', 'Compliance with relevant laws and regulations'].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-[#00ff41] mr-2 flex-shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-[#00d9ff] mb-2 sm:mb-3 terminal-line text-sm sm:text-base">Professional Integrity</h4>
                <ul className="space-y-1.5 sm:space-y-2 text-gray-400 text-xs sm:text-sm">
                  {['Confidentiality of client data and findings', 'Transparent communication about risks and limitations', 'Responsible disclosure of vulnerabilities'].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-[#00d9ff] mr-2 flex-shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-[#0a0a0a]/50 border border-gray-800 rounded">
              <p className="text-gray-400 italic text-xs sm:text-sm">
                &quot;Security testing is not about breaking systems—it&apos;s about building trust through transparency, precision, and unwavering ethical standards.&quot;
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormState({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[#00ff41]">//</span> Get In Touch
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-[#00ff41] mx-auto mb-3 sm:mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Open to penetration testing engagements, security consultations, and professional opportunities
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {/* Contact Info */}
            <motion.div 
              className="space-y-3 sm:space-y-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { icon: Mail, label: 'Email', value: 'guleriaritesh2@gmail.com', href: 'mailto:guleriaritesh2@gmail.com', color: '#00ff41' },
                { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/riteshguleria007', href: 'https://www.linkedin.com/in/riteshguleria007', color: '#00d9ff' },
                { icon: Github, label: 'GitHub', value: 'github.com/cybergeek-007', href: 'https://github.com/cybergeek-007', color: '#ff3864' }
              ].map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={contact.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  variants={fadeInUp}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-4 sm:p-6 flex items-center gap-3 sm:gap-4 hover:border-opacity-50 transition-all group"
                >
                  <div 
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center transition-colors flex-shrink-0"
                    style={{ backgroundColor: `${contact.color}15` }}
                  >
                    <contact.icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: contact.color }} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-white text-sm sm:text-base">{contact.label}</h3>
                    <p className="text-xs sm:text-sm text-gray-400 font-mono group-hover:text-white transition-colors truncate">{contact.value}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-5 sm:p-6"
            >
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-400 mb-1.5 sm:mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#0a0a0a] border border-gray-700 rounded-lg focus:border-[#00ff41] focus:outline-none text-gray-300 transition-colors text-sm"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-400 mb-1.5 sm:mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#0a0a0a] border border-gray-800 rounded-lg focus:border-[#00ff41] focus:outline-none text-gray-300 transition-colors text-sm"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-400 mb-1.5 sm:mb-2">Subject</label>
                  <input
                    type="text"
                    required
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#0a0a0a] border border-gray-700 rounded-lg focus:border-[#00ff41] focus:outline-none text-gray-300 transition-colors text-sm"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-400 mb-1.5 sm:mb-2">Message</label>
                  <textarea
                    required
                    rows={3}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#0a0a0a] border border-gray-700 rounded-lg focus:border-[#00ff41] focus:outline-none text-gray-300 transition-colors resize-none text-sm"
                    placeholder="Your message..."
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-[#00ff41] text-black font-semibold rounded-lg hover:bg-[#00d936] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm sm:text-base"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (<><div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />Sending...</>) : submitted ? (<><Award className="w-4 h-4 sm:w-5 sm:h-5" />Message Sent!</>) : (<><Send className="w-4 h-4 sm:w-5 sm:h-5" />Send Message</>)}
                </motion.button>
              </form>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-r from-[#1a1a1a] to-[#111111] border border-gray-800 rounded-xl p-4 sm:p-6 text-center"
          >
            <p className="text-gray-400 text-xs sm:text-sm">
              <span className="text-[#00ff41] font-semibold">Note:</span> I respond to all legitimate inquiries within 24-48 hours. For urgent security matters, please include &quot;URGENT&quot; in the subject line.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <div className="text-center sm:text-left">
            <p className="text-gray-400 text-sm font-mono"><span className="text-[#00ff41]">&lt;</span>Ritesh Guleria<span className="text-[#00ff41]">/&gt;</span></p>
            <p className="text-gray-600 text-xs mt-1">Penetration Tester | Cybersecurity Enthusiast</p>
          </div>

          <div className="flex space-x-5 sm:space-x-6">
            {[{ href: 'https://github.com/cybergeek-007', icon: Github, color: 'hover:text-[#00ff41]' }, { href: 'https://www.linkedin.com/in/riteshguleria007', icon: Linkedin, color: 'hover:text-[#00d9ff]' }, { href: 'mailto:guleriaritesh2@gmail.com', icon: Mail, color: 'hover:text-[#ff3864]' }].map((social, index) => (
              <motion.a key={index} href={social.href} target={social.href.startsWith('mailto') ? undefined : '_blank'} rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'} className={`text-gray-500 ${social.color} transition-colors`} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-600 text-xs">All security testing activities are conducted with explicit authorization and within legal boundaries.</p>
        </div>
      </div>
    </footer>
  );
}

// Main App Component
function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-[#00ff41] origin-left z-[60]" style={{ scaleX }} />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <HackathonsSection />
        <EducationSection />
        <CertificationsSection />
        <MethodologySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
