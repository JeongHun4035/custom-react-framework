import "@/components/styles/Header.css"
import { useState } from "react"

import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai"
import { FiSettings } from "react-icons/fi"
import { HiMiniBellAlert } from "react-icons/hi2"
import { RiUser5Fill } from "react-icons/ri"
const SideController = () => {
  const [isMenuFolded, setIsMenuFolded] = useState(true)
  const toggleMenu = () => {
    setIsMenuFolded(!isMenuFolded)
  }
  return (
    <div className="side-controller" onClick={toggleMenu}>
      {isMenuFolded ? <AiOutlineMenuUnfold /> : <AiOutlineMenuFold />}
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
  return (
    <div className="preferences-wrapper">
      <div className="preferences-item ">
        <UserInfo />
      </div>
      <div className="preferences-item ">
        <HiMiniBellAlert />
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
