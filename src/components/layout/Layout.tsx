import { Outlet } from "react-router";

export function Layout() {
  return (
    <>
      <header>тут header</header>
      <main>
        <Outlet />
      </main>
      <footer>тут подвал</footer>
    </>
  );
}
