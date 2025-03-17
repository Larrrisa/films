import { Outlet } from "react-router";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import style from "./styles.module.css";

export function Layout() {
  return (
    <div className={style.main}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <Footer />
    </div>
  );
}
