<template>
  <li
    class="grid grid-cols-11 text-3xl my-[30px] hover:bg-black/5 cursor-pointer"
    v-if="user && show"
  >
    <div>{{ user.id }}</div>
    <div class="col-span-3">{{ user.name }}</div>
    <div class="col-span-2">{{ user.company }}</div>
    <div class="col-span-4">{{ user.group }}</div>
    <div class="flex justify-center">
      <span
        class="block w-[60px] h-[60px] rounded-full"
        :class="{ 'bg-good': user.isHere, 'bg-bad': !user.isHere }"
      />
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { IUser } from "../../store/useUserStore.ts";

export default defineComponent({
  props: {
    user: {
      type: Object as PropType<IUser>,
      required: true,
    },
    show: {
      type: Boolean,
      required: true,
    },
  },
});
</script>
