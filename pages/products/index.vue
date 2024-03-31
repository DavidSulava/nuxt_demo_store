<template>
  <div>
    <div class="grid gap-5 grid-cols-2 md:grid-cols-4">
      <div v-for="p in products">
        <ProductCard :product="p" />
      </div>
    </div>
  </div>
</template>

<script setup>
  //  fetch the products
  const { data: products } = await useFetch('https://fakestoreapi.com/products')

  definePageMeta({
    layout: "products",
  })

  useHead({
    title: 'Demo Store | Merch',
    meta: [
      { name: 'description', content: 'Nuxt 3 Store Merch'}
    ]
  })
</script>