import CustomButton from "@/components/CustomButton"

const ButtonPage = () => {
  return (
    <div>
      <CustomButton name="normal" />
      <CustomButton $primary name="primary" />
      <CustomButton
        name="custom"
        $padding="20px"
        $border="1px solid black"
        $color="white"
        $background="black"
        $hoverColor="black"
        $hoverBackground="white"
      />
    </div>
  )
}

export default ButtonPage
