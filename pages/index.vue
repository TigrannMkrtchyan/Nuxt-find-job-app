<template>
  <div
    :style="{ backgroundImage: `url(${background})` }"
    class="h-screen bg-no-repeat bg-cover flex justify-center items-center md:items-start"
  >
    <div class="md:max-w-3xl w-full mt-20">
      <h1
        class="text-white text-4xl font-bold md:max-w-lg md:text-left text-center"
      >
        There are millions of jobs to discover.
      </h1>
      <div class="w-full flex md:justify-start justify-center mt-5">
        <nuxt-link class="text-white cursor-pointer text-xl" href="/jobs"
          >Click here to check</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import background from '~/assets/img/images/carers.jpg';
</script>
