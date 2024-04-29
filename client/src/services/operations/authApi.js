import { toast } from "react-hot-toast"

import { setLoading, } from "../../slices/authSlice"
import { apiConnector } from "../apiConnector"
import { endpoints } from "../apis"

const {
  SENDOTP_API,
  SIGNUP_API,

} = endpoints


// ================ send Otp ================
export function sendOtp(email, navigate) {
  return async (dispatch) => {

    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));

    try {
      const response = await apiConnector("POST", SENDOTP_API, {
        email,
      })
      // console.log("SEND OTP API RESPONSE ---> ", response)

      // console.log(response.data.success)
      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      navigate("/verify-email");
      toast.success("OTP Sent Successfully");
    } catch (error) {
      console.log("SENDOTP API ERROR --> ", error);
      toast.error(error.response.data?.message);
      // toast.error("Could Not Send OTP")
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  }
}


// ================ sign Up ================
export function signUp(firstName, lastName, email, password, confirmPassword, otp, navigate) {
  return async (dispatch) => {

    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", SIGNUP_API, {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        otp,
      })

      console.log("SIGNUP API RESPONSE --> ", response);
      if (!response.data.success) {
        toast.error(response.data.message);
        throw new Error(response.data.message);
      }

      toast.success("Signup Successful");
      navigate("/login");
    } catch (error) {
      console.log("SIGNUP API ERROR --> ", error);
      // toast.error(error.response.data.message);
      toast.error("Invalid OTP");
      // navigate("/signup")
    }
    dispatch(setLoading(false))
    toast.dismiss(toastId)
  }
}