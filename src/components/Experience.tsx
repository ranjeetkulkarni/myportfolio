import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = [
    '/assets/img/gdsc1.jpg',
    '/assets/img/gdsc2.jpg',
    '/assets/img/gdsc3.jpg',
    '/assets/img/gdsc4.jpg',
    // '/assets/img/gdsc5.jpg',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Leadership & Involvement
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-8 p-8">
            <div>
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Google Developer Group, IIITA
                </h3>
                <p className="text-lg text-blue-600 font-semibold mb-3">
                  AI/ML Wing Member
                </p>
                <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-medium">
                  Oct 2024 – Present
                </span>
              </div>

              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>
                    Orchestrated immersive AI/ML workshops, empowering 50+ students with hands-on
                    experience in advanced technologies.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>
                    Directed high-impact Google Solutions Challenge projects, delivering innovative AI
                    solutions for real-world challenges.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>
                    <strong>Co-Engineered Adermis</strong> – an AI-driven skin disease severity predictor:
                    <ul className="ml-4 mt-2 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-600">→</span>
                        <span>Developed robust ML models for PCOS risk assessment and pregnancy health prediction.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-600">→</span>
                        <span>Integrated Google Maps API for real-time doctor/pharmacy recommendations.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-600">→</span>
                        <span>
                          Architected a scalable AI pipeline leveraging Gemini API, RAG, FAISS, and Computer
                          Vision with a responsive Next.js/Tailwind CSS frontend.
                        </span>
                      </li>
                    </ul>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>
                    Expanded expertise by mastering: Supervised & Unsupervised Machine Learning, Large
                    Language Models, Natural Language Processing, Exploratory Data Analysis, Retrieval
                    Augmented Generation (RAG), Knowledge Graphs with Neo4j, FAISS for fast retrieval, RASA
                    framework, and Generative Adversarial Networks.
                  </span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col justify-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="relative h-96 bg-gray-200">
                  {carouselImages.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`GDG Event ${index + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-all shadow-lg"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-all shadow-lg"
                >
                  <ChevronRight size={20} />
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
