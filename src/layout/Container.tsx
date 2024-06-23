import { PropsWithChildren } from 'react';

const Container = ({ children }: PropsWithChildren) => {
    return <div className="px-4 md:w-[1200px] md:m-auto">{children}</div>;
};

export default Container;
