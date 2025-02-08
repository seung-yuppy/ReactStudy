import { NavLink } from "react-router-dom";

// Link와 NavLink
// Link : 클릭시 다른 페이지로 이동하는 컴포넌트
// NavLink : 현재경로와 일치할때 특정 스타일이나 클래스를 적용할수 있는 컴포넌트
const Header = () => {
    return (
        <nav style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>
            <NavLink
                to="/"
                style={({ isActive }) => ({
                    marginRight: '10px',
                    color: isActive ? 'blue' : 'black',
                    textDecoration: 'none'
                })}
            >
                Home
            </NavLink>
            <NavLink
                to="/about"
                style={({ isActive }) => ({
                    marginRight: '10px',
                    color: isActive ? 'blue' : 'black',
                    textDecoration: 'none'
                })}
            >
                About
            </NavLink>
            <NavLink
                to="/product"
                style={({ isActive }) => ({
                    marginRight: '10px',
                    color: isActive ? 'blue' : 'black',
                    textDecoration: 'none'
                })}
            >
                Product
            </NavLink>
            <NavLink
                to="/list"
                style={({ isActive }) => ({
                    color: isActive ? 'blue' : 'black',
                    textDecoration: 'none'
                })}
            >
                List
            </NavLink>
        </nav>
    );
};

export default Header;