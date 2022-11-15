import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import css, { header } from "./header.css";

export const Header = component$(() => {
  useStyles$(css);
  return (
    <h1 class={header}>
      <Slot />
    </h1>
  );
});
