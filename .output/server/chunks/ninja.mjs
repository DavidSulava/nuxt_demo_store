import { defineEventHandler } from 'h3';
import { u as useRuntimeConfig } from './nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
import 'ohmyfetch';
import 'radix3';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'fs';
import 'pathe';
import 'url';

const ninja = defineEventHandler(async (event) => {
  const { currencyKey } = useRuntimeConfig();
  const { data } = await $fetch(`https://api.currencyapi.com/v3/latest?apikey=${currencyKey}`);
  return data;
});

export { ninja as default };
//# sourceMappingURL=ninja.mjs.map
