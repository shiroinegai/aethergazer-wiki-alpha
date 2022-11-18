import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import style, { header } from "./header.css";

export const Header = component$(() => {
  useStyles$(style);

  return (
    <h1 class={header}>
      <Slot />
    </h1>
  );
});
