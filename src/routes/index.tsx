import { createBrowserRouter, CustomRouteObject } from "react-router-dom"

import Layout from "@/components/Layouts"
import NotFound from "@/components/NotFound"
import ExamplePage from "@/examples/index"
import About from "@/pages/About"
import DashBoard from "@/pages/DashBoard"
import SignIn from "@/pages/SignIn"
// Lazy Loading으로 초기 로딩 성능을 향상 가능
// const ExamplePage = lazy(() => import("@/examples/index"))

const routes: CustomRouteObject[] = [
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <DashBoard />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/example/:id",
        element: <ExamplePage />,
      },
    ],
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]

export const router = createBrowserRouter(routes)
