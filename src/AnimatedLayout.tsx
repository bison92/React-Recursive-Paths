import { AnimatePresence, motion } from "framer-motion";
const pageVariants = {
    initial: {
        x: 300,
        opacity: 0
    },
    in: {
        x: 0,
        opacity: 1
    },
    out: {
        x: -300,
        opacity: 0
    }
};

const pageTransition = {
    duration: 0.2
};

interface AnimatedLayoutProps extends React.PropsWithChildren {
    location: string;
}

const AnimatedLayout = (props: AnimatedLayoutProps) => {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={props.location}
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
            >
                {props.children}
            </motion.div>
        </AnimatePresence>
    );
};

export default AnimatedLayout