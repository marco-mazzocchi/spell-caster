<script setup lang="ts">
import type { Spells } from '@sc-app/common';

const {spells: Spells} = defineProps({spells: Array})
</script>

<template>


  <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" class="px-6 py-3">
          Id
        </th>
        <th scope="col" class="px-6 py-3">
          Name
        </th>
        <th scope="col" class="px-6 py-3">
          Concentration
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="spell in spells" :key="spell.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
        <td class="px-6 py-4">
          {{spell.id}}
        </td>
        <td class="px-6 py-4">
          {{spell.name}}
        </td>
        <td class="px-6 py-4">
          {{spell.concentration}}
        </td>
      </tr>
      </tbody>
    </table>
  </div>

</template>