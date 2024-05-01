const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

// AUTH ENDPOINTS
export const endpoints = {
  SENDOTP_API: BASE_URL + "/auth/sendotp",
  SIGNUP_API: BASE_URL + "/auth/signup",
  LOGIN_API: BASE_URL + "/auth/login",
  USER_ALL_TASKS: BASE_URL + "/todo/all-todos",
  DELETE_TASK: BASE_URL + "/todo/delete-todo",
  UPDATE_TASK: BASE_URL + "/todo/update-todo",

}
