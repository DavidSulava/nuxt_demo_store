<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold self-center">Nuxt Demo Store</NuxtLink>
        <div class="flex gap-4">
          <NuxtLink to="/" class="self-center">Home</NuxtLink>
          <NuxtLink to="/about" class="self-center">About</NuxtLink>
          <NuxtLink to="/products" class="btn py-2 self-center">Merch</NuxtLink>
        </div>
      </nav>
    </header>
    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>

<style scoped>
  .router-link-exact-active {
    color: #12b488;
  }
</style>