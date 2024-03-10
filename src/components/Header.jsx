import { createSignal, createEffect, For } from 'solid-js';
import { FaSolidShieldCat } from 'solid-icons/fa';
import { VsDebugConsole } from 'solid-icons/vs';
import { VsGithubAlt } from 'solid-icons/vs';
import { RiHealthMedicalPulseFill } from 'solid-icons/ri';
import { BiSolidCat } from 'solid-icons/bi';
import { IoShareSocial } from 'solid-icons/io';

function Header(props) {
  const [active, setActive] = createSignal();

  createEffect(() => {
    setActive(props.activeIndex());
  });

  return (
    <header class="bg-[rgba(255,255,255,0.1)] backdrop-filter backdrop-blur-lg p-4 rounded-t-xl text-white dark:text-gray-200">
      <div class="flex justify-between">
        <div class="flex justify-normal">
          <FaSolidShieldCat class="text-black dark:text-white" size={48} />
          <h1 class="text-4xl pt-1 ml-2 font-bold"> ToxiCAT</h1>
        </div>
      </div>
      <div
        class={`hidden sm:block sm:static sm:translate-y-0 sm:bg-transparent sm:p-0 sm:flex sm:space-x-4`}
      >
        <For each={props.buttons}>
          {(button, index) => (
            <button
              onClick={() => {
                props.setActiveContentIndex(index);
              }}
              classList={{
                active: index === props.activeIndex(),
                'bg-green-500 dark:bg-green-400 text-white dark:text-gray-900 px-2 sm:px-4 py-2 rounded transform transition-transform duration-150 ease-in-out': true,
                'hover:bg-green-400 dark:hover:bg-green-300': true,
                'active:bg-green-600 dark:active:bg-green-500 active:scale-95': true,
                'bg-green-700 dark:bg-green-600': index === active(),
              }}
            >
              <div class="flex items-center space-x-2">
                {button.icon}
                <span>{button.name}</span>
              </div>
            </button>
          )}
        </For>
      </div>
    </header>
  );
}

export default Header;
