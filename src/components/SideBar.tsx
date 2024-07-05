import "@/components/styles/Sidebar.css"
import { FaWindowClose } from "react-icons/fa"

import CustomTree from "@/components/CustomTree"
import { ITreeItem } from "@/components/types/tree"
import { useSideBarContext } from "@/context/SideBarContext"

const mockTreeData: ITreeItem[] = [
  {
    parentId: null,
    id: "basic",
    name: "Basic",
  },
  {
    parentId: "basic",
    id: "button",
    name: "Button",
  },
  {
    parentId: "basic",
    id: "router",
    name: "Router",
  },
  {
    parentId: "basic",
    id: "icon",
    name: "Icon",
  },
  {
    parentId: null,
    id: "modals",
    name: "Modals",
  },
  {
    parentId: "modals",
    id: "dialog",
    name: "Dialog",
  },
  {
    parentId: "modals",
    id: "alert",
    name: "Alert",
  },
  {
    parentId: "modals",
    id: "confirm",
    name: "Confirm",
  },
  {
    parentId: null,
    id: "form",
    name: "Form",
  },
  {
    parentId: "form",
    id: "input",
    name: "Input",
  },
  {
    parentId: "input",
    id: "text",
    name: "Text",
  },
  {
    parentId: "input",
    id: "number",
    name: "Number",
  },
  {
    parentId: "input",
    id: "chip",
    name: "Chip",
  },
  {
    parentId: "form",
    id: "picker",
    name: "Picker",
  },
  {
    parentId: "picker",
    id: "date",
    name: "Date",
  },
  {
    parentId: "picker",
    id: "time",
    name: "Time",
  },
  {
    parentId: "form",
    id: "check",
    name: "Check",
  },
  {
    parentId: "check",
    id: "radio",
    name: "Radio",
  },
  {
    parentId: "check",
    id: "checkbox",
    name: "Check Box",
  },
  {
    parentId: null,
    id: "grid",
    name: "Grid",
  },
  {
    parentId: "grid",
    id: "table",
    name: "Table",
  },
  {
    parentId: "grid",
    id: "pagination",
    name: "Pagination",
  },
  {
    parentId: null,
    id: "others",
    name: "Others",
  },
  {
    parentId: "others",
    id: "slider",
    name: "Slider",
  },
]

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
      <div className="sidebar-menus">
        {/* <h2>Structure Items</h2> */}
        <div className="tree-area">
          <CustomTree data={mockTreeData} />
        </div>
      </div>
      <div className="sidebar-footer">footer</div>
    </div>
  )
}

export default SideBar
