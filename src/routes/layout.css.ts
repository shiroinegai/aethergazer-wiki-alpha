import { style } from "@vanilla-extract/css";
import { space_m_l } from "~/global.css";

export default ''

export const layout = style({
  padding: `${space_m_l}`,
  minHeight: "100vh",
  backgroundImage: "url('/images/background.png')",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
  backgroundPosition: "center"
})