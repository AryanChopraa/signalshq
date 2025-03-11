import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import GetStartedButton from './GetStartedButton';

const Hero = () => {
  return (
    <section className="hero-gradient pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-12 leading-tight bg-gradient-to-r from-purple-600 to-purple-900 bg-clip-text text-transparent"
              >
                 Hyperscale your Audit firm with AI
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg md:text-xl font-display bg-gradient-to-r from-purple-600 to-purple-900 bg-clip-text text-transparent max-w-xl mb-8 leading-relaxed"
              >
                Scale your audit firm and grow your business with powerful AI tools that streamline workflows and ensure compliance.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <GetStartedButton />
              </motion.div>
            </motion.div>
          </div>

          <div className="md:w-1/2 relative">
            <div className="relative">
              <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-r from-purple-600/10 to-purple-900/5 rounded-full filter blur-3xl"></div>
              <motion.img 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                src="/uploads/heroimage.webp" 
                alt="Dashboard preview" 
                className="relative z-10 w-full md:max-w-md lg:max-w-lg mx-auto rounded-lg shadow-xl"
              />
              
              {/* Floating elements similar to CallToAction */}
              <motion.div 
                className="absolute -top-10 right-10 w-12 h-12 rounded-full bg-purple-600/30"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute bottom-20 -left-5 w-8 h-8 rounded-full bg-purple-900/30"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
