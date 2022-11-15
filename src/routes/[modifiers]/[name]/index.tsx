import { component$, Slot, useStyles$ } from "@builder.io/qwik";
// import css, { and other relevant styles } from "./componentName.css";

export default component$(() => {
  // useStyles$(css);
  return (
    <div>
      <Slot />
    </div>
  );
});
