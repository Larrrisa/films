import { Outlet } from "react-router";
import { Header } from "../Header/Header";

export function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>тут подвал</footer>
    </>
  );
}
