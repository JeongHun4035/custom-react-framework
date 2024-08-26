import React, { useEffect, useState } from "react"

import styled from "styled-components"

import { IDropDown } from "@/components/types"

const DropDownContainer = styled.div<{ $top: number; $left: number }>`
  position: fixed;
  top: ${(props) => props.$top}px;
  left: ${(props) => props.$left}px;
  background: #ffffff;
  border: 1px solid #ddd;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  border-radius: 4px;
  padding: 10px 0;
  max-height: 300px;
  overflow-y: auto;
  min-width: 150px; /* Ensure minimum width */
`

const DropDownUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const DropDownLi = styled.li`
  font-size: 12px;
  padding: 10px 15px;
  transition:
    background-color 0.3s,
    color 0.3s;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border-bottom: 1px solid #ddd;
  &:hover {
    background-color: #81c784;
    color: white;
    cursor: pointer;
  }
  &:last-child {
    border-bottom: none;
  }
`

const DropDown: React.FC<{
  items: IDropDown[]
  triggerRef: React.RefObject<HTMLDivElement>
}> = ({ items, triggerRef }) => {
  const [position, setPosition] = useState({ $top: 0, $left: 0 })

  useEffect(() => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect()
      const dropdownHeight = 300
      const dropdownWidth = 150

      let top = rect.bottom + window.scrollY
      let left = rect.left + window.scrollX

      if (top + dropdownHeight > window.innerHeight + window.scrollY) {
        top = rect.top + window.scrollY - dropdownHeight
      }
      if (left + dropdownWidth > window.innerWidth + window.scrollX) {
        left = rect.right + window.scrollX - dropdownWidth
      }

      setPosition({ $top: top, $left: left })
    }
  }, [triggerRef])

  return (
    <DropDownContainer $top={position.$top} $left={position.$left}>
      <DropDownUl>
        {items.map((item) => (
          <DropDownLi key={`drop-down-${item.value}`}>{item.label}</DropDownLi>
        ))}
      </DropDownUl>
    </DropDownContainer>
  )
}

export default DropDown
