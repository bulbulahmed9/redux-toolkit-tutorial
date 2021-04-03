import {authSlice} from "./slice"
const {actions : slice} = authSlice;



// login actions
export const loginAction = (phone) => (dispatch) => {
    dispatch(slice.setLogin(phone))
} 

// logout action
export const logoutAction = () => (dispatch) => {
    dispatch(slice.setLogout())
}