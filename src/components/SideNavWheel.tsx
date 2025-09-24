import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Home, Wrench, FolderOpen, Briefcase, Mail, Code2 } from 'lucide-react';

const SideNavWheel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [rotation, setRotation] = useState(0);

  const navItems = [
    { id: 'home', label: '首页', href: '#home', icon: Home },
    { id: 'skills', label: '技能', href: '#skills', icon: Wrench },
    { id: 'projects', label: '项目', href: '#projects', icon: FolderOpen },
    { id: 'experience', label: '经历', href: '#experience', icon: Briefcase },
    { id: 'contact', label: '联系', href: '#contact', icon: Mail },
  ];

  // 计算每个菜单项的角度位置（从顶部开始，顺时针分布）
  const getItemPosition = (index: number, total: number) => {
    const angleStep = (2 * Math.PI) / total;
    const angle = angleStep * index - Math.PI / 2; // -90度让第一个项目在顶部
    const radius = 80; // 距离中心的半径

    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
      angle: (angle * 180) / Math.PI, // 转换为度数
    };
  };

  // 处理菜单项点击
  const handleItemClick = (index: number, href: string) => {
    setActiveIndex(index);
    // 计算旋转角度，让选中的项目转到顶部
    const targetRotation = -(360 / navItems.length) * index;
    setRotation(targetRotation);

    // 平滑滚动到目标section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 监听滚动来更新活跃状态
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.querySelector(item.href));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      let currentSection = 0;
      sections.forEach((section, index) => {
        if (section && (section as HTMLElement).offsetTop <= scrollPosition) {
          currentSection = index;
        }
      });

      if (currentSection !== activeIndex) {
        setActiveIndex(currentSection);
        const targetRotation = -(360 / navItems.length) * currentSection;
        setRotation(targetRotation);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeIndex, navItems.length]);

  return (
    <>
      {/* 桌面端左侧转盘导航 */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <div className="relative w-48 h-48">
        {/* 中心圆形 */}
        <motion.div
          className="absolute inset-0 rounded-full flex items-center justify-center nav-wheel-center"
          style={{ rotate: rotation }}
          animate={{ rotate: rotation }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Logo中心 */}
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-2xl nav-wheel-logo">
            <Code2 className="w-8 h-8 text-white drop-shadow-lg" />
          </div>

          {/* 菜单项 */}
          {navItems.map((item, index) => {
            const position = getItemPosition(index, navItems.length);
            const Icon = item.icon;
            const isActive = activeIndex === index;

            return (
              <motion.button
                key={item.id}
                className={`absolute w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 nav-wheel-item ${
                  isActive ? 'nav-wheel-item-active' : ''
                }`}
                style={{
                  left: `calc(50% + ${position.x}px - 24px)`,
                  top: `calc(50% + ${position.y}px - 24px)`,
                }}
                onClick={() => handleItemClick(index, item.href)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                title={item.label}
              >
                <Icon className="w-5 h-5" />
              </motion.button>
            );
          })}
        </motion.div>

          {/* 外圈装饰 */}
          <div className="absolute inset-0 rounded-full nav-wheel-ring"></div>
        </div>
      </div>

      {/* 移动端底部导航 */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 lg:hidden">
        <div className="flex items-center gap-3 px-6 py-3 rounded-full nav-wheel-mobile">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeIndex === index;

            return (
              <motion.button
                key={item.id}
                className={`p-2.5 rounded-full transition-all duration-300 nav-wheel-item-mobile ${
                  isActive ? 'nav-wheel-item-mobile-active' : ''
                }`}
                onClick={() => handleItemClick(index, item.href)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title={item.label}
              >
                <Icon className="w-5 h-5" />
              </motion.button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SideNavWheel;