<template>
  <div>
    <Button class="bg-primary text-primary-foreground" @click="changeIsOpen()">
      <span>Добавить</span>
    </Button>
    <Modal v-bind:open="isOpen" @close="changeIsOpen">
      <UserForm @close="changeIsOpen" />
    </Modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Button from "../ui/Button.vue";
import Modal from "../ui/PopUp.vue";
import UserForm from "./UserForm.vue";
export default defineComponent({
  components: { UserForm, Button, Modal },
  setup() {
    const isOpen = ref(false);
    const changeIsOpen = () => {
      isOpen.value = !isOpen.value;
    };

    return { isOpen, changeIsOpen };
  },
});
</script>
