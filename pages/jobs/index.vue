<template>
  <div class="min-h-screen">
    <div class="flex items-center justify-center gap-x-2.5 mt-20 w-full">
      <div class="max-w-3xl w-full">
        <UInput
          color="sky"
          variant="outline"
          placeholder="Search..."
          class="text-black"
          style="color: black; width: 100%"
          v-model="search"
        />
      </div>
      <UButton color="sky" variant="solid" @click="handleSearch"
        >search</UButton
      >
    </div>
    <div class="flex items-center justify-center">
      <div class="max-w-3xl w-full my-4">
        <h2 class="text-xl">choose spheres</h2>
        <div v-for="sphere of spheres">
          <div class="flex gap-3 items-center">
            <UCheckbox
              color="sky"
              :id="sphere"
              :value="sphere"
              :style="{
                background: chosenSpheres.includes(sphere) ? '' : 'white',
              }"
              v-model="chosenSpheres"
            />
            <p>{{ sphere }}</p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex items-center justify-center flex-col m-10 gap-x-2.5"
      v-if="jobs.length"
    >
      <div class="flex justify-center items-center flex-col gap-y-3">
        <JobCard
          v-for="job in paginatedData"
          :id="job.id"
          :title="job.title"
          :key="job.id"
          :description="job.description"
          :sphere="job.sphere"
          :company="job.company"
        />
      </div>
      <div class="w-full">
        <Pagination
          class="border-t-0"
          :job-per-page="jobPerPage"
          :current-page="page + 1"
          :total-messages="jobs.length"
          :number-of-pages="Math.ceil(jobs.length / jobPerPage)"
          @change-page="pageChange($event)"
          @change-messages-per-page="changeJobPerPage($event)"
        />
      </div>
    </div>
    <div
      class="flex items-center justify-center flex-col m-10 gap-x-2.5"
      v-else
    >
      <h1 class="text-center mt-20 max-w-lg font-semibold text-4xl">
        no job found
      </h1>
    </div>
  </div>
</template>

<script setup>
import JobCard from '~/components/JobCard.vue';
import Pagination from '~/components/Pagination.vue';
import fakeData from '../../assets/data/fakeJobs.json';

const page = ref(0);
const jobPerPage = ref(5);
const search = ref('');
const jobs = ref(fakeData.Jobs);
const spheres = ref(fakeData.spheres);
const chosenSpheres = ref([]);

const pageChange = (action) => {
  const lastPage = Math.ceil(jobs.value.length / jobPerPage.value);
  if (action === 'next' && page.value < lastPage) {
    page.value += 1;
  }
  if (action === 'previous' && page.value > 0) {
    page.value -= 1;
  }
};

const handleSearch = () => {
  if (search.value || chosenSpheres.value.length) {
    const filtered = fakeData.Jobs.filter(
      (value) =>
        (value.title.toLowerCase().includes(search.value) ||
          value.company.toLowerCase().includes(search.value)) &&
        (chosenSpheres.value.includes(value.sphere) ||
          !chosenSpheres.value.length)
    );

    jobs.value = filtered;
  } else {
    jobs.value = fakeData.Jobs;
  }
  page.value = 0;
};

const paginatedData = computed(() => {
  return jobs.value.slice(
    page.value * jobPerPage.value,
    page.value * jobPerPage.value + jobPerPage.value
  );
});

const changeJobPerPage = (count) => {
  jobPerPage.value = count;
};
</script>
