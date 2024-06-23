import '@mantine/carousel/styles.css';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { signify } from 'react-signify';

const c = signify(0);
const App = () => {
    return (
        <MantineProvider>
            <RouterProvider router={router} />
        </MantineProvider>
    );
};

export default App;
