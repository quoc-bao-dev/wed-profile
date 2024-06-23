import { PropsWithChildren } from 'react';
import Header from '../components/Header';
import ChangePage from './ChangePage';
import Page from './Page';

const DefaultLayout = ({ children, position = 'fixed' }: PropsWithChildren & { position?: 'fixed' | 'sticky' }) => {
    return (
        <Page>
            <div className={` w-full top-0 z-20 ${position}`}>
                <Header />
            </div>
            <ChangePage>{children}</ChangePage>
        </Page>
    );
};

export default DefaultLayout;
