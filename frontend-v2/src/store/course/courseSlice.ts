import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Course, LoadingError } from '../types';

interface CourseState extends LoadingError {
  courses: Course[];
}

const initialState: CourseState = {
  courses: [],
  loading: false,
  error: null,
};

const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    updateCourseRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    updateCourseSuccess: (state, action: PayloadAction<Course>) => {
      state.loading = false;
      state.error = null;
      const index = state.courses.findIndex(
        (course) => course.id === action.payload.id
      );
      if (index !== -1) {
        state.courses[index] = action.payload;
      }
    },
    updateCourseFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { updateCourseRequest, updateCourseSuccess, updateCourseFailure } =
  courseSlice.actions;

export default courseSlice.reducer;
