import CodeEditor from "@/components/CodeEditor"
import CustomButton from "@/components/CustomButton"
import "@/examples/basic/buttonPage.css"
import buttons from "@/examples/code/buttons.json"

const ButtonPage = () => {
  return (
    <div>
      <h2>1. standard</h2>
      <div className="buttons-wrapper">
        <div className="example-area">
          <div className="exmaple-item">
            <CustomButton name="normal" />
          </div>
          <div className="exmaple-item">
            <CustomButton $primary name="primary" />
          </div>
          <div className="exmaple-item">
            <CustomButton
              name="custom"
              $padding="10px"
              $border="1px solid black"
              $color="white"
              $background="black"
              $hoverColor="black"
              $hoverBackground="white"
            />
          </div>
        </div>
        <div className="code-area">
          <CodeEditor value={buttons.jsxCode} />
        </div>
      </div>
    </div>
  )
}

export default ButtonPage
