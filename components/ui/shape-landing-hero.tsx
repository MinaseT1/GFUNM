"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Circle } from "lucide-react";
import { useEffect, useState, memo, useMemo } from "react";
import { cn } from "@/lib/utils";
import RotatingEarth from "@/components/wireframe-dotted-globe";


const ElegantShape = memo(function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-white/[0.08]",
}: {
    className?: string;
    delay?: number;
    width?: number;
    height?: number;
    rotate?: number;
    gradient?: string;
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -150,
                rotate: rotate - 15,
            }}
            animate={{
                opacity: 1,
                y: 0,
                rotate: rotate,
            }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.2 },
            }}
            className={cn("absolute", className)}
        >
            <motion.div
                animate={{
                    y: [0, 15, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
                style={{
                    width,
                    height,
                }}
                className="relative"
            >
                <div
                    className={cn(
                        "absolute inset-0 rounded-full",
                        "bg-gradient-to-r to-transparent",
                        gradient,
                        "backdrop-blur-[2px] border-2 border-blue-200/[0.3]",
                        "shadow-[0_8px_32px_0_rgba(59,130,246,0.15)]",
                        "after:absolute after:inset-0 after:rounded-full",
                        "after:bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"
                    )}
                />
            </motion.div>
        </motion.div>
    );
});

const HeroGeometric = memo(function HeroGeometric({
    badge = "Design Collective",
    title1 = "Elevate Your Digital Vision",
    title2 = "Crafting Exceptional Websites",
}: {
    badge?: string;
    title1?: string;
    title2?: string;
}) {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
        },
    };

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white px-4 sm:px-6 lg:px-8">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/[0.08] via-transparent to-blue-600/[0.08] blur-3xl" />

            <div className="absolute inset-0 overflow-hidden">

                <ElegantShape
                    delay={0.3}
                    width={300}
                    height={80}
                    rotate={12}
                    gradient="from-blue-400/[0.15]"
                    className="left-[-15%] sm:left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
                />

                <ElegantShape
                    delay={0.5}
                    width={250}
                    height={70}
                    rotate={-15}
                    gradient="from-blue-500/[0.15]"
                    className="right-[-10%] sm:right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
                />

                <ElegantShape
                    delay={0.4}
                    width={200}
                    height={50}
                    rotate={-8}
                    gradient="from-blue-300/[0.15]"
                    className="left-[0%] sm:left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
                />

                <ElegantShape
                    delay={0.6}
                    width={120}
                    height={35}
                    rotate={20}
                    gradient="from-blue-600/[0.15]"
                    className="right-[10%] sm:right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
                />

                <ElegantShape
                    delay={0.7}
                    width={100}
                    height={25}
                    rotate={-25}
                    gradient="from-blue-200/[0.15]"
                    className="left-[15%] sm:left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
                />
            </div>

            {/* Globe Background - Hidden on mobile, visible on large screens */}
            <div className="hidden lg:block absolute inset-0 z-0">
                <div className="flex items-center justify-center min-h-screen">
                    <motion.div
                        custom={0}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            duration: 1.2,
                            delay: 0.3,
                            ease: "easeOut",
                        }}
                        className="flex justify-center items-center"
                    >
                        <RotatingEarth 
                            width={800} 
                            height={800} 
                            className="w-[600px] h-[600px] xl:w-[800px] xl:h-[800px] opacity-40"
                            badge=""
                            title1=""
                            title2=""
                            description=""
                        />
                    </motion.div>
                </div>
            </div>

            {/* Text Overlay for Large Screens */}
            <div className="hidden lg:block relative z-20 container mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
                <div className="flex items-center justify-center min-h-screen">
                    <motion.div
                        custom={0}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            duration: 1.2,
                            delay: 0.6,
                            ease: "easeOut",
                        }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        {/* Badge */}
                        <motion.div
                            variants={fadeUpVariants}
                            transition={{ delay: 0.7 }}
                            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8"
                        >
                            <span className="text-blue-600 font-semibold text-sm tracking-wide uppercase">
                                {badge}
                            </span>
                        </motion.div>

                        {/* Main Titles */}
                        <motion.h1
                            variants={fadeUpVariants}
                            transition={{ delay: 0.8 }}
                            className="text-6xl xl:text-8xl font-bold text-gray-800 mb-4 leading-tight"
                        >
                            {title1}
                        </motion.h1>
                        
                        <motion.h2
                            variants={fadeUpVariants}
                            transition={{ delay: 0.9 }}
                            className="text-6xl xl:text-8xl font-bold text-blue-500 mb-8 leading-tight"
                        >
                            {title2}
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            variants={fadeUpVariants}
                            transition={{ delay: 1.0 }}
                            className="text-xl xl:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
                        >
                            Bringing the Gospel to unreached nations through inspiring books and transformative ministry.
                        </motion.p>
                    </motion.div>
                </div>
            </div>

            {/* Mobile Globe Background */}
            <div className="lg:hidden absolute inset-0 z-0">
                <div className="flex items-center justify-center min-h-screen">
                    <motion.div
                        custom={0}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            duration: 1.2,
                            delay: 0.3,
                            ease: "easeOut",
                        }}
                        className="flex justify-center items-center"
                    >
                        <RotatingEarth 
                            width={400} 
                            height={400} 
                            className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] opacity-30"
                            badge=""
                            title1=""
                            title2=""
                            description=""
                        />
                    </motion.div>
                </div>
            </div>

            {/* Mobile Text Overlay */}
            <div className="lg:hidden relative z-20 container mx-auto px-4 sm:px-6 md:px-8">
                <div className="flex items-center justify-center min-h-screen py-8">
                    <motion.div
                        custom={0}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            duration: 1.2,
                            delay: 0.6,
                            ease: "easeOut",
                        }}
                        className="text-center max-w-sm sm:max-w-md md:max-w-lg mx-auto"
                    >
                        {/* Badge */}
                        <motion.div
                            variants={fadeUpVariants}
                            transition={{ delay: 0.7 }}
                            className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
                        >
                            <span className="text-blue-600 font-semibold text-xs sm:text-sm tracking-wide uppercase">
                                {badge}
                            </span>
                        </motion.div>

                        {/* Main Titles */}
                        <motion.h1
                            variants={fadeUpVariants}
                            transition={{ delay: 0.8 }}
                            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3 leading-tight"
                        >
                            {title1}
                        </motion.h1>
                        
                        <motion.h2
                            variants={fadeUpVariants}
                            transition={{ delay: 0.9 }}
                            className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-500 mb-6 leading-tight"
                        >
                            {title2}
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            variants={fadeUpVariants}
                            transition={{ delay: 1.0 }}
                            className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed px-2"
                        >
                            Bringing the Gospel to unreached nations through inspiring books and transformative ministry.
                        </motion.p>
                    </motion.div>
                </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/80 pointer-events-none" />
        </div>
    );
});

export { HeroGeometric }
