import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, fetchMovie } from "./movieSlice";

function MovieList() {
    const [movie, setMovie] = useState("");
    const dispatch = useDispatch();
    const { movies, movieDetail, status, error } = useSelector((state) => state.movies);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchMovies(movie));
        setMovie("")
    };

    if (status === 'loading') {
        return <div>로딩 중...</div>
    };

    if (status === 'failed') {
        return <div>{error}</div>
    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={movie} onChange={(e) => setMovie(e.target.value)} placeholder="영화 제목을 입력하세요" />
                    <button type="submit">검색</button>
                </form>

                <div style={{ display: 'flex', gap: '20px' }}>
                    <div style={{ flex: 1 }}>
                        <h2>영화 검색 목록</h2>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {movies && movies.map((movie) => (
                                <li
                                    key={movie.imdbID}
                                    onClick={() => dispatch(fetchMovie(movie.imdbID))}
                                    style={{
                                        padding: '10px',
                                        margin: '5px 0',
                                        border: '1px solid #ddd',
                                        cursor: 'pointer',
                                        backgroundColor: movieDetail?.imdbID === movie.imdbID ? '#e3e3e3' : 'white'
                                    }}
                                >
                                    <div style={{ display: "flex", alignItems: "center", gap: "5pxd" }}>
                                        <p>{movie.Title}</p>
                                        <span style={{ border: "1px solid black", padding: "5px", borderRadius: "20px" }}>{movie.Type}</span>
                                        <span style={{ border: "1px solid black", padding: "5px", borderRadius: "20px" }}>{movie.Year}</span>
                                    </div>

                                </li>
                            ))}
                        </ul>
                    </div>



                    {movieDetail && Object.keys(movieDetail).length > 0 &&
                        <>
                            <div style={{ flex: 1, padding: '20px', border: '1px solid #ddd' }}>
                                <h2>{movieDetail.Title}의 상세정보</h2>
                                <div>
                                    <img src={movieDetail.Poster} alt={movieDetail.Title} />
                                    <p><strong>줄거리:</strong><br /> {movieDetail.Plot}</p>
                                    <p><strong>개봉:</strong> {movieDetail.Released}</p>
                                    <p><strong>감독:</strong> {movieDetail.Writer}</p>
                                    <p><strong>평점:</strong> {movieDetail.imdbRating}</p>
                                    <p><strong>배우:</strong> {movieDetail.Actors}</p>
                                </div>
                            </div>
                        </>}
                </div>
            </div>
        </>
    )
}

export default MovieList;