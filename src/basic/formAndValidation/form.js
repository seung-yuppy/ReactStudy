import { useState } from "react";
import "./form.css";

// 폼 처리와 유효성 검사
// --> 폼에서 처리해주는 내용? : 사용자가 입력한 값
// --> 사용자들은 언제나 올바른 데이터만 입력하는가?(사용자들은 실수를 통해 )
// --> 사용자가 입력한 값들을 체크하고 확인하는 것이 유효성 검사(정규표현식을 통해 사용자가 입력한 수식이 올바른지 아닌지 체크 가능)

function Form() {
    // 폼 상태 관리
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });

    // 에러 상태 관리
    const [errors, setErrors] = useState({ name: "", email: "", password: "" });

    // 비밀번호 보여주기
    const [show, setShow] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // every, some
        // every : 배열의 모든 요소가 조건을 충족하는가?(AND)
        // some : 배열 중 한 개라도 조건을 충족하는가?(OR)

        // // 모든 필드의 유효성 검사
        // const hasErrors = Object.values(errors).some(error => error !== '');
        // const hasEmptyFields = Object.values(formData).some(value => value === '');

        // // 유효성 검사 실패했을 경우 : 에러가 있는가 혹은 빈 곳이 있는가
        // if (hasErrors || hasEmptyFields) {
        //     alert("모든 사항을 기입 후 다시 회원가입을 진행해주세요!");
        //     return;
        // }

        // // 유효성 검사 성공했을 경우
        // else if (!hasErrors && !hasEmptyFields) {
        //     console.log(formData);
        //     alert("회원가입 성공");
        // }

        // // 폼 초기화
        // setFormData({ name: "", email: "", password: "" });

        
        // 폼에 입력 후 유효성 검사
        const newErrors = { name: "", email: "", password: "" };
        let isValid = true;

        if (formData.name.length < 4) {
            newErrors.name = "이름은 4글자 이상이어야 합니다!";
            isValid = false;
        }
        if (!formData.email.includes("@")) {
            newErrors.email = "이메일은 @가 들어가야 합니다!";
            isValid = false;
        }
        if (formData.password.length < 6) {
            newErrors.password = "비밀번호는 6글자 이상이어야 합니다!";
            isValid = false;
        }

        setErrors(newErrors);

        // 유효성 검사 성공했을 경우
        if (isValid) {
            console.log(formData);
            alert("회원가입 성공");
            // 폼 초기화
            setFormData({ name: "", email: "", password: "" });
        } else {
            // alert("모든 사항을 기입 후 다시 회원가입을 진행해주세요!");
            return;
        }
    };

    // 입력값 변경 처리
    const handleChange = (e) => {
        e.preventDefault();
        // const name = e.target.name;
        // const value = e.target.value;
        const { name, value } = e.target;   // 자바스크립트의 구조 분해 할당으로 e.target에서 name과 value 두 속성을 추출한다
        setFormData((prev) => ({ ...prev, [name]: value }));

        // 실시간으로 유효성 검사를 실행하기 위한 메서드 추가
        // validateField(name, value);
    };

    const validateField = (name, value) => {
        let error = "";
        switch (name) {
            case "name":
                if (value.length < 4) {
                    error = "이름은 4글자 이상이어야 합니다!";
                }
                break;
            case "email":
                if (!value.includes("@")) {
                    error = "이메일은 @가 들어가야 합니다!";
                }
                break;
            case "password":
                if (value.length < 6) {
                    error = "비밀번호는 6글자 이상이어야 합니다!";
                }
                break;
            default:
                break;
        }
        // 에러 상태 업데이트
        // prev : 이전상태에 대한 정보 --> 리액트의 객체는 불변법칙
        setErrors((prev) => ({ ...prev, [name]: error }));
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="basic-form">
                <div className="form-group">
                    <label htmlFor="name">이름:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={errors.name ? 'error' : ''}
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="email">이메일:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? 'error' : ''}
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="password">비밀번호:</label>
                    <div className="inputBox">
                        <input
                            type={show ? "text" : "password"}
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className={errors.password ? 'error' : ''}
                        />
                        <button type="button" onClick={() => setShow((prev) => !prev)} className="pwBtn">Look</button>
                    </div>
                    {errors.password && <span className="error-message">{errors.password}</span>}
                </div>

                <button type="submit" className="submitBtn">가입하기</button>
            </form >
        </>
    );
}

export default Form;