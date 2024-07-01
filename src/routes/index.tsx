import { createBrowserRouter, CustomRouteObject } from "react-router-dom"
import Home from "@/pages/Home"
import About from "@/pages/About"

// Lazy Loading으로 초기 로딩 성능을 향상 가능
// const About = lazy(() => import("@/pages/About"))

const routes: CustomRouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  // {
  //   path: "/about",
  //   element: (
  //     <Suspense fallback={<div>Loading...</div>}>
  //       <About />
  //     </Suspense>
  //   ),
  // },
]

export const router = createBrowserRouter(routes)
