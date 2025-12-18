import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: 'autoUpdate',
            devOptions: { enabled: true },
            workbox: {
                globPatterns: ['**/*.{js,css,html,onnx,bin,json}']
            },
            manifest: {
                name: 'MediForge AI Clinic',
                short_name: 'MediForge',
                icons: [
                    { src: 'data:image/svg+xml;base64,...', sizes: '192x192', type: 'image/png' }  // Base64 icon
                ],
                theme_color: '#0ea5e9',
                background_color: '#020617',
                display: 'standalone'
            }
        })
    ],
    build: {
        target: 'es2022',
        outDir: 'dist'
    },
    define: { global: 'globalThis' }
});
