import path from "path";
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import Layouts from "vite-plugin-vue-layouts";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import WindiCSS from "vite-plugin-windicss";
import { HeadlessUiResolver, VueUseComponentsResolver } from "unplugin-vue-components/resolvers";

export default defineConfig({
	resolve: {
		alias: {
			"@/": `${path.resolve(__dirname, "src")}/`,
		},
	},
	plugins: [
		Vue({
			include: [/\.vue$/],
		}),

		// https://github.com/hannoeru/vite-plugin-pages
		Pages({
			extensions: ["vue"],
			dirs: "src/views/pages",
		}),

		// https://github.com/JohnCampionJr/vite-plugin-vue-layouts
		Layouts({
			layoutsDir: "src/views/layouts",
			defaultLayout: "default",
		}),

		// https://github.com/antfu/unplugin-auto-import
		AutoImport({
			imports: ["vue", "vue-router", "@vueuse/head", "@vueuse/core"],
			dts: true,
		}),

		// https://github.com/antfu/unplugin-vue-components
		Components({
			extensions: ["vue"],
			dirs: ["src/components"],
			deep: true,

			include: [/\.vue$/, /\.vue\?vue/],
			exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/],

			resolvers: [
				IconsResolver({
					componentPrefix: "I",
				}),
				HeadlessUiResolver({}),
				VueUseComponentsResolver(),
			],

			dts: true,
		}),

		Icons({
			autoInstall: true,
		}),

		WindiCSS({}),
	],

	server: {
		fs: {
			strict: true,
		},
	},

	optimizeDeps: {
		include: ["vue", "vue-router", "@vueuse/core", "@vueuse/head"],
		exclude: ["vue-demi"],
	},
});
