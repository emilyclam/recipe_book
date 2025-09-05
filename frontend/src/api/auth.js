import api from "@api/api";

export const login = async (username, password) => {
  try {
    const res = await api.post("/api/accounts/token", { username, password });
    localStorage.setItem("access", res.data.access);
    localStorage.setItem("refresh", res.data.refresh);
    return { success: true}
  } catch (err) {
    if (err.response?.status === 401) {
      return { success: false, error: "Invalid username or password." }
    }
    return { success: false, error: "Something went wrong. Please try again." }
  }
};

export const refresh = async () => {
  const res = await api.post("/api/accounts/token/refresh", {
    refresh: localStorage.getItem("refresh"),
  });
  
  localStorage.setItem("access", res.data.access);
  if (res.data.refresh) {
    localStorage.setItem("refresh", res.data.refresh);
  }
  return res.data.access;
};

export const logout = () => {
  localStorage.clear()
  window.location.href = '/';
};