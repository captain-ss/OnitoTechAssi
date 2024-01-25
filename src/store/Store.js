import { configureStore } from "@reduxjs/toolkit";
import CartReducer from './cart-slice/CartSlice'
import userReducers from './UserSlice/index'
import userDataReducer from './userInfo/userInfo'
import defaultAddressReducer from './defaultAdress/defaultAddress'
const store = configureStore({
    reducer:{
        user:userReducers,
        cart:CartReducer,
        userData:userDataReducer,
        defaultAddress:defaultAddressReducer

    }
})


export default store