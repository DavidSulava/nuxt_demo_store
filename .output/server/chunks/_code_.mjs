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

const _code_ = defineEventHandler(async (event) => {
  const { code } = event.context.params;
  const { currencyKey } = useRuntimeConfig();
  const uri = `/latest?currencies=${code}&apikey=${currencyKey}`;
  return $fetch(uri, { baseURL: "https://api.currencyapi.com/v3" });
});

export { _code_ as default };
//# sourceMappingURL=_code_.mjs.map
