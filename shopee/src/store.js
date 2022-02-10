import {configureStore} from '@reduxjs/toolkit'

import cartReducer from "./reducers/cart"
import loginReducer from "./reducers/login"
import ProductReducer from "./reducers/ProductReducer"

export const store = configureStore({
   reducer: {
      cartReducer,
      loginReducer,
      ProductReducer
   },
})