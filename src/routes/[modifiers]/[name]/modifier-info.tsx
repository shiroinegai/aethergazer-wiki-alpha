import { component$, useStyles$ } from "@builder.io/qwik";
import style, {
  container,
  image,
  name,
  info,
  infoLabel,
  build,
} from "./modifier-info.css";

export interface ModifierInfoProps {
  name: string;
  suit: string;
  grade: "B" | "A" | "S";
  combatStyle: "Melee" | "Ranged";
  height: number;
  weight: number;
  dateAwakened: string;
  affiliation: string;
}

export const ModifierInfo = component$<ModifierInfoProps>((props) => {
  useStyles$(style);

  return (
    <div class={container}>
      <img src={`/images/${props.name}.png`} alt={props.name} class={image} />
      <h1 class={name}>{props.name}</h1>
      <dl class={info}>
        <dt class={infoLabel.primary}>Suit</dt>
        <dd>{props.suit}</dd>
        <dt class={infoLabel.primary}>Grade</dt>
        <dd>{props.grade}</dd>
        <dt class={infoLabel.primary}>Combat Style</dt>
        <dd>{props.combatStyle}</dd>
        <dt class={infoLabel.primary}>Build</dt>
        <dd>
          <dl class={build}>
            <dt class={infoLabel.secondary}>Height</dt>
            <dd>{props.height}cm</dd>
            <dt class={infoLabel.secondary}>Weight</dt>
            <dd>{props.weight}kg</dd>
          </dl>
        </dd>
        <dt class={infoLabel.primary}>Date Awakened</dt>
        <dd>{props.dateAwakened}</dd>
        <dt class={infoLabel.primary}>Affiliation</dt>
        <dd>{props.affiliation}</dd>
      </dl>
    </div>
  );
});
