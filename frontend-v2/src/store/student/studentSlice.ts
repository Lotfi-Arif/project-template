import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Student, LoadingError } from '../types';

interface StudentState extends LoadingError {
  students: Student[];
}

const initialState: StudentState = {
  students: [],
  loading: false,
  error: null,
};

const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    fetchStudentsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchStudentsSuccess: (state, action: PayloadAction<Student[]>) => {
      state.students = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchStudentsFailure: (state, action: PayloadAction<string>) => {
      state.students = [];
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchStudentsRequest,
  fetchStudentsSuccess,
  fetchStudentsFailure,
} = studentSlice.actions;

export default studentSlice.reducer;
