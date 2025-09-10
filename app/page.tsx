"use client"
import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Download, Code, Calendar, MapPin, Users, Target, Award, Briefcase, Shield, Star } from 'lucide-react';

// Types
interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  category: string;
}

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg border-b border-gray-100' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="relative">
            </div>
            <div className="text-2xl font-bold text-gray-800">Portfolio</div>
            <div className="text-red-600 font-bold text-xl">Narayanan K</div>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Projects', 'Experience', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-600 hover:text-red-600 transition-colors duration-200 font-medium relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-200 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-gray-800 hover:text-red-600 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            {['Home', 'About', 'Projects', 'Experience', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left py-3 text-gray-600 hover:text-red-600 transition-colors duration-200 font-medium"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

// Home Component
const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-full shadow-md">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                Available for Work
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-bold text-gray-800 leading-tight">
                NARAYANAN
                <span className="block text-red-600">DEVSECOPS</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                DevSecOps & Security Engineer | 4+ Years in Application Security (Web, Mobile, API), Cloud Security (AWS/GCP/Azure), and Container Security with StackRox Expertise
                Based in Chennai, India.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors duration-200"
                >
                  View Projects
                </button>
                <button 
                  onClick={() => {
                    // The path should be relative to the public folder
                    const cvPath = '/assets/Narayanan-2025.pdf';
                    // Create a temporary link element
                    const link = document.createElement('a');
                    link.href = cvPath;
                    link.download = 'narayanan-devsecops-cv.pdf'; // Name that will appear when downloading
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="px-8 py-4 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <Download size={20} />
                  Download CV
                </button>
              </div>
              
              <div className="flex space-x-6">
                <a href="https://github.com/Narayanan-info" className="text-gray-400 hover:text-red-600 transition-colors duration-200">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/narayanan-k1/" className="text-gray-400 hover:text-blue-600 transition-colors duration-200">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:narayanan.k.info@gmail.com" className="text-gray-400 hover:text-red-600 transition-colors duration-200">
                  <Mail size={24} />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Briefcase, count: "4+", label: "Years Experience", bgColor: "bg-red-50", iconColor: "text-red-600" },
                { icon: Code, count: "3+", label: "Projects Completed", bgColor: "bg-blue-50", iconColor: "text-blue-600" },
                { icon: Users, count: "1+", label: "Happy Clients", bgColor: "bg-green-50", iconColor: "text-green-600" },
                { icon: Award, count: "3+", label: "Certifications", bgColor: "bg-purple-50", iconColor: "text-purple-600" }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                    <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{stat.count}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// About Component
const About = () => {
  // Skills data for future use
  const _skills = [
    { name: "React/Next.js", level: 95, color: "bg-blue-600" },
    { name: "Node.js/Express", level: 90, color: "bg-green-600" },
    { name: "TypeScript", level: 88, color: "bg-blue-700" },
    { name: "Cybersecurity", level: 85, color: "bg-red-600" },
    { name: "MongoDB/PostgreSQL", level: 82, color: "bg-purple-600" },
    { name: "Docker/AWS", level: 80, color: "bg-orange-600" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Passionate security engineer with expertise in building secure, scalable applications and contributing to the cybersecurity community.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-gray-50 rounded-xl p-8 shadow-md">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  DevSecOps Analyst and Security Engineer with 𝟰+ 𝘆𝗲𝗮𝗿𝘀 of experience securing applications and cloud infrastructure. 
                  I specialize in Web, Mobile, and API Penetration Testing, Vulnerability Management, and Secure SDLC integration, 
                  with hands-on expertise in CI/CD security automation across AWS, GCP, and Azure.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  My work blends offensive and defensive security, from identifying vulnerabilities and simulating real-world attacks to building automated, 
                  resilient defenses that reduce risk and improve operational efficiency.
                </p>
                <p className="text-gray-600 leading-relaxed">
                 Currently, I am working as an 𝗟𝟯 𝗗𝗲𝘃𝗦𝗲𝗰𝗢𝗽𝘀 𝗔𝗻𝗮𝗹𝘆𝘀𝘁 𝗮𝘁 𝗠𝟮𝗣, driving end-to-end security automation, building secure CI/CD pipelines, 
                 and implementing solutions that enhance application, cloud, and container security.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-red-50 rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-red-600" />
                  Quick Info
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <MapPin size={16} className="text-red-600" />
                    <span className="text-gray-600">Chennai, India</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar size={16} className="text-green-600" />
                    <span className="text-gray-600">Available: Immediately</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Target size={16} className="text-blue-600" />
                    <span className="text-gray-600">Focus: Security & Performance</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 shadow-md">
                <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 text-blue-600" />
                  Community
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">BSides Chennai Member</span>
                    <span className="text-blue-600 font-medium">2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Null Chennai Member</span>
                    <span className="text-blue-600 font-medium">2022-Present</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Open Source Contributor</span>
                    <span className="text-blue-600 font-medium">2024-Present</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Projects Component
const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "JWT Authentication with CSRF Protection",
      description: "Designed and enforced JWT-based authentication with RSA key signing, enhancing token security and integrity Fused CSRF protection for state-changing requests, reducing the risk of cross-site request forgery attacks by 100% on protected endpoints.",
      tech: ["Node.js", "MongoDB", "RSA"],
      github: "https://github.com/Narayanan-info/JWT_CSRF_Advanced",
      category: "Security"
    },
    {
      id: 2,
      title: "File Upload Secuirty Best Practices",
      description: "This is a secure file upload API built using Node.js and Express, following best practices to handle file uploads with proper validation and security measures.",
      tech: ["Node.js"],
      github: "https://github.com/Narayanan-info/File_Upload_Security_Best_Practices",
      category: "Security"
    },
  ];

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A collection of projects showcasing expertise in web development, cybersecurity, and modern technologies.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                filter === category
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-red-50 hover:text-red-600 shadow-sm'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className={`h-1 ${
                project.category === 'Security' ? 'bg-red-600' :
                project.category === 'Web Development' ? 'bg-blue-600' :
                'bg-green-600'
              }`}></div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.category === 'Security' ? 'bg-red-100 text-red-700' :
                    project.category === 'Web Development' ? 'bg-blue-100 text-blue-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {project.category}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors duration-200 text-sm font-medium"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors duration-200 text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            className="px-8 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors duration-200 flex items-center gap-2 mx-auto"
            onClick={() => window.open('https://github.com/Narayanan-info', '_blank')}
          >
            View All Projects
            <ExternalLink size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

// Experience Component
const Experience = () => {
  const experiences: Experience[] = [
    {
      title: "DevSecOps Analyst | L3",
      company: "M2P Fintech Pvt Ltd - Chennai, IN",
      period: "2024 - Present",
      description: "DevSecOps Analyst with proven expertise in embedding security best practices throughout the software development lifecycle (SDLC). Proficient in leveraging industry-leading tools such as SonarQube, Gitleaks, Dependency-Track, DefectDojo, StackRox, Terrascan, and Trivy to drive secure coding, vulnerability management, and compliance automation. Skilled at strengthening pipelines with end-to-end security controls, ensuring both code quality and application resilience."
    },
    {
      title: "Security Engineer | L1 & L2",
      company: "Pepul Pvt Ltd - Chennai, IN",
      period: "2021 - 2024",
      description: "Offensive Security Engineer | Pepul Pvt Ltd - Chennai, IN Adaptable professional with 3+ years of experience specializing in DevSecOps and Offensive Security Engineering. Proficient in API Security Architecture, Penetration Testing, and Vulnerability Analysis within the cybersecurity domain. A skilled DevSecOps practitioner, adept at seamlessly integrating security measures into the software development lifecycle. Expertise includes implementing robust security practices, conducting thorough vulnerability assessments, and employing threat modeling to enhance overall application security. Known for effectively bridging non-technical stakeholders with technological complexities, fostering improved security and quality integration. Committed to promoting professional development and staying at the forefront of emerging DevSecOps trends."
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Experience</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional journey building secure, innovative solutions across various industries.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-grow bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                        <p className="text-red-600 font-medium">{exp.company}</p>
                      </div>
                      <span className="text-gray-500 text-sm mt-1 md:mt-0">{exp.period}</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
                
                {index < experiences.length - 1 && (
                  <div className="absolute left-6 top-12 w-0.5 h-16 bg-gray-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Contact Component
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }

    try {
      // You can use the mailto URL scheme for a basic solution
      const mailtoUrl = `mailto:narayanan.k.info@gmail.com?subject=${encodeURIComponent(formData.subject || 'Contact Form Submission')}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      window.location.href = mailtoUrl;
      
      // Clear the form
      setFormData({ name: '', email: '', subject: '', message: '' });
      alert('Thank you for your message! Opening your email client...');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('There was an error sending your message. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can work together.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Let's Connect</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Email</p>
                  <p className="text-gray-600">narayanan.k.info@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Github className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">GitHub</p>
                  <p className="text-gray-600">github.com/Narayanan-info</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Linkedin className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">LinkedIn</p>
                  <p className="text-gray-600">linkedin.com/in/narayanan-k1/</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Location</p>
                  <p className="text-gray-600">Chennai, Tamil Nadu, India</p>
                </div>
              </div>
            </div>

            {/* <div className="bg-white rounded-lg p-6 shadow-lg">
              <h4 className="font-bold text-gray-800 mb-4">Community Involvement</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">BSides Chennai Speaker</span>
                  <span className="text-red-600 font-medium">2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Null Chennai Member</span>
                  <span className="text-red-600 font-medium">2022-Present</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Open Source Contributor</span>
                  <span className="text-red-600 font-medium">2020-Present</span>
                </div>
              </div>
            </div> */}
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h3>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 transition-colors duration-200"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 transition-colors duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 transition-colors duration-200"
                  placeholder="Project discussion"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project or how I can help..."
                />
              </div>
              
              <button
                onClick={handleSubmit}
                className="w-full px-8 py-4 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors duration-200"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="text-2xl font-bold text-white">Portfolio</div>
            <div className="text-red-600 font-bold text-xl">Narayanan K</div>
          </div>
          
          <p className="text-gray-400 mb-6">
            Building secure digital solutions for a connected world.
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://github.com/Narayanan-info" className="text-gray-400 hover:text-red-600 transition-colors duration-200">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/narayanan-k1/" className="text-gray-400 hover:text-red-600 transition-colors duration-200">
              <Linkedin size={24} />
            </a>
            <a href="mailto:narayanan.k.info@gmail.com" className="text-gray-400 hover:text-red-600 transition-colors duration-200">
              <Mail size={24} />
            </a>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-500 text-sm">
              © 2025 Narayanan K. Made with ❤️ in Chennai, India.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main Portfolio Component
const Portfolio = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <Header />
      <Home />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default Portfolio;