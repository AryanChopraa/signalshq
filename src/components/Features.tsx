import { Zap, Workflow, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-black">Powerful <span className="bg-gradient-to-r from-purple-600 to-purple-900 bg-clip-text text-transparent">features</span> to transform your audit workflow</h2>
          <p className="text-lg font-display text-black/90">Our platform offers comprehensive tools that streamline processes, enhance collaboration, and ensure compliance.</p>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="bg-gradient-to-br from-purple-100/50 via-white to-blue-100/50 rounded-3xl p-12 md:p-16 shadow-lg shadow-purple-500/5 border border-purple-200/20 backdrop-blur-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <motion.div 
              variants={featureVariants}
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
              className="feature-card bg-white/80 rounded-xl p-8 transition-all duration-300 shadow-lg shadow-purple-500/5 hover:shadow-purple-500/10 border border-purple-200/20 backdrop-blur-sm"
            >
              <div className="bg-gradient-to-br from-purple-500 to-purple-700 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Zap size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-display font-bold mb-4 text-gray-800">Streamline your <span className="bg-gradient-to-r from-purple-600 to-purple-900 bg-clip-text text-transparent">work</span></h3>
              <p className="text-gray-600 font-display">
                Efficiency starts here. Streamline your fieldwork to automate data collection, standardization, flux analysis and test of details.
              </p>
            </motion.div>
            
            {/* Feature 2 */}
            <motion.div 
              variants={featureVariants}
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
              className="feature-card bg-white/80 rounded-xl p-8 transition-all duration-300 shadow-lg shadow-purple-500/5 hover:shadow-purple-500/10 border border-purple-200/20 backdrop-blur-sm"
            >
              <div className="bg-gradient-to-br from-purple-500 to-purple-700 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Workflow size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-display font-bold mb-4 text-gray-800">Works with your <span className="bg-gradient-to-r from-purple-600 to-purple-900 bg-clip-text text-transparent">tools</span></h3>
              <p className="text-gray-600 font-display">
                Integrate quickly and directly with your tools you already love. It's as easy as 1, 2, 3.
              </p>
            </motion.div>
            
            {/* Feature 3 */}
            <motion.div 
              variants={featureVariants}
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
              className="feature-card bg-white/80 rounded-xl p-8 transition-all duration-300 shadow-lg shadow-purple-500/5 hover:shadow-purple-500/10 border border-purple-200/20 backdrop-blur-sm"
            >
              <div className="bg-gradient-to-br from-purple-500 to-purple-700 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Clock size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-display font-bold mb-4 text-gray-800">Save <span className="bg-gradient-to-r from-purple-600 to-purple-900 bg-clip-text text-transparent">hours</span> every week</h3>
              <p className="text-gray-600 font-display">
                Unlock more time for real work. Save hours every week with agents and focus on value added outcomes.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
