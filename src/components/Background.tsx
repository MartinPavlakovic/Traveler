import BackgroundImage from '../assets/background.jpg';
import { motion } from 'motion/react';

export default function Background() {
  return (
    <motion.img
      initial={{ filter: 'blur(10px)', scale: 1.1 }}
      animate={{ filter: 'blur(0px)', scale: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      src={BackgroundImage}
      alt="BackgroundImage"
      className="absolute w-full h-full object-cover -z-1"
    />
  );
}
