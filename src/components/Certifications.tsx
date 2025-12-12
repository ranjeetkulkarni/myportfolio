import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const certifications = [
    {
      title: 'Artificial Intelligence and Machine Learning',
      issuer: 'EICT IIT Kanpur',
      description: 'Advanced training in AI/ML concepts and applications.',
      image: '/assets/img/certifications/ai_ml.jpeg',
      link: 'https://drive.google.com/file/d/1nGw6kCwRJHftU4-dx__vMags5Ojetz_U/view?usp=drive_link',
    },
    {
      title: 'Project Completion Certificate',
      issuer: 'EICT IIT Kanpur',
      description:
        'Awarded for successful completion of a key project demonstrating technical expertise.',
      image: '/assets/img/certifications/project_completion.jpeg',
      link: 'https://drive.google.com/file/d/1PmJWfdCizItdfWpq9_w_MmuhIrdjctjg/view?usp=drive_link',
    },
    {
      title: 'OpenCode 24 IIITA Opensource Event',
      issuer: 'IIIT Allahabad',
      description:
        'Recognized for contributions during IIIT Allahabad\'s annual open-source event, demonstrating collaborative development and community engagement.',
      image: '/assets/img/certifications/opencode.jpeg',
      link: 'https://drive.google.com/file/d/1psD6Q1glmoUgaYT42bRWuV3UoRikdJ6k/view?usp=drive_link',
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Certifications</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-56 overflow-hidden bg-gray-200">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-blue-600 font-semibold mb-3">{cert.issuer}</p>
                <p className="text-gray-700 mb-6 leading-relaxed">{cert.description}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <ExternalLink size={16} />
                  View Certificate
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
