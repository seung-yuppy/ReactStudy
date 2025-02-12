// 요구사항:
// 1. API 요청 결과를 캐시하여 중복 요청 방지
// 2. 캐시 만료 시간 설정 가능
// 3. 강제로 캐시를 무시하고 새로운 요청을 보낼 수 있는 옵션 추가
// 4. 캐시된 데이터 크기 제한 설정

const createApiCacheMiddleware = (options = {}) => {

    return store => next => action => {
        cleanOldCache();

        // 캐시된 데이터가 있고, 강제 새로고침이 아닌 경우
        if (cache.has(cacheKey) && !ignoreCacheParam) {
            const cachedData = cache.get(cacheKey);
            return Promise.resolve(cachedData.data);
        }

        // 새로운 요청 실행
        return next(action).then(result => {
            // 성공한 경우에만 캐시
            if (!result.error) {
                enforceMaxSize();
                cache.set(cacheKey, {
                    timestamp: Date.now(),
                    data: result
                });
            }
            return result;
        });
    };
};