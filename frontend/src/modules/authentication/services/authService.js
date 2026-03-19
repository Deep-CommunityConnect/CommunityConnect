import axiosInstance from "../../../api/axios";

export const loginUser = (data) => {
  return axiosInstance.post("auth/login/", data);
};

export const registerUser = (data) => {
  return axiosInstance.post("auth/register/", data);
};

export const logoutUser = () => {
  return axiosInstance.post("auth/logout/");
};