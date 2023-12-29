<template>
  <div class="flex items-center justify-between border-t border-gray-200 py-3">
    <div class="flex-1 sm:flex sm:items-center sm:justify-between">
      <div
        class="flex flex-1 flex-col items-center justify-end sm:flex-row sm:justify-between"
      >
        <div class="flex items-center">
          <nav
            class="relative z-0 inline-flex space-x-0.5"
            aria-label="Pagination"
          >
            <a
              :class="
                currentPage === 1
                  ? 'pointer-events-none opacity-25'
                  : 'cursor-pointer'
              "
              class="relative inline-flex h-8 w-8 items-center justify-center rounded bg-gray-100 text-sm font-medium text-gray-500 hover:bg-gray-300 hover:text-gray-700"
              @click="emit('change-page', 'previous')"
            >
              <span class="sr-only">previous</span>
              <ChevronLeftIcon
                class="h-4 w-4"
                :class="
                  currentPage === 1 ? 'pointer-events-none' : 'cursor-pointer'
                "
              />
            </a>
            <a
              :class="
                currentPage === numberOfPages
                  ? 'pointer-events-none opacity-25'
                  : 'cursor-pointer'
              "
              class="relative inline-flex h-8 w-8 items-center justify-center rounded bg-gray-100 text-sm font-medium text-gray-500 hover:bg-gray-300 hover:text-gray-700"
              @click="emit('change-page', 'next')"
            >
              <span class="sr-only">next</span>
              <ChevronRightIcon
                class="h-4 w-4"
                :class="
                  currentPage === numberOfPages
                    ? 'pointer-events-none'
                    : 'cursor-pointer'
                "
              />
            </a>
          </nav>
          <p class="ml-2 pt-3 text-sm text-gray-700 md:pt-0">
            page
            <span class="font-bold">{{ currentPage }}</span>
            (<span class="font-bold">{{ startCount }}</span> -
            <span class="font-bold">{{ endCount }}</span>
            out of
            <span class="font-bold">{{ totalMessages }}</span>
            <span v-if="$route.path !== '/webmail/alias'">jobs</span>)
          </p>
        </div>
      </div>
      <div class="sl-pg flex justify-end gap-2">
        <Dropdown
          class="z-10"
          :hide-on-item-clicked="true"
          :list-options="detailsDropdownActions"
          direction="left"
          v-slot="{ toggle }"
        >
          <BtnDynamic
            type="filled"
            color="blue"
            custom-classes="dark:stroke-blue-200 capitalize space-x-1"
            :arrow-down="true"
            :label="'jobs' + ' ' + jobPerPage"
            @click="toggle"
          />
        </Dropdown>
      </div>
    </div>
  </div>
</template>

<script setup>
import Dropdown from '~/components/Dropdown.vue';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/solid';

defineOptions({
  name: 'PaginationComponent',
});

const props = defineProps({
  numberOfPages: {
    type: Number,
    required: true,
  },
  currentPage: {
    type: Number,
    required: true,
  },
  jobPerPage: {
    type: Number,
    required: true,
  },
  totalMessages: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(['change-messages-per-page', 'change-page']);

const detailsDropdownActions = ref(
  [5, 10, 20].map((option) => ({
    label: option,
    clickHandler: () => emit('change-messages-per-page', option),
  }))
);

const startCount = computed(
  () => (props.currentPage - 1) * props.jobPerPage + 1
);

const endCount = computed(() => {
  const endCount = props.currentPage * props.jobPerPage;
  if (endCount < props.totalMessages) {
    return endCount;
  }
  return props.totalMessages;
});
</script>
