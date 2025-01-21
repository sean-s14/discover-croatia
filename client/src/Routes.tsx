import ErrorPage from "@/pages/error-page";
import RootPage from "@/pages/root-page";
import HomePage from "@/pages/home-page";
import LoginPage from "@/pages/auth/login-page";
import SignupPage from "@/pages/auth/signup-page";
import AboutPage from "@/pages/about-page";
import LearnPage from "@/pages/learn-page";

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
      {
        path: "/about/:topic",
        element: <AboutPage />,
      },
      {
        path: "/learn",
        element: <LearnPage />,
      },
    ],
  },
];

export default routes;
