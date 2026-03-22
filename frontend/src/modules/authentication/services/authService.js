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

export const requestOTP = (data) => {
  return axiosInstance.post("auth/request-otp/", data);
};

export const verifyOTP = (data) => {
  return axiosInstance.post("auth/verify-otp/", data);
};

export const resetPassword = (data) => {
  return axiosInstance.post("auth/reset-password/", data);
};