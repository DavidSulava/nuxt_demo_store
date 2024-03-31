import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "products"
declare module "/home/david/Programming/Personal/Store_On_Nuxt_3/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}