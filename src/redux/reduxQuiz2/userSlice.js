import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
    'posts/fetchUsers', // 액션타입 설정
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue('내용을 불러 오는 것에 실패함');
        }
    }
);

const userSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
        status: "idle",
        error: null,
        selectedUser: {},
    },
    reducers: {
        selectUser: (state, action) => {
            state.selectedUser = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = 'pending';
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = 'succeeded';
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state) => {
                state.loading = 'failed';
            });
    }
});

export const { selectUser } = userSlice.actions;
export default userSlice.reducer;