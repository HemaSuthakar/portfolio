import React, { useState, useEffect } from 'react';
import { ChevronDown, Code2, Database, Globe, Mail, Phone, MapPin, ExternalLink, Github, Linkedin, Download, Menu, X, CheckCircle, Star, Users, Briefcase, GraduationCap } from 'lucide-react';
import { TechLogo } from './components/TechLogos';
import { generateResume } from './utils/resumeGenerator';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email content
    const subject = encodeURIComponent(`Portfolio Contact: ${formData.subject}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Subject: ${formData.subject}\n\n` +
      `Message:\n${formData.message}\n\n` +
      `---\nSent from your portfolio website`
    );
    
    // Open email client with pre-filled content
    window.location.href = `mailto:hemasuthakar1226@gmail.com?subject=${subject}&body=${body}`;
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Show success message (optional)
    alert('Email client opened! Please send the email to complete your message.');
  };

  const skills = [
    { name: 'HTML / CSS / JavaScript', level: 90, category: 'Frontend' },
    { name: 'React / Tailwind CSS', level: 85, category: 'Frontend' },
    { name: 'Node.js / Express', level: 80, category: 'Backend' },
    { name: 'MongoDB / MySQL', level: 80, category: 'Database' },
    { name: 'Python / Django', level: 75, category: 'Backend' },
    { name: 'Git / GitHub', level: 85, category: 'Tools' },
  ];

  const projects = [
    {
      title: 'Airline Reservation System',
      description: 'Integrated passenger processing system with seat allocation and ticket cancellation features. Built using C programming with structured approach for efficient data management.',
      tech: ['C Programming', 'Data Structures', 'File Handling', 'Memory Management'],
      image: 'https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: '#',
      live: '#',
      highlights: ['Seat allocation system', 'Ticket cancellation', 'Passenger data management']
    },
    {
      title: 'Music Player using C',
      description: 'Command-line music player application using advanced data structures for unlimited song access and comprehensive playlist management functionality.',
      tech: ['C Programming', 'Linked Lists', 'File I/O', 'Data Structures'],
      image: 'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: '#',
      live: '#',
      highlights: ['Unlimited song access', 'Playlist management', 'Command-line interface']
    },
    {
      title: 'Web Development Projects',
      description: 'Collection of responsive web applications built for local businesses using modern frontend and backend technologies with database integration.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: '#',
      live: '#',
      highlights: ['Responsive design', 'Database integration', 'Client solutions']
    }
  ];

  const experiences = [
    {
      title: 'Academic Projects & Freelance Work',
      company: 'Self-Directed Learning',
      period: '2023 - Present',
      description: 'Built and deployed small-scale web applications for local businesses while developing strong foundation in full-stack development through academic projects.',
      achievements: [
        'Built and deployed web applications for local businesses',
        'Developed RESTful APIs and responsive frontends using React and Node.js',
        'Created database schemas and optimized queries for performance',
        'Collaborated with clients to gather requirements and deliver tailored solutions'
      ]
    },
    {
      title: 'Bachelor of Information Technology',
      company: 'M Kumarasamy College of Engineering',
      period: '2023 - 2027',
      description: 'Pursuing a degree in Information Technology with a focus on software development, data structures, and emerging technologies. Building a strong foundation in both theoretical concepts and practical applications.',
      achievements: [
        'Gained hands-on experience in programming languages like C, Python, and JavaScript',
        'Developed academic projects including an Airline Reservation System and a Music Player using C',
        'Strengthened problem-solving, critical thinking, and collaborative development skills',
        'Actively practicing coding on platforms like LeetCode, HackerRank, and CodeTantra'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-900/90 backdrop-blur-sm z-50 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-white">
              Hema<span className="text-blue-600">Dev</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-200 ${
                    activeSection === section 
                      ? 'text-blue-600 font-semibold' 
                      : 'text-gray-300 hover:text-blue-400'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-700">
              {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left py-2 capitalize text-gray-300 hover:text-blue-400"
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Full-Stack Developer
              <br />
              <span className="text-blue-600">Who Delivers Results</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              I create scalable web applications that drive business growth. 
              From concept to deployment, I turn your ideas into powerful digital solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200"
              >
                Let's Connect
              </button>
            </div>

            <div className="flex justify-center space-x-8 text-gray-300">
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-emerald-500" size={20} />
                <span>2+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="text-yellow-500" size={20} />
                <span>Academic & Freelance Projects</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="text-blue-500" size={20} />
                <span>Real-World Solutions</span>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-gray-500" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">
                Passionate Developer with a Business Mindset
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                I'm a results-driven full-stack developer who understands that great code 
                means nothing without business impact. With 2+ years of experience, I've built 
                academic and freelance projects that solve real-world problems and deliver value.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                My approach combines technical excellence with strategic thinking. I don't just 
                write code—I solve problems, optimize performance, and create solutions that 
                drive measurable business results.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mt-8">
                <div className="bg-gray-700 p-6 rounded-lg">
                  <Code2 className="text-blue-600 mb-2" size={32} />
                  <h4 className="font-semibold text-white mb-2">Frontend Expert</h4>
                  <p className="text-gray-300">HTML, CSS, JavaScript, React</p>
                </div>
                <div className="bg-gray-700 p-6 rounded-lg">
                  <Database className="text-emerald-600 mb-2" size={32} />
                  <h4 className="font-semibold text-white mb-2">Backend Specialist</h4>
                  <p className="text-gray-300">Node.js, Python, MongoDB, MySQL</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-8 rounded-2xl text-white">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Briefcase size={24} />
                  <div>
                    <h4 className="font-semibold">Current Role</h4>
                    <p className="opacity-90">Aspiring Full-Stack Developer</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <GraduationCap size={24} />
                  <div>
                    <h4 className="font-semibold">Education</h4>
                    <p className="opacity-90">Bachelor of Information Technology</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Globe size={24} />
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="opacity-90">Attur, Salem, Tamil Nadu</p>
                  </div>
                </div>
                
                <button 
                  onClick={generateResume}
                  className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Download size={20} />
                  <span>Download Resume</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proficient in modern technologies with a focus on performance, scalability, and user experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="bg-gray-800 p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-white">{skill.name}</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-400">{skill.category}</span>
                    <span className="text-sm font-semibold text-blue-600">{skill.level}%</span>
                  </div>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Technology Icons */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-white text-center mb-8">Technologies I Work With</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {['React', 'JavaScript', 'Node.js', 'Python', 'MongoDB', 'MySQL', 'Git', 'Tailwind CSS'].map((tech) => (
                <div key={tech} className="bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-700 hover:border-blue-500 hover:shadow-lg hover:scale-105 transition-all duration-300 flex flex-col items-center space-y-2 group">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <TechLogo name={tech} className="w-10 h-10 group-hover:scale-110 transition-transform duration-200" />
                  </div>
                  <span className="text-gray-300 font-medium text-sm text-center">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-world applications that solve business problems and deliver measurable results
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={project.title} className="bg-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-blue-600 bg-opacity-0 hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center space-x-4">
                    <a href={project.github} className="text-white opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 p-2 rounded-full">
                      <Github size={20} />
                    </a>
                    <a href={project.live} className="text-white opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 p-2 rounded-full">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-2">
                    {project.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center space-x-2">
                        <CheckCircle className="text-emerald-500 flex-shrink-0" size={16} />
                        <span className="text-sm text-gray-300">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="https://github.com/HemaSuthakar" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 inline-flex items-center space-x-2">
              <Github size={20} />
              <span>View All Projects on GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Work Experience</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proven track record of delivering high-impact solutions for growing companies
            </p>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.title} className="bg-gray-800 rounded-xl shadow-lg p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    <p className="text-lg text-blue-600 font-semibold">{exp.company}</p>
                  </div>
                  <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
                    {exp.period}
                  </div>
                </div>
                
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">{exp.description}</p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-white mb-3">Key Achievements:</h4>
                  {exp.achievements.map((achievement) => (
                    <div key={achievement} className="flex items-start space-x-3">
                      <CheckCircle className="text-emerald-500 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-gray-300">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Let's Work Together</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to turn your ideas into reality? Let's discuss your next project
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you're a startup looking to build your MVP or an enterprise 
                  needing to scale your platform, I'd love to hear from you.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-gray-700 rounded-lg">
                  <Mail className="text-blue-600" size={24} />
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <p className="text-gray-300">hemasuthakar1226@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-gray-700 rounded-lg">
                  <Phone className="text-blue-600" size={24} />
                  <div>
                    <h4 className="font-semibold text-white">Phone</h4>
                    <p className="text-gray-300">+91 94432 06336</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-gray-700 rounded-lg">
                  <MapPin className="text-blue-600" size={24} />
                  <div>
                    <h4 className="font-semibold text-white">Location</h4>
                    <p className="text-gray-300">Attur, Salem, Tamil Nadu</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4 pt-6">
                <a href="https://linkedin.com/in/hemafromit" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors duration-200">
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com/HemaSuthakar" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-900 transition-colors duration-200">
                  <Github size={24} />
                </a>
                <a href="mailto:hemasuthakar1226@gmail.com" className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-colors duration-200">
                  <Mail size={24} />
                </a>
              </div>
            </div>

            <div className="bg-gray-700 p-8 rounded-xl">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-600 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-600 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="your.email@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-white mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-600 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Project inquiry"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-600 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4">
              Hema<span className="text-blue-400">Dev</span>
            </div>
            <p className="text-gray-400 mb-6">
              Full-Stack Developer • Building the future, one line of code at a time
            </p>
            <div className="flex justify-center space-x-6">
              <a href="https://linkedin.com/in/hemafromit" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/HemaSuthakar" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Github size={24} />
              </a>
              <a href="mailto:hemasuthakar1226@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Mail size={24} />
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-gray-400">
              <p>&copy; 2025 Hema Suthakar. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;