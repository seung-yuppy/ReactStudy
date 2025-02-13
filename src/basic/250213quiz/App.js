// 요구사항:
// 1. useCounter라는 커스텀 훅을 만드세요
// 2. 증가, 감소, 리셋 기능이 있어야 합니다
// 3. 최소값과 최대값을 설정할 수 있어야 합니다
// 4. 현재 값이 최소값이나 최대값일 때는 해당 버튼이 비활성화되어야 합니다

import { useEffect, useState } from "react";

function useCounter(initialValue = 0, { min = 0, max = 10 } = {}) {
    // 여기에 코드를 작성하세요
    const [count, setCount] = useState(initialValue);

    const increment = () => {
        if (count < max) {
            setCount((count) => count + 1);
        }
    };

    const decrement = () => {
        if (count > min) {
            setCount((count) => count - 1);
        }
    };

    const reset = () => {
        setCount(0);
    };

    return { count, increment, decrement, reset };
}

// 사용 예시
function CounterComponent() {
    const { count, increment, decrement, reset } = useCounter(5, { min: 0, max: 10 });

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

// export default CounterComponent;

// 1. 입력값이 변경될 때마다 검색 결과 업데이트
// 2. 디바운스 처리 (입력이 끝나고 500ms 후 검색)
// 3. 로딩 상태 표시
// 4. 검색 결과가 없을 때 메시지 표시
// 5. 데이터는 다음의 주소에서 받아올것
// `https://jsonplaceholder.typicode.com/posts?q=${searchTerm}`

// 디바운스 --> 연속적으로 호출되는 함수로 인한 성능 저하를 막기 위해 시간을 설정해 시간 안에 마지막 함수를 호출한다
// 예를 들어 s를 입력하고 설정한 시간 이내에 입력을 추가로 하면 입력됨과 동시에 시간도 다시 초기화 해 설정한 시간 이내에
// 입력을 받는다. 만약에 설정한 시간이 지나고도 입력을 못받으면 해당 값을 확정으로 함수를 호출한다
// value는 입력값, delay는 시간설정
const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    // useEffect로 value 변경 시점마다 clearTimeout을 진행하도록 설정한다(왜냐하면 시간 내에 value가 들어오면 또 다른 입력을 받을 수 있기 때문이다)
    useEffect(() => {
        // setTimeout으로 시간 내에 입력한 값을 받도록 설정한다.
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(timer);
        };
    }, [value]);

    return debouncedValue;
};


function SearchComponent() {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // 디바운스를 만든 커스텀 훅에 검색value와 요구조건의 500ms를 설정한다
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    useEffect(() => {
        // 디바운스검색값이 있을 때 데이터를 렌더링하도록 코드를 작성하였다
        // 초기에는 로딩상태에 들어간 후 getPost함수를 통해 데이터를 불러오면 로딩상태에 빠져나온다
        
        if (debouncedSearchTerm) {
            setIsLoading(true);
            async function getPost(debouncedSearchTerm) {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${debouncedSearchTerm}`);
                const data = await response.json();
                console.log(data);
                setResults(data);
                setIsLoading(false);
            };
            getPost(debouncedSearchTerm);
        } else {
            setIsLoading(false);
        }

    }, [debouncedSearchTerm])

    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                placeholder="검색어를 입력하세요"
            />
            {isLoading && <div>검색 중...</div>}
            {!isLoading && results.length === 0 &&
                <div>검색 결과가 없습니다</div>}
            <ul>
                {results.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default SearchComponent;