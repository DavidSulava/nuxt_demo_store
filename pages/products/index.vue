<template>
  <div>
    <div class="grid gap-5 grid-cols-2 md:grid-cols-4">
      <div v-if="pending" v-for="n in 20">
        <SkeletonLoaderProductCard />
      </div>
      <div v-else v-for="p in products">
        <ProductCard :product="p" />
      </div>
    </div>
  </div>
</template>

<script setup>
  //  fetch the products
  const uri = '/api/products'
  const { data: products, pending } = await useFetch(uri);


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