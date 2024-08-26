import CustomInput from "@/components/CustomInput"

const SignIn = () => {
  return (
    <div>
      <CustomInput type="text" placeholder="아이디를 입력해주세요." />
      <CustomInput type="text" placeholder="비밀번호를 입력해주세요." />
    </div>
  )
}

export default SignIn
