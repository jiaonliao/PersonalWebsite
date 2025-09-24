import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const DotNavigation = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const sections = [
    { id: 'home', label: '首页', href: '#home' },
    { id: 'skills', label: '技能', href: '#skills' },
    { id: 'projects', label: '项目', href: '#projects' },
    { id: 'experience', label: '经历', href: '#experience' },
    { id: 'contact', label: '联系', href: '#contact' },
  ];

  // 监听滚动来更新活跃状态
  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(section =>
        document.querySelector(section.href)
      );

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      let currentSection = 0;
      sectionElements.forEach((element, index) => {
        if (element && (element as HTMLElement).offsetTop <= scrollPosition) {
          currentSection = index;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初始调用
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 处理点击跳转
  const handleDotClick = (href: string, index: number) => {
    setActiveSection(index);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      {/* 桌面端右侧垂直导航 */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:block">
        <nav className="flex flex-col items-center space-y-4">
        {sections.map((section, index) => (
          <div
            key={section.id}
            className="relative flex items-center"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* 标签 */}
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.div
                  initial={{ opacity: 0, x: 10, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 10, scale: 0.8 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="absolute right-full mr-3 px-3 py-1.5 bg-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-lg text-sm text-gray-200 whitespace-nowrap pointer-events-none"
                >
                  {section.label}
                  {/* 箭头 */}
                  <div className="absolute top-1/2 -translate-y-1/2 left-full w-0 h-0 border-l-4 border-l-gray-900/90 border-y-4 border-y-transparent"></div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* 圆点 */}
            <motion.button
              className={`relative w-2 h-2 rounded-full border-2 transition-all duration-300 ${
                activeSection === index
                  ? 'bg-blue-500 border-blue-400 shadow-lg shadow-blue-500/50'
                  : 'bg-gray-600/50 border-gray-500/50 hover:bg-gray-400/70 hover:border-gray-400/70'
              }`}
              onClick={() => handleDotClick(section.href, index)}
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 1.2 }}
              animate={{
                scale: activeSection === index ? 1.3 : 1,
              }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              {/* 活跃状态的内部光点 */}
              {activeSection === index && (
                <motion.div
                  className="absolute inset-0.5 bg-blue-400 rounded-full"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                />
              )}

              {/* 悬停时的脉冲效果 */}
              <AnimatePresence>
                {hoveredIndex === index && activeSection !== index && (
                  <motion.div
                    className="absolute -inset-1 bg-gray-400/20 rounded-full"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        ))}
        </nav>
      </div>

      {/* 移动端底部横向导航 */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 md:hidden">
        <nav className="flex items-center space-x-4 px-4 py-3 bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-full">
          {sections.map((section, index) => (
            <motion.button
              key={section.id}
              className={`w-2.5 h-2.5 rounded-full border-2 transition-all duration-300 ${
                activeSection === index
                  ? 'bg-blue-500 border-blue-400 shadow-lg shadow-blue-500/50'
                  : 'bg-gray-600/50 border-gray-500/50'
              }`}
              onClick={() => handleDotClick(section.href, index)}
              whileTap={{ scale: 1.2 }}
              animate={{
                scale: activeSection === index ? 1.4 : 1,
              }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              {/* 活跃状态的内部光点 */}
              {activeSection === index && (
                <motion.div
                  className="absolute inset-0.5 bg-blue-400 rounded-full"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                />
              )}
            </motion.button>
          ))}
        </nav>
      </div>
    </>
  );
};

export default DotNavigation;