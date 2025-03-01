import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    environmentMatchGlobs: [['src/http/controllers/**', 'prisma']],
    dir: 'src',
  },
})

// import { defineConfig } from 'vite'

// import viteTsconfigPaths from 'vite-tsconfig-paths'

// export default defineConfig(() => {
//   return {
//     plugins: [
//       viteTsconfigPaths.default(),
//     ],
//     test: {
//       environmentMatchGlobs: [['src/http/controllers/**', 'prisma']],
//       dir: 'src',
//     },
//   }
// })
