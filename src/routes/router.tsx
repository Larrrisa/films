import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../pages/mainPage/MainPage";
import { SignInPage } from "../pages/signInPage/SignInPage";
import { SignUpPage } from "../pages/signUpPage/SignUpPage";
import { WishListPage } from "../pages/wishListPage/WishListPage";
import { AccountPage } from "../pages/accountPage/AccountPage";

export const router = createBrowserRouter([
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
]);
