export type Role = "ADMIN" | "PLACEMENT_OFFICER" | "MENTOR" | "STUDENT";

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  profileUrl: string;
}
