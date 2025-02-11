// react 라이브러리
// --> 여러 컴포넌트가 공유하는 상태를 관리하기 위한 라이브러리
// --> 예측 가능, 일관된 방식으로 상태를 관리하는 것이 특징

// Redux의 핵심원칙
// 1. Single source of truth (단일 진실 공급원)
//      --> 개발하는 서비스(어플리케이션)의 모든 상태를 하나의 스토어에서 객체 트리 형태로 저장하고 관리하는 원칙
//      --> 근데 굳이 트리구조로 저장할 필요가 있음?
//      특징 : 모든 state가 하나의 중앙화된 스토어에 저장
//          --> 데이터의 일관성과 정확성 유지가 쉬워짐
//          --> 유지보수가 상대적으로 쉬워지며 모든 구성원들이 동일한 데이터에 접근 가능
//          --> 상태 예측이 투명해져서 디버깅과 테스트가 용이

// 2. State is read-only (상태는 읽기 전용)
//      --> 읽기 전용 : 수정 불가
//      --> 그렇다면 상태 자체를 수정할 방법은 없는가?(상태를 직접 수정하는 것은 불가능 반드시 액션 객체를 통해서만 변경이 가능)
//      --> 아무나 상태를 수정하게되면 잘못된 데이터가 들어올 수 있거나 혹은 데이터가 탈취될 수도 있음
//      --> 이 특징을 통해 실행취소, 다시실행 기능을 쉽게 구현

// 3. Changes are made with pure functions (순수 함수로의 변경)
// 순수 함수(Pure Functions) : 동일한 입력에 대해 항상 동일한 출력을 리턴
//      --> 외부 상태를 변경하지 않고, 외부값을 참조하거나 의존하지도 않음
//      --> 순수함수는 reducer를 지칭하기도함(정확히는 reducer는 순수 함수이어야 함)
//      이유 : 예측이 가능(동일한 입력 --> 동일한 결과가 나와야해서이다)
//             성능최적화(객체의 참조 비교만으로 변경을 감지할 수 있어서 깊게 비교할 필요는 없다)
//             --> reducer에서 상태값을 직접 수정해서는 안됨

// Redux 기본 구성요소
// 1. 액션 : 상태변화를 일으키기위한 객체
//    구조
//     --> type 필드를 필수적으로 포함해야함
//    특징
//     --> 스토어에서 데이터를 보내는 데이터 묶음
//     --> 스토어에서의 유일한 정보원
//     --> 일반적인 JS의 Object와 생김새가 똑같음

// 2. 액션 생성함수(Action Creator) : 액션 객체를 생성하는 함수
//  --> 액션 객체 그대로 선언하면 될 것 같은데
//      액션 생성 함수가 굳이 필요한가?
//      만약 액션 생성 함수가 필요하다면 썼을 때의 장점은 무엇인가?
//      장점
//      1. 재사용성, 확장성 측면에서 유리
//      2. 유지보수성 측면에서도 좋음(실수 방지에 유리)
//      3. 액션 생성 로직의 중앙화와 객체 생성의 자동화

// 기본적인 액션 생성 함수
// const addTodo = (text) => ({
//     type: 'ADD_TODO',
//     payload: {
//         text,
//         id: Date.now()
//     }
// });

// 여러 파라미터를 받는 액션 생성 함수
// const updateUser = (id, name, email) => ({
//     type: 'UPDATE_USER',
//     payload: {
//         id,
//         name,
//         email
//     }
// });

// 3. 리듀서(Reducer)
//      --> 상태와 액션을 받아 새로운 상태를 리턴하는 순수함수
//      특징
//      --> 순수함수로 작성이 필요
//      --> 이전 상태를 직접 수정하지 않고 새로운 상태 객체를 리턴
//      --> 리듀서의 기본구조는 hooks / useReducer 파일들을 참조
//      redux의 핵심구성요소는 reducer이다

// 4. 스토어
//      --> redux 어플리케이션의 전체 상태를 보관하는 객체
//      특징
//      --> 단일성(하나의 어플에는, 하나의 스토어만 존재)
//      --> 모든 상태는 하나의 객체 트리 구조로 저장
//      핵심 기능
//      --> 어플리케이션의 상태 저장
//      --> getState()를 통한 상태 접근
//      --> dispatch(action)을 통한 상태 수정
//      --> subscribe를 통한 리스너 등록
//      생성방법
//      --> createStore 함수를 사용하여 생성
//      --> 첫번째 파라미터로 reducer 함수를 받아야함
//      --> 두번째 파라미터로 초기 상태값을 받아야함
//      스토어는 필요한가?(스토어의 중요성)
//      --> 상태 안정성 유지
//      --> 데이터의 흐름을 보장
//      --> 상태 변화의 예측 가능성 제공

// 5. 디스패치 : 스토어 내장 함수 중 하나, 액션을 발생시키는 역할
//      --> 액션을 스토어에 전달하는 유일한 방법
//      --> 상태를 업데이트 하기위한 명령을 전달하는 행동
//      실행순서
//      --> 이벤트 발생 --> 액션을 redux 스토어에 dispatch --> 스토어가 reducer를 실행하여 새로운 상태를 생성 --> UI가 새로운 상태에 따라 리렌더링

// 6. 구독
//      --> 스토어 내장함수 중 하나, 상태 변화 감지 및 반응

// 기본 동작 원리
// state가 업데이트 될 때마다 등록된 리스너 함수가 호출
// 구독 해제를 위한 unsubscribe 함수를 리턴

//  --> 기능이 복잡해서 직접 쓰진 않고 라이브러리의 함수들을 활용하여 사용
//      useSelector와 같은 hook으로 구독관련 기능을 처리

// redux도 사용을 위해서는 우선 설치가 필요
// npm install redux react-redux @reduxjs/toolkit

// Redux Toolkit
// Redux 공식 상태 관리 도구 모음(Redux를 쉽게 적용하기 위한 표준 방식)
// 주요 특징
//      - Redux 개발을 위한 표준화된 도구 모음 제공
//      - 저장소 설정, Reducer 정의 단순화
//      - 불변 업데이트 로직 간소화
//      - 보일러플레이트 코드 감소

// 보일러플레이트 코드 : 최소한의 변경으로 여러곳에서 재사용되며 반복적으로 비슷한 형태를 띄는 코드
//  --> 반복 작업, 패턴에 대한 표준화 코드(공통 코드)

// 보일러플레이트 코드는 완벽한가?
// 장점
// 1. api화(재사용성)
// 2. 똑같은 코드 그대로 쓰니깐 -> 그 코드가 문제 없으면 실수 자체가 줄어들음(코드 실수 최소화) -> 품질 개선

// 단점
// 1. 체계적인 상황에서는 유리하지만 창의성은 제한됨
// 2. 유연하지 못한 코드 -> 클라이언트의 요구사항 맞추기가 어려워질수도

// 핵심 기능
// 1. configureStore() : 스토어 설정 간소화
//  - 개발환경 상태에서 상태 변이 검사 미들웨어 자동추가
// const store = configureStore({
//     reducer: rootReducer, // reducer 생성
//     middleware: [...middlewares], // 사용할 미들웨어 배열 설정
//     devTools: true, // Redux DevTools 사용 유무 설정
// })

// 2. createReducer() : reducer 작성 단순화
//  - 이 함수가 없다면 우리는 state와 action 관리 시 switch-case문을 거의 반 강제로 써야하는 상황이 발생
//  - 로직의 단순화를 위해 사용
// const counterReducer = createReducer(initialState, (builder) => {
//     builder
//       .addCase(increment, (state) => {
//         state.value++
//       })
//       .addCase(decrement, (state) => {
//         state.value--
//       })
//   });

// 3. createAction() : action 생성자 함수 자동 생성
//  - action 생성 함수
// 기본 액션 생성
// const increment = createAction('increment');
// 페이로드와 함께 사용
// const addTodo = createAction('ADD_TODO');
// addTodo({ text: 'Buy milk' });
// 결과: { type: 'ADD_TODO', payload: { text: 'Buy milk' } }
// payload : 액션 객체의 목적 자체 --> 액션에 담겨진 값

// 4. createSlice() : reducer, action 자동 생성
//  - redux를 가장 단순하게 만들어주는 고마운 도구
// const counterSlice = createSlice({
//     name: 'counter',
//     initialState: { value: 0 },
//     reducers: {
//         increment: (state) => {
//             state.value += 1;
//         },
//         decrement: (state) => {
//             state.value -= 1;
//         }
//     }
// });

// 5. createEntityAdapter : 정규화된 데이터 처리
//  - 정규화된 상태구조에서 / CRUD 작업을 수행하기 위한 미리 만들어진 reducer와 selector를 생성하는 도구
// 기본 상태 구조
// ids : 엔티티의 고유 id 배열
// entities : id를 키로 하는 엔티티 객체 map 타입 데이터
// const booksAdapter = createEntityAdapter({
//     selectId: (book) => book.bookId,
//     sortComparer: (a, b) => a.title.localeCompare(b.title)
// });
// const booksSlice = createSlice({
//     name: 'books',
//     initialState: booksAdapter.getInitialState(),
//     reducers: {
//         bookAdded: booksAdapter.addOne,
//         booksReceived: booksAdapter.setMany
//     }
// });

// 6. createAsyncThunk : redux toolkit에서 제공하는 비동기 작업 처리 함수
//  --> Promise랑 비슷
// reducer 처리(extraReducer처리)


// 사실 toolkit 없이 redux 구현 가능
// toolkit이 있다면 훨씬 편하게 redux를 사용할 수 있음

// Redux와 비동기
// -> store는 기본적으로는 동기적 작업 처리가 가능
// 그렇다면 왜 store는 동기적 작업만 처리가 가능한가?
//  --> reducer가 순수함수이기 때문, 부작용이 없어야해서
// 그래서 Redux는 비동기 처리가 필요했기 때문에 Toolkit을 이용하여 비동기 처리를 추가 --> createAsyncThunk

// 처리순서
// 1. 자동 액션을 생성
// pending : 요청 시작
// fulfilled : 요청 성공
// rejected : 요청 실패

// Redux Thunk
//      --> Redux 전용 미들웨어(액션 객체 대신 함수를 리턴받아주는 도구)
//      --> 비동기 작업 처리시 사용

// 1. 일반 액션 객체 대신에 함수 그 자체를 리턴시키고 싶을 때 사용
//  (비동기 로직 자체를 캡슐화 / Promise 기반 비동기 작업 처리시 용이)

// 작동방식
// 액션이 함수냐 객체냐에 따라 동작방식은 달라짐
//      --> 액션이 함수면 해당 함수 실행
//      --> 액션이 객체면 다음 reducer로 전달