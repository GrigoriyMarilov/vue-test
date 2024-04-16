<template>
  <div class="flex items-center">
    <span class="text-label text-[30px] font-bold mr-[73px]">
      Фильтровать по:
    </span>
    <div class="flex items-center gap-14 radio-toolbar">
      <input
        class="hidden"
        id="flag1"
        v-model="reactiveFlag"
        value="missing"
        :checked="reactiveFlag === 'missing'"
        type="radio"
      /><label
        for="flag1"
        class="px-5 py-2 rounded-xl checked:bg-select cursor-pointer"
        >Отсутсвующим</label
      >
      <input
        class="hidden"
        id="flag2"
        v-model="reactiveFlag"
        value="here"
        :checked="reactiveFlag === 'here'"
        type="radio"
      /><label
        for="flag2"
        class="px-5 py-2 rounded-xl checked:bg-select cursor-pointer"
        >Присутствующим</label
      >
      <input
        class="hidden"
        id="flag3"
        v-model="reactiveFlag"
        value="all"
        :checked="reactiveFlag === 'all'"
        type="radio"
      /><label
        for="flag3"
        class="px-5 py-2 rounded-xl checked:bg-select cursor-pointer"
        >Без фильра</label
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRef } from "vue";
import { useUserStore } from "../../store/useUserStore.ts";

export default defineComponent({
  setup() {
    const reactiveFlag = toRef(useUserStore(), "filterFlag");

    return { reactiveFlag };
  },
});
</script>

<style scoped></style>
