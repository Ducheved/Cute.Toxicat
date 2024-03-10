import { createSignal, createEffect, onCleanup } from 'solid-js';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import MobileMenu from './components/MobileMenu';

import me from './contents/me';
import social from './contents/social';
import example from './contents/example';
import health from './contents/health';
import github from './contents/github';

import { FaSolidShieldCat } from 'solid-icons/fa';
import { VsDebugConsole } from 'solid-icons/vs';
import { VsGithubAlt } from 'solid-icons/vs';
import { RiHealthMedicalPulseFill } from 'solid-icons/ri';
import { BiSolidCat } from 'solid-icons/bi';
import { IoShareSocial } from 'solid-icons/io';

function App() {
  const buttons = [
    { name: 'Me', icon: <BiSolidCat /> },
    { name: 'Social', icon: <IoShareSocial /> },
    { name: 'Button', icon: <VsDebugConsole /> },
    { name: 'Health', icon: <RiHealthMedicalPulseFill /> },
    { name: 'GitHub', icon: <VsGithubAlt /> },
  ];
  const contents = [me, social, example, health, github];
  const initialIndex = window.location.hash
    ? parseInt(window.location.hash.slice(1)) - 1
    : 0;
  let [activeContentIndex, setActiveContentIndex] = createSignal(initialIndex);
  let [activeContent, setActiveContent] = createSignal();

  createEffect(() => {
    window.location.hash = `#${activeContentIndex() + 1}`;
    setActiveContent(contents[activeContentIndex()]);
  });

  const handleHashChange = () => {
    const newIndex = window.location.hash
      ? parseInt(window.location.hash.slice(1)) - 1
      : 0;
    setActiveContentIndex(newIndex);
  };
  window.addEventListener('hashchange', handleHashChange);
  onCleanup(() => {
    window.removeEventListener('hashchange', handleHashChange);
  });

  return (
    <div class="shadow-2xl rounded-2xl container mx-auto w-full prose text-white dark:prose-invert">
      <Header
        setActiveContentIndex={setActiveContentIndex}
        activeIndex={activeContentIndex}
        buttons={buttons}
      />
      <MobileMenu
        class="fixed bottom-0 left-0"
        setActiveContentIndex={setActiveContentIndex}
        activeIndex={activeContentIndex}
        buttons={buttons}
      />
      <Content activeContent={activeContent} />
      <Footer />
    </div>
  );
}

export default App;
