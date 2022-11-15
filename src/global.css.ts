import { globalStyle, globalFontFace, createVar } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export default 'CSS compilation target'

const sans = `'ui-sans-serif', 'system-ui', '-apple-system',
'BlinkMacSystemFont', '"Segoe UI"', 'Roboto',
'"Helvetica Neue"', 'Arial', '"Noto Sans"',
'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"',
'"Segoe UI Symbol"', '"Noto Color Emoji"'`

const recursive = "Recursive"

globalFontFace(recursive, {
  src: `url("/fonts/Recursive_VF_1.085.woff2") format("woff2-variations")`,
  fontDisplay: 'optional',
  fontWeight: '300 1000',
})

export const mono = createVar()
export const casual = createVar()
export const weight = createVar()
export const slant = createVar()
export const cursive = createVar()

export const font = recipe({
  base: {
    vars: {
      [mono]: `"MONO" 0`,
      [casual]: `"CASL" 0`,
      [weight]: `"wght" 400`,
      [slant]: `"slnt" 0`,
      [cursive]: `"crsv" 0.5`,
    },
    fontFamily: `${recursive}, ${sans}`,
  },
  variants: {
    style: {
      mono: {
        vars: { [mono]: `"MONO" 1` },
        fontVariationSettings: `${mono}, ${casual}, ${weight}, ${slant}, ${cursive}`
      }
    }
  }
})

