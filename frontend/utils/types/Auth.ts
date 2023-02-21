export enum Role {
  Admin = "ADMIN",
  Parent = "PARENT",
  Student = "STUDENT",
  Superadmin = "SUPERADMIN",
  Teacher = "TEACHER",
}

export interface Auth {
  accessToken: string;
  refreshToken: string;
}

export interface User {
  createdAt: Date;
  firstName: string;
  id: string;
  lastName: string;
  parent?: any;
  role: Role;
  student?: any;
  teacher?: any;
  team: any;
  teamId: string;
  updatedAt: Date;
}

export interface AuthStore {
  auth: Auth | undefined;
  user: User | undefined;
  login(data: Auth): void;
  setMe(data: any): void;
  logout(): void;
}
