<template>
  <div
    v-on-click-outside="
      () => {
        show = false;
      }
    "
    class="relative order-1 self-end lg:order-2"
  >
    <slot :toggle="toggle"></slot>
    <div
      v-show="show"
      class="bg-white absolute z-30 mt-2 w-44 rounded border border-gray-200 text-blue-500 shadow"
      :class="{
        'left-0': direction === 'right',
        'right-0': direction === 'left',
      }"
    >
      <ul class="py-1 text-sm" aria-labelledby="dropdownDefault">
        <li v-for="option of listOptions" :key="option.label" class="cursor-pointer">
          <a class="block px-4 py-2 bg-white hover:bg-blue-50 hover:font-bold hover:text-blue-600" @click="handleClick(option.clickHandler)">
            {{ option.label }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup >
import { vOnClickOutside } from '@vueuse/components';

defineOptions({
  name: 'DropdownComponent',
});

const props = defineProps({
  listOptions: Array,
  direction: {
    type: String,
    default: 'right',
  },
  hideOnItemClicked: {
    type: Boolean,
    default: false,
  },
});

const show = ref(false);

const toggle = () => {
  show.value = !show.value;
};

const handleClick = (action) => {
  action();
  if (props.hideOnItemClicked) {
    show.value = false;
  }
};
</script>

