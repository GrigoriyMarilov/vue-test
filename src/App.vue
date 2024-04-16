<template>
  <div class="px-[50px]">
    <header class="pt-6 pb-[30px] flex items-end gap-8">
      <logo></logo>
      <UserFilter />
      <CreateUser />
      <UserCounter class="ml-auto" />
    </header>
    <main>
      <UserList />
      <TypeFilter class="absolute left-[50px] bottom-[50px]" />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Logo from "./components/ui/Logo.vue";
import Input from "./components/ui/Input.vue";
import UserList from "./components/userList/UserList.vue";
import CreateUser from "./components/User/CreateUser.vue";
import UserFilter from "./components/UserFilter/UserFilter.vue";
import TypeFilter from "./components/UserFilter/TypeFilter.vue";
import UserCounter from "./components/UserCounter/UserCounter.vue";

export default defineComponent({
  name: "App",
  components: {
    UserCounter,
    TypeFilter,
    UserFilter,
    CreateUser,
    UserList,
    Input,
    Logo,
  },
});
</script>
