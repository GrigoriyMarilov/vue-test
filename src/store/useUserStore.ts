import { defineStore } from "pinia";

export interface IUser {
  id?: number;
  name: string;
  company: string;
  group: TGroup;
  isHere: boolean;
}

export type TGroup = "Прохожий" | "Клиент" | "Партнёр" | "";
export type TFilterFlag = "missing" | "here" | "all";
export const useUserStore = defineStore("userStore", {
  state: () => {
    return {
      filterFlag: "all" as TFilterFlag,
      isFilter: false,
      users: [
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
      ] as IUser[],

      filteredUsers: [] as IUser[],
    };
  },
  actions: {
    addUser(user: IUser) {
      this.users.push({ ...user, id: this.users.length + 1 });
    },

    editUser(updatedUser: IUser) {
      const userIndex = this.users.findIndex(
        (user) => updatedUser.id === user.id,
      );
      if (userIndex !== -1) {
        this.users[userIndex] = { ...this.users[userIndex], ...updatedUser };
        console.log(this.users[userIndex]);
      } else {
        alert("Пользователь не найден");
      }
    },
    filterUsersByName(name: string) {
      this.filteredUsers = this.users.filter((user) =>
        user.name.trim().toUpperCase().includes(name.trim().toUpperCase()),
      );

      console.log(this.filteredUsers);
      return;
    },
    setIsFilter(value: boolean) {
      this.isFilter = value;
    },
  },
});
