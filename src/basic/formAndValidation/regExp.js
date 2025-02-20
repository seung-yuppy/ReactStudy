// 정규표현식(Regular Expression)
//  -> 문자열에서 특정 내용을 찾거나 대체, 발췌하는데 사용
//  -> 정규표현식은 거의 대부분의 언어에서 통용

// ex) 전화번호나 이메일 입력을 진행할시 옳지 않은 값을 입력하면
//      정규표현식에 의해 필터링되는 경우.
//  -> 받아온 문자에 관련하여 반복문이나 조건문 없이 기준을 잡아 처리하는것도 가능.

// 단점 : 가독성이 매우 나쁨.
// ex) : /(?=.*\d)+(?=.*[~`!@#$%\^&*()-+=])+(?=.*[a-z])(?=.*[A-Z])+.{0,}$/
//  -> 비밀번호 영문 대소문자+ 특수문자 + 숫자를 포함하지 않으면 x

// 정규표현식을 작성하는 방법
// 1. 리터럴 표현식
const reg1 = /abc/; // 정규표현식 자체를 리터럴값으로 처리
// 2. 정규표현식 객체(생성자) 활용
const reg2 = new RegExp("abc");

// 위의 코드는 abc 라는 단어 있는지 없는지를 확인.

const reg3 = /apple/;
const txt = "hello gunchim ssak apple nurung apple";
// js에서 쓸수있는 정규표현식 메서드
// 1. match / ("문자열").match(/정규표현식/)
//    -> 문자열에서 정규표현식에 매칭되는 항목들을 배열로 리턴.
//const result = txt.match(reg3);
//console.log(result); // 만약 정규표현식에 해당하는 내용이 없다면 null을 리턴.

// 2. replace / ("문자열").replace(/정규표현식/, "대체할문자열")
//    -> 정규표현식에 매칭되는 항목을 대체할 문자열로 변경
// let result =txt.replace(reg3, "1234");
// console.log(result); 

// // 3. split / ("문자열").split(/정규표현식/)
// //    -> 문자열을 정규표현식에 매칭되는 항목으로 쪼갠후 배열로 리턴.
// let result2 =txt.split(reg3, "1234");
// console.log(result2);
// // 4. test / (정규표현식).test("문자열")
// //    -> 문자열이 정규표현식과 일치하면 true, 틀리면 false를 리턴
// console.log(reg3.test(txt));  

// // 5. exec / (정규표현식).exec("문자열")
// //    -> match와 비슷(다만 첫번째 매칭결과만 반영.)
// console.log(reg3.exec(txt));  

// 정규식 플래그
//  -> 고급 검색을 위한 전역 옵션을 설정할수 있도록 지원하는 기능
//  ex) /정규식/i e g
//      /banana/i
// i : 대소문자 구별x
// g : 문자내의 모든 패턴 검색
let str1 = "abcabcde"
console.log(str1.match(/a/)); // 플래그 없이는 최초문자만 리턴
console.log(str1.match(/a/g));
// m : 문자열의 행이 바뀌더라도 검색을 계속
let str2 = "gunchim ssak\ngunchim Power ssak\nPower overwhelming";

console.log(str2);
// ^ <---- 문장의 시작점을 찾음
//console.log(str2.match(/^gunchim/g));
console.log(str2.match(/^gunchim/gm));
// s : 개행문자도 포함할수 있도록 처리.
// u : 유니코드 지원
// y : 문자 내 특정 위치에서 검색을 진행.

// 정규식 특정 문자 숫자 매칭 패턴
const exam1 = (/[a-z]/)(/[A-Z]/)
// a-zA-Z : 영어알파벳(-으로 범위 지정)

// ㄱ-ㅎ가-힣 :한글 문자(-으로 범위 지정)

// 0-9 : 숫자(-으로 범위 지정)

// . : 모든 문자열(숫자, 한글, 영어, 특수기호, 공백 모두)단, 줄바꿈 X

//\d : 숫자

//\D : 숫자가 아닌 것

// \w : 밑줄 문자를 포함한 영숫자 문자에 대응[A-Za-z0-9_] 와 동일

// \W : \w 가 아닌 것

// \s : space 공백

// \S : space 공백이 아닌 것

// \특수기호 : 특수기호 \* \^ \& \! \? ...등

// \b : 63개 문자(영문 대소문자 52개 + 숫자 10개 + _(underscore))가 아닌 나머지 문자에 일치하는 경계(boundary)

// \B : 63개 문자에 일치하는 경계

// \x : 16진수 문자에 일치/\x61/는 a에 일치

// \0 : 8진수 문자에 일치/\141/은 a에 일치

// \u : 유니코드(Unicode) 문자에 일치/\u0061/는 a에 일치

// \c : 제어(Control) 문자에 일치

// \f : 폼 피드(FF, U+000C) 문자에 일치

// \n : 줄 바꿈(LF, U+000A) 문자에 일치

// \r : 캐리지 리턴(CR, U+000D) 문자에 일치

// \t : 탭 (U+0009) 문자에 일치

// 정규식 검색 기준 패턴
// | : or
// [] : 괄호안의 문자들중 하나. or 처리 묶음
//  -> /abc/ (abc를 포함하는)
//  -> /[abc]/ : a or b or c
//  -> [다-마] : 다 or 라 or 마
// [^문자] : 대괄호 안의 문자는 제외
// [^gunchim] : g,u,n,c,h,i,m 문자들은 전부 제외

// 정규식 갯수 반복 패턴
// ? * + *? {n}, {min}, {min, max}
// ? : 없거나 혹은 최대 1개만. /gunchim?/(중복 체크)
// * : 없거나 or 여러개가 존재하거나
// + : 최소 1개 이상
// *? : {0} : 아예 없거나 최대 1개 거나
// +? : 최소 1개
// {n} : n개
// {min} : 최소 min개 이상
// {min max} : 최소 min개 이상 max개 이하

// 정규식 그룹 패턴

// 정규식 그룹화
// 정규식을 묶는거.

// 웹 개발자들이 자주 사용하는 정규표현식 실용 예시.
// 일반적인 웹 사이트에서 자주 사용하는 아이디 패턴
//  ->   /^[a-zA-Z0-9]*$/;
//  시작문자가 영문자와 숫자를 포함하느냐? + 최소 1개는 있느냐? $<-- 종료
//  모든 문자검색   특수문자 포함             소문자        대문자     숫자
// /(?=.*\d)   +  (?=.*[~`!@#$%\^&*()-+=])+(?=.*[a-z])(?=.*[A-Z])+.{0,}$/

// https://regexr.com/