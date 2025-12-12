import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Brain, Code, Wrench, Laptop } from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeTab, setActiveTab] = useState('aiml');

  const tabs = [
    { id: 'aiml', label: 'AI/ML & Data Science', icon: Brain },
    { id: 'web', label: 'Web Development', icon: Laptop },
    { id: 'programming', label: 'Programming & CS', icon: Code },
    { id: 'tools', label: 'Tools & DevOps', icon: Wrench },
  ];

  const skillsContent = {
    aiml: {
      title: 'AI/ML & Data Science',
      categories: [
        {
          name: 'Core Concepts',
          skills: [
            'Supervised/Unsupervised Learning',
            'NLP',
            'Neural Networks',
            'Computer Vision',
            'GANs',
            'Generative AI',
            'LLMs',
            'Knowledge Graphs',
            'Natural Language Processing',
          ],
        },
        {
          name: 'Frameworks & Tools',
          skills: [
            'TensorFlow',
            'PyTorch',
            'Flask',
            'Neo4j',
            'FAISS',
            'RASA',
            'Twilio WhatsApp API',
            'Scikit-Learn',
            'OpenCV',
          ],
        },
        {
          name: 'Data Libraries & Visualization',
          skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter Notebook'],
        },
      ],
    },
    web: {
      title: 'Web Development',
      categories: [
        {
          name: 'Frontend',
          skills: ['React.js', 'Next.js', 'Tailwind CSS', 'HTML5/CSS3'],
        },
        {
          name: 'Backend',
          skills: ['Node.js', 'Express.js', 'Flask', 'REST APIs'],
        },
        {
          name: 'Databases', // Added this category as it is vital for SDE roles
          skills: [
            'MongoDB', // (Used in Campus Ease)
            'MySQL',
            'SQLite', // (Used in Expense Ninja)
            'Neo4j', // (Used in Clinical Trials)
          ],
        },
      ],
    },
    programming: {
      title: 'Programming & CS Fundamentals',
      categories: [
        {
          name: 'Languages',
          skills: ['Java', 'C++', 'Python', 'JavaScript (ES6+)', 'SQL'],
        },
        {
          name: 'Concepts',
          skills: ['DSA', 'Competitive Programming', 'Object-Oriented Design', 'Design Patterns'],
        },
      ],
    },
    tools: {
      title: 'Tools & DevOps',
      categories: [
        {
          name: 'Version Control & Build Tools',
          skills: ['Git', 'GitHub', 'Vite.js', 'Postman'],
        },
        {
          name: 'Containerization & CI/CD',
          skills: ['Docker'],
        },
      ],
    },
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-2xl p-4 shadow-lg space-y-2 sticky top-24">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-3 ${
                      activeTab === tab.id
                        ? 'bg-blue-600 text-white shadow-lg scale-105'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon size={20} />
                    <span className="hidden xl:inline">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg min-h-[400px]">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {skillsContent[activeTab as keyof typeof skillsContent].title}
              </h3>

              <div className="space-y-6">
                {skillsContent[activeTab as keyof typeof skillsContent].categories.map(
                  (category, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">{category.name}</h4>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.span
                            key={skillIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
                            className="px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 text-gray-700 rounded-lg text-sm font-medium hover:from-blue-100 hover:to-cyan-100 transition-all duration-300 border border-blue-200 hover:scale-105 hover:shadow-md"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
