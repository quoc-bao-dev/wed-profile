import ChangePage from '../layout/ChangePage';
import DefaultLayout from '../layout/DefaultLayout';
import Index from '../pages';
import About from '../pages/about';
import Contact from '../pages/contact';
import Home from '../pages/home';
import Portfolio from '../pages/portfolio';
import QAndA from '../pages/qna';

export const routes = [
    {
        path: '/',
        element: <Index />,
        children: [
            {
                path: '',
                element: (
                    <DefaultLayout position="sticky">
                        <Home />
                    </DefaultLayout>
                ),
            },
            {
                path: 'about',
                element: (
                    <DefaultLayout position="fixed">
                        <About />
                    </DefaultLayout>
                ),
            },
            {
                path: 'contact',
                element: (
                    <DefaultLayout position="sticky">
                        <Contact />
                    </DefaultLayout>
                ),
            },
            {
                path: 'portfolio',
                element: (
                    <DefaultLayout position="sticky">
                        <Portfolio />
                    </DefaultLayout>
                ),
            },
            {
                path: 'qna',
                element: (
                    <DefaultLayout position="sticky">
                        <ChangePage>
                            <QAndA />
                        </ChangePage>
                    </DefaultLayout>
                ),
            },
        ],
    },
];
