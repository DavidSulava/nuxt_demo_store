import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../server.mjs";
import "ohmyfetch";
import "ufo";
import "#internal/nitro";
import "hookable";
import "unctx";
import "vue-router";
import "destr";
import "h3";
import "defu";
import "@vue/shared";
const index_vue_vue_type_style_index_0_scoped_451db3ec_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-451db3ec><h2 data-v-451db3ec>Home</h2><p data-v-451db3ec>Lorem ipsum dolor sit amet consectetur adipisicing elit. In perspiciatis omnis consequatur quod necessitatibus autem repellat aperiam quia atque fugit praesentium earum rerum minus, porro asperiores explicabo inventore animi ducimus. Itaque voluptatum facilis nobis, praesentium, quasi pariatur veniam veritatis quo eligendi, ratione libero impedit. Distinctio, delectus sapiente adipisci assumenda obcaecati aliquid exercitationem sit ad autem! Veritatis nihil accusamus recusandae esse?</p><p data-v-451db3ec>Lorem ipsum dolor sit amet consectetur adipisicing elit. In perspiciatis omnis consequatur quod necessitatibus autem repellat aperiam quia atque fugit praesentium earum rerum minus, porro asperiores explicabo inventore animi ducimus. Itaque voluptatum facilis nobis, praesentium, quasi pariatur veniam veritatis quo eligendi, ratione libero impedit. Distinctio, delectus sapiente adipisci assumenda obcaecati aliquid exercitationem sit ad autem! Veritatis nihil accusamus recusandae esse?</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-451db3ec"]]);
export {
  index as default
};
//# sourceMappingURL=index.181bc589.js.map
