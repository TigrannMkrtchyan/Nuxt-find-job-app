<template>
  <div class="min-h-screen">
    <div class="flex justify-center">
      <div class="max-w-screen-xl w-full flex items-center flex-col">
        <div class="w-full flex mt-10 pl-2">
          <p>
            <nuxt-link class="text-blue-600" href="/jobs">jobs</nuxt-link> /{{
              paginatedData.title
            }}
          </p>
        </div>
        <div>
          <div class="flex items-center mt-10 w-full justify-center">
            <h1 class="text-center max-w-lg font-semibold mr-5 text-4xl">
              {{ paginatedData.title }}
            </h1>
            <img :src="Checked" alt="Checked" v-if="isChecked" class="w-10" />
          </div>
          <p class="text-center max-w-lg mt-10 text-xl">
            {{ paginatedData.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useJobStore } from '~/stores/jobs';
import fakeData from '../../assets/data/fakeJobs.json';
import Checked from '~/assets/img/icons/checked.svg';

const route = useRoute();
const isChecked = ref(false);
const jobStore = useJobStore();
const emailId = route.params.id;
const paginatedData = ref({});

onMounted(() => {
  const result = fakeData.Jobs.find((value) => value.id === emailId);
  if (!result) {
    navigateTo('/jobs');
    return;
  }
  if (jobStore.vacancies.includes(result.id)) {
    isChecked.value = true;
  } else {
    jobStore.addId(result.id);
  }

  paginatedData.value = result;
});
</script>
