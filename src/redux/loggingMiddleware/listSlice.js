import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts', // 액션타입 설정
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue('내용을 불러 오는 것에 실패함');
        }
    }
);

const postSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.loading = 'pending';
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.loading = 'succeeded';
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state) => {
                state.loading = 'failed';
            });
    }
});

export const { actions } = postSlice;
export default postSlice.reducer;