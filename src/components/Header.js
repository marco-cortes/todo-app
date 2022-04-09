import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../redux/actions/auth";

const Header = () => {

  const [theme, setTheme] = useState("icon-moon.svg");
  const { uid } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(startLogout());
  }


  const changeTheme = () => {
    const body = document.getElementsByTagName("body")[0];
    if (theme === "icon-sun.svg") {
      setTheme("icon-moon.svg");
      body.classList.add("dark");
      body.classList.remove("light");
    } else {
      setTheme("icon-sun.svg");
      body.classList.add("light");
      body.classList.remove("dark");
    }
  }

  return (
    <header>
      <a href="./" className="logo">T O D O</a>
      <div className="options">
        <button onClick={changeTheme}>
          <img src={require("../images/" + theme)} className="icon-theme" alt="theme" />
        </button>
        {
          uid && <button className="logout" onClick={logout}><i className="fa-solid fa-right-from-bracket logout-icon"></i></button>
        }
      </div>
    </header>
  )
}

export default Header