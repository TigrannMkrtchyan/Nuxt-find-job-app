<template>
  <nuxt-link
    :href="`/jobs/${id}`"
    class="w-full max-w-4xl border border-gray-400 p-4 rounded cursor-pointer"
  >
    <h1 class="font-semibold text-2xl text-blue-400">{{ title }}</h1>
    <div class="flex items-center gap-4 my-2 text-lg">
      <h2 class="p-2 bg-blue-100 rounded-xl">{{ company }}</h2>
      <h2 class="p-2 bg-blue-100 rounded-xl">{{ sphere }}</h2>
    </div>
    <p>
      {{ description }}
    </p>
  </nuxt-link>
</template>

<script setup lang="ts">
const props = defineProps({
  id: String,
  title: String,
  company: String,
  sphere: String,
  description: String,
});
</script>
