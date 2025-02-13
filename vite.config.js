import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    base: "/gabriellaonnunnu/",
    build: {
        outDir: 'dist',
    },    assetsInclude: ['**/*.jpg', '**/*.gif']

})