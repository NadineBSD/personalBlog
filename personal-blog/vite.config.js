import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxying API requests
      '/api': {
        target: 'https://personal-blog-pgz3zexcs-nadine-bousdjiras-projects.vercel.app', // Your deployed backend
        changeOrigin: true, // Change the origin of the host header to the target URL
        secure: false, // If the target is using https
        rewrite: (path) => path.replace(/^\/api/, ''), // Rewrite /api prefix if needed
      },
    },
  },
})
