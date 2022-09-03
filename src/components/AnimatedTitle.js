import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
export default function AnimatedTitle({children}, props) {
    const location = useLocation();
    console.log(location.pathname)
    const titleVariants = {
        initial: {
            opacity: 0,
            x: '-200vw',
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.7,
                ease: "easeInOut",
            }
        },
        exit: {
            opacity: 0,
            x: '200vw', 
            transition: {
                duration: 0.7,
                ease: "easeIn"
            
        }
    }
}
    return <>
    <AnimatePresence exitBeforeEnter>
        <motion.div
        
        variants = {titleVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        >
            {children}
        </motion.div>
    </AnimatePresence>
    </>
}