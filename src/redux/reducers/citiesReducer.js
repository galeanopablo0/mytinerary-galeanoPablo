import { createReducer } from "@reduxjs/toolkit";
import { filterByName, load } from "../actions/ciudadesActions";

const initialState = {
    all: [],
    filtered: [],
    search: ""
}

const reducer = createReducer(initialState, (builder) => {
    builder.addCase(load, (state, action) => {
        return { ...state, all: action.payload, filtered: action.payload }
    } ).addCase(filterByName, (state, action) => {
        const aux = state.all.filter((ciudad) => ciudad.name
        .toLowerCase()
        .startsWith(action.payload.toLowerCase().trim()));
        return {...state, filtered: aux, search: action.payload}
    } )
})

export default reducer; 