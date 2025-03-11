import { motion } from 'framer-motion';

const Efficiency = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float"></div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float" style={{ animationDelay: '1s' }}></div>
              <img 
                src="/uploads/feature1.avif" 
                alt="Smart Automation" 
                className="relative z-10 rounded-xl shadow-lg object-cover w-full max-w-lg mx-auto"
              />
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:w-1/2"
          >
            <div className="section-title">Smart Automation</div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Boost the efficiency of your audit staff</h2>
            <p className="text-lg text-gray-700 mb-8">
              Say goodbye to manual vouching and test of details, and let your staff focus on real risk identification in forming a true and fair view.
            </p>
            <motion.ul 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15 }
                }
              }}
              className="space-y-4"
            >
              {[
                "Automated vouching and documentation processing",
                "Smart risk assessment and identification",
                "Streamlined test of details automation",
                "Enhanced focus on critical audit judgments"
              ].map((point, index) => (
                <motion.li 
                  key={index} 
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-700">{point}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Efficiency;
