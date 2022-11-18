import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import style, { layout } from "./layout.css";

export default component$(() => {
  useStyles$(style);

  return (
    <>
      <main class={layout}>
        <Slot />
      </main>
    </>
  );
});
