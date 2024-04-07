import { defineEventHandler, useQuery } from 'h3';

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
