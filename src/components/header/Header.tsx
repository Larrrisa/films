import { Link } from "react-router";
import style from "./styles.module.css";
import Searchbar from "./components/Searchbar";
import ChangeThemeIcon from "../icons/ChangeThemeIcon";
import { UserIcon } from "../icons/UserIcon";

import { useNavigate } from "react-router-dom";

import { useThemeContext } from "../../shared/context/ThemeProvider";

export function Header() {
  const navigate = useNavigate();
  const isAuth = localStorage.getItem("isAuthenticated") === "true";

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");

    navigate("/");
  };

  const { mode, toggleTheme } = useThemeContext();

  return (
    <header>
      <nav className={style.nav}>
        <div className={style.logo}>
          <Link to="/">
            <img src="/logo.png" alt="logo" />
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/films">Films</Link>
          </li>
          <li>
            <Link to="/shows">TV Shows</Link>
          </li>

          <li>
            <Searchbar />
          </li>
          {isAuth && (
            <li>
              <a href="#">Буду смотреть</a>
            </li>
          )}
          <li className={style.login}>
            {isAuth ? (
              <button
                onClick={handleLogout}
                style={{
                  background: "white",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Выход
              </button>
            ) : (
              <Link to="/signin">
                <div className={style.login_button}>
                  Вход
                  <span>
                    <UserIcon />
                  </span>
                </div>
              </Link>
            )}
          </li>
          <li className={style.theme}>
            <div onClick={toggleTheme}>
              <ChangeThemeIcon />
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
