import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-600 text-sm">
            © 2024 Kashf Siddiqui
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
