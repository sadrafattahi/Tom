// import './bootstrap';
import '../css/app.css';
// import '../css/grid.css';
// import '../css/styles.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react';
import { render } from 'react-dom';
import { createInertiaApp } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ThemeProvider } from "@mui/material/styles";
import theme from './theme'
import LangState from './context/langContext/LangState';



const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';
createInertiaApp({
    // title: (title) => `${title} - ${appName}`,
    title: (title) => `${title}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        return render(
            <ThemeProvider theme={theme}>
                <LangState>
                    <App {...props} />
                </LangState>
            </ThemeProvider>
            , el);
    },
});

InertiaProgress.init({ color: '#4B5563' });
