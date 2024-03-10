import { createSignal, For } from 'solid-js';
import { ImMenu } from 'solid-icons/im';

function MobileMenu(props) {
  const [isOpen, setIsOpen] = createSignal(false);

  const toggleMenu = () => {
    const open = !isOpen();
    setIsOpen(open);
    document.body.style.overflow = open ? 'hidden' : '';
  };

  return (
    <>
      {isOpen() && (
        <div
          class="fixed inset-0 bg-black opacity-50 z-10"
          onClick={toggleMenu}
        />
      )}
      <div class="sm:hidden z-40 fixed bottom-4 right-4 flex flex-col-reverse items-center">
        <button
          class="z-30 bg-[rgba(255,255,255,0.1)] backdrop-filter backdrop-blur-lg p-4 rounded-xl text-white bg-red-500 text-white p-2 rounded"
          onClick={toggleMenu}
        >
          <ImMenu />
        </button>
        <div
          class={`z-20 flex bg-[rgba(55,255,255,0.1)] pb-20 shadow-2xl backdrop-filter backdrop-blur-lg p-4 rounded-t-xl text-white dark:text-gray-200 flex-col-reverse items-center transform transition-transform duration-200 ease-in-out ${isOpen() ? 'translate-y-[4rem]' : 'translate-y-[30rem]'}`}
        >
          <For each={props.buttons}>
            {(button, index) => (
              <button
                onClick={() => {
                  props.setActiveContentIndex(index);
                  setIsOpen(false);
                  document.body.style.overflow = '';
                }}
                classList={{
                  active: index === props.activeIndex(),
                  'w-full bg-green-500 mt-2 mb-2 dark:bg-green-400 text-white dark:text-gray-900 px-2 sm:px-4 py-2 rounded transform transition-transform duration-150 ease-in-out': true,
                  'hover:bg-green-400 dark:hover:bg-green-300': true,
                  'active:bg-green-600 dark:active:bg-green-500 active:scale-95': true,
                  'bg-green-700 dark:bg-green-600':
                    index === props.activeIndex(),
                  'first-button': index === 0,
                  'last-button': index === props.buttons.length - 1,
                }}
              >
                <div class="flex z-20 justify-stretch mx-auto w-full items-center space-x-2">
                  {button.icon}
                  <span>{button.name}</span>
                </div>
              </button>
            )}
          </For>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
