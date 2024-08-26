import { useState } from "react"

import CodeEditor from "@/components/CodeEditor"
import CustomButton from "@/components/CustomButton"
import "@/examples/examples.scss"
import CustomDailog from "@/components/CustomDialog"
import modals from "@/examples/code/modals.json"

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
        <div>
          <div className="code-area">
            <div>
              <h2>Component code</h2>
              <CodeEditor value={modals.codes.component} />
            </div>
            <div>
              <h2>Example code</h2>
              <CodeEditor value={modals.codes.example} />
            </div>
          </div>
        </div>
      </div>
      <CustomDailog
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
