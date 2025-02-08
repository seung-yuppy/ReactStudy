// 이코드를 분석해오시고
// 여러분들 판단에 커스텀훅은 다른 파일로 분리하여 import 처리해주세요.

import { useImagePreloader } from "./customHook.js";

function ImageGallery() {
    // 이미지 url 배열에 저장
    const images = [
        "https://i.ibb.co/yBX6kjKp/4.png",
        "https://i.ibb.co/Ps2G5KWh/5.png",
        "https://i.ibb.co/wF4k2gPC/6.png",
        "https://i.ibb.co/Tx7h5xfV/7.png"
    ];

    // 커스텀 훅에서 나온 로딩상태와 로딩진행률을 가져온다
    const { loadingStatus, progress } = useImagePreloader(images);

    // 로딩상태가 로딩이면 해당 로딩메시지를 리턴한다
    if (loadingStatus === 'loading') {
        return (
            <div>
                <p>이미지 로딩 중... {Math.round(progress)}%</p>
                <div style={{
                    width: '200px',
                    height: '20px',
                    border: '1px solid #ccc'
                }}>
                    <div style={{
                        width: `${progress}%`,
                        height: '100%',
                        backgroundColor: 'blue',
                        transition: 'width 0.3s'
                    }} />
                </div>
            </div>
        );
    }

    // 로딩상태가 error되면 에러 메시지를 리턴한다
    if (loadingStatus === 'error') {
        return <div>이미지 로딩 중 오류가 발생했습니다.</div>;
    }

    // 로딩상태가 completed되면 이미지 렌더링을 한다
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
            {images.map((src, index) => (
                <img 
                    key={index}
                    src={src}
                    alt={`Gallery item ${index + 1}`}
                    style={{ width: '100%', height: 'auto' }}
                />
            ))}
        </div>
    );
}

export default ImageGallery;