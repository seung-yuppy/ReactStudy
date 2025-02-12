// 요구사항
// 1. 액션이 발생할 때마다 몇 초가 걸렸는지 콘솔에 출력
// 2. 액션이 type과 함께 시간을 표시 
// 3. 1초 이상 걸리는 액션은 경고 메시지 출력

const createLoggingMiddleware = () => store => next => action => {
    const start = Date.now();

    // 액션 실행
    const result = next(action);

    // 소요 시간 계산
    const end = Date.now();
    const diff = end - start;

    // 결과 출력
    console.log(`액션 ${action.type} 실행 시간: ${diff}ms`);

    if (diff > 1000) {
        console.warn(`경고: ${action.type} 액션이 ${diff}ms로 오래 걸렸습니다!`);
    }

    return result;
}

export default createLoggingMiddleware;