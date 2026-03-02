import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            'next/image': path.resolve(__dirname, './src/compat/next-image.jsx'),
            'next-intl': path.resolve(__dirname, './src/compat/next-intl.js'),
            '@/navigation': path.resolve(__dirname, './src/compat/navigation.jsx'),
            'next/navigation': path.resolve(__dirname, './src/compat/navigation.jsx'),
            'next/font/google': path.resolve(__dirname, './src/compat/next-font.js'),
            'next/dynamic': path.resolve(__dirname, './src/compat/next-dynamic.js'),
            '@': path.resolve(__dirname, './'),
        },
    },
    esbuild: {
        loader: 'jsx',
        include: /.*\.(js|jsx)$/,
        exclude: [],
    },
    optimizeDeps: {
        esbuildOptions: {
            loader: {
                '.js': 'jsx',
            },
        },
    },
    server: {
        port: 3000,
    },
    define: {
        'process.env': {},
    }
});
