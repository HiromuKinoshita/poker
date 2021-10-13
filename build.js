const { build } = require('esbuild');

// eslint-disable-next-line no-undef
const watch = process.env.WATCH === 'true';
console.log(`Watch Option: ${watch}`);

build({
  entryPoints: ['./src/main.ts'],
  bundle: true,
  minify: false,
  outdir: 'dist',
  platform: 'node',
  watch,
});
