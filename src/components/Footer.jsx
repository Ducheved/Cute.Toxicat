import { isDarkMode, setIsDarkMode } from '../store';

function Footer() {
  const toggleDarkMode = () => {
    const newMode = !isDarkMode();
    setIsDarkMode(newMode);
    localStorage.setItem('darkMode', newMode.toString());
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <footer class="bg-[rgba(255,255,255,0.1)] backdrop-filter backdrop-blur-lg p-10 rounded-b-xl text-white">
      <h4>Site is built with Solid.js and TailwindCSS</h4>
      <button
        class="bg-orange-500 dark:bg-red-900 text-sm text-white dark:text-gray-200 px-4 py-2 rounded"
        onClick={toggleDarkMode}
      >
        {isDarkMode() ? 'Hehe mode' : 'Not hehe mode'}
      </button>
    </footer>
  );
}

export default Footer;
