import { defineConfig } from 'unocss'

export default defineConfig({
  shortcuts: {
    'wh-full': 'w-full h-full',
    'flex-center': 'flex justify-center items-center',
    'flex-col-center': 'flex-center flex-col',
    'flex-x-center': 'flex justify-center',
    'flex-y-center': 'flex items-center',
  },
  theme: {
    colors: {
      primary: 'blue',
      light: 'lightblue',
    },
  },
})
