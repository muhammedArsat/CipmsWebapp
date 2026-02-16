import { api } from "./api";

export const getProfile = async () => {
  const res = await api.get("/auth/getMe");
  return res.data;
};

export const handleLogout = async () => {
  const res = await api.post("/auth/logout");
  return res.data;
};
