import Footer from "@/components/Footer"
import Header from "@/components/Header"

import "@/components/Layouts/index.css"
const Layout = (props: { children: React.ReactNode }) => {
  return (
    <div className="layout-wrapper">
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
