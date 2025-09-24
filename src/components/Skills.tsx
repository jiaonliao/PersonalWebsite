import { motion } from 'framer-motion';
import { useState } from 'react';
import { Server, Database, Blocks, Monitor, Settings, Zap } from 'lucide-react';
import { skills } from '../data/portfolio';

const skillCategories = [
  { name: '后端开发', icon: Server, skills: skills.backend, color: 'from-blue-500 to-cyan-500' },
  { name: '前端开发', icon: Monitor, skills: skills.frontend, color: 'from-purple-500 to-pink-500' },
  { name: '区块链', icon: Blocks, skills: skills.blockchain, color: 'from-green-500 to-emerald-500' },
  { name: '数据库', icon: Database, skills: skills.database, color: 'from-orange-500 to-red-500' },
  { name: 'DevOps', icon: Settings, skills: skills.devops, color: 'from-indigo-500 to-purple-500' },
  { name: 'AI技术', icon: Zap, skills: skills.ai, color: 'from-pink-500 to-rose-500' }
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">技术栈</span>
          </h2>
          <p className="text-gray-400 text-lg">全栈技术能力，覆盖前后端及区块链开发</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveCategory(index)}
                className={`glass-effect p-4 rounded-xl transition-all duration-300 group ${
                  activeCategory === index
                    ? 'ring-2 ring-blue-500 shadow-xl shadow-blue-500/30 scale-105'
                    : 'hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10'
                }`}
              >
                <div className={`w-12 h-12 mx-auto mb-2 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-110`}>
                  <Icon className="w-6 h-6 text-white drop-shadow-sm" />
                </div>
                <p className="text-sm text-gray-300">{category.name}</p>
              </motion.button>
            );
          })}
        </div>

        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-effect rounded-2xl p-8"
        >
          <div className="flex flex-wrap gap-3">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="tech-tag hover:scale-110 transition-transform cursor-pointer"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="glass-effect p-6 rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 cursor-pointer">
            <div className="text-3xl font-bold gradient-text mb-2">5+</div>
            <p className="text-gray-400">年开发经验</p>
          </div>
          <div className="glass-effect p-6 rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 cursor-pointer">
            <div className="text-3xl font-bold gradient-text mb-2">10+</div>
            <p className="text-gray-400">大型项目交付</p>
          </div>
          <div className="glass-effect p-6 rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/20 cursor-pointer">
            <div className="text-3xl font-bold gradient-text mb-2">0-1</div>
            <p className="text-gray-400">独立项目搭建</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;