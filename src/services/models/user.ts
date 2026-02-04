
type User= {
    id: string
    username: string
    role:Role
}

type Role = "admin"

type UserResponse = {
  data: User;
};

export type { User, Role, UserResponse}