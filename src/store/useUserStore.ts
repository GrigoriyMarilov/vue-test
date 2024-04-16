import { defineStore } from "pinia";
import { watch } from "vue";

export interface IUser {
  id?: number;
  name: string;
  company: string;
  group: TGroup;
  isHere: boolean;
}

export type TGroup = "Прохожий" | "Клиент" | "Партнёр" | "";
export type TFilterFlag = "missing" | "here" | "all";

const saveUsersToLocalStorage = (users: IUser[]) => {
  localStorage.setItem("userList", JSON.stringify(users));
};

export const useUserStore = defineStore("userStore", {
  state: () => {
    const savedUsers = localStorage.getItem("userList");
    const users = savedUsers
      ? (JSON.parse(savedUsers) as IUser[])
      : ([
          {
            id: 1,
            name: "Зубенко Михаил Петрович",
            company: `ООО “АСОЛЬ”`,
            group: "Партнёр",
            isHere: true,
          },
          {
            id: 2,
            name: "Зубенко Михаил Петрович",
            company: `ООО “АСОЛЬ”`,
            group: "Прохожий",
            isHere: false,
          },
        ] as IUser[]);

    const state = {
      filterFlag: "all" as TFilterFlag,
      isFilter: false,
      users,
      filteredUsers: [] as IUser[],
    };

    watch(
      () => state.users,
      (newUsers) => {
        saveUsersToLocalStorage(newUsers);
      },
      { deep: true },
    );

    return state;
  },
  actions: {
    addUser(user: IUser) {
      this.users.push({ ...user, id: this.users.length + 1 });
      saveUsersToLocalStorage(this.users);
    },

    editUser(updatedUser: IUser) {
      const userIndex = this.users.findIndex(
        (user) => updatedUser.id === user.id,
      );
      if (userIndex !== -1) {
        this.users[userIndex] = { ...this.users[userIndex], ...updatedUser };
        saveUsersToLocalStorage(this.users);
      } else {
        alert("Пользователь не найден");
      }
    },

    filterUsersByName(name: string) {
      this.filteredUsers = this.users.filter((user) =>
        user.name.trim().toUpperCase().includes(name.trim().toUpperCase()),
      );
    },

    setIsFilter(value: boolean) {
      this.isFilter = value;
    },
  },
});
