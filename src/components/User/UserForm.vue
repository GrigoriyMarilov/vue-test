<template>
  <form
    class="flex flex-col gap-10 max-w-[775px] mx-auto"
    @submit.prevent="submitHandler"
  >
    <div class="grid grid-cols-3">
      <label class="font-semibold text-label text-[32px]" for="create_user_name"
        >ФИО</label
      >
      <Input
        v-model="name"
        class="col-span-2"
        id="create_user_name"
        type="text"
      />
    </div>
    <div class="grid grid-cols-3">
      <label
        class="font-semibold text-label text-[32px]"
        for="create_user_company"
        >Компания</label
      >
      <Input
        v-model="company"
        class="col-span-2"
        id="create_user_company"
        type="text"
      />
    </div>
    <div class="grid grid-cols-3">
      <label
        class="font-semibold text-label text-[32px]"
        for="create_user_group"
        >Группа</label
      >
      <Select
        :options="['Прохожий', 'Клиент', 'Партнёр']"
        v-model="group"
        class="col-span-2"
        id="create_user_group"
      />
    </div>

    <div class="grid grid-cols-3">
      <label
        class="font-semibold text-label text-[32px]"
        for="create_user_isHere"
        >Присутствие</label
      >
      <div class="flex items-center">
        <Input
          type="checkbox"
          v-model="isHere"
          id="create_user_isHere"
          class="checkbox col-span-2"
        />
      </div>
    </div>
    <div class="flex gap-[34px]">
      <Button class="bg-primary text-primary-foreground" type="submit"
        ><span>{{ user ? "Изменить" : "Добавить" }}</span></Button
      >
      <Button
        class="bg-secondary text-secondary-foreground"
        type="button"
        @click="close"
        ><span>Закрыть</span></Button
      >
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from "vue";
import Input from "../ui/Input.vue";
import Button from "../ui/Button.vue";
import { IUser, TGroup, useUserStore } from "../../store/useUserStore.ts";
import Select from "../ui/Select.vue";

export default defineComponent({
  name: "UserForm",
  components: { Select, Input, Button },
  props: {
    user: {
      type: Object as PropType<IUser | null>,
      required: false,
    },
  },
  setup(props) {
    const userStore = useUserStore();
    const name = ref("");
    const company = ref("");
    const group = ref<TGroup>("");
    const isHere = ref(false);

    watch(
      () => props.user,
      (newUser) => {
        if (newUser) {
          name.value = newUser.name || "";
          company.value = newUser.company || "";
          group.value = newUser.group || "";
          isHere.value = newUser.isHere || false;
        }
      },
    );

    function close() {
      this.$emit("close", false);
    }

    function reset() {
      name.value = "";
      company.value = "";
      group.value = "";
      isHere.value = false;
    }

    function submitHandler() {
      if (props.user) {
        console.log("editUser");
        userStore.editUser({
          ...props.user,
          name: name.value,
          company: company.value,
          group: group.value,
          isHere: isHere.value,
        });
        this.$emit("close", false);
      } else {
        if (name.value && company.value && group.value) {
          const newUser: IUser = {
            name: name.value,
            company: company.value,
            group: group.value,
            isHere: isHere.value,
          };
          userStore.addUser(newUser);
          reset();
          this.$emit("close", false);
        } else {
          alert("Провал");
        }
      }
    }

    return { name, company, group, isHere, close, submitHandler };
  },
});
</script>
