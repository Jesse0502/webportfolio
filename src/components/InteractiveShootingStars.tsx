"use client";

import { useEffect, useState, useRef } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  progress: number;
  delay: number;
  duration: number;
  exploding: boolean;
  explosionProgress: number;
}

export function InteractiveShootingStars() {
  const [stars, setStars] = useState<Star[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const animationFrameRef = useRef<number | undefined>(undefined);
  const lastTimeRef = useRef<number>(0);

  // Initialize stars
  useEffect(() => {
    const initialStars: Star[] = [
      { id: 1, x: 20, y: 15, progress: 0, delay: 0, duration: 4000, exploding: false, explosionProgress: 0 },
      { id: 2, x: 60, y: 35, progress: 0, delay: 2000, duration: 5000, exploding: false, explosionProgress: 0 },
      { id: 3, x: 30, y: 55, progress: 0, delay: 4000, duration: 4500, exploding: false, explosionProgress: 0 },
      { id: 4, x: 75, y: 75, progress: 0, delay: 6000, duration: 4800, exploding: false, explosionProgress: 0 },
      { id: 5, x: 85, y: 25, progress: 0, delay: 8000, duration: 4200, exploding: false, explosionProgress: 0 },
    ];
    setStars(initialStars);
  }, []);

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animation loop
  useEffect(() => {
    const animate = (currentTime: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = currentTime;
      const deltaTime = currentTime - lastTimeRef.current;
      lastTimeRef.current = currentTime;

      setStars((prevStars) =>
        prevStars.map((star) => {
          if (star.exploding) {
            // Handle explosion animation - Same duration as mouse click (800ms)
            const newExplosionProgress = star.explosionProgress + deltaTime / 800;
            if (newExplosionProgress >= 1) {
              // Reset star after explosion
              return {
                ...star,
                progress: 0,
                exploding: false,
                explosionProgress: 0,
              };
            }
            return {
              ...star,
              explosionProgress: newExplosionProgress,
            };
          }

          // Normal star animation
          const adjustedTime = currentTime - star.delay;
          if (adjustedTime < 0) return star;

          const newProgress = (adjustedTime % star.duration) / star.duration;

          // Calculate star position
          const startX = (star.x / 100) * window.innerWidth;
          const startY = (star.y / 100) * window.innerHeight;
          const currentX = startX - newProgress * 400;
          const currentY = startY + newProgress * 400;

          // Check collision with mouse (within 50px radius)
          const distance = Math.sqrt(
            Math.pow(currentX - mousePos.x, 2) + Math.pow(currentY - mousePos.y, 2)
          );

          if (distance < 50 && newProgress > 0.05 && newProgress < 0.85) {
            return {
              ...star,
              progress: newProgress,
              exploding: true,
              explosionProgress: 0,
            };
          }

          return {
            ...star,
            progress: newProgress,
          };
        })
      );

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [mousePos]);

  return (
    <div className="shooting-stars-interactive">
      {stars.map((star) => {
        if (star.exploding) {
          // Explosion particles - Same as mouse click animation
          const particles = 12;
          const explosionElements = [];
          for (let i = 0; i < particles; i++) {
            const angle = (i / particles) * Math.PI * 2;
            const distance = star.explosionProgress * 80; // Same 80px radius as mouse click
            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;
            const scale = 1 - star.explosionProgress * 0.5; // Scale down like mouse explosion
            const opacity = 1 - star.explosionProgress; // Fade out

            explosionElements.push(
              <div
                key={`${star.id}-particle-${i}`}
                className="mouse-explosion-particle" // Use same CSS class as mouse explosions
                style={{
                  left: `${star.x}%`,
                  top: `${star.y}%`,
                  transform: `translate(${x - star.progress * 400}px, ${y + star.progress * 400}px) scale(${scale})`,
                  opacity: opacity,
                }}
              />
            );
          }
          return explosionElements;
        }

        // Normal shooting star
        if (star.progress <= 0 || star.progress >= 1) return null;

        const opacity = star.progress < 0.1 
          ? star.progress / 0.1 * 0.4
          : star.progress > 0.85 
          ? (1 - star.progress) / 0.15 * 0.4
          : 0.4;

        const width = star.progress < 0.05 ? 0 : star.progress > 0.85 ? 0 : 40;

        return (
          <div
            key={star.id}
            className="shooting-star-interactive"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              transform: `translate(${-star.progress * 400}px, ${star.progress * 400}px) rotate(-45deg)`,
              opacity: opacity,
              width: `${width}px`,
            }}
          />
        );
      })}
    </div>
  );
}

