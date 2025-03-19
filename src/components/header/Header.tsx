import { Link } from "react-router";
import style from "./styles.module.css";
import Searchbar from "./components/Searchbar";
import ChangeThemeIcon from "../icons/ChangeThemeIcon";
import { UserIcon } from "../icons/UserIcon";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();
  const isAuth = localStorage.getItem("isAuthenticated") === "true";

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");

    navigate("/");
  };

  return (
    <header>
      <nav className={style.nav}>
        <ul>
          <li>
            <Link to="/films">Фильмы</Link>
          </li>
          <li>
            <Link to="/series">Сериалы</Link>
          </li>

          <li>
            <Link to="/anime">Аниме</Link>
          </li>
          <li>
            <Link to="/cartoons">Мультфильмы</Link>
          </li>
          <li>
            <Link to="/actors">Актеры</Link>
          </li>
          <li>
            <Link to="/directors">Режиссеры</Link>
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
              <Link to="/signin">Вход</Link>
            )}
            <span>
              <UserIcon />
            </span>
          </li>
          <li className={style.theme}>
            <ChangeThemeIcon />
          </li>
        </ul>
      </nav>
    </header>
  );
}
