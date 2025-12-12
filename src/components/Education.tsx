import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const educationData = [
    {
      institution: 'IIIT Allahabad',
      degree: 'B.Tech. in Information Technology',
      location: 'Prayagraj, UP',
      cgpa: '8.75 (till 4th Sem)',
      period: '2023 - Present',
      coursework: 'Data Structures and Algorithms, Object-Oriented Programming, Software Engineering, Operating Systems, Computer Organization and Architecture, Database Management Systems (DBMS), Computer Networks, Probability and Statistics, Linear Algebra, and Discrete Mathematics.',
      image: '/assets/img/institute1.jpeg',
    },
    {
      institution: 'Jnana Prabodhini Prashala',
      degree: 'Secondary Education, CBSE',
      location: '',
      cgpa: '99.20% (CGPA: 10)',
      period: 'Year of Passing: 2021',
      coursework: 'Focused on foundational science and mathematics with a strong emphasis on problem-solving.',
      image: '/assets/img/institute2.jpeg',
    },
  ];

  return (
    <section id="education" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    {edu.institution}
                  </h3>
                  <p className="text-lg text-blue-600 font-semibold mb-3">{edu.degree}</p>
                  {edu.location && <p className="text-gray-600 mb-2">{edu.location}</p>}
                  <p className="text-gray-900 font-medium mb-4">
                    <span className="font-bold">CGPA:</span> {edu.cgpa}
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">{edu.coursework}</p>
                  <span className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg font-medium">
                    {edu.period}
                  </span>
                </div>
                <div className="flex justify-center md:justify-end">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                    <img
                      src={edu.image}
                      alt={edu.institution}
                      className="relative w-full max-w-sm h-64 object-cover rounded-2xl shadow-lg"
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

export default Education;
