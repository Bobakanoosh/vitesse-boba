# Bobakanoosh Vue Template

Personal template for modern vue frontends. Heavily inspired by [Vitesse](https://github.com/antfu/vitesse).

## Features

-   ⚡️ [Vue 3](https://github.com/vuejs/vue-next), [Vite 2](https://github.com/vitejs/vite), [pnpm](https://pnpm.js.org/),
    [ESBuild](https://github.com/evanw/esbuild) - born with fastness

-   🗂 [File based routing](./src/pages)
-
-   📑 [Layout system](./src/layouts)

-   📦 [Components auto importing](./src/components)

-   🍍 [State Management via Pinia](https://pinia.esm.dev/)

-   🎨 [Windi CSS](https://github.com/windicss/windicss) - next generation utility-first CSS framework

-   😃 [Use icons from any icon sets, with no compromise](https://github.com/antfu/unplugin-icons)

-   🌍 [I18n ready](./locales)

-   🔥 Use the [new `<script setup>` syntax](https://github.com/vuejs/rfcs/pull/227)

-   📥 [APIs auto importing](https://github.com/antfu/unplugin-auto-import) - use Composition API and others directly

-   🦾 TypeScript, of course

-   ☁️ Deploy on Netlify, zero-config

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and
disable Vetur) +
[TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type
checking. In editors, we need
[TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin) to
make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a
[Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You
can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
