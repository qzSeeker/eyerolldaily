"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Loading({ 
    autoHide = true, 
    duration = 5000,
    primaryColor = "bg-black",
    backgroundColor = "bg-yellow-400",
    textColor = "text-black"
}) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Hide loader after specified time if autoHide is true
        if (autoHide) {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, duration);
        
        return () => clearTimeout(timer);
        }
    }, [autoHide, duration]);
    
    // Animation variants for container
    const containerVariants = {
        animate: {
        transition: {
            staggerChildren: 0.25,
            repeat: Infinity,
            repeatDelay: 0.2
        }
        }
    };
    
    // Animation variants for boxes
    const boxVariants = {
        initial: { opacity: 0.2, scale: 0.8, rotate: 0 },
        animate: {
        opacity: 1,
        scale: 1,
        rotate: 360,
        transition: {
            duration: 0.6,
            ease: "easeInOut",
            yoyo: Infinity,
            repeatDelay: 0.5
        }
        }
    };
    
    if (!isVisible) return null;

return (
    <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${backgroundColor} bg-opacity-90 z-50`}>
        <div className="p-8 rounded-lg backdrop-blur-sm">
            <div className="flex flex-col items-center">
            <motion.div
                className="flex flex-wrap justify-center w-40"
                variants={containerVariants}
                initial="initial"
                animate="animate"
            >
                {[1, 2, 3, 4].map((index) => (
                <motion.div
                    key={index}
                    className={`w-14 h-14 m-2 ${primaryColor} rounded-none shadow-lg`}
                    variants={boxVariants}
                    custom={index}
                />
                ))}
            </motion.div>
            
            <div className="mt-6 flex flex-col items-center">
                <p className={`text-2xl font-bold ${textColor} font-mono tracking-wider`}>eyerolldaily</p>
                <p className={`text-sm ${textColor} opacity-70 mt-1`}>loading memes...</p>
            </div>
            </div>
        </div>
    </div>
    );
}