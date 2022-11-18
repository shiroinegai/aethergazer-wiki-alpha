import { style, styleVariants } from "@vanilla-extract/css";
import {
  size_3xl,
  space_4xs,
  space_2xs,
  space_xs,
  space_m,
  mono,
  casual,
  weight,
  slant,
  cursive,
} from "~/global.css";

export default "";

export const container = style({
  display: "grid",
  aspectRatio: "9/16",
  maxInlineSize: `calc(${space_m} * 25)`,
  gridTemplateColumns: `${space_m} repeat(9, minmax(0, 1fr)) ${space_m}`,
  gridTemplateRows: `${space_m} repeat(16, minmax(0, 1fr)) ${space_m}`,
  overflow: "hidden",
  borderRadius: `${space_m}`,
  margin: "0 auto",
  backdropFilter: `blur(${space_4xs})`,
});

export const image = style({
  gridColumn: "span 11",
  minWidth: "100%",
});

export const name = style({
  fontSize: `${size_3xl}`,
  fontWeight: 895,
  gridColumnStart: 2,
  gridRowStart: 2,
});

export const info = style({
  gridColumnEnd: -1,
  gridRowEnd: -2,
  justifySelf: "end",
  alignSelf: "end",
  display: "grid",
  gridTemplateColumns: "repeat(2, max-content)",
  columnGap: `${space_m}`,
  rowGap: `${space_m}`,
  backgroundImage:
    "linear-gradient(to right, transparent, rgb(100% 100% 100% / 75%))",
  backdropFilter: `blur(${space_2xs})`,
  padding: `${space_m}`,
  borderStartStartRadius: `${space_m}`,
  borderEndStartRadius: `${space_m}`,
});

export const build = style({
  display: "grid",
  gridTemplateColumns: "repeat(2, max-content)",
  columnGap: `${space_xs}`,
  rowGap: `${space_xs}`,
});

export const infoLabelBase = style({
  vars: {
    [mono]: `"MONO" 1`,
  },
  fontVariationSettings: `${mono}, ${casual}, ${weight}, ${slant}, ${cursive}`,
});

export const infoLabel = styleVariants({
  primary: [
    infoLabelBase,
    {
      vars: {
        [weight]: `"wght" 790`,
      },
      textTransform: "uppercase",
      textAlign: "end",
    },
  ],
  secondary: [
    infoLabelBase,
    {
      vars: {
        [weight]: `"wght" 685`,
      },
    },
  ],
});
