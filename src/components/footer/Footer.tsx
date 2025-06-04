import { Link } from "react-router";

import { ArrowIcon } from "../icons/ArrowIcon";
import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
  XIcon,
  YoutubeIcon,
} from "../icons/social";

import style from "./styles.module.css";
export function Footer() {
  return (
    <footer className={style.footer}>
      <nav className={style.nav}>
        <ul>
          <li className={style.item}>
            <Link to="/films">Films</Link>
            <ArrowIcon />
          </li>
          <li className={style.item}>
            <Link to="/shows">TV shows</Link>
            <ArrowIcon />
          </li>
          <li className={style.item}>
            <Link to="/trending">Trending films</Link>
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
