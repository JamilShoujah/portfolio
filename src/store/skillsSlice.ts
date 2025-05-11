import { SkillsState, SkillCategory } from '@/models/interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: SkillsState = {
  activeCategory: 'frontend',
  categories: [],
};

export const skillsSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    setActiveCategory: (state, action: PayloadAction<string>) => {
      state.activeCategory = action.payload;
    },
    setCategories: (state, action: PayloadAction<SkillCategory[]>) => {
      state.categories = action.payload;
    },
  },
});

export const { setActiveCategory, setCategories } = skillsSlice.actions;
export default skillsSlice.reducer;
