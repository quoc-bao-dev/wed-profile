import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';
// import { fisrtRenderSignal } from '../pages';
const pageVariants = {
    initial: {
        x: '-100%',
        opacity: 0,
    },
    in: {
        x: 0,
        opacity: 1,
    },
    out: {
        x: '100%',
        opacity: 0,
    },
};
const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5,
};

const ChangePage = ({ children }: PropsWithChildren & { shouldAnimate?: boolean }) => {
    return (
        <motion.div
            variants={pageVariants}
            // initial={fisrtRenderSignal.value ? false : 'initial'}
            animate={'in'}
            exit={'out'}
            transition={pageTransition}
        >
            {children}
        </motion.div>
    );
};

export default ChangePage;
