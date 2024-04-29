import { toast } from "react-hot-toast"

import { setLoading, } from "../../slices/authSlice"
import { apiConnector } from "../apiConnector"
import { endpoints } from "../apis"

const {
  SENDOTP_API,
 
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