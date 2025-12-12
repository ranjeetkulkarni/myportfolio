import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Youtube } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'AI-Driven Clinical Trials Recommender System',
      subtitle: 'Novartis NEST Hackathon',
      description:
        'Semantic grouping & retrieval of 450,000+ unstructured clinical studies for strategic insights.',
      details: [
        'Processed records with Stella 1.5B embeddings + FAISS for fast similarity search',
        'Engineered deduplication pipeline (cosine similarity 0.857) and Neo4j GDS graph analysis',
        'Reduced duplicates by 25% and served top-10 explainable trial suggestions in < 2s via Flask APIs',
        'Integrated into React.js frontend dashboard for seamless user experience',
      ],
      tech: ['Python', 'Flask', 'FAISS', 'Neo4j GDS', 'Stella 1.5B', 'React.js', 'Gemini API'],
      image: '/assets/img/projects/nest1.jpeg',
      links: {
        repo: '#', // Replace with your GitHub URL
        live: '#',
      },
    },
    {
      title: 'Adermis AI',
      subtitle: 'Google Solutions Challenge - Real-Time Skin Diagnosis',
      description:
        'Early detection & triage of skin conditions for under-resourced communities, with integrated women\'s health Q&A.',
      details: [
        'Developed Flask backend serving a PyTorch CNN with p95 inference latency of 150ms',
        'Achieved 92% classification accuracy with sub-200ms response time',
        'Integrated remedy-recommendation microservice and geo-referral system',
        'Implemented live WebRTC consultation via Flask-SocketIO for real-time patient-doctor interaction',
      ],
      tech: ['Python', 'Flask', 'PyTorch', 'TensorFlow', 'Flask-SocketIO', 'Google Maps API', 'Next.js'],
      image: '/assets/img/projects/adermis1.jpg', 
      links: {
        repo: '#', // Replace with your GitHub URL
        demo: '#',
      },
    },
    {
      title: 'InkSpire',
      subtitle: 'Sketch Colorization API',
      description:
        'Real-time, high-quality colorization of user sketches in a fun, interactive web UI.',
      details: [
        'Trained custom quantized GAN model on anime dataset using PyTorch',
        'Deployed REST API via Flask with < 200ms inference time',
        'Achieved 40% faster GPU inference through model optimization',
        'Built interactive HTML/CSS/JS frontend for seamless user experience',
      ],
      tech: ['Python', 'Flask', 'PyTorch', 'GANs', 'HTML5', 'CSS3', 'JavaScript'],
      image: '/assets/img/projects/inkspire.png',
      links: {
        repo: '#', 
        live: '#', // Replace with Hugging Face link if available
        video: '#',
      },
    },
    {
      title: 'Expense Ninja',
      subtitle: 'Conversational Finance Management',
      description:
        'An intelligent WhatsApp chatbot to simplify financial management through natural language interactions.',
      details: [
        'Built using RASA framework for sophisticated natural language understanding',
        'Integrated with Twilio WhatsApp API for seamless messaging',
        'Employed Hugging Face Transformers for zero-shot classification and NER',
        'Used SQLite for lightweight yet robust data storage',
      ],
      tech: ['RASA', 'Twilio WhatsApp API', 'Hugging Face Transformers', 'SQLite'],
      image: '/assets/img/projects/expenseninja.jpeg',
      links: {
        repo: '#',
      },
    },
    {
      title: 'CiboGenie',
      subtitle: 'AI-Powered Food Analysis Chatbot',
      description:
        'AI-driven platform that extracts and synthesizes multi-source data to analyze food ingredients and define safe consumption guidelines.',
      details: [
        'Engineered platform to extract data from PDFs, Wikipedia, and Google',
        'Integrated geolocation-based store recommendations using Google Maps API',
        'Leveraged FAISS and SentenceTransformers to boost semantic search accuracy',
        'Tech Stack: TensorFlow, Streamlit, GroqAPI, Google Maps API',
      ],
      tech: ['TensorFlow', 'Streamlit', 'GroqAPI', 'Google Maps API', 'FAISS'],
      image: '/assets/img/projects/cibogenie.jpeg',
      links: {
        repo: '#',
      },
    },
    {
      title: 'Campus Ease',
      subtitle: 'The Ultimate Student Hub',
      description:
        'Centralized platform designed to simplify college life with direct access to essential study resources and tools.',
      details: [
        'Integrated DSA sheets and competitive programming problems from Codeforces/LeetCode',
        'Built-in expense tracker and AI-powered audio summarizer for lecture notes',
        'Includes a contest calendar ensuring students never miss an opportunity',
        'Tech Stack: Node.js, MongoDB, JavaScript, HTML, CSS, Flask',
      ],
      tech: ['Node.js', 'MongoDB', 'JavaScript', 'HTML/CSS', 'Flask', 'Jupyter'],
      image: '/assets/img/projects/home.jpeg',
      links: {
        repo: '#',
      },
    },
    {
      title: '9 Box Puzzle Game',
      subtitle: 'Interactive Puzzle Experience',
      description:
        'Java-based puzzle game featuring a sleek, intuitive UI with a 1-Click Solution feature for instant puzzle solving.',
      details: [
        'Built using Java Swing to deliver a dependable and interactive desktop experience',
        'Implemented a 1-Click Solution feature algorithm',
        'Focused on providing a smooth and enjoyable user experience',
      ],
      tech: ['Java', 'Java Swing', 'Algorithms'],
      image: '/assets/img/projects/9box.jpeg',
      links: {
        repo: '#',
      },
    },
    {
      title: 'MyPortfolio',
      subtitle: 'Personal Portfolio Website',
      description:
        'A modern, mobile-friendly personal portfolio website showcasing projects, skills, and experience.',
      details: [
        'Built with responsive design principles for all devices',
        'Utilized HTML5, CSS3, and JavaScript for smooth animations',
        'Integrated best practices for performance optimization and SEO',
      ],
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
      image: '/assets/img/projects/portfolio-rk.jpg',
      links: {
        repo: '#',
      },
    },
  ];

  // Helper function to pick the right icon
  const getIcon = (key: string) => {
    if (key === 'github' || key === 'repo' || key === 'backend' || key === 'frontend') return <Github size={16} />;
    if (key === 'video') return <Youtube size={16} />;
    return <ExternalLink size={16} />;
  };

  // Helper function to pick the right label
  const getLabel = (key: string) => {
    if (key === 'repo') return 'GitHub';
    return key.charAt(0).toUpperCase() + key.slice(1);
  };

  return (
    <section id="projects" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center p-8">
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full mb-3">
                      {project.subtitle}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {project.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white text-gray-700 rounded-lg text-sm font-medium shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {Object.entries(project.links).map(([key, href]) => {
                      // CRITICAL: This logic ensures no icon is shown if link is missing or '#'
                      if (!href || href === '#') return null;

                      return (
                        <a
                          key={key}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                          {getIcon(key)}
                          {getLabel(key)}
                        </a>
                      );
                    })}
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="relative group/image overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 blur-xl opacity-30 group-hover/image:opacity-50 transition-opacity"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="relative w-full h-80 object-cover rounded-2xl shadow-xl group-hover/image:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = 'https://placehold.co/600x400?text=Project+Image';
                      }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;