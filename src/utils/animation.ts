export const navigation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

export const navigationItem = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
};

export const lineAnim = {
  initial: { x: 'calc(0% - 8px)' },
  hovered: { x: 'calc(100% + 8px)' },
};

export const buttonAnim = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: { type: 'spring', stiffness: 400, damping: 25 },
} as const;
