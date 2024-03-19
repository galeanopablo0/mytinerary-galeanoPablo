import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from './reducers/citiesReducer'

const store = {
    cities: citiesReducer
}

export default configureStore( { 
    reducer: store
} )