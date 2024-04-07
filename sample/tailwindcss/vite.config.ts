import pages from '@hono/vite-cloudflare-pages'
import devServer from '@hono/vite-dev-server'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
//
export default defineConfig(({ mode }) => {
  if (mode === 'client') {
    return {
      plugins: [react()], 
      define: {
        "process.env.NODE_ENV": '"production"',
      },
      build: {
        lib: {
          entry: [
            './src/client.tsx',
          ],
          formats: ['es'],
          fileName: '[name]',
        },
        rollupOptions: {
          output: {
            dir: './public/static'
          }
        },
        emptyOutDir: false,
        copyPublicDir: false
      }
    }
  } else {
    return {
      ssr: {
        external: ['react', 'react-dom']
      },
      plugins: [
        pages(),
        devServer({
          entry: 'src/index.tsx'
        })
      ]
    }
  }
})
