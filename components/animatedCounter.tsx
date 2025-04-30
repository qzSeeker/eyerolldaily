import { animate, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedCounter ({ from, to, duration = 5, className = "" }) {
    const count = useMotionValue(from);
    const rounded = useTransform(count, (value) => Math.floor(value));
    const [displayValue, setDisplayValue] = useState(from);
    
    useEffect(() => {
        const controls = animate(count, to, {
        duration,
        repeat: Infinity,
        repeatType: "reverse",
        onUpdate: (latest) => {
            setDisplayValue(Math.floor(latest));
        }
        });
        
        return () => controls.stop();
    }, [count, to, duration]);
    
    return <span className={className}>{displayValue}</span>;
};