import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export function InteractiveTiltCard({
    image = { src: "https://framerusercontent.com/images/YnBYRlxvxFzRXG9rOYVJdkGBg.jpg", alt: "Blue flower", priority: false },
    tiltFactor = 15,
    perspective = 1000,
    borderRadius = 12,
    backgroundColor = "#FFFFFF",
    shadowColor = "rgba(0, 0, 0, 0.2)",
    shadowIntensity = 0.5,
    transitionDuration = 0.2,
    hoverScale = 1.05,
    glareEffect = true,
    glareIntensity = 0.5,
    glareSize = 80,
}) {
    const [isHovered, setIsHovered] = React.useState(false);
    const [tiltValues, setTiltValues] = React.useState({ x: 0, y: 0 });
    const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
    const cardRef = React.useRef<HTMLDivElement>(null);

    const handleMouseMove = React.useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            if (!cardRef.current || !isHovered) return;
            const rect = cardRef.current.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width - 0.5) * 100;
            const y = ((e.clientY - rect.top) / rect.height - 0.5) * 100;
            setMousePosition({ x, y });
            const tiltX = -(y / 50) * tiltFactor;
            const tiltY = (x / 50) * tiltFactor;
            setTiltValues({ x: tiltX, y: tiltY });
        },
        [isHovered, tiltFactor]
    );

    const handleMouseEnter = React.useCallback(() => setIsHovered(true), []);
    const handleMouseLeave = React.useCallback(() => {
        setIsHovered(false);
        setTiltValues({ x: 0, y: 0 });
    }, []);

    const glareX = mousePosition.x / 2 + 50;
    const glareY = mousePosition.y / 2 + 50;

    return (
        <motion.div ref={cardRef} style={{ position: "relative", width: "100%", height: "100%", perspective: `${perspective}px`, transformStyle: "preserve-3d", cursor: "pointer" }} animate={{ scale: isHovered ? hoverScale : 1 }} transition={{ duration: transitionDuration, ease: "easeOut" }} onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <motion.div style={{ position: "absolute", width: "100%", height: "100%", borderRadius: `${borderRadius}px`, overflow: "hidden", backgroundColor, transformStyle: "preserve-3d" }} animate={{ rotateX: tiltValues.x, rotateY: tiltValues.y, boxShadow: isHovered ? `0 25px 50px -12px rgba(0, 0, 0, ${shadowIntensity})` : `0 10px 30px -10px ${shadowColor}` }} transition={{ duration: transitionDuration, ease: "easeOut" }}>
                <Image 
                    src={image.src} 
                    alt={image.alt} 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    style={{ objectFit: "contain", zIndex: 1 }}
                    priority={image.priority || false}
                    {...(!image.priority && { loading: "lazy" })}
                    quality={85}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
                {glareEffect && (<motion.div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 2, background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, ${glareIntensity}) 0%, rgba(255, 255, 255, 0) ${glareSize}%)`, pointerEvents: "none" }} animate={{ opacity: isHovered ? 1 : 0 }} transition={{ duration: transitionDuration }}/>)}
            </motion.div>
        </motion.div>
    );
}