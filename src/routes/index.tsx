import { component$ } from "@builder.io/qwik";
import { DocumentHead, Link } from "@builder.io/qwik-city";
import { Header } from "~/components/header/header";

export default component$(() => {
  return (
    <>
      <Header>Welcome to the Aether Gazer Wiki!</Header>
      <Link href="/modifiers/poseidon">Click here for Poseidon example</Link>
    </>
  );
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
