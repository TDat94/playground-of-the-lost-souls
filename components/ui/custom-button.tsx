'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface CustomButtonProps extends React.ComponentProps<typeof Button> {
  children: React.ReactNode;
}

export const CustomButton = React.forwardRef<
  HTMLButtonElement,
  CustomButtonProps
>(({ className, children, ...props }, ref) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 1000, damping: 20 }}
    >
      <Button
        ref={ref}
        className={cn(
          'group/button inline-flex shrink-0 items-center justify-center gap-2 rounded-md border border-transparent bg-[var(--deep-indigo)] px-2.5 py-2.5 text-sm font-medium whitespace-nowrap text-white transition-all outline-none select-none hover:bg-[var(--deep-indigo)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4',
          className,
        )}
        {...props}
      >
        {children}
      </Button>
    </motion.div>
  );
});

CustomButton.displayName = 'CustomButton';
