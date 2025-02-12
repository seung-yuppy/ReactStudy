// 요구사항:
// 1. 라이트/다크 모드를 토글하는 버튼을 만드세요
// 2. 현재 모드에 따라 배경색과 글자색이 변경되어야 합니다
// 3. 현재 모드를 텍스트로 표시하세요 ("라이트 모드" 또는 "다크 모드")
// 4. 모드 변경 시 부드러운 전환 효과를 넣어주세요

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