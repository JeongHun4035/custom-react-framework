import styled, { css } from "styled-components"

interface StyledButtonProps {
  $padding?: string
  $fontSize?: string
  $border?: string
  $color?: string
  $background?: string
  $hoverColor?: string
  $hoverBackground?: string
  $hoverBorder?: string
  $primary?: boolean
}

interface ButtonProps {
  onClick?: () => void
  name: string
  triggerValidation?: () => void
}

const StyledButton = styled.button<StyledButtonProps>`
  padding: ${(props) => props.$padding || "10px 20px"};
  font-size: ${(props) => props.$fontSize || "14px"};
  line-height: 1.5;
  border: ${(props) => props.$border || "2px solid #00bfa5"};
  border-radius: 8px;
  color: ${(props) => props.$color || "#00bfa5"};
  background: ${(props) => props.$background || "#1a1a1a"};
  text-transform: uppercase;
  transition: all 0.3s ease;

  ${(props) =>
    props.$primary &&
    css`
      color: #ffffff;
      background: #00bfa5;
      box-shadow:
        0 0 6px #00bfa5,
        0 0 12px #00bfa5;
      border-color: #00bfa5;
    `}

  &:hover {
    cursor: pointer;
    color: ${(props) =>
      props.$primary ? "#1a1a1a" : props.$hoverColor || "#00bfa5"};
    background: ${(props) =>
      props.$primary ? "#009688" : props.$hoverBackground || "#2c2c2c"};
    border-color: ${(props) =>
      props.$primary ? "#009688" : props.$hoverBorder || "#00bfa5"};
    box-shadow:
      0 0 8px ${(props) => props.$hoverColor || "#00bfa5"},
      0 0 16px ${(props) => props.$hoverColor || "#00bfa5"};
  }

  &:active {
    background: ${(props) =>
      props.$primary ? "#00695c" : props.$hoverBackground || "#2c2c2c"};
    border-color: ${(props) =>
      props.$primary ? "#00695c" : props.$hoverBorder || "#00bfa5"};
    box-shadow: none;
  }
`

const CustomButton: React.FC<StyledButtonProps & ButtonProps> = ({
  onClick,
  name,
  triggerValidation,
  ...props
}) => {
  const handleClick = () => {
    if (triggerValidation) {
      triggerValidation()
    }
    if (onClick) {
      onClick()
    }
  }
  return (
    <StyledButton {...props} onClick={handleClick}>
      {name}
    </StyledButton>
  )
}

export default CustomButton
