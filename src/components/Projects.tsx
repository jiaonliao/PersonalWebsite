import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Calendar, ChevronDown } from 'lucide-react';
import { projects, getTechCategory, getProjectTheme } from '../data/portfolio';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">项目经历</span>
          </h2>
          <p className="text-gray-400 text-lg">从医疗到双碳，从区块链到AI的技术实践</p>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
              className={`project-card-standalone ${
                selectedProject === project.id ? 'selected' : ''
              }`}
              onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
            >

              {/* 项目状态指示器 */}
              <div className={`project-status ${
                project.period.includes('至今') ? 'active' : 'completed'
              }`}>
                {project.period.includes('至今') ? '进行中' : '已完成'}
              </div>

              <div className="p-4 md:p-6 relative">
                <div className="pr-20 md:pr-16">
                  {/* 项目基本信息 */}
                  <h3 className={`text-lg md:text-xl lg:text-2xl font-bold transition-colors mb-2 ${
                    selectedProject === project.id ? 'text-blue-400' : 'group-hover:text-blue-400'
                  }`}>
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-3 md:mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{project.period}</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">{project.description}</p>
                </div>

                {/* 右下角操作按钮 */}
                <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 flex items-center gap-2 md:gap-3">
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-blue-600/20 border border-blue-500/40 rounded-lg text-blue-300 hover:bg-blue-600/30 hover:border-blue-400/60 transition-all duration-300 group/link"
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      title="访问项目"
                    >
                      <ExternalLink className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                    </motion.a>
                  )}
                  <motion.button
                    className="p-2 bg-gray-600/20 border border-gray-500/40 rounded-lg text-gray-400 hover:bg-gray-600/30 hover:border-gray-400/60 hover:text-gray-300 transition-all duration-300 group/expand"
                    animate={{
                      rotate: selectedProject === project.id ? 180 : 0,
                      backgroundColor: selectedProject === project.id ? 'rgba(59, 130, 246, 0.2)' : 'rgba(75, 85, 99, 0.2)'
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    title={selectedProject === project.id ? '收起详情' : '展开详情'}
                  >
                    <ChevronDown className="w-4 h-4 group-hover/expand:scale-110 transition-transform" />
                  </motion.button>
                </div>

                {/* 技术标签 */}
                <div className="flex flex-wrap gap-1.5 md:gap-2 mt-4 md:mt-6 pr-20 md:pr-16">
                  {project.tech.slice(0, 5).map(tech => {
                    const category = getTechCategory(tech);
                    return (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className={`tech-tag-enhanced ${category}`}
                      >
                        {tech}
                      </motion.span>
                    );
                  })}
                  {project.tech.length > 5 && (
                    <span className="tech-tag-enhanced default text-xs md:text-sm">+{project.tech.length - 5}</span>
                  )}
                </div>
              </div>

              <AnimatePresence>
                {selectedProject === project.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-gray-700/50 px-6 pb-6">
                      <div className="pt-6 grid md:grid-cols-2 gap-8">
                        {/* 主要职责 */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <h4 className="text-sm font-semibold text-gray-300 mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            主要职责
                          </h4>
                          <ul className="space-y-3">
                            {project.responsibilities.map((resp, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 + i * 0.1 }}
                                className="text-sm text-gray-300 flex items-start leading-relaxed"
                              >
                                <span className="text-blue-400 mr-3 mt-1 text-lg leading-none flex-shrink-0">▸</span>
                                <span>{resp}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>

                        {/* 完整技术栈 */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          <h4 className="text-sm font-semibold text-gray-300 mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                            完整技术栈
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, i) => {
                              const category = getTechCategory(tech);
                              return (
                                <motion.span
                                  key={tech}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: 0.4 + i * 0.03 }}
                                  className={`tech-tag-enhanced ${category}`}
                                >
                                  {tech}
                                </motion.span>
                              );
                            })}
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* 项目主题渐变背景 */}
              <div className={`absolute inset-0 bg-gradient-to-br transition-all duration-500 pointer-events-none ${
                selectedProject === project.id
                  ? `${getProjectTheme(project.title, project.description).primary} opacity-10`
                  : 'from-transparent to-transparent group-hover:from-blue-600/5 group-hover:to-purple-600/5'
              }`} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 text-lg mb-4">
            以上仅展示部分项目经历
          </p>
          <p className="text-gray-500 mb-8">
            想了解更多项目案例和技术实践？
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-110 text-lg font-medium"
          >
            <span>联系我了解更多</span>
            <span className="text-xl">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;