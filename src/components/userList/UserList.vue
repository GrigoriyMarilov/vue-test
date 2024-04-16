<template>
  <div>
    <div class="relative max-h-[670px] overflow-auto">
      <div
        class="grid grid-cols-11 text-label pb-[7px] font-semibold text-xl border-b-4"
      >
        <span class="px-[3px]">Номер</span>
        <span class="col-span-3">ФИО</span>
        <span class="col-span-2">Компания</span>
        <span class="col-span-4">Группа</span>
        <span>Присутствие</span>
      </div>
      <UserCard
        v-if="reactiveIsFilter"
        v-for="user in reactiveFilteredUsers"
        :key="user.id"
        :user="user"
        @click="userClickHandler(user)"
        :show="
          reactiveFilterFlag === 'all' ||
          (reactiveFilterFlag === 'missing' && !user.isHere) ||
          (reactiveFilterFlag !== 'missing' && user.isHere)
        "
      />
      <UserCard
        v-else
        v-for="user in users"
        :key="user.id"
        :user="user"
        @click="userClickHandler(user)"
        :show="
          reactiveFilterFlag === 'all' ||
          (reactiveFilterFlag === 'missing' && !user.isHere) ||
          (reactiveFilterFlag !== 'missing' && user.isHere)
        "
      />
    </div>
    <Modal v-bind:open="isOpen" @close="changeIsOpen()">
      <UserForm :user="selectedUser" @close="changeIsOpen()"></UserForm>
    </Modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, toRef } from "vue";
import UserCard from "../User/UserCard.vue";
import { IUser, useUserStore } from "../../store/useUserStore.ts";
import Modal from "../ui/PopUp.vue";
import UserForm from "../User/UserForm.vue";

export default defineComponent({
  name: "UserList",
  components: { UserForm, Modal, UserCard },
  setup() {
    const isOpen = ref(false);
    const selectedUser = ref<null | IUser>(null);
    const { users } = useUserStore();
    const reactiveIsFilter = toRef(useUserStore(), "isFilter");
    const reactiveFilteredUsers = toRef(useUserStore(), "filteredUsers");
    const reactiveFilterFlag = toRef(useUserStore(), "filterFlag");

    function userClickHandler(user: IUser) {
      selectedUser.value = user;
      changeIsOpen();
    }

    function changeIsOpen() {
      isOpen.value = !isOpen.value;
    }

    return {
      isOpen,
      selectedUser,
      users,
      reactiveFilteredUsers,
      reactiveIsFilter,
      userClickHandler,
      changeIsOpen,
      reactiveFilterFlag,
    };
  },
});
</script>

<style scoped>
/* Ваши стили здесь */
</style>
