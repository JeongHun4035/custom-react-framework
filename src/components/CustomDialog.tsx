import { FaWindowClose } from "react-icons/fa"
import styled from "styled-components"

import CustomButton from "@/components/CustomButton"

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
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

const DialogContainer = styled.div<StyledDailogProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: ${(props) => props.$border || "2px solid #444"};
  border-radius: ${(props) => props.$borderRadius || "10px"};
  color: ${(props) => props.color || "#eaeaea"};
  background-color: ${(props) => props.$background || "#2c2c2c"};
  width: ${(props) => props.$width || "500px"};
  height: ${(props) => props.$height || "auto"};
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  padding: 20px;
`

const DialogHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 2px solid #555;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

const CloseButton = styled(FaWindowClose)`
  color: #89c4f4;
  font-size: 24px;
  transition: color 0.3s ease;

  &:hover {
    color: #ff5f5f;
    cursor: pointer;
  }
`

const DialogFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
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

const CustomDailog: React.FC<StyledDailogProps & DialogProps> = ({
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
              <h3>Dialog Title</h3>
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

export default CustomDailog
