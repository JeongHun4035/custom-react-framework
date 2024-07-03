import Footer from "@/components/Footer"
import Header from "@/components/Header"

import "@/components/Layouts/index.css"
const Layout = (props: { children: React.ReactNode }) => {
  return (
    <div className="layout-wrapper">
      <header>
        <Header />
      </header>
      <main>{props.children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout
