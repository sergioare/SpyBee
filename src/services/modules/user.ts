import { UserResponse } from "../models/user";

export const userService = {
  getUser: async () => {
    await new Promise((res) => setTimeout(res, 300));
    const data: UserResponse = {
      data: {
        id: "2816ca21-a551-4cd6-8f8d-2af3b1ed859c",
        username: "Marco",
        role: "admin",
      }
    }
    return data;
  },
};

export default userService