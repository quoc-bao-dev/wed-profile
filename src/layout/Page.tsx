import { PropsWithChildren } from 'react';

const Page = ({ children }: PropsWithChildren) => {
    return <div className="relative bg-slate-50 min-h-screen">{children}</div>;
};

export default Page;
