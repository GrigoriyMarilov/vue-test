<template>
  <Input
    v-model="nameValue"
    placeholder="Поиск по имени"
    class="w-[394px]"
    @input="onChange"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Input from "../ui/Input.vue";
import { useUserStore } from "../../store/useUserStore.ts";

export default defineComponent({
  components: { Input },

  setup() {
    const nameValue = ref("");
    const { filterUsersByName, setIsFilter } = useUserStore();

    function onChange() {
      if (nameValue.value.length > 0) {
        filterUsersByName(nameValue.value);
        setIsFilter(true);
      } else {
        setIsFilter(false);
      }
    }

    return { nameValue, onChange };
  },
});
</script>

<style scoped></style>
