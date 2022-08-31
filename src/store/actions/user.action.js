import { SET_USER_INFO } from "../types/user.type"

export const setUserInfoAction = (data) => {
   return {
      type: SET_USER_INFO,
      payload: data,
   }
}