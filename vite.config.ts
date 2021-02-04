import vue from '@vitejs/plugin-vue';
import dotenv from 'dotenv-flow';
import { join } from 'path';
import { defineConfig } from 'vite';

dotenv.config();
const root = join(__dirname, 'src/renderer');

const config = defineConfig({
    root,
    base: './',
    build: {
        outDir: join('../../dist/renderer'),
        emptyOutDir: true,
    },
    alias: { '/@': root },
    plugins: [vue()],
    server: {
        port: +process.env.PORT,
    },
    optimizeDeps: {
        exclude: ['electron-is-dev'],
    },
});

export default config;
