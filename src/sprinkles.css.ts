import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";

// @link https://utopia.fyi/type/calculator?c=320,14,1.2,3600,14,1.4,8,0,800-1600-2400-3200&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l
const size = {
  xs: "clamp(0.88rem, calc(0.88rem + 0.00vw), 0.88rem)",    // 14
  s: "clamp(1.05rem, calc(1.03rem + 0.09vw), 1.23rem)",     // 16.80 - 19.60
  m: "clamp(1.26rem, calc(1.22rem + 0.22vw), 1.72rem)",     // 20.16 - 27.44
  l: "clamp(1.51rem, calc(1.43rem + 0.43vw), 2.40rem)",     // 24.19 - 38.42
  xl: "clamp(1.81rem, calc(1.66rem + 0.75vw), 3.36rem)",    // 29.03 - 53.78
  "2xl": "clamp(2.18rem, calc(1.93rem + 1.23vw), 4.71rem)", // 34.84 - 75.30
  "3xl": "clamp(2.61rem, calc(2.22rem + 1.94vw), 6.59rem)", // 41.80 - 105.41
  "4xl": "clamp(3.14rem, calc(2.54rem + 2.97vw), 9.22rem)", // 50.16 - 147.58
  "5xl": "clamp(3.76rem, calc(2.87rem + 4.46vw), 12.91rem)" // 60.20 - 206.61
}

// @link https://utopia.fyi/space/calculator?c=320,10,1.21,3600,14,1.42,5,2,800-1600-2400-3200&s=0.64|0.41|0.26|0.17,1.4|1.96|2.74|3.84|5.38,s-l 
const space = {
  "4xs": "clamp(0.13rem, calc(0.13rem + 0.00vw), 0.13rem)",     // 2
  "3xs": "clamp(0.19rem, calc(0.18rem + 0.03vw), 0.25rem)",     // 3  - 4
  "2xs": "clamp(0.25rem, calc(0.24rem + 0.06vw), 0.38rem)",     // 4  - 6 
  xs: "clamp(0.38rem, calc(0.36rem + 0.09vw), 0.56rem)",        // 6  - 9
  s: "clamp(0.63rem, calc(0.60rem + 0.12vw), 0.88rem)",         // 10 - 14
  m: "clamp(0.88rem, calc(0.84rem + 0.18vw), 1.25rem)",         // 14 - 20
  l: "clamp(1.25rem, calc(1.21rem + 0.21vw), 1.69rem)",         // 20 - 27
  xl: "clamp(1.69rem, calc(1.62rem + 0.34vw), 2.38rem)",        // 27 - 38
  "2xl": "clamp(2.38rem, calc(2.28rem + 0.49vw), 3.38rem)",     // 38 - 54
  "3xl": "clamp(3.38rem, calc(3.25rem + 0.64vw), 4.69rem)",     // 54 - 75
  "4xs-3xs": "clamp(0.13rem, calc(0.11rem + 0.06vw), 0.25rem)", // 2  - 4
  "3xs-2xs": "clamp(0.19rem, calc(0.17rem + 0.09vw), 0.38rem)", // 3  - 6
  "2xs-xs": "clamp(0.25rem, calc(0.22rem + 0.15vw), 0.56rem)",  // 4  - 9
  "xs-s": "clamp(0.38rem, calc(0.33rem + 0.24vw), 0.88rem)",    // 6  - 14
  "s-m": "clamp(0.63rem, calc(0.56rem + 0.30vw), 1.25rem)",     // 10 - 20
  "m-l": "clamp(0.88rem, calc(0.80rem + 0.40vw), 1.69rem)",     // 14 - 27
  "l-xl": "clamp(1.25rem, calc(1.14rem + 0.55vw), 2.38rem)",    // 20 - 38
  "xl-2xl": "clamp(1.69rem, calc(1.52rem + 0.82vw), 3.38rem)",  // 27 - 54
  "2xl-3xl": "clamp(2.38rem, calc(2.15rem + 1.13vw), 4.69rem)", // 38 - 75
}

const fluidProperties = defineProperties({
  properties: {
    fontSize: size,
    marginBlockStart: space,
    marginBlockEnd: space,
    marginInlineStart: space,
    marginInlineEnd: space,
    paddingBlockStart: space,
    paddingBlockEnd: space,
    paddingInlineStart: space,
    paddingInlineEnd: space
  },
  shorthands: {
    margin: ['marginBlockStart', 'marginBlockEnd', 'marginInlineStart', 'marginInlineEnd'],
    marginX: ['marginInlineStart', 'marginInlineEnd'],
    marginY: ['marginBlockStart', 'marginBlockEnd'],
    padding: ['paddingBlockStart', 'paddingBlockEnd', 'paddingInlineStart', 'paddingInlineEnd'],
    paddingX: ['paddingInlineStart', 'paddingInlineEnd'],
    paddingY: ['paddingBlockStart', 'paddingBlockEnd'],
  }
})

// const fontVariations = defineProperties({
//   properties: {
//     fontVariationSettings: {}
//   }
// })

export const sprinkles = createSprinkles(fluidProperties)

export type Sprinkles = Parameters<typeof sprinkles>[0]