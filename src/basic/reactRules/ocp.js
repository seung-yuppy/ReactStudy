// React의 CBD 개발방식이 붙일 때 유리(컴포넌트만 잘 붙이면 하나의 화면 완성)
//  --> 컴포넌트 자체가 재사용성, 확장성을 고려하지 않으면 안되는 구조

// 단 이 코드에서는 아쉬운 점이 있음
//  --> 컴포넌트의 취급 객체 자체가 한정되어 있다라는 아쉬움이 있음
//  --> post 컴포넌트만 취급을 하여 Card를 업데이트하는 경우이기 때문에 다른 비슷한 카드 구성 화면에서는 활용할 수 없다는 아쉬움이 있음
// const PostCardList = ({ posts }) => {
//     return (
//         <Wrapper>
//             {posts.map((post) => (
//                 <PostCard key={post.id} />
//             ))}
//         </Wrapper>
//     );
// };

// 다양한 종류의 카드를 활용할 수 있도록 Card 자체를 컴포넌트로 만든 후 해당 내용을 받아와 해당 화면에 맞도록 처리할 수 있음(공통된 작업을 컴포넌트화)
// const CardList = ({ datas = [], Card }) => {
//     return (
//         <Wrapper>
//             {datas.map((data) => (
//                 <Card key={data.id} />
//             ))}
//         </Wrapper>
//     );
// };