import { Outlet } from "react-router";

import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

import style from "./styles.module.css";

export function Layout() {
  return (
    <div className={style.main}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
