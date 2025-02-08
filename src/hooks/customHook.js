import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data));
    }, [url]);

    console.log(data);
    return [data];
}

export function useImagePreloader(imageUrls) {
    // 로딩상태 초기는 idle이고 로딩진행률 초기는 0이다
    const [loadingStatus, setLoadingStatus] = useState('idle');
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // 이미지 url 없으면 종료
        if (!imageUrls.length) return;

        // 로드 이미지 개수를 알려준다
        let loadedCount = 0;
        // 비동기 작업의 처리를 위한 boolean(?)
        let aborted = false;

        // 로딩상태를 로딩으로 바꿈
        setLoadingStatus('loading');

        // 배열의 이미지들을 하나씩 불러오는 함수(promise사용)
        const loadImage = (url) => {
            return new Promise((resolve, reject) => {
                const img = new Image();

                // 이미지가 성공적으로 로드되었을 때 호출
                img.onload = () => resolve(url);
                // 이미지 로드에러 시 호출
                img.onerror = () => reject(url);
                // img.src에 url을 설정하면 이미지를 비동기로 로드
                img.src = url;
            });
        };

        // 배열의 이미지들 모두 loadImage를 호출하고 Promise배열이 생성된다
        const promises = imageUrls.map(url => {
            return loadImage(url)
                .then(() => {
                    // 정상적으로 배열안에 url들이 각각 비동기로 promise객체가 들어오게 되고, 로드 이미지 개수를 1개씩 추가한다
                    // imageUrls의 배열들이 1개씩 성공할 때마다 진행률이 점차 늘어나게 된다
                    if (!aborted) {
                        loadedCount++;
                        setProgress((loadedCount / imageUrls.length) * 100);
                    }
                })
                .catch(error => {
                    // 배열안에 promise 객체가 들어오지 않거나 에러 발생시 로드상태를 에러로 바꾸고 에러 메시지 출력
                    if (!aborted) {
                        setLoadingStatus('error');
                        console.error(`Failed to load image: ${error}`);
                    }
                });
        });

        // 배열의 이미지들이 모두 Promise 배열로 완료되었으면 Promise.all 실행
        Promise.all(promises)
            .then(() => {
                if (!aborted) {
                    // 모든 이미지가 promise.all로 성공하였다면 로딩상태가 completed가 된다
                    setLoadingStatus('completed');
                }
            })
            .catch(() => {
                if (!aborted) {
                    setLoadingStatus('error');
                }
            });

        // 비동기 처리가 끝나서 true로 바꾸고 useEffect절은 종료된다
        return () => {
            aborted = true;
        };
    }, [imageUrls]);    // 이미지 배열이 바뀔 때만 useEffect 실행한다

    return { loadingStatus, progress };
}