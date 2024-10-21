import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';

const getAppName = async () => {
    try {
        const response = await fetch('/api/title');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching app name:', error);
        return 'Laravel';
    }
};

const initApp = async () => {
    const appName = await getAppName();

    createInertiaApp({
        title: (title) => `${title} ${appName}`,
        resolve: (name) =>
            resolvePageComponent(
                `./Pages/${name}.jsx`,
                import.meta.glob('./Pages/**/*.jsx'),
            ),
        setup({ el, App, props }) {
            const root = createRoot(el);
            root.render(<App {...props} />);
        },
        progress: {
            color: '#4B5563',
        },
    });
};

initApp();
