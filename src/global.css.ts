import { globalFontFace, style, createVar } from '@vanilla-extract/css'

export default ''

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

// Recursive font variables
export const mono = createVar()
export const casual = createVar()
export const weight = createVar()
export const slant = createVar()
export const cursive = createVar()

// Fluid typography variables
export const size_xs = createVar()
export const size_s = createVar()
export const size_m = createVar()
export const size_l = createVar()
export const size_xl = createVar()
export const size_2xl = createVar()
export const size_3xl = createVar()
export const size_4xl = createVar()
export const size_5xl = createVar()

// Fluid spacing variables
export const space_4xs = createVar()
export const space_3xs = createVar()
export const space_2xs = createVar()
export const space_xs = createVar()
export const space_s = createVar()
export const space_m = createVar()
export const space_l = createVar()
export const space_xl = createVar()
export const space_2xl = createVar()
export const space_3xl = createVar()
export const space_4xs_3xs = createVar()
export const space_3xs_2xs = createVar()
export const space_2xs_xs = createVar()
export const space_xs_s = createVar()
export const space_s_m = createVar()
export const space_m_l = createVar()
export const space_l_xl = createVar()
export const space_xl_2xl = createVar()
export const space_2xl_3xl = createVar()

export const global = style({
  fontFamily: `${recursive}, ${sans}`,
  fontSize: [size_s],
  lineHeight: 1,
  vars: {
    [mono]: `"MONO" 0`,
    [casual]: `"CASL" 0`,
    [weight]: `"wght" 400`,
    [slant]: `"slnt" 0`,
    [cursive]: `"crsv" 0.5`,
    [size_xs]: "clamp(0.88rem, calc(0.88rem + 0.00vw), 0.88rem)",       // 14
    [size_s]: "clamp(1.05rem, calc(1.03rem + 0.09vw), 1.23rem)",        // 16.80 - 19.60
    [size_m]: "clamp(1.26rem, calc(1.22rem + 0.22vw), 1.72rem)",        // 20.16 - 27.44
    [size_l]: "clamp(1.51rem, calc(1.43rem + 0.43vw), 2.40rem)",        // 24.19 - 38.42
    [size_xl]: "clamp(1.81rem, calc(1.66rem + 0.75vw), 3.36rem)",       // 29.03 - 53.78
    [size_2xl]: "clamp(2.18rem, calc(1.93rem + 1.23vw), 4.71rem)",      // 34.84 - 75.30
    [size_3xl]: "clamp(2.61rem, calc(2.22rem + 1.94vw), 6.59rem)",      // 41.80 - 105.41
    [size_4xl]: "clamp(3.14rem, calc(2.54rem + 2.97vw), 9.22rem)",      // 50.16 - 147.58
    [size_5xl]: "clamp(3.76rem, calc(2.87rem + 4.46vw), 12.91rem)",     // 60.20 - 206.61
    [space_4xs]: "clamp(0.13rem, calc(0.13rem + 0.00vw), 0.13rem)",     // 2
    [space_3xs]: "clamp(0.19rem, calc(0.18rem + 0.03vw), 0.25rem)",     // 3  - 4
    [space_2xs]: "clamp(0.25rem, calc(0.24rem + 0.06vw), 0.38rem)",     // 4  - 6 
    [space_xs]: "clamp(0.38rem, calc(0.36rem + 0.09vw), 0.56rem)",      // 6  - 9
    [space_s]: "clamp(0.63rem, calc(0.60rem + 0.12vw), 0.88rem)",       // 10 - 14
    [space_m]: "clamp(0.88rem, calc(0.84rem + 0.18vw), 1.25rem)",       // 14 - 20
    [space_l]: "clamp(1.25rem, calc(1.21rem + 0.21vw), 1.69rem)",       // 20 - 27
    [space_xl]: "clamp(1.69rem, calc(1.62rem + 0.34vw), 2.38rem)",      // 27 - 38
    [space_2xl]: "clamp(2.38rem, calc(2.28rem + 0.49vw), 3.38rem)",     // 38 - 54
    [space_3xl]: "clamp(3.38rem, calc(3.25rem + 0.64vw), 4.69rem)",     // 54 - 75
    [space_4xs_3xs]: "clamp(0.13rem, calc(0.11rem + 0.06vw), 0.25rem)", // 2  - 4
    [space_3xs_2xs]: "clamp(0.19rem, calc(0.17rem + 0.09vw), 0.38rem)", // 3  - 6
    [space_2xs_xs]: "clamp(0.25rem, calc(0.22rem + 0.15vw), 0.56rem)",  // 4  - 9
    [space_xs_s]: "clamp(0.38rem, calc(0.33rem + 0.24vw), 0.88rem)",    // 6  - 14
    [space_s_m]: "clamp(0.63rem, calc(0.56rem + 0.30vw), 1.25rem)",     // 10 - 20
    [space_m_l]: "clamp(0.88rem, calc(0.80rem + 0.40vw), 1.69rem)",     // 14 - 27
    [space_l_xl]: "clamp(1.25rem, calc(1.14rem + 0.55vw), 2.38rem)",    // 20 - 38
    [space_xl_2xl]: "clamp(1.69rem, calc(1.52rem + 0.82vw), 3.38rem)",  // 27 - 54
    [space_2xl_3xl]: "clamp(2.38rem, calc(2.15rem + 1.13vw), 4.69rem)", // 38 - 75
  }
})
