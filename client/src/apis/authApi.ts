import { api } from "./api";

export const getProfile = async () => {
  const res = await api.get("/auth/getMe");
  return res.data;
};

export const fetchProfileCompletion = async (id:string) => {
  const res = await api.get(`/students/profile-percentage/${id}`)
  return res.data.data
}

export const handleLogout = async () => {
  const res = await api.post("/auth/logout");
  return res.data;
};
