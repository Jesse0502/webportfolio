"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Explosion {
  id: number;
  x: number;
  y: number;
}

export function MouseFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const [explosions, setExplosions] = useState<Explosion[]>([]);
  const explosionIdRef = useRef(0);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsMoving(false);
      }, 100);
    };

    const handleClick = (e: MouseEvent) => {
      const newExplosion: Explosion = {
        id: explosionIdRef.current++,
        x: e.clientX,
        y: e.clientY,
      };

      setExplosions(prev => [...prev, newExplosion]);

      // Remove explosion after animation
      setTimeout(() => {
        setExplosions(prev => prev.filter(exp => exp.id !== newExplosion.id));
      }, 800);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      {/* Outer glow - Made bigger */}
      <motion.div
        className="mouse-follower-outer"
        animate={{
          x: mousePosition.x - 32,
          y: mousePosition.y - 32,
          opacity: isMoving ? 0.4 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          mass: 0.6,
        }}
      />

      {/* Inner dot - Made bigger */}
      <motion.div
        className="mouse-follower-inner"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          opacity: isMoving ? 0.8 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 600,
          damping: 30,
          mass: 0.4,
        }}
      />

      {/* Click explosions */}
      <AnimatePresence>
        {explosions.map((explosion) => (
          <motion.div
            key={explosion.id}
            className="mouse-explosion-container"
            style={{
              left: explosion.x,
              top: explosion.y,
            }}
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 1, opacity: 0 }}
            exit={{ scale: 1.5, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Create explosion particles */}
            {Array.from({ length: 20 }, (_, i) => {
              // Add randomness to angles and distances for more natural explosion
              const baseAngle = (i / 20) * Math.PI * 2;
              const angleVariation = (Math.random() - 0.5) * 0.8; // Random angle variation
              const angle = baseAngle + angleVariation;

              const distance = 60 + Math.random() * 40; // Random distance between 60-100px
              const delay = Math.random() * 0.1; // Random delay up to 100ms

              return (
                <motion.div
                  key={i}
                  className="mouse-explosion-particle"
                  initial={{
                    x: 0,
                    y: 0,
                    scale: 0,
                    opacity: 1,
                  }}
                  animate={{
                    x: Math.cos(angle) * distance,
                    y: Math.sin(angle) * distance,
                    scale: [0, 1.2, 0.3],
                    opacity: [1, 0.8, 0],
                  }}
                  transition={{
                    duration: 0.6 + Math.random() * 0.3, // Random duration 0.6-0.9s
                    ease: "easeOut",
                    delay: delay,
                  }}
                />
              );
            })}
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  );
}

