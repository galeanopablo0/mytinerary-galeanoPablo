import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from './reducers/citiesReducer'
import userReducer from "./reducers/userReducer";

const store = {
    cities: citiesReducer,
    user: userReducer
}

export default configureStore( { 
    reducer: store
} )