import { motion } from 'framer-motion';
import { useLocation } from "react-router-dom";

const homeWrapperVariants = {
    initial: {opacity: 0, x: 500},
    animate: {
        x: 0,
        opacity:1,
        transition: {
            duration: 0.7,
            type: "spring",
            bounce: 0,
            ease: 'easeInOut'
        }
    }, 
    exit: {
        x:'-300vh',
        transition: {
            ease: 'easeInOut'
        }
    }
}

export default function AnimatedPage({children}) {
    const location = useLocation();

    console.log(children)
    return <>
        <motion.div
            key={location.pathname.key}
             variants={homeWrapperVariants}
             initial="initial"
             animate="animate"
             transition="transition"
             exit='exit'
        >
            {children}
        </motion.div>
    </>
}   