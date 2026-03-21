import { motion } from 'motion/react';
import { lineAnim } from '../utils/animation';

export default function ButtonLine() {
  return (
    <motion.div
      className="absolute inset-0 z-20"
      initial="initial"
      whileHover="hovered">
      <motion.div
        className="absolute inset-0 z-10 border-l-2"
        variants={lineAnim}
      />
    </motion.div>
  );
}
