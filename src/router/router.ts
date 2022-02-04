import { setupLayouts } from "layouts-generated";
import { createRouter, createWebHistory } from "vue-router";
import generatedRoutes from "virtual:generated-pages";

const routes = setupLayouts(generatedRoutes);

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export { router };
