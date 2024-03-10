import { SolidMarkdown } from 'solid-markdown';
import { createSignal, onCleanup, onMount, createEffect, For } from 'solid-js';
import { createSwitchTransition } from '@solid-primitives/transition-group';

function Content(props) {
  let node;
  const [opacity, setOpacity] = createSignal(0);
  const [animationClass, setAnimationClass] = createSignal('');

  const transition = createSwitchTransition(() => props.activeContent(), {
    onEnter: (el, done) => {
      setOpacity(0);
      setAnimationClass('fade-in');
      setTimeout(() => {
        setOpacity(1);
        done();
      }, 500);
    },
    onExit: (el, done) => {
      setAnimationClass('fade-out');
      setTimeout(done, 100);
    },
    mode: 'out-in',
    appear: true,
  });

  onCleanup(() => {
    setAnimationClass('fade-out');
  });

  return (
    <main ref={node}>
      <div class="bg-[rgba(255,255,255,0.1)] backdrop-filter backdrop-blur-lg p-10 text-white">
        <For each={transition()}>
          {(el) => (
            <SolidMarkdown
              class={`prose dark:prose-invert  prose-slate transition-opacity duration-500 ${animationClass()} my-2 leading-relaxed`}
              style={{
                opacity: opacity(),
                width: '100%',
              }}
            >
              {el}
            </SolidMarkdown>
          )}
        </For>
      </div>
    </main>
  );
}

export default Content;
