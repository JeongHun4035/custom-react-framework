import CodeEditor from "@/components/CodeEditor"
import CustomButton from "@/components/CustomButton"
import "@/examples/examples.css"

const DialogPage = () => {
  return (
    <div>
      <h2>1. standard</h2>
      <div className="examples-wrapper">
        <div className="example-area">
          <CustomButton $primary name="open" />
        </div>
        <div>
          <div className="code-area">
            <CodeEditor />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DialogPage
