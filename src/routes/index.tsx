import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Header } from "~/components/header/header";

export default component$(() => {
  return <Header>Welcome to the Aether Gazer Wiki!</Header>;
});

export const head: DocumentHead = {
  title: "Aether Gazer | White Wish Wiki",
  meta: [
    {
      name: "description",
      content: "A modern Aether Gazer fan-made wiki!",
    },
  ],
};
