import { defineConfig } from "windicss/helpers";
import typography from "windicss/plugin/typography";

export default defineConfig({
	darkMode: "class",
	attributify: true,
	plugins: [require("@windicss/plugin-scrollbar")],
	theme: {
		extend: {},
		screens: {
			xs: "425px",
			sm: "768px",
			md: "1024px",
			lg: "1280px",
			xl: "1536px",
		},
	},
	shortcuts: {
		fic: "flex items-center",
		fie: "flex items-end",
		btn: "px-4 py-2 rounded-md text-light-300 shadow-md",
		gridrow: "grid grid-flow-col",
		"btn-blue": "bg-blue-400 dark:(bg-blue-600) hover:bg-blue-500 active:bg-blue-600",
		"btn-blue-ol": "border border-blue-400 dark:(border-blue-600) hover:border-blue-500 active:border-blue-600",
		"btn-gray-ol": "border border-gray-400 dark:(border-gray-600) hover:border-gray-500 active:border-gray-600",
		"main-color": "bg-gray-50 text-gray-700 dark:(bg-gray-800 text-gray-200)",
		"main-color-border": "border-gray-200 dark:(border-gray-700)",
		"main-color-text": "text-gray-700 dark:(text-gray-200)",
	},
});
