import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const Index = () => {
    useEffect(() => {
        // fisrtRenderSignal.set(false);
    }, []);

    return (
        <AnimatePresence>
            <Outlet />
        </AnimatePresence>
    );
};

export default Index;
