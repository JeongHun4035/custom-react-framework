import "@/components/styles/Sidebar.css"
import { FaWindowClose } from "react-icons/fa"

import { useSideBarContext } from "@/context/SideBarContext"

const SideBar = () => {
  const { isSideBarVisible, toggleSideBar } = useSideBarContext()

  return (
    <div
      className={`sidebar-wrapper ${isSideBarVisible ? "visible" : "hidden"}`}
    >
      <div className="sidebar-header">
        <FaWindowClose
          className="sidebar-close-button"
          onClick={toggleSideBar}
        />
      </div>
      <div className="sidebar-menus">menu</div>
      <div className="sidebar-footer">footer</div>
    </div>
  )
}

export default SideBar
