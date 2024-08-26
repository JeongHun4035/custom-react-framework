import CustomButton from "@/components/CustomButton"
import "@/examples/examples.scss"

const ButtonPage = () => {
  return (
    <div>
      <div className="examples-wrapper">
        <div>
          <h2>1. standard</h2>
          <div className="example-area">
            <div className="example-item">
              <CustomButton name="normal" />
            </div>
            <div className="example-item">
              <CustomButton $primary name="primary" />
            </div>
            <div className="example-item">
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
      </div>
    </div>
  )
}

export default ButtonPage
