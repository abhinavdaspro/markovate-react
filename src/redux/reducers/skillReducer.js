import { createSlice } from '@reduxjs/toolkit'

const initialState = {
}

export const SkillReducer = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setSkill: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state = action.payload;
            return state
        },
    },
})

// Action creators are generated for each case reducer function
export const { setSkill } = SkillReducer.actions
export default SkillReducer.reducer