import axios from "axios";

const API = axios.create({
  baseURL: "https://backend-zen-project-1.onrender.com/api",
  headers: {
    "Content-Type": "application/json", // Default Content-Type
  },
});

export const UserSignUp = async (data) => API.post("/user/signup", data);
export const UserSignIn = async (data) => API.post("/user/signin", data);

export const getDashboardDetails = async (userId, token) =>
  API.get(`/user/dashboard?userId=${userId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const getWorkouts = async (token, date) =>
  await API.get(`/user/workout${date}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const addWorkout = async (token, data) =>
  await API.post(`/user/workout`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });

  
