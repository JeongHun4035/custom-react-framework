import { useState } from "react"

import CustomButton from "@/components/CustomButton"
import "@/examples/examples.scss"
import CustomDialog from "@/components/CustomDialog"

const Contents = () => {
  return <div>Contents</div>
}

const ModalPage = () => {
  const [dialogVisible, setDialogVisible] = useState(false)

  const handleOpenDialog = () => {
    setDialogVisible(true)
  }

  const handleCloseDialog = () => {
    setDialogVisible(false)
  }

  return (
    <div>
      <h2>1. Dialog</h2>
      <div className="examples-wrapper">
        <div className="example-area">
          <div className="example-item">
            <CustomButton
              $primary
              name="Open Dialog"
              onClick={handleOpenDialog}
            />
          </div>
        </div>
      </div>
      <CustomDialog
        contentChild={<Contents />}
        confirmButtonName="확인"
        cancelButtonName="취소"
        visible={dialogVisible}
        setVisible={setDialogVisible}
        useConfirmEvent={handleCloseDialog}
        useCancelEvent={handleCloseDialog}
      />
    </div>
  )
}

export default ModalPage
