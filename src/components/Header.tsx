import "@/components/styles/Header.scss"

import { useRef, useState } from "react"

import { FiSettings } from "react-icons/fi"
import { HiOutlineMenu } from "react-icons/hi"
import { HiMiniBellAlert } from "react-icons/hi2"
import { RiUser5Fill } from "react-icons/ri"

import DropDown from "@/components/DropDown"
import { useSideBarContext } from "@/context/SideBarContext"

const SideController = () => {
  const { toggleSideBar } = useSideBarContext()
  return (
    <div className="side-controller" onClick={toggleSideBar}>
      <HiOutlineMenu />
    </div>
  )
}

const UserInfo = () => {
  const userName = "테스트"
  return (
    <>
      <RiUser5Fill />
      <span> {userName} </span>
    </>
  )
}

const Preferences = () => {
  const userInfoRef = useRef<HTMLDivElement>(null)
  const alarmRef = useRef<HTMLDivElement>(null)
  const [showUserItems, setShowUserItems] = useState<boolean>(false)
  const [showAlarms, setShowAlarms] = useState<boolean>(false)

  const userItems = [
    {
      label: "My Info",
      value: "MYINFO",
    },
    {
      label: "Sign Out",
      value: "SIGNOUT",
    },
  ]

  const newAlarm = [
    {
      label: "new Alarm 1",
      value: "NEW1",
    },
    {
      label: "new Alarm 2",
      value: "NEW2",
    },
    {
      label: "new Alarm 3",
      value: "NEW3",
    },
  ]
  return (
    <div className="preferences-wrapper">
      <div
        ref={userInfoRef}
        className="preferences-item"
        onMouseEnter={() => setShowUserItems(true)}
        onMouseLeave={() => setShowUserItems(false)}
      >
        <UserInfo />
        {showUserItems && (
          <DropDown items={userItems} triggerRef={userInfoRef} />
        )}
      </div>
      <div
        className="preferences-item "
        ref={alarmRef}
        onMouseEnter={() => setShowAlarms(true)}
        onMouseLeave={() => setShowAlarms(false)}
      >
        <HiMiniBellAlert />
        {showAlarms && <DropDown items={newAlarm} triggerRef={alarmRef} />}
      </div>
      <div className="preferences-item ">
        <FiSettings />
      </div>
    </div>
  )
}

const Header = () => {
  return (
    <div className="header-wrapper">
      <div>
        <SideController />
      </div>
      <div>
        <Preferences />
      </div>
    </div>
  )
}

export default Header
