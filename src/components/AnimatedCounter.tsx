import { animate, motion, useMotionValue, useTransform } from 'motion/react';
import { useEffect } from 'react';

export default function HTMLContent({ value }: { value: number }) {
    const count = useMotionValue(0);
    
    const rounded = useTransform(() => Math.round(count.get()));

    useEffect(() => {
        const controls = animate(count, value, { duration: 0.8 });
        return () => controls.stop();
    }, []);

    return <motion.div>{rounded}</motion.div>;
}
