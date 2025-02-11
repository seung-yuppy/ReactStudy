import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './themeSlice';

function ThemeToggle() {
    const isDarkMode = useSelector(state => state.theme.isDarkMode);
    const dispatch = useDispatch();

    return (
        <div style={{
            backgroundColor: isDarkMode ? '#333' : '#fff',
            color: isDarkMode ? '#fff' : '#333',
            padding: '20px',
            transition: 'all 0.3s ease'
        }}>
            <h1>현재 테마: {isDarkMode ? '다크 모드' : '라이트 모드'}</h1>
            <button onClick={() => dispatch(toggleTheme())}>
                테마 변경
            </button>
        </div>
    );
}

export default ThemeToggle;