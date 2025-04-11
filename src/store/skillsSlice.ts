
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Monitor, Server, Database, Code, Layers, Cloud } from 'lucide-react';
import type { ReactNode } from 'react';

export interface SkillCategory {
  id: string;
  title: string;
  icon: ReactNode;
  skills: string[];
  color: string;
}

interface SkillsState {
  activeCategory: string;
  categories: SkillCategory[];
}

// Initial state will be populated in the component
const initialState: SkillsState = {
  activeCategory: "frontend",
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
