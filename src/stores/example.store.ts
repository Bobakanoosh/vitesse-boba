import { acceptHMRUpdate, defineStore } from "pinia";

export const useExampleStore = defineStore("Example", () => {
	return {};
});

if (import.meta.hot) import.meta.hot.accept(acceptHMRUpdate(useExampleStore, import.meta.hot));
