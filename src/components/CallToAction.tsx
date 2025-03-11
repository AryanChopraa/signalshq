
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import GetStartedButton from './GetStartedButton';
const CallToAction = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-purple-100/80 to-white" />
      
      {/* Floating elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20">
          <Sparkles className="w-8 h-8 text-purple-400/30 animate-float" />
        </div>
        <div className="absolute bottom-20 right-20">
          <Sparkles className="w-6 h-6 text-purple-400/30 animate-float" style={{ animationDelay: '1s' }} />
        </div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-gray-700 mb-10">
            Hyperscale your audit firm and grow your business
          </p>
          <GetStartedButton />
          

        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
