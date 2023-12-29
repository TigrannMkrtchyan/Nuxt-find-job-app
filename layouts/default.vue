<template>
  <div id="app">
    <div class="h-20 w-full flex justify-center items-center shadow-lg">
      <div class="max-w-screen-2xl w-full flex items-center">
        <a href="/"
          ><img :src="Logo" alt="Logo" class="h-14 w-14 cursor-pointer"
        /></a>
        <a class="ml-5 font-bold text-3xl cursor-pointer" href="/">Jobs</a>
      </div>
    </div>
    <slot />
    <div class="h-20 w-full flex justify-center items-center bg-blue-400">
      <h1 class="text-white">© 2023 All rights reserved.</h1>
    </div>
  </div>
</template>

<script setup>
import Logo from '~/assets/img/icons/logo.svg';
</script>
