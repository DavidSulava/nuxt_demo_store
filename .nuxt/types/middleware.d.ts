import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/home/david/Programming/Personal/Store_On_Nuxt_3/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}