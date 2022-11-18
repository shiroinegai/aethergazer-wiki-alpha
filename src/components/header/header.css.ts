import { style } from '@vanilla-extract/css'
import { mono, casual, weight, slant, cursive, size_3xl, space_4xs_3xs } from '~/global.css'

export default ''

export const header = style({
  vars: {
    [weight]: `"wght" 840`
  },
  fontVariationSettings: `${mono}, ${casual}, ${weight}, ${slant}, ${cursive}`,
  fontSize: `${size_3xl}`,
  letterSpacing: `${space_4xs_3xs}`
})