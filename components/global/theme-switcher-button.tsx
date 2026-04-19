'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function ThemeSwitcherButton() {
  const [isDark, setIsDark] = useState(false);

  const handleClick = () => {
    setIsDark(!isDark);
  };

  return (
    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }}>
      <Button
        variant="ghost"
        size="icon"
        onClick={handleClick}
        className="rounded-lg"
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        <span className={`nf text-lg ${isDark ? 'nf-fa-moon' : 'nf-fa-sun'}`} />
      </Button>
    </motion.div>
  );
}
