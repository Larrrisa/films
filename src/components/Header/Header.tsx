import { Link } from "react-router";
import style from "./styles.module.css";
import Searchbar from "./components/Searchbar/Searchbar";
import ChangeThemeIcon from "../icons/ChangeThemeIcon";
import UserIcon from "../icons/UserIcon";

export function Header() {
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
          <li>
            <a href="#">Буду смотреть</a>
          </li>
          <li className={style.login}>
            <a href="#">Вход</a>
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
