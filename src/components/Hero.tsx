import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react';

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/ranjeetkulkarni', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/ranjeet-kulkarni-b2361627a/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:ranjeetkulkarni2505@gmail.com', label: 'Email' },
  ];

  const codingPlatforms = [
    { name: 'LeetCode', img: '/assets/img/leetcode.png', href: 'https://leetcode.com/u/r25_1725/' },
    { name: 'Codeforces', img: '/assets/img/codeforces.png', href: 'https://codeforces.com/profile/R_1725' },
    { name: 'CodeChef', img: '/assets/img/codechef.jpeg', href: 'https://www.codechef.com/users/codefreak_25' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 pt-20">
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT COLUMN: TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left z-10"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <div className="flex gap-2 justify-center md:justify-start">
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium border border-blue-200">
                  Software Engineer
                </span>
                <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium border border-indigo-200">
                  AI Enthusiast
                </span>
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-gray-900 tracking-tight">
              Ranjeet <span className="text-blue-600">Kulkarni</span>
            </h1>

            <h3 className="text-xl md:text-2xl text-gray-600 font-light mb-6">
              Building scalable software with a touch of AI.
            </h3>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
              Passionate about building impactful products using modern web technologies (React, Node.js) and integrating intelligent AI solutions. Always learning, always creating.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              <button
                onClick={() => scrollToSection('projects')}
                className="group px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                View Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="/assets/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-all duration-300 flex items-center gap-2 hover:-translate-y-0.5"
              >
                <Download size={18} />
                Resume
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center text-gray-700 hover:text-blue-600 hover:scale-110 transition-all duration-300 border border-gray-100"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
              <div className="w-px h-8 bg-gray-300 mx-2 hidden md:block"></div>
              {codingPlatforms.map((platform, index) => (
                <motion.a
                  key={index}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center hover:scale-110 transition-all duration-300 border border-gray-100"
                  aria-label={platform.name}
                >
                  <img src={platform.img} alt={platform.name} className="w-6 h-6 object-contain" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT COLUMN: BIG PROFILE PICTURE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center md:justify-end z-10"
          >
            <div className="relative w-72 h-72 md:w-[28rem] md:h-[28rem]">
              {/* Animated Glow Behind Image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              
              {/* The Image Container */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="relative w-full h-full rounded-full border-8 border-white/80 shadow-2xl overflow-hidden"
              >
                <img 
                  src="/assets/img/profile.jpg" 
                  alt="Ranjeet Kulkarni" 
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Optional: Floating Badge (Experience or Stack) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-4 -left-4 md:bottom-10 md:left-0 bg-white p-4 rounded-2xl shadow-xl border border-blue-100 flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                  8+
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Projects</p>
                  <p className="text-sm font-bold text-gray-900">Completed</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;