import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    highlight_data: undefined,
    newarrival_data: undefined,
    category_data: undefined,
}

export const HomepageSlice = createSlice({
    name: "homepage",
    initialState,
    reducers: {
        get_highlight: () => { },
        set_highlight: (state, action) => {
            state.highlight_data = action.payload
        },
        get_newarrival: () => { },
        set_newarrival: (state, action) => {
            state.newarrival_data = action.payload
        },
        get_category: () => { },
        set_category: (state, action) => {
            state.category_data = action.payload
        },
    },
})

export const {
    get_highlight,
    set_highlight,
    get_newarrival,
    set_newarrival,
    get_category,
    set_category } = HomepageSlice.actions;

export default HomepageSlice.reducer;