<script setup lang="ts">
import {onMounted} from 'vue'

const spells = ref<any>(null)

onMounted(async () => {
  const {data} = await useFetch('http://localhost:3000/api/spells')
  spells.value = data.value
})
</script>

<template>
  <section class="pt-22 p-8 bg-white dark:bg-gray-900 min-h-screen">
    <navbar class="mb-8 absolute top-0 left-0 right-0" />
    <spell-table :spells="spells" />
  </section>
</template>
