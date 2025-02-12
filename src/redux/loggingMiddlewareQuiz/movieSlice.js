import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchMovies = createAsyncThunk(
    'posts/fetchMovies',
    async (search, { rejectWithValue }) => {
        try {
            const response = await fetch(`https://www.omdbapi.com/?apikey=2326d4aa&s=${search}`)
            const data = await response.json();
            const movieData = data.Search;
            return movieData;
        } catch (error) {
            return rejectWithValue("영화 검색 실패");
        }
    }
)

export const fetchMovie = createAsyncThunk(
    'posts/fetchMovie',
    async (id, { rejectWithValue }) => {
        try {
            const response = await fetch(`https://www.omdbapi.com/?apikey=2326d4aa&i=${id}`);
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue("영화 상세 검색 실패");
        }
    }
)

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        movies: [],
        movieDetail: {},
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.movies = action.payload;
            })
            .addCase(fetchMovies.rejected, (state) => {
                state.status = 'failed';
            })
            .addCase(fetchMovie.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchMovie.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.movieDetail = action.payload;
            })
            .addCase(fetchMovie.rejected, (state) => {
                state.status = 'failed';
            })
    }
});

export const { actions } = movieSlice;
export default movieSlice.reducer;