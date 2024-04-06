import { defineEventHandler } from 'file:///home/david/Programming/Personal/Store_On_Nuxt_3/node_modules/h3/dist/index.mjs';
import { u as useRuntimeConfig } from './nitro/nitro-prerenderer.mjs';
import 'file:///home/david/Programming/Personal/Store_On_Nuxt_3/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///home/david/Programming/Personal/Store_On_Nuxt_3/node_modules/ohmyfetch/dist/node.mjs';
import 'file:///home/david/Programming/Personal/Store_On_Nuxt_3/node_modules/destr/dist/index.mjs';
import 'file:///home/david/Programming/Personal/Store_On_Nuxt_3/node_modules/radix3/dist/index.mjs';
import 'file:///home/david/Programming/Personal/Store_On_Nuxt_3/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///home/david/Programming/Personal/Store_On_Nuxt_3/node_modules/hookable/dist/index.mjs';
import 'file:///home/david/Programming/Personal/Store_On_Nuxt_3/node_modules/scule/dist/index.mjs';
import 'file:///home/david/Programming/Personal/Store_On_Nuxt_3/node_modules/ohash/dist/index.mjs';
import 'file:///home/david/Programming/Personal/Store_On_Nuxt_3/node_modules/ufo/dist/index.mjs';
import 'file:///home/david/Programming/Personal/Store_On_Nuxt_3/node_modules/unstorage/dist/index.mjs';
import 'file:///home/david/Programming/Personal/Store_On_Nuxt_3/node_modules/unstorage/dist/drivers/fs.mjs';

const _code_ = defineEventHandler(async (event) => {
  const { code } = event.context.params;
  const { currencyKey } = useRuntimeConfig();
  const uri = `/latest?currencies=${code}&apikey=${currencyKey}`;
  return $fetch(uri, { baseURL: "https://api.currencyapi.com/v3" });
});

export { _code_ as default };
//# sourceMappingURL=_code_.mjs.map
