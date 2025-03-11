import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface GetStartedButtonProps {
  href?: string;
}

const GetStartedButton = ({ href = "#contact" }: GetStartedButtonProps) => {
  return (
    <motion.a 
      href={href}
      className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-900 hover:from-purple-700 hover:to-purple-900 text-white rounded-xl font-display text-lg inline-flex items-center justify-center gap-2 group shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all duration-300"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      Get started 
      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
    </motion.a>
  );
};

export default GetStartedButton; 