import ErrorPage from "@/pages/error-page";
import RootPage from "@/pages/root-page";
import HomePage from "@/pages/home-page";
import LoginPage from "@/pages/auth/login-page";
import SignupPage from "@/pages/auth/signup-page";

const routes = [
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
    ],
  },
];

export default routes;
