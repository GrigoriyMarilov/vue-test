<template>
  <div class="relative">
    <div class="absolute top-6 right-[23px] z-40">
      <svg
        width="10"
        height="5"
        viewBox="0 0 10 5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0L5 5L10 0H0Z" fill="#737373" />
      </svg>
    </div>
    <select
      class="select bg-white shadow-default appearance-none w-full"
      v-model="internalValue"
      @change="handleChange"
    >
      <option value="" disabled selected>Выберите</option>
      <option v-for="option in options" :value="option">{{ option }}</option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, Ref, ref, watch } from "vue";

export default defineComponent({
  name: "Select",
  props: {
    options: {
      type: Array as PropType<string[]>,
      required: true,
    },
    modelValue: {
      type: String as PropType<string>, // тип модели
      required: true,
    },
  },
  setup(props, { emit }) {
    // Создаем реактивную переменную для хранения значения select
    const internalValue: Ref<string> = ref(props.modelValue);

    // Слушаем изменения в select и отправляем событие обновления модели
    const handleChange = () => {
      emit("update:modelValue", internalValue.value);
    };
    watch(
      () => props.modelValue,
      (newValue) => {
        internalValue.value = newValue;
      },
    );
    return { internalValue, handleChange };
  },
});
</script>
