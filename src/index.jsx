/* @refresh reload */
import { render } from 'solid-js/web';
import { isDarkMode } from './store';

import './index.css';
import App from './App';

if (isDarkMode()) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

const root = document.getElementById('root');

document.body.className = `min-h-screen
                            bg-gradient-to-tl 
                            from-radioactive-green 
                            via-radioactive-yellow 
                            to-radioactive-orange 
                            dark:from-neon-green 
                            dark:via-neon-yellow 
                            dark:to-neon-orange  

                            flex items-start 
                            justify-center`;

render(() => <App />, root);
