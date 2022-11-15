import { style } from '@vanilla-extract/css'
import { font } from '~/global.css'
import { sprinkles } from '../../sprinkles.css'

export default 'CSS compilation target'

export const header = style([
  sprinkles({
    fontSize: '2xl',
    padding: 'xl-2xl',
  }),
  font({style: 'mono'})
]) 