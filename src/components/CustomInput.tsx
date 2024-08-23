import React, { useState, useEffect } from "react"

import styled, { keyframes, css } from "styled-components"

interface StyledInputProps {
  $width?: string
  $height?: string
  $border?: string
  $background?: string
  $color?: string
  $visibleNumberController?: boolean
  $isInvalid?: boolean
}

interface InputProps {
  placeholder?: string
  type: "text" | "number"
  visibleNumberController?: boolean
  maxLength?: number
  onChange?: (value: any) => void
  defaultValue?: number | string
  formatFunction?: (value: string) => string
  validationMessage?: string
  validationPattern?: RegExp
}

const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
`

const StyledInput = styled.input<StyledInputProps>`
  width: ${(props) => props.$width || "200px"};
  height: ${(props) => props.$height || "30px"};
  border: ${(props) =>
    props.$isInvalid
      ? "2px solid #BFFF00"
      : props.$border || "1px solid black"};
  background: ${(props) => props.$background || "#000000"};
  color: ${(props) => props.$color || "#ffffff"};
  ${(props) =>
    props.$isInvalid &&
    css`
      animation: ${shake} 0.3s ease-in-out;
    `}

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

const ValidationMessage = styled.div`
  color: #bfff00;
  font-size: 12px;
  margin-top: 5px;
`

const CustomInput: React.FC<StyledInputProps & InputProps> = ({
  type,
  onChange,
  defaultValue,
  formatFunction,
  validationMessage,
  validationPattern,
  ...props
}) => {
  const [inputValue, setInputValue] = useState(defaultValue || "")
  const [isInvalid, setIsInvalid] = useState(false)

  useEffect(() => {
    setInputValue(defaultValue || "")
  }, [defaultValue])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value
    if (formatFunction) {
      value = formatFunction(value)
    }
    if (onChange) {
      onChange(value)
    }
    if (validationPattern) {
      const isValid = validationPattern.test(value)
      setIsInvalid(!isValid)
    }
    setInputValue(value)
  }

  return (
    <div>
      <StyledInput
        {...props}
        type={type}
        value={inputValue}
        onChange={handleChange}
        $isInvalid={isInvalid}
      />
      {isInvalid && validationMessage && (
        <ValidationMessage>{validationMessage}</ValidationMessage>
      )}
    </div>
  )
}

export default CustomInput
