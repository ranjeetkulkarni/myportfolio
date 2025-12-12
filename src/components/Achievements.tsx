import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Code, Terminal, Medal, GitBranch, GraduationCap } from 'lucide-react';

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const achievements = [
    {
      icon: Trophy,
      title: 'National Level Examinations',
      description:
        'Top ranks in JEE Main 2023 (AIR 3660), JEE Advanced 2023 (AIR 6461) and NTSE Scholarship Rank 126.',
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'from-yellow-50 to-orange-50',
    },
    {
      icon: Code,
      title: 'Competitive Programming',
      description:
        'CodeChef 3-Star (#544, #259, #459) and Codeforces Specialist (Max Rank #2860 in Div 1+2).',
      color: 'from-blue-400 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
    },
    {
      icon: Terminal,
      title: 'DS & Algorithms',
      description:
        'LeetCode Rating 1853 (Knight) (Biweekly Contest 429, Rank 2609) demonstrating strong problem-solving skills.',
      color: 'from-green-400 to-teal-500',
      bgColor: 'from-green-50 to-teal-50',
    },
    {
      icon: Medal,
      title: 'Hackathons',
      description:
        'Semi-Finalist in Novartis NEST Hackathon – Selected among Top 42 National Teams from over 32k participants.',
      color: 'from-purple-400 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50',
    },
    {
      icon: GitBranch,
      title: 'Open Source Contribution',
      description:
        'Actively contributed to Opencode24, the college\'s flagship open-source event, driving community-led projects.',
      color: 'from-indigo-400 to-blue-500',
      bgColor: 'from-indigo-50 to-blue-50',
    },
    {
      icon: GraduationCap,
      title: 'Academic Excellence',
      description: 'CGPA: 8.75. Achieved 10/10 in DSA, OOPs, and OS. Secured 9/10 in DBMS, Computer Networks, and Linear Algebra.',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50',
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Achievements</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative bg-gradient-to-br ${achievement.bgColor} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${achievement.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{achievement.title}</h3>
                <p className="text-gray-700 leading-relaxed">{achievement.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
