<template>
  <button
    :disabled="disabled"
    :type="nativeType ? nativeType : false"
    :class="`button-${type} button-${size} ${color ? 'button-' + color : ''} ${customClasses} space-x-1.5 ${
      disabled ? 'button-gray cursor-not-allowed' : ''
    }`"
    @click="emit('click')"
  >
    <div v-if="icon" class="svg-wrapper" v-html="icon"></div>
    <span v-if="label" :class="responsiveLabels ? 'ml-2 hidden text-xs xl:block' : ''">{{ label }}</span>
    <div v-if="iconRight" class="svg-wrapper" v-html="iconRight"></div>
    <ChevronDownIcon v-if="arrowDown" class="h-4 w-4 text-gray-700" />
  </button>
</template>

<script setup >
import { ChevronDownIcon } from '@heroicons/vue/24/solid';

const props = defineProps({
  type: {
    type: String,
    default: 'filled',
  },
  nativeType: String,
  size: {
    type: String,
    default: 'xs',
  },
  customClasses: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  responsiveLabels: Boolean,
  color: String,
  iconRight: String,
  icon: String,
  label: String,
  arrowDown: Boolean,
});

const emit = defineEmits(['click']);
</script>

<style>
.button {
  @apply font-semibold;
}

.button-filled {
  @apply button inline-flex h-10 items-center justify-center rounded px-2 py-3;
}

.button-pill {
  @apply button inline-flex h-10 items-center justify-center rounded-3xl px-2 py-3;
}

.button-circle {
  @apply button flex h-10 w-10 w-auto cursor-pointer items-center justify-center rounded-full dark:stroke-blue-200;
}

.button-blue {
  @apply bg-blue-600 text-white hover:bg-blue-700 !important;
}

.button-blue .svg-wrapper {
  @apply w-auto stroke-0;
}

.button-blue .svg-wrapper path {
  @apply fill-white hover:fill-white hover:stroke-0;
}

.button-gray {
  @apply bg-gray-100 text-gray-500 hover:bg-gray-200 !important;
}

.button-disabled {
  @apply button-gray;
  @apply text-gray-300 !important;
}

.button-disabled svg path {
  fill: #d1d5db;
}

.button-white {
  @apply border border-gray-300 bg-white text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none !important;
}

.button-xs {
  @apply text-xs;
}

.button-sm {
  @apply text-sm;
}

.button-base {
  @apply text-base;
}

.button-lg {
  @apply text-lg;
}

.button-xl {
  @apply text-xl;
}

.no-hover.button-white {
  @apply hover:bg-white !important;
}

.no-hover.button-blue {
  @apply hover:bg-blue-600 !important;
}

.no-hover.button-gray {
  @apply hover:bg-gray-100 !important;
}

</style>
