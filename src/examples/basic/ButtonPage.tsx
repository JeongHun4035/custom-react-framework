import CodeEditor from "@/components/CodeEditor"
import CustomButton from "@/components/CustomButton"
import "@/examples/examples.css"
import buttons from "@/examples/code/buttons.json"

const ButtonPage = () => {
  return (
    <div>
      <div className="examples-wrapper">
        <div>
          <h2>1. standard</h2>
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
        </div>
        <div className="code-area">
          <div>
            <h2>Component code</h2>
            <CodeEditor value={buttons.codes.component} />
          </div>
          <div>
            <h2>Example code</h2>
            <CodeEditor value={buttons.codes.example} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ButtonPage
