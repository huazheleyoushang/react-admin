import { defineConfig, loadEnv, ConfigEnv, UserConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import viteCompression from 'vite-plugin-compression';
import { createHtmlPlugin } from 'vite-plugin-html';

// https://vitejs.dev/config/
export default defineConfig((mode: ConfigEnv): UserConfig => {
  const env = loadEnv(mode.mode, process.cwd());
  return {
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
    css: {
      preprocessorOptions: {
        less: {
          // modifyVars: {
          // 	"primary-color": "#1DA57A",
          // },
          javascriptEnabled: true,
          additionalData: `@import "@/styles/var.less";`,
        },
      },
    },
    server: {
      host: true, // 服务器主机名，如果允许外部访问，可设置为"0.0.0.0"
      port: 8080,
      open: true,
      cors: true,
      // https: false,
      proxy: {
        '/api': {
          target: '',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
    plugins: [
      react(),
      createHtmlPlugin({
        inject: {
          data: {
            title: 'react-admin',
          },
        },
      }),
      viteCompression(),
      visualizer({
        gzipSize: true,
        brotliSize: true,
        emitFile: false,
        filename: 'test.html',
        open: false,
      }),
    ],
    esbuild: {
      pure: ['console.log', 'debugger'],
    },
    build: {
      outDir: 'dist',
      // esbuild 打包更快，但是不能去除 console.log，去除 console 使用 terser 模式
      minify: 'esbuild',
      // minify: "terser",
      // terserOptions: {
      // 	compress: {
      // 		drop_console: viteEnv.VITE_DROP_CONSOLE,
      // 		drop_debugger: true
      // 	}
      // },
      rollupOptions: {
        output: {
          chunkFileNames: '/react-admin/assets/js/[name]-[hash].js',
          entryFileNames: '/react-admin/assets/js/[name]-[hash].js',
          assetFileNames: '/react-admin/assets/[ext]/[name]-[hash].[ext]',
        },
      },
    },
  };
});
