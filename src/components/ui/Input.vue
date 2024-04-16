<template>
  <input
    v-if="type === 'checkbox'"
    class="checkbox"
    type="checkbox"
    :checked="modelValue"
    @change="handleChange"
  />
  <input
    v-else
    class="input shadow-default"
    :type="type"
    :value="modelValue"
    @input="handleChange"
  />
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "Input",
  props: {
    type: {
      type: String as PropType<string>,
      default: "text",
    },
    modelValue: {
      required: true,
    },
  },
  emits: ["update:modelValue"],
  methods: {
    handleChange(event: Event) {
      const target = event.target as HTMLInputElement;
      if (this.type === "checkbox") {
        this.$emit("update:modelValue", target.checked);
      } else {
        this.$emit("update:modelValue", target.value);
      }
    },
  },
});
</script>
