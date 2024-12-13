import { createBrowserRouter } from "react-router";
import { MainPage } from "../pages/mainPage/MainPage";
import { SignInPage } from "../pages/signInPage/SignInPage";
import { SignUpPage } from "../pages/signUpPage/SignUpPage";
import { WishListPage } from "../pages/wishListPage/WishListPage";
import { AccountPage } from "../pages/accountPage/AccountPage";
import { Layout } from "../components/layout/Layout";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
      {
        path: "/signin",
        element: <SignInPage />,
      },
      {
        path: "/wishlist",
        element: <WishListPage />,
      },
      {
        path: "/account",
        element: <AccountPage />,
      },
    ],
  },
]);
