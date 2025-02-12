// Component : 상태를 화면에 표시
// Hooks : 함수형 컴포넌트에 기능을 제공.
// API(서버개발자 구현) : 서버로 부터 데이터를 불러올떄
// 상태변경(redux / reducer) : 상태 변경

// 리액트에서의 SRP
// 컴포넌트들은 결국 마지막에 하나로 잘 뭉치면되니까 UI를 구현하는 컴포넌트와 데이터를 불러오고 가공하는 컴포넌트 정도는 분리
// 결론 : 화면이랑 데이터랑 구조 나눠두기.(기능별로 분리)

// 아래의 컴포넌트는 사실 리스트 랜더링, 데이터 필터링, 데이터 패칭
// -> 위의 코드들을 기준에 맞춰서 따로 컴포넌트화
// const ActiveUsersList = () => {
//     const [users, setUsers] = useState([])

//     useEffect(() => {
//         const loadUsers = async () => {
//             const response = await fetch('/some-api')
//             const data = await response.json()
//             setUsers(data)
//         }

//         loadUsers()
//     }, [])

//     const weekAgo = new Date();
//     weekAgo.setDate(weekAgo.getDate() - 7);

//     return (
//         <ul>
//             {users.filter(user => !user.isBanned && user.lastActivityAt >= weekAgo).map(user =>
//                 <li key={user.id}>
//                     <img src={user.avatarUrl} />
//                     <p>{user.fullName}</p>
//                     <small>{user.role}</small>
//                 </li>
//             )}
//         </ul>
//     )
// }

// 이 코드는 SRP를 준수했을까?
// const useBooks = () => {
//     const [books, setBooks] = useState([]);

//     useEffect(() => {
//         const fetchBooks = async () => {
//             const response = await fetch("https://api.com/books");
//             const data = await response.json();
//             setBooks(data);
//         };
//         fetchBooks();
//     }, []);

//     return books;
// };

// const BookList = () => {
//     const { books } = useBooks();

//     return (
//         <div>{books.map(book => <Book {...book} />)}</div>
//     );
// };