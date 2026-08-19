'use client';

import { motion } from 'framer-motion';
import { Infinity as InfinityIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function BreathingBlob({ className }) {
  return (
    // Outer wrapper: breathing scale animation
    <motion.div
      className={cn(
        "relative rounded-full pointer-events-none select-none z-10 flex items-center justify-center shadow-lg shrink-0",
        "w-[0.9em] h-[0.9em]",
        className
      )}
      animate={{ scale: [0.95, 1.05, 0.95] }}
      transition={{
        duration: 5.5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {/* Inner: animated gradient color cycling */}
      <motion.div
        className="absolute inset-0 w-full h-full rounded-full"
        animate={{
          background: [
            'linear-gradient(135deg, #07A7E1 0%, #093cad 60%, #3730a3 100%)',
            'linear-gradient(225deg, #3730a3 0%, #093cad 50%, #07A7E1 100%)',
            'linear-gradient(315deg, #07A7E1 0%, #4338ca 40%, #093cad 100%)',
            'linear-gradient(45deg,  #093cad 0%, #07A7E1 50%, #3730a3 100%)',
            'linear-gradient(135deg, #07A7E1 0%, #093cad 60%, #3730a3 100%)',
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Infinity Icon animating */}
      <motion.div
        className="relative z-10 text-white/95 drop-shadow-md flex items-center justify-center w-full h-full"
        animate={{ rotate: 360 }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <InfinityIcon strokeWidth={3} className="rotate-90 w-[55%] h-[55%]" />
      </motion.div>
    </motion.div>
  );
}
