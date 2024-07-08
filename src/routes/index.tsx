import { createBrowserRouter, CustomRouteObject } from "react-router-dom"

import Layout from "@/components/Layouts"
import NotFound from "@/components/NotFound"
import ExamplePage from "@/examples"
import About from "@/pages/About"
import DashBoard from "@/pages/DashBoard"
// Lazy Loading으로 초기 로딩 성능을 향상 가능
// const About = lazy(() => import("@/pages/About"))

const routes: CustomRouteObject[] = [
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
        path: "/example/:id/:id",
        element: <ExamplePage />,
      },
    ],
  },
  {
    path: "/*",
    element: <NotFound />,
  },
  // {
  //   path: "/about",
  //   element: (
  //     <Suspense fallback={<div>Loading...</div>}>
  //       <About />
  //     </Suspense>
  //   ),
  // },
  // example pages
]

export const router = createBrowserRouter(routes)
