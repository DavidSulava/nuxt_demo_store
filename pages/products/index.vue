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
  const products = ref([]);
  const pending = ref(true);

  onMounted(async () => {
    getProducts();
  });

  const getProducts = async () => {
    try {
      pending.value = true;
      const {data} = await useFetch('/api/products');
      if (data?.value) {
        products.value = data.value;
      }

    } finally {
      pending.value = false
    }
  }

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