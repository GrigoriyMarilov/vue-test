<template>
  <input
    class="input shadow-default"
    @input="handleChange"
    :value="modelValue"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Input",
  props: {
    modelValue: {
      required: true,
    },
  },
  emits: ["update:modelValue"],
  methods: {
    handleChange(event: Event) {
      const target = event.target as HTMLInputElement;
      this.$emit("update:modelValue", target.value);
    },
  },
});
</script>
