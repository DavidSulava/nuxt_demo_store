import { d as useHead, e as __nuxt_component_0 } from "../server.mjs";
import { withAsyncContext, unref, useSSRContext } from "vue";
import "vue-router";
import { u as useFetch } from "./fetch.8935e6db.js";
import "destr";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import "ohmyfetch";
import "ufo";
import "#internal/nitro";
import "hookable";
import "unctx";
import "h3";
import "defu";
import "@vue/shared";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: products } = ([__temp, __restore] = withAsyncContext(() => useFetch("https://fakestoreapi.com/products", "$U48yGv7YOO")), __temp = await __temp, __restore(), __temp);
    useHead({
      title: "Demo Store | Merch",
      meta: [
        { name: "description", content: "Nuxt 3 Store Merch" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProductCard = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="grid grid-cols-4 gap-5"><!--[-->`);
      ssrRenderList(unref(products), (p) => {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_ProductCard, { product: p }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index.e6731dfe.js.map
