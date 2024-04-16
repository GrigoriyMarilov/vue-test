<template>
  <div class="font-bold text-label text-3xl flex flex-col justify-end">
    <span>Посетители</span>
    <div class="text-right">
      <span class="text-good">{{ hereCount }}</span> /
      <span class="text-bad">{{ missCount }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, toRef } from "vue";
import { useUserStore } from "../../store/useUserStore.ts";

export default defineComponent({
  setup() {
    const { users } = useUserStore();
    const usersRef = toRef(users);

    const hereCount = computed(
      () => usersRef.value.filter((user) => user.isHere).length,
    );
    const missCount = computed(
      () => usersRef.value.filter((user) => !user.isHere).length,
    );

    return {
      hereCount,
      missCount,
    };
  },
});
</script>

<style scoped></style>
