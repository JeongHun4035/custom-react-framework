import React from "react"

import styled from "styled-components"

interface StyledInputProps {
  $width?: string
  $height?: string
  $border?: string
  $visibleNumberController?: boolean
}

interface InputProps {
  placeholder?: string
  type: "text" | "number"
  visibleNumberController?: boolean
  maxLength?: number // 최대 글자 수 제한
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  value?: string
}

const StyledInput = styled.input<StyledInputProps>`
  width: ${(props) => props.$width || "200px"};
  height: ${(props) => props.$height || "30px"};
  border: ${(props) => props.$border || "1px solid black"};
  ${(props) =>
    props.type === "number" &&
    !props.$visibleNumberController &&
    `
      -webkit-appearance: none; 
      -moz-appearance: textfield;
      
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    `}
`

const CustomInput: React.FC<StyledInputProps & InputProps> = ({
  onChange,
  value = "",
  type,
  maxLength,
  ...props
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value
    if (maxLength && newValue.length > maxLength) {
      newValue = newValue.slice(0, maxLength)
    }
    if (onChange) {
      onChange({ ...e, target: { ...e.target, value: newValue } })
    }
  }

  return (
    <StyledInput
      {...props}
      type={type}
      value={value}
      onChange={handleChange}
      maxLength={maxLength}
      $visibleNumberController={props.visibleNumberController}
    />
  )
}

export default CustomInput
