import { defineEventHandler, useQuery } from 'file:///home/david/Programming/Personal/Store_On_Nuxt_3/node_modules/h3/dist/index.mjs';

const products = defineEventHandler(async (event) => {
  const { id } = useQuery(event);
  let uri = "/products";
  if (id) {
    uri += `/${id}`;
  }
  return $fetch(uri, { baseURL: "https://fakestoreapi.com" });
});

export { products as default };
//# sourceMappingURL=products.mjs.map
