import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/server.ts'],
  outDir: 'build',
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  ignoreWatch: ['src/**/*.spec.ts'],
})
