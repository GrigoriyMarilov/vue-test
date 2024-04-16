<template>
  <input
    class="checkbox"
    type="checkbox"
    :checked="modelValue"
    @change="handleChange"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CheckBox",
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["update:modelValue"],
  methods: {
    handleChange(event: Event) {
      const target = event.target as HTMLInputElement;
      this.$emit("update:modelValue", target.checked);
    },
  },
});
</script>

<style scoped></style>
