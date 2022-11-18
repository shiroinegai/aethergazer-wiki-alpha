import { component$ } from "@builder.io/qwik";
import { ModifierInfo } from "./modifier-info";

export default component$(() => {
  return (
    <article>
      <ModifierInfo
        name="Poseidon"
        suit="Tidal Song"
        grade="A"
        combatStyle="Ranged"
        height={164}
        weight={55}
        dateAwakened="March 21st"
        affiliation="Aether Gazer"
      />
    </article>
  );
});
