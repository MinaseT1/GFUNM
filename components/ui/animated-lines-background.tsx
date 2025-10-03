'use client';

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollLine = () => {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Transform scroll progress to line position and effects
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.3, 1, 1, 0.3]);
  const glowIntensity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.8, 0.2]);
  
  // Moving dot position
  const dotTop = useTransform(scrollYProgress, [0, 1], ['64px', 'calc(100vh - 80px)']);
  
  // Particle positions
  const particle1Top = useTransform(scrollYProgress, [0, 1], ['84px', 'calc(100vh - 100px)']);
  const particle2Top = useTransform(scrollYProgress, [0, 1], ['104px', 'calc(100vh - 120px)']);
  const particle3Top = useTransform(scrollYProgress, [0, 1], ['124px', 'calc(100vh - 140px)']);
  
  // Particle opacity
  const particleOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 0.6, 0.6, 0]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed right-8 top-0 bottom-0 z-10 pointer-events-none">
      {/* Background track */}
      <div className="absolute right-0 top-16 bottom-16 w-0.5 bg-gradient-to-b from-transparent via-blue-200/30 to-transparent" />
      
      {/* Animated progress line */}
      <motion.div
        className="absolute right-0 top-16 w-0.5 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 origin-top"
        style={{
          height: lineHeight,
          opacity: opacity,
          boxShadow: `0 0 ${glowIntensity}px rgba(59, 130, 246, 0.6)`,
        }}
      />
      
      {/* Moving dot indicator */}
      <motion.div
        className="absolute right-[-2px] w-2 h-2 bg-blue-500 rounded-full"
        style={{
          top: dotTop,
          opacity: opacity,
          boxShadow: `0 0 ${glowIntensity}px rgba(59, 130, 246, 0.8)`,
        }}
      />
      
      {/* Subtle particles that follow the line */}
      <motion.div
        className="absolute right-[-1px] w-1 h-1 bg-blue-400/60 rounded-full"
        style={{
          top: particle1Top,
          opacity: particleOpacity,
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 0,
        }}
      />
      <motion.div
        className="absolute right-[-1px] w-1 h-1 bg-blue-400/60 rounded-full"
        style={{
          top: particle2Top,
          opacity: particleOpacity,
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 0.3,
        }}
      />
      <motion.div
        className="absolute right-[-1px] w-1 h-1 bg-blue-400/60 rounded-full"
        style={{
          top: particle3Top,
          opacity: particleOpacity,
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 0.6,
        }}
      />
    </div>
  );
};

export default ScrollLine;