import React from "react"
import styled from "styled-components"
import CustomButton from "@/components/CustomButton"
import { FaWindowClose } from "react-icons/fa"

interface StyledDailogProps {
  $width?: string
  $height?: string
  $border?: string
  $borderRadius?: string
  $background?: string
}

const DialogArea = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`

const DialogContainer = styled.div<StyledDailogProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: ${(props) => props.$border || "thick double #32a1ce"};
  border-radius: ${(props) => props.$borderRadius || "5%"};
  color: ${(props) => props.color || "#000000"};
  background-color: ${(props) => props.$background || "#ffffff"};
  width: ${(props) => props.$width || "600px"};
  height: ${(props) => props.$height || "600px"};
`

const DialogHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  border-bottom: 2px solid #89c4f4;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
`

const CloseButton = styled(FaWindowClose)`
  color: #89c4f4;
  font-size: 30px;
  transition:
    background-color 0.3s linear,
    color 0.3s linear;

  &:hover {
    color: #005f8c;
    cursor: pointer;
  }
`

const DialogFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-right: 10px;
  padding: 10px;
  gap: 10px;
`
export interface DialogProps {
  contentChild: React.ReactNode
  footerChild?: React.ReactNode
  confirmButtonName: string
  cancelButtonName: string
  useFooter?: boolean
  useConfirmEvent?: () => void
  useCancelEvent?: () => void
  visible: boolean
  setVisible: (visible: boolean) => void
}

const Dialog: React.FC<StyledDailogProps & DialogProps> = ({
  contentChild,
  footerChild,
  confirmButtonName,
  cancelButtonName,
  useFooter,
  useConfirmEvent,
  useCancelEvent,
  visible,
  setVisible,
  $width,
  $height,
  $border,
  $borderRadius,
  $background,
}) => {
  return (
    <>
      {visible && (
        <DialogArea>
          <DialogContainer
            $width={$width}
            $height={$height}
            $border={$border}
            $borderRadius={$borderRadius}
            $background={$background}
          >
            <DialogHeader>
              <h3>title</h3>
              <CloseButton onClick={() => setVisible(false)} />
            </DialogHeader>
            <div>{contentChild}</div>
            <div>
              {(useFooter || footerChild) && <div>{footerChild}</div>}
              {!(useFooter || footerChild) && (
                <DialogFooter>
                  <CustomButton
                    $primary
                    name={confirmButtonName}
                    onClick={useConfirmEvent}
                  />
                  <CustomButton
                    name={cancelButtonName}
                    onClick={useCancelEvent}
                  />
                </DialogFooter>
              )}
            </div>
          </DialogContainer>
        </DialogArea>
      )}
    </>
  )
}

export default Dialog
