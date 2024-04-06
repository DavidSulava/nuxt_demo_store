<template>
  <div>
    <Head>
      <Title>Demo Store | {{ product.title }}</Title>
      <Meta name="description" :content="product.description" />
    </Head>

    <SceletonLoaderProductDetails v-if="pending" />
    <ProductDetails v-else :product="product" />
  </div>
</template>

<script setup>
  const { id } = useRoute().params;

  //  fetch the products
  const { data: product, pending, refresh } = await useFetch('/api/products', {
    query: { id: id },
  });

  watchEffect(() => {
    refresh()
  });

  definePageMeta({
    layout: "products",
  })
</script>