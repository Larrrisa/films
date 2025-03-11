import { Outlet } from "react-router";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
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
