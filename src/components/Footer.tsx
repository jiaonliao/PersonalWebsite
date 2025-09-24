import { motion } from 'framer-motion';
import { Heart, Code2 } from 'lucide-react';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-8 border-t border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 text-gray-400">
          <Code2 className="w-5 h-5" />
          <span>Built with</span>
          <Heart className="w-5 h-5 text-red-500 animate-pulse" />
          <span>by 焦竞健</span>
        </div>
        <p className="mt-2 text-sm text-gray-500">
          © 2024 All rights reserved. Powered by React & Three.js
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;