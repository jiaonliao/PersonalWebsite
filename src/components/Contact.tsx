import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Copy } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { useState } from 'react';

const Contact = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2500);
    } catch (err) {
      console.error('Failed to copy: ', err);
      // 降级方案：使用传统方法复制
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        setCopiedField(field);
        setTimeout(() => setCopiedField(null), 2500);
      } catch (fallbackErr) {
        console.error('Fallback copy failed: ', fallbackErr);
      }
      document.body.removeChild(textArea);
    }
  };

  const contactItems = [
    {
      id: 'email',
      icon: Mail,
      label: '邮箱',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      gradient: 'from-blue-500 via-blue-600 to-purple-600',
      copyable: true
    },
    {
      id: 'phone',
      icon: Phone,
      label: '电话',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      gradient: 'from-green-500 via-emerald-600 to-teal-600',
      copyable: true
    },
    {
      id: 'location',
      icon: MapPin,
      label: '位置',
      value: personalInfo.location,
      gradient: 'from-orange-500 via-red-600 to-pink-600',
      copyable: false
    },
    {
      id: 'github',
      icon: Github,
      label: 'GitHub',
      value: '查看我的代码',
      href: 'https://github.com',
      gradient: 'from-gray-600 via-slate-700 to-gray-800',
      copyable: false
    }
  ];


  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">联系方式</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            期待与您的交流与合作，让我们一起创造更美好的未来
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8" style={{ paddingTop: '3rem' }}>
            {contactItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="contact-card group"
              >
                <div className="contact-card-inner">
                  <div className={`contact-icon bg-gradient-to-br ${item.gradient}`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-base text-gray-400 font-medium">{item.label}</p>
                      {item.copyable && (
                        <motion.button
                          onClick={() => copyToClipboard(item.value, item.id)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="copy-button"
                        >
                          <Copy className="w-4 h-4" />
                          {copiedField === item.id && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.8, y: 10 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              exit={{ opacity: 0, scale: 0.8, y: -10 }}
                              className="copy-success"
                            >
                              <span className="copy-success-text">已复制到剪贴板!</span>
                              <div className="copy-success-arrow"></div>
                            </motion.div>
                          )}
                        </motion.button>
                      )}
                    </div>

                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="contact-value text-xl"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="contact-value text-xl">{item.value}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 底部装饰信息 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-16"
          >
            <div className="contact-decoration">
              <div className="contact-pulse-ring"></div>
              <div className="contact-center-dot"></div>
            </div>
            <p className="text-gray-400 text-lg mt-6">
              24小时内回复，期待与您的合作
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;