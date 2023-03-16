import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Teacher, LoadingError } from '../types';

interface TeacherState extends LoadingError {
  teachers: Teacher[];
}

const initialState: TeacherState = {
  teachers: [],
  loading: false,
  error: null,
};

const teacherSlice = createSlice({
  name: 'teacher',
  initialState,
  reducers: {
    // Existing reducers ...
    updateTeacherRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    updateTeacherSuccess: (state, action: PayloadAction<Teacher>) => {
      state.loading = false;
      state.error = null;
      const index = state.teachers.findIndex(
        (teacher) => teacher.id === action.payload.id
      );
      if (index !== -1) {
        state.teachers[index] = action.payload;
      }
    },
    updateTeacherFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const {
  updateTeacherRequest,
  updateTeacherSuccess,
  updateTeacherFailure,
} = teacherSlice.actions;

export default teacherSlice.reducer;
