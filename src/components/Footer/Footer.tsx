import { Link } from "react-router";
import style from "./styles.module.css";
import ArrowIcon from "../icons/ArrowIcon";
import {
  FacebookIcon,
  InstagramIcon,
  XIcon,
  YoutubeIcon,
  TikTokIcon,
} from "../icons/social";
export function Footer() {
  return (
    <footer className={style.footer}>
      <nav className={style.nav}>
        <ul>
          <li className={style.item}>
            <Link to="/films">Фильмы</Link>
            <ArrowIcon />
          </li>
          <li className={style.item}>
            <Link to="/series">Сериалы</Link>
            <ArrowIcon />
          </li>

          <li className={style.item}>
            <Link to="/anime">Аниме</Link>
            <ArrowIcon />
          </li>
          <li className={style.item}>
            <Link to="/cartoons">Мультфильмы</Link>
            <ArrowIcon />
          </li>
          <li className={style.item}>
            <Link to="/actors">Актеры</Link>
            <ArrowIcon />
          </li>
          <li className={style.item}>
            <Link to="/directors">Режиссеры</Link>
            <ArrowIcon />
          </li>

          <li className={style.item}>
            <a href="#">Буду смотреть</a>
            <ArrowIcon />
          </li>
        </ul>
      </nav>
      <div className={style.social}>
        <span className={style.social_item}>
          <Link to="#">
            <FacebookIcon />
          </Link>
        </span>
        <span className={style.social_item}>
          <Link to="#">
            <InstagramIcon />
          </Link>
        </span>
        <span className={style.social_item}>
          <Link to="#">
            <TikTokIcon />
          </Link>
        </span>
        <span className={style.social_item}>
          <Link to="#">
            <YoutubeIcon />
          </Link>
        </span>
        <span className={style.social_item}>
          <Link to="#">
            <XIcon />
          </Link>
        </span>
      </div>
    </footer>
  );
}
