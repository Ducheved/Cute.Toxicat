import { createSignal } from 'solid-js';

const initialDarkMode = localStorage.getItem('darkMode') === 'true';
export const [isDarkMode, setIsDarkMode] = createSignal(initialDarkMode);
